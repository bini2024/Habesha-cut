import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import "./index.css"; 

import Nav from "./components/Nav";
import { Toast } from "./components/SharedUI";

import HomePage from "./pages/HomePage";
import ForBarbersPage from "./pages/ForBarbersPage";
import AuthPage from "./pages/AuthPage";
import BookingPage from "./pages/BookingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const snap = await getDoc(doc(db, "users", firebaseUser.uid));
          if (snap.exists()) {
            let userData = { id: firebaseUser.uid, ...snap.data() };
            if (userData.role === "barber") {
              const bSnap = await getDoc(doc(db, "barbers", firebaseUser.uid));
              if (bSnap.exists()) {
                userData = { ...userData, ...bSnap.data() };
              }
            }
            setUser(userData);
          } else {
            setUser(null);
          }
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  if (authLoading) {
    return <div className="loading-screen">HabeshaCuts…</div>;
  }

  return (
    <Router>
      <Nav user={user} setUser={setUser} setToast={setToast} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-barbers" element={<ForBarbersPage />} />
        
        {/* If user is logged in, redirect /auth to /dashboard */}
        <Route path="/auth" element={!user ? <AuthPage setUser={setUser} setToast={setToast} /> : <Navigate to="/dashboard" />} />
        
        <Route path="/book" element={<BookingPage user={user} setToast={setToast} />} />
        
        {/* Protect the dashboard route so guests can't access it */}
        <Route path="/dashboard" element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/auth" />} />
      </Routes>

      {toast && (
        <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />
      )}
    </Router>
  );
}