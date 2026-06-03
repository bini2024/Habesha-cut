import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, query, where, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { C, GLOBAL_SERVICES, DEFAULT_AVAILABILITY } from "../../shared";
import { Spinner } from "../../components/SharedUI";

export default function BarberDashboard({ user, setUser, tab, setTab }) {
  const [appts, setAppts]           = useState([]);
  const [loading, setLoading]       = useState(true);
  const [savingAvail, setSavingAvail] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  
  const [savingServices, setSavingServices] = useState(false);
  const [localServices, setLocalServices]   = useState(user.services && user.services.length > 0 ? user.services : GLOBAL_SERVICES);

  const [availability, setAvailability] = useState(user.availability || DEFAULT_AVAILABILITY);

  const [profileForm, setProfileForm] = useState({
    name:      user.name      || "", 
    shop:      user.shop      || "",
    city:      user.city      || "",
    instagram: user.instagram || "",
    price:     user.price     || 30,
    bio:       user.bio       || "",
  });

  useEffect(() => {
    if (!user?.name) return;
    const fetchAppts = async () => {
      try {
        const q    = query(collection(db, "bookings"), where("barberName", "==", user.name));
        const snap = await getDocs(q);
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        list.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        setAppts(list);
      } catch (err) {
        console.error("Error fetching barber bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppts();
  }, [user]);

  const acceptAppointment = async (id) => {
    try {
      await updateDoc(doc(db, "bookings", id), { status: "confirmed" });
      setAppts(appts.map(a => a.id === id ? { ...a, status: "confirmed" } : a));
    } catch (err) { console.error("Accept error:", err); }
  };

  const declineAppointment = async (id) => {
    if (!window.confirm("Decline this appointment?")) return;
    try {
      await updateDoc(doc(db, "bookings", id), { status: "cancelled" });
      try {
        const booking = appts.find(a => a.id === id);
        if (booking) {
          const slotId = `${user.id || user.name}_${booking.date}_${booking.time}`.replace(/[\s,]+/g, '_');
          await updateDoc(doc(db, "slot_locks", slotId), { status: "cancelled" });
        }
      } catch(e) {} 
      setAppts(appts.map(a => a.id === id ? { ...a, status: "cancelled" } : a));
    } catch (err) { console.error("Decline error:", err); }
  };

  const saveAvailability = async () => {
    setSavingAvail(true);
    try {
      await updateDoc(doc(db, "barbers", auth.currentUser.uid), { availability });
      setUser(prev => ({ ...prev, availability })); 
      alert("Availability saved! 💾 Clients will now only see these open hours.");
    } catch (err) { console.error(err); }
    finally { setSavingAvail(false); }
  };

  const saveProfile = async () => {
    setSavingProfile(true);
    try {
      const updates = {
        name:      profileForm.name,
        shop:      profileForm.shop,
        city:      profileForm.city,
        instagram: profileForm.instagram,
        price:     Number(profileForm.price),
        bio:       profileForm.bio,
      };
      await updateDoc(doc(db, "barbers", auth.currentUser.uid), updates);
      await updateDoc(doc(db, "users", auth.currentUser.uid), { name: updates.name, shop: updates.shop, city: updates.city });
      
      setUser(prev => ({ ...prev, ...updates }));
      alert("Profile updated! ✅ It is immediately visible to clients.");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  const handleServiceChange = (id, field, value) => {
    setLocalServices(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };
  const addService = () => {
    setLocalServices([...localServices, { id: Date.now(), name: "", duration: "30 min", price: 30 }]);
  };
  const removeService = (id) => {
    setLocalServices(prev => prev.filter(s => s.id !== id));
  };
  
  const saveServicesDB = async () => {
    setSavingServices(true);
    try {
      await updateDoc(doc(db, "barbers", auth.currentUser.uid), { services: localServices });
      setUser(prev => ({ ...prev, services: localServices })); 
      alert("Services updated! Clients will now see these options.");
    } catch (e) {
      console.error(e);
      alert("Error saving services.");
    } finally { 
      setSavingServices(false); 
    }
  };

  const toggleDay  = i => setAvailability(a => a.map((d, idx) => idx === i ? { ...d, open: !d.open } : d));
  const updateTime = (i, field, val) => setAvailability(a => a.map((d, idx) => idx === i ? { ...d, [field]: val } : d));

  const pending   = appts.filter(a => a.status === "pending").length;
  const confirmed = appts.filter(a => a.status === "confirmed");
  const revenue   = confirmed.reduce((s, a) => s + Number(a.price || 0), 0);

  return (
    <div className="dash-main">
      <div className="dash-title serif">Barber Dashboard</div>
      <div className="dash-sub">Welcome back, {user.name} · {user.shop || "Your Shop"}</div>

      {loading ? (
        <p style={{ padding: "20px 0", color: C.textLight }}><Spinner /> Loading dashboard…</p>
      ) : (
        <>
          {tab === "overview" && (
            <>
              <div className="stats-row">
                <div className="stat-card"><div className="stat-label">Total Bookings</div><div className="stat-num">{appts.length}</div><div className="stat-change">All time</div></div>
                <div className="stat-card"><div className="stat-label">Pending Review</div><div className="stat-num">{pending}</div><div className="stat-change" style={{ color: pending > 0 ? C.red : C.green }}>{pending > 0 ? "Needs action" : "All clear"}</div></div>
                <div className="stat-card"><div className="stat-label">Confirmed Revenue</div><div className="stat-num">${revenue}</div><div className="stat-change">Estimated</div></div>
                <div className="stat-card"><div className="stat-label">Avg Rating</div><div className="stat-num">⭐ {user.rating || "5.0"}</div></div>
              </div>
              <h4 style={{ marginBottom: 16, color: C.textMid, fontSize: 15 }}>Recent Bookings</h4>
              <div style={{ overflowX: "auto" }}>
                <table className="appt-table">
                  <thead><tr><th>Client</th><th>Service</th><th>Date & Time</th><th>Price</th><th>Status</th></tr></thead>
                  <tbody>
                    {appts.length === 0 ? (
                      <tr><td colSpan="5" style={{ textAlign: "center", padding: 24, color: C.textLight }}>No bookings yet. Share your profile to get started!</td></tr>
                    ) : appts.slice(0, 5).map(a => (
                      <tr key={a.id}>
                        <td>
                          <strong>{a.clientName || "Guest"}</strong>
                          <div style={{fontSize: 12, color: C.textLight}}>{a.clientEmail}</div>
                        </td>
                        <td>{a.service}</td>
                        <td>{a.date} · {a.time}</td>
                        <td>${a.price}</td>
                        <td><span className={`status-badge status-${a.status}`}>{a.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {tab === "appointments" && (
            <>
              <h4 style={{ marginBottom: 16, color: C.textMid, fontSize: 15 }}>All Appointments</h4>
              <div style={{ overflowX: "auto" }}>
                <table className="appt-table">
                  <thead><tr><th>Client</th><th>Service</th><th>Date</th><th>Time</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
                  <tbody>
                    {appts.length === 0 ? (
                      <tr><td colSpan="7" style={{ textAlign: "center", padding: 24, color: C.textLight }}>No appointments yet.</td></tr>
                    ) : appts.map(a => (
                      <tr key={a.id}>
                        <td>
                          <strong>{a.clientName || "Guest"}</strong>
                          <div style={{fontSize: 12, color: C.textLight}}>{a.clientEmail}</div>
                        </td>
                        <td>{a.service}</td>
                        <td>{a.date}</td>
                        <td>{a.time}</td>
                        <td>${a.price}</td>
                        <td><span className={`status-badge status-${a.status}`}>{a.status}</span></td>
                        <td style={{ display: "flex", gap: 6 }}>
                          {a.status === "pending" && (
                            <>
                              <button onClick={() => acceptAppointment(a.id)}
                                style={{ background: C.greenBg, color: C.green, border: "none", padding: "5px 10px", borderRadius: 8, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
                                Accept
                              </button>
                              <button onClick={() => declineAppointment(a.id)}
                                style={{ background: C.redBg, color: C.red, border: "none", padding: "5px 10px", borderRadius: 8, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
                                Decline
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {tab === "availability" && (
            <div>
              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 16, marginBottom: 6 }}>Set Your Weekly Hours</h4>
                <p style={{ fontSize: 14, color: C.textLight }}>Toggle days and set your open/close times.</p>
              </div>
              <div className="avail-grid">
                {availability.map((d, i) => (
                  <div className="avail-row" key={d.day}>
                    <div className="day-name">{d.day}</div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked={d.open} onChange={() => toggleDay(i)} />
                      <span className="toggle-slider" />
                    </label>
                    {d.open ? (
                      <div className="time-range">
                        <input type="time" value={d.start} onChange={e => updateTime(i, "start", e.target.value)} />
                        <span className="time-sep">to</span>
                        <input type="time" value={d.end} onChange={e => updateTime(i, "end", e.target.value)} />
                      </div>
                    ) : (
                      <span style={{ marginLeft: "auto", color: C.textLight, fontSize: 13 }}>Closed</span>
                    )}
                  </div>
                ))}
              </div>
              <button className="submit-btn" style={{ maxWidth: 200, marginTop: 24 }} onClick={saveAvailability} disabled={savingAvail}>
                {savingAvail ? <><Spinner />Saving…</> : "Save Changes"}
              </button>
            </div>
          )}

          {tab === "services" && (
            <div>
              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 16, marginBottom: 6 }}>Your Services & Pricing</h4>
                <p style={{ fontSize: 14, color: C.textLight }}>Edit the services you provide, and their price/duration. Changes apply immediately to new bookings.</p>
              </div>
              <div className="service-list">
                {localServices.map((s) => (
                  <div key={s.id} className="service-item" style={{ display: "flex", gap: 10, alignItems: "center", cursor: "default", padding: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <input 
                        value={s.name} 
                        onChange={e => handleServiceChange(s.id, "name", e.target.value)} 
                        placeholder="Service Name" 
                        style={{ padding: "8px", width: "100%", borderRadius: "8px", border: "1px solid #e8e8e8", fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} 
                      />
                    </div>
                    <div style={{ width: "90px" }}>
                      <input 
                        value={s.duration} 
                        onChange={e => handleServiceChange(s.id, "duration", e.target.value)} 
                        placeholder="e.g. 30 min" 
                        style={{ padding: "8px", width: "100%", borderRadius: "8px", border: "1px solid #e8e8e8", fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} 
                      />
                    </div>
                    <div style={{ width: "80px" }}>
                      <input 
                        type="number" 
                        value={s.price} 
                        onChange={e => handleServiceChange(s.id, "price", Number(e.target.value))} 
                        placeholder="$ Price" 
                        style={{ padding: "8px", width: "100%", borderRadius: "8px", border: "1px solid #e8e8e8", fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} 
                      />
                    </div>
                    <button 
                      onClick={() => removeService(s.id)} 
                      style={{ color: C.red, background: "none", border: "none", cursor: "pointer", fontWeight: "bold", padding: "0 8px", fontSize: 18 }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                <button className="nav-pill" style={{ fontSize: 13 }} onClick={addService}>+ Add Service</button>
                <button className="submit-btn" style={{ margin: 0, padding: "8px 16px", width: "auto", fontSize: 13 }} onClick={saveServicesDB} disabled={savingServices}>
                  {savingServices ? <><Spinner />Saving...</> : "Save Services"}
                </button>
              </div>
            </div>
          )}

          {tab === "profile" && (
            <div style={{ maxWidth: 440 }}>
              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 16, marginBottom: 6 }}>Public Profile</h4>
                <p style={{ fontSize: 14, color: C.textLight }}>This is what clients see when browsing the directory.</p>
              </div>
              <div className="field">
                <label>Your Full Name</label>
                <input value={profileForm.name} onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} />
              </div>
              <div className="field">
                <label>Shop / Studio Name</label>
                <input value={profileForm.shop} onChange={e => setProfileForm({ ...profileForm, shop: e.target.value })} />
              </div>
              <div className="field">
                <label>City</label>
                <select value={profileForm.city} onChange={e => setProfileForm({ ...profileForm, city: e.target.value })}>
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
              <div className="field">
                <label>Base / Starting Price ($)</label>
                <input type="number" min="10" value={profileForm.price} onChange={e => setProfileForm({ ...profileForm, price: e.target.value })} />
              </div>
              <div className="field">
                <label>Bio (shown on your profile)</label>
                <textarea placeholder="Tell clients about your experience and specialty…" value={profileForm.bio} onChange={e => setProfileForm({ ...profileForm, bio: e.target.value })} />
              </div>
              <div className="field">
                <label>Instagram Handle</label>
                <input placeholder="@yourbarberpage" value={profileForm.instagram} onChange={e => setProfileForm({ ...profileForm, instagram: e.target.value })} />
              </div>
              <button className="submit-btn" style={{ marginTop: 8 }} onClick={saveProfile} disabled={savingProfile}>
                {savingProfile ? <><Spinner />Saving…</> : "Save Profile"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}