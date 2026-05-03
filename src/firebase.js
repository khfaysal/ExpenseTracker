import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8nux0wF2Os-fxVtzEMPPLADxrpO5tAoE",
  authDomain: "spendo-ac49c.firebaseapp.com",
  projectId: "spendo-ac49c",
  storageBucket: "spendo-ac49c.firebasestorage.app",
  messagingSenderId: "577386385763",
  appId: "1:577386385763:web:37e48b81ebad899ca3c356",
  measurementId: "G-23HGFVEGSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);