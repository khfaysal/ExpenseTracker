import { useState, useEffect } from 'react'
import { auth, db } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import AuthModal from './components/AuthModal'
import './App.css'

const CATEGORIES = ['snacks', 'meal', 'transportation', 'others']

const CAT_ICONS = {
  snacks: '🍿',
  meal: '🍽️',
  transportation: '🚌',
  others: '📦',
}

function toLocalDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function getToday() {
  return toLocalDateStr(new Date())
}

function getYesterday() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return toLocalDateStr(d)
}

function shiftDate(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00')
  d.setDate(d.getDate() + days)
  return toLocalDateStr(d)
}

function getCurrentMonth() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function formatShortDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

// ── localStorage helpers ──
function loadExpenses() {
  try {
    const data = localStorage.getItem('spendo_expenses')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveExpenses(expenses) {
  localStorage.setItem('spendo_expenses', JSON.stringify(expenses))
}

// ── Main App ──
function App() {
  const [expenses, setExpenses] = useState([])
  const [amounts, setAmounts] = useState({ snacks: '', meal: '', transportation: '', others: '' })
  const [othersLabel, setOthersLabel] = useState('')
  const [activeTab, setActiveTab] = useState('daily')
  const [selectedDate, setSelectedDate] = useState(getToday())

  // Edit mode state
  const [editMode, setEditMode] = useState(false)
  const [editingExpense, setEditingExpense] = useState(null)
  const [editAmount, setEditAmount] = useState('')
  const [editLabel, setEditLabel] = useState('')

  // Auth State
  const [user, setUser] = useState(null)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [loadingAuth, setLoadingAuth] = useState(true)

  const today = getToday()
  const yesterday = getYesterday()
  const currentMonth = getCurrentMonth()

  // Can only add expenses for today or yesterday
  const isEditable = selectedDate === today || selectedDate === yesterday

  // Date navigation – limit to last 7 days
  const sevenDaysAgo = shiftDate(today, -6)
  const canGoPrev = selectedDate > sevenDaysAgo
  const canGoNext = selectedDate < today

  const goToPrevDay = () => {
    if (canGoPrev) setSelectedDate((prev) => shiftDate(prev, -1))
  }
  const goToNextDay = () => {
    if (canGoNext) setSelectedDate((prev) => shiftDate(prev, 1))
  }
  const goToToday = () => setSelectedDate(today)

  // 1. Listen for Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoadingAuth(false)
      
      if (!currentUser) {
        // Load from local storage if logged out
        setExpenses(loadExpenses())
      }
    })
    return () => unsubscribe()
  }, [])

  // 2. Listen to Firestore if logged in
  useEffect(() => {
    if (!user) return

    const q = query(collection(db, 'users', user.uid, 'expenses'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fbExpenses = snapshot.docs.map(docSnapshot => ({
        docId: docSnapshot.id,
        ...docSnapshot.data()
      }))
      // Sort by the numeric id descending (newest first)
      fbExpenses.sort((a, b) => b.id - a.id)
      setExpenses(fbExpenses)
    })

    return () => unsubscribe()
  }, [user])

  // 3. Save to local storage only if NOT logged in
  useEffect(() => {
    if (!loadingAuth && !user) {
      saveExpenses(expenses)
    }
  }, [expenses, user, loadingAuth])

  // ── Add Expense ──
  const handleAdd = async (cat) => {
    const value = parseFloat(amounts[cat])
    if (!value || value <= 0) return

    const entry = {
      id: Date.now(),
      date: selectedDate,
      category: cat,
      amount: value,
      ...(cat === 'others' && othersLabel.trim() ? { label: othersLabel.trim() } : {}),
    }

    if (user) {
      try {
        await addDoc(collection(db, 'users', user.uid, 'expenses'), entry)
      } catch (err) {
        console.error("Error adding document:", err)
      }
    } else {
      setExpenses((prev) => [entry, ...prev])
    }

    setAmounts((prev) => ({ ...prev, [cat]: '' }))
    if (cat === 'others') setOthersLabel('')
  }

  const handleAmountChange = (cat, value) => {
    setAmounts((prev) => ({ ...prev, [cat]: value }))
  }

  const handleKeyDown = (e, cat) => {
    if (e.key === 'Enter') handleAdd(cat)
  }

  // ── Delete Expense ──
  const handleDelete = async (exp) => {
    if (user) {
      try {
        await deleteDoc(doc(db, 'users', user.uid, 'expenses', exp.docId))
      } catch (err) {
        console.error("Error deleting document:", err)
      }
    } else {
      setExpenses((prev) => prev.filter((e) => e.id !== exp.id))
    }
  }

  // ── Edit Expense ──
  const handleStartEdit = (exp) => {
    setEditingExpense(exp)
    setEditAmount(String(exp.amount))
    setEditLabel(exp.label || '')
  }

  const handleCancelEdit = () => {
    setEditingExpense(null)
    setEditAmount('')
    setEditLabel('')
  }

  const handleSaveEdit = async () => {
    if (!editingExpense) return
    const newAmount = parseFloat(editAmount)
    if (!newAmount || newAmount <= 0) return

    const updates = { amount: newAmount }
    if (editingExpense.category === 'others') {
      updates.label = editLabel.trim() || 'others'
    }

    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid, 'expenses', editingExpense.docId), updates)
      } catch (err) {
        console.error("Error updating document:", err)
      }
    } else {
      setExpenses((prev) =>
        prev.map((e) =>
          e.id === editingExpense.id ? { ...e, ...updates } : e
        )
      )
    }
    handleCancelEdit()
  }

  const toggleEditMode = () => {
    setEditMode((prev) => !prev)
    handleCancelEdit()
  }

  const handleLogout = () => {
    signOut(auth)
  }

  const openAuth = (mode) => {
    setIsLoginMode(mode === 'login')
    setAuthModalOpen(true)
  }

  // ── Selected date's expenses ──
  const selectedDateExpenses = expenses.filter((e) => e.date === selectedDate)
  const selectedDateTotal = selectedDateExpenses.reduce((sum, e) => sum + e.amount, 0)

  // Label for selected date
  const selectedDateLabel = selectedDate === today
    ? "Today's"
    : selectedDate === yesterday
      ? "Yesterday's"
      : formatShortDate(selectedDate) + "'s"

  // ── Monthly calculations ──
  const monthExpenses = expenses.filter((e) => e.date.startsWith(currentMonth))
  const monthlyTotal = monthExpenses.reduce((sum, e) => sum + e.amount, 0)

  const monthlyBreakdown = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = monthExpenses
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + e.amount, 0)
    return acc
  }, {})

  const maxBreakdown = Math.max(...Object.values(monthlyBreakdown), 1)

  // ── Daily totals for the month (for history) ──
  const dailyTotalsMap = {}
  monthExpenses.forEach((e) => {
    dailyTotalsMap[e.date] = (dailyTotalsMap[e.date] || 0) + e.amount
  })
  const dailyTotalsList = Object.entries(dailyTotalsMap)
    .map(([date, total]) => ({ date, total }))
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        defaultIsLogin={isLoginMode}
      />

      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-left">
          <div className="app-logo">Spendo</div>
          <div className="app-date">
            <span className="date-icon">📅</span>
            {formatDate(today)}
          </div>
        </div>
        
        <div className="auth-buttons">
          {!loadingAuth && user ? (() => {
            const nickname = user.displayName || user.email.split('@')[0]
            const initial = nickname.charAt(0).toUpperCase()
            const photoURL = user.photoURL
            return (
              <div className="user-profile">
                <div className="user-avatar-section">
                  {photoURL ? (
                    <img className="user-avatar" src={photoURL} alt={nickname} referrerPolicy="no-referrer" />
                  ) : (
                    <div className="user-avatar user-avatar-initials">{initial}</div>
                  )}
                  <div className="user-info">
                    <span className="user-nickname">{nickname}</span>
                    <span className="user-status">● Online</span>
                  </div>
                </div>
                <button className="auth-btn logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            )
          })() : !loadingAuth ? (
            <>
              <button className="auth-btn login-btn" onClick={() => openAuth('login')}>Login</button>
              <button className="auth-btn signup-btn" onClick={() => openAuth('signup')}>Sign Up</button>
            </>
          ) : null}
        </div>
      </header>

      {/* ── Tabs ── */}
      <div className="tabs">
        <button
          id="tab-daily"
          className={`tab-btn ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          Today
        </button>
        <button
          id="tab-monthly"
          className={`tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly
        </button>
      </div>

      {/* ════════════════════════════════════
          DAILY VIEW
          ════════════════════════════════════ */}
      {activeTab === 'daily' && (
        <>
          {/* ── Date Navigator ── */}
          <div className="date-navigator">
            <button
              className={`date-nav-btn ${!canGoPrev ? 'disabled' : ''}`}
              onClick={goToPrevDay}
              disabled={!canGoPrev}
              aria-label="Previous day"
            >
              ‹
            </button>
            <div className="date-nav-center">
              <span className="date-nav-label">{formatDate(selectedDate)}</span>
              {selectedDate === today && <span className="date-nav-badge">Today</span>}
              {selectedDate === yesterday && <span className="date-nav-badge yesterday">Yesterday</span>}
            </div>
            <button
              className={`date-nav-btn ${!canGoNext ? 'disabled' : ''}`}
              onClick={goToNextDay}
              disabled={!canGoNext}
              aria-label="Next day"
            >
              ›
            </button>
          </div>
          {selectedDate !== today && (
            <button className="go-today-btn" onClick={goToToday}>
              ↩ Back to Today
            </button>
          )}

          {/* Category Input Cards – only for today & yesterday */}
          {isEditable && (
            <div className="category-inputs">
              {CATEGORIES.map((cat) => (
                <div className={`cat-input-card ${cat}`} key={cat}>
                  <div className="cat-input-header">
                    <span className="cat-input-icon">{CAT_ICONS[cat]}</span>
                    <span className="cat-input-name">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  </div>
                  {cat === 'others' && (
                    <input
                      id="others-label"
                      className="others-label-input"
                      type="text"
                      placeholder="What for?"
                      value={othersLabel}
                      onChange={(e) => setOthersLabel(e.target.value)}
                    />
                  )}
                  <div className="cat-input-row">
                    <input
                      id={`amount-${cat}`}
                      className="amount-input"
                      type="number"
                      placeholder="BDT"
                      value={amounts[cat]}
                      onChange={(e) => handleAmountChange(cat, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, cat)}
                      min="0"
                    />
                    <button
                      id={`add-${cat}`}
                      className={`cat-add-btn ${cat}`}
                      onClick={() => handleAdd(cat)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Read-only notice for past dates */}
          {!isEditable && (
            <div className="readonly-notice">
              <span className="readonly-icon">🔒</span>
              <span>Viewing past expenses (read-only)</span>
            </div>
          )}

          {/* Daily Total */}
          <div className="total-card">
            <div className="label">{selectedDateLabel} Total</div>
            <div className="amount">
              {selectedDateTotal.toLocaleString()}
              <span className="currency">BDT</span>
            </div>
          </div>

          {/* Expense List */}
          <div className="expense-list">
            <div className="expense-list-header">
              <h2>📋 {selectedDateLabel} Expenses</h2>
              <button
                id="edit-mode-btn"
                className={`edit-mode-btn ${editMode ? 'active' : ''}`}
                onClick={toggleEditMode}
              >
                {editMode ? '✕ Done' : '✏️ Edit'}
              </button>
            </div>
            {selectedDateExpenses.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">💸</div>
                <p>No expenses recorded{selectedDate === today ? ' yet today' : ' for this day'}.</p>
                {isEditable && <p>Add your first entry above!</p>}
              </div>
            ) : (
              selectedDateExpenses.map((exp) => (
                <div className={`expense-item ${editMode ? 'edit-active' : ''}`} key={exp.id}>
                  {editingExpense && editingExpense.id === exp.id ? (
                    /* ── Inline Edit Form ── */
                    <div className="expense-edit-form">
                      <span className={`cat-badge ${exp.category}`}>
                        {CAT_ICONS[exp.category]} {exp.category}
                      </span>
                      {exp.category === 'others' && (
                        <input
                          className="edit-label-input"
                          type="text"
                          value={editLabel}
                          onChange={(e) => setEditLabel(e.target.value)}
                          placeholder="Label"
                        />
                      )}
                      <input
                        className="edit-amount-input"
                        type="number"
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                        min="0"
                        autoFocus
                      />
                      <div className="edit-actions">
                        <button className="edit-save-btn" onClick={handleSaveEdit}>✓</button>
                        <button className="edit-cancel-btn" onClick={handleCancelEdit}>✕</button>
                      </div>
                    </div>
                  ) : (
                    /* ── Normal View ── */
                    <>
                      <span className={`cat-badge ${exp.category}`}>
                        {CAT_ICONS[exp.category]} {exp.label || exp.category}
                      </span>
                      <span className="expense-amount">
                        {exp.amount.toLocaleString()}
                        <span className="currency">BDT</span>
                      </span>
                      {editMode && (
                        <div className="expense-edit-controls">
                          <button
                            className="expense-edit-btn"
                            onClick={() => handleStartEdit(exp)}
                            aria-label="Edit expense"
                          >
                            ✏️
                          </button>
                          <button
                            className="expense-delete-btn"
                            onClick={() => handleDelete(exp)}
                            aria-label="Delete expense"
                          >
                            🗑️
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </>
      )}

      {/* ════════════════════════════════════
          MONTHLY VIEW
          ════════════════════════════════════ */}
      {activeTab === 'monthly' && (
        <div className="monthly-summary">
          {monthExpenses.length === 0 ? (
            <div className="no-monthly-data">
              <div className="empty-icon">📊</div>
              <p>No expenses recorded this month yet.</p>
            </div>
          ) : (
            <>
              {/* Monthly Total */}
              <div className="monthly-total">
                <div className="label">
                  {new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <div className="amount">
                  {monthlyTotal.toLocaleString()}
                  <span className="currency"> BDT</span>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="breakdown-card">
                <h3>Category Breakdown</h3>
                {CATEGORIES.map((cat) => (
                  <div key={cat}>
                    <div className="breakdown-item">
                      <div className="breakdown-left">
                        <span className={`breakdown-dot ${cat}`}></span>
                        <span className="breakdown-cat">
                          {CAT_ICONS[cat]} {cat}
                        </span>
                      </div>
                      <span className="breakdown-amount">
                        {monthlyBreakdown[cat].toLocaleString()}
                        <span className="currency">BDT</span>
                      </span>
                    </div>
                    <div className="breakdown-bar-container">
                      <div
                        className={`breakdown-bar ${cat}`}
                        style={{
                          width: `${(monthlyBreakdown[cat] / maxBreakdown) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Daily History */}
              <div className="daily-history">
                <h3>Daily Totals</h3>
                {dailyTotalsList.map((row) => (
                  <div className="daily-row" key={row.date}>
                    <span className="daily-row-date">
                      {formatShortDate(row.date)}
                    </span>
                    <span className="daily-row-amount">
                      {row.total.toLocaleString()}
                      <span className="currency">BDT</span>
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default App
