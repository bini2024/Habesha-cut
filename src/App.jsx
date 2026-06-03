import React, { useState, useEffect } from "react";
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
  const [page, setPage]                   = useState("home");
  const [user, setUser]                   = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [toast, setToast]                 = useState(null);
  const [authLoading, setAuthLoading]     = useState(true);

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
    <>
      <Nav setPage={setPage} user={user} setUser={setUser} setToast={setToast} />

      {page === "home"        && <HomePage setPage={setPage} setSelectedBarber={setSelectedBarber} />}
      {page === "for-barbers" && <ForBarbersPage setPage={setPage} />}
      {page === "auth"        && <AuthPage setUser={setUser} setPage={setPage} setToast={setToast} />}
      {page === "booking"     && selectedBarber && (
        <BookingPage barber={selectedBarber} user={user} setPage={setPage} setToast={setToast} />
      )}
      {page === "dashboard"   && user && <Dashboard user={user} setUser={setUser} setPage={setPage} />}

      {toast && (
        <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />
      )}
    </>
  );
}