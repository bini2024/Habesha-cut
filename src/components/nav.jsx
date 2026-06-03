import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { C } from "../shared";

export default function Nav({ setPage, user, setUser, setToast }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setPage("home");
      setToast({ msg: "Logged out successfully.", type: "success" });
    } catch {
      setToast({ msg: "Logout failed. Please try again.", type: "error" });
    }
  };

  return (
    <nav className="nav">
      <div className="logo-text serif" onClick={() => setPage("home")}>
        Habesha<span>Cuts</span>
      </div>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setPage("home")}>Find a Barber</button>
        <button className="nav-btn" onClick={() => setPage("for-barbers")}>For Barbers</button>
        {user ? (
          <>
            <button className="nav-btn" onClick={() => setPage("dashboard")}>Dashboard</button>
            <button className="nav-btn" style={{ color: C.red }} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="nav-pill" onClick={() => setPage("auth")}>Login / Sign Up</button>
        )}
      </div>
    </nav>
  );
}