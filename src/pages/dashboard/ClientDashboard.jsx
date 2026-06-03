import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, query, where, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { C } from "../../shared";
import { Spinner } from "../../components/SharedUI";

export default function ClientDashboard({ user }) {
  const [tab, setTab]     = useState("upcoming");
  const [appts, setAppts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    if (!auth.currentUser) { setLoading(false); return; }
    try {
      const q = query(collection(db, "bookings"), where("clientId", "==", auth.currentUser.uid));
      const snap = await getDocs(q);
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      list.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setAppts(list);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadBookings(); }, []);

  const cancelBooking = async (id) => {
    if (!window.confirm("Cancel this appointment?")) return;
    try {
      await updateDoc(doc(db, "bookings", id), { status: "cancelled" });
      setAppts(appts.map(a => a.id === id ? { ...a, status: "cancelled" } : a));
    } catch (err) { console.error("Cancel error:", err); }
  };

  const upcoming = appts.filter(a => a.status === "pending" || a.status === "confirmed");
  const past     = appts.filter(a => a.status === "completed" || a.status === "cancelled");
  const totalSpent = appts
    .filter(a => a.status === "confirmed" || a.status === "completed")
    .reduce((sum, a) => sum + Number(a.price || 0), 0);

  return (
    <div className="dash-main">
      <div className="dash-title serif">My Appointments</div>
      <div className="dash-sub">Welcome back, {user.name}.</div>

      {loading ? (
        <p style={{ padding: "20px 0", color: C.textLight }}><Spinner /> Loading your history…</p>
      ) : (
        <>
          <div className="stats-row">
            <div className="stat-card"><div className="stat-label">Total Bookings</div><div className="stat-num">{appts.length}</div></div>
            <div className="stat-card"><div className="stat-label">Upcoming</div><div className="stat-num">{upcoming.length}</div></div>
            <div className="stat-card"><div className="stat-label">Total Spent</div><div className="stat-num">${totalSpent}</div></div>
            <div className="stat-card">
              <div className="stat-label">Recent Barber</div>
              <div className="stat-num" style={{ fontSize: 16, paddingTop: 8 }}>{appts[0]?.barberName || "—"}</div>
            </div>
          </div>

          <div className="tabs2" style={{ maxWidth: 280, marginBottom: 24 }}>
            <button className={`tab2 ${tab === "upcoming" ? "active" : ""}`} onClick={() => setTab("upcoming")}>Upcoming ({upcoming.length})</button>
            <button className={`tab2 ${tab === "past"     ? "active" : ""}`} onClick={() => setTab("past")}>Past ({past.length})</button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="appt-table">
              <thead>
                <tr>
                  <th>Barber</th><th>Service</th><th>Date</th><th>Time</th><th>Price</th><th>Status</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(tab === "upcoming" ? upcoming : past).length === 0 ? (
                  <tr><td colSpan="7" style={{ textAlign: "center", padding: 24, color: C.textLight }}>No {tab} appointments.</td></tr>
                ) : (
                  (tab === "upcoming" ? upcoming : past).map(a => (
                    <tr key={a.id}>
                      <td><strong>{a.barberName}</strong><br /><span style={{ color: C.textLight, fontSize: 12 }}>{a.shop}</span></td>
                      <td>{a.service}</td>
                      <td>{a.date}</td>
                      <td>{a.time}</td>
                      <td><strong>${a.price}</strong></td>
                      <td><span className={`status-badge status-${a.status}`}>{a.status}</span></td>
                      <td>
                        {a.status === "pending" && (
                          <button
                            onClick={() => cancelBooking(a.id)}
                            style={{ background: C.redBg, color: C.red, border: "none", padding: "5px 12px", borderRadius: 8, fontSize: 12, cursor: "pointer", fontWeight: 600 }}
                          >
                            Cancel
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}