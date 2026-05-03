import { useState, useEffect } from 'react'
import { auth, db } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import AuthModal from './components/AuthModal'
import './App.css'

const CATEGORIES = ['snacks', 'meal', 'transportation', 'others']

const CAT_ICONS = {
  snacks: '🍿',
  meal: '🍽️',
  transportation: '🚌',
  others: '📦',
}

function getToday() {
  return new Date().toISOString().split('T')[0]
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

  // Auth State
  const [user, setUser] = useState(null)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [loadingAuth, setLoadingAuth] = useState(true)

  const today = getToday()
  const currentMonth = getCurrentMonth()

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
      date: today,
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

  const handleLogout = () => {
    signOut(auth)
  }

  const openAuth = (mode) => {
    setIsLoginMode(mode === 'login')
    setAuthModalOpen(true)
  }

  // ── Today's expenses ──
  const todayExpenses = expenses.filter((e) => e.date === today)
  const dailyTotal = todayExpenses.reduce((sum, e) => sum + e.amount, 0)

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
          {!loadingAuth && user ? (
            <div className="user-profile">
              <span className="user-email">{user.email || user.displayName}</span>
              <button className="auth-btn logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          ) : !loadingAuth ? (
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
          {/* Category Input Cards */}
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

          {/* Daily Total */}
          <div className="total-card">
            <div className="label">Today&apos;s Total</div>
            <div className="amount">
              {dailyTotal.toLocaleString()}
              <span className="currency">BDT</span>
            </div>
          </div>

          {/* Expense List */}
          <div className="expense-list">
            <h2>📋 Today&apos;s Expenses</h2>
            {todayExpenses.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">💸</div>
                <p>No expenses yet today.</p>
                <p>Add your first entry above!</p>
              </div>
            ) : (
              todayExpenses.map((exp) => (
                <div className="expense-item" key={exp.id}>
                  <span className={`cat-badge ${exp.category}`}>
                    {CAT_ICONS[exp.category]} {exp.label || exp.category}
                  </span>
                  <span className="expense-amount">
                    {exp.amount.toLocaleString()}
                    <span className="currency">BDT</span>
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(exp)}
                    aria-label={`Delete ${exp.category} expense`}
                  >
                    ✕
                  </button>
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
