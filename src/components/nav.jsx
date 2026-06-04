import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { C } from "../shared";

export default function Nav({ user, setUser, setToast }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
      setToast({ msg: "Logged out successfully.", type: "success" });
    } catch {
      setToast({ msg: "Logout failed. Please try again.", type: "error" });
    }
  };

  return (
    <nav className="nav">
      <div className="logo-text serif" onClick={() => navigate("/")}>
        Habesha<span>Cuts</span>
      </div>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => navigate("/")}>Find a Barber</button>
        <button className="nav-btn" onClick={() => navigate("/for-barbers")}>For Barbers</button>
        {user ? (
          <>
            <button className="nav-btn" onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button className="nav-btn" style={{ color: C.red }} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="nav-pill" onClick={() => navigate("/auth")}>Login / Sign Up</button>
        )}
      </div>
    </nav>
  );
}