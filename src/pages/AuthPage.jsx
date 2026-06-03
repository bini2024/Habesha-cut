import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { C, GLOBAL_SERVICES, DEFAULT_AVAILABILITY } from "../shared";
import { Spinner } from "../components/SharedUI";

export default function AuthPage({ setUser, setPage, setToast }) {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("client");
  const [form, setForm] = useState({ name: "", email: "", password: "", shop: "", city: "toronto" });
  const [err, setErr]   = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async () => {
    setErr("");
    if (!form.email || !form.password) { setErr("Please fill all required fields."); return; }
    if (mode === "signup" && !form.name)   { setErr("Please enter your name."); return; }
    if (mode === "signup" && form.password.length < 6) { setErr("Password must be at least 6 characters."); return; }

    setSubmitting(true);
    try {
      let userData = {};

      if (mode === "signup") {
        const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
        userData = {
          name:      form.name,
          email:     form.email,
          role,
          shop:      role === "barber" ? form.shop  : "",
          city:      role === "barber" ? form.city  : "",
          createdAt: new Date(),
        };
        await setDoc(doc(db, "users", cred.user.uid), userData);

        if (role === "barber") {
          await setDoc(doc(db, "barbers", cred.user.uid), {
            name:         form.name,
            email:        form.email, 
            shop:         form.shop,
            city:         form.city,
            rating:       5.0,
            reviews:      0,
            price:        30,
            available:    true,
            tags:         ["Fade", "Lineup"],
            services:     GLOBAL_SERVICES, 
            availability: DEFAULT_AVAILABILITY,
          });
        }
      } else {
        const cred    = await signInWithEmailAndPassword(auth, form.email, form.password);
        const snap    = await getDoc(doc(db, "users", cred.user.uid));
        userData = snap.exists() ? snap.data() : { name: "User", email: form.email, role: "client" };
        
        if (userData.role === "barber") {
          const barberSnap = await getDoc(doc(db, "barbers", cred.user.uid));
          if (barberSnap.exists()) userData = { ...userData, ...barberSnap.data() };
        }
      }

      setUser(userData);
      setPage("dashboard");
      setToast({ msg: `Welcome${userData.name ? ", " + userData.name : ""}! 👋`, type: "success" });
    } catch (error) {
      setErr(error.message.replace("Firebase: ", ""));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-box">
        <h2 className="serif">{mode === "login" ? "Welcome back" : "Join HabeshaCuts"}</h2>
        <p className="sub">{mode === "login" ? "Sign in to your account." : "Create your free account today."}</p>

        {mode === "signup" && (
          <div className="tabs2">
            <button className={`tab2 ${role === "client" ? "active" : ""}`} onClick={() => setRole("client")}>I'm a Client</button>
            <button className={`tab2 ${role === "barber" ? "active" : ""}`} onClick={() => setRole("barber")}>I'm a Barber</button>
          </div>
        )}

        {mode === "signup" && (
          <div className="field">
            <label>Full Name</label>
            <input placeholder="e.g. Yohannes Tesfaye" value={form.name} onChange={e => update("name", e.target.value)} />
          </div>
        )}

        <div className="field">
          <label>Email Address</label>
          <input type="email" placeholder="you@email.com" value={form.email} onChange={e => update("email", e.target.value)} />
        </div>

        <div className="field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" value={form.password} onChange={e => update("password", e.target.value)} />
        </div>

        {mode === "signup" && role === "barber" && (
          <>
            <div className="field">
              <label>Shop / Studio Name</label>
              <input placeholder="e.g. Crown & Fade Studio" value={form.shop} onChange={e => update("shop", e.target.value)} />
            </div>
            <div className="field">
              <label>Your City</label>
              <select value={form.city} onChange={e => update("city", e.target.value)}>
                <option value="toronto">Toronto</option>
                <option value="ottawa">Ottawa</option>
                <option value="calgary">Calgary</option>
                <option value="vancouver">Vancouver</option>
                <option value="montreal">Montreal</option>
                <option value="edmonton">Edmonton</option>
                <option value="winnipeg">Winnipeg</option>
                <option value="halifax">Halifax</option>
              </select>
            </div>
          </>
        )}

        {err && (
          <p style={{ color: C.red, fontSize: 13, marginBottom: 12, background: C.redBg, padding: "10px 12px", borderRadius: 8 }}>
            {err}
          </p>
        )}

        <button className="submit-btn" onClick={submit} disabled={submitting}>
          {submitting ? <><Spinner />{mode === "login" ? "Signing in…" : "Creating account…"}</> : mode === "login" ? "Sign In" : "Create Account"}
        </button>

        <div className="auth-toggle">
          {mode === "login"
            ? <>Don't have an account? <button onClick={() => { setMode("signup"); setErr(""); }}>Sign up free</button></>
            : <>Already have an account? <button onClick={() => { setMode("login"); setErr(""); }}>Sign in</button></>
          }
        </div>
      </div>
    </div>
  );
}