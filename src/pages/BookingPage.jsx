import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // 👈 Added router hooks
import { collection, doc, getDocs, query, where, runTransaction } from "firebase/firestore";
import { auth, db } from "../firebase";
import emailjs from '@emailjs/browser';
import { C, GLOBAL_SERVICES, DEFAULT_AVAILABILITY, FULL_DAYS, DAYS, MONTHS, getInitials } from "../shared";
import { StarRating, Spinner } from "../components/SharedUI";

// 👈 Removed 'barber' and 'setPage' from props
export default function BookingPage({ user, setToast }) {
  const location = useLocation(); // 👈 Added
  const navigate = useNavigate(); // 👈 Added
  
  // 👈 Retrieve barber passed from HomePage
  const barber = location.state?.barber; 

  // 👈 Safety check: If no barber data, send them home
  useEffect(() => {
    if (!barber) navigate("/");
  }, [barber, navigate]);

  const [step, setStep]           = useState(1);
  const [service, setService]     = useState(null);
  const [date, setDate]           = useState(null);
  const [time, setTime]           = useState(null);
  const [note, setNote]           = useState("");
  
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail]= useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [takenSlots, setTakenSlots] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);

  // If redirecting, don't render the rest to prevent errors
  if (!barber) return null;

  const activeServices = barber.services && barber.services.length > 0 ? barber.services : GLOBAL_SERVICES;

  const todayObj = new Date();
  todayObj.setHours(0, 0, 0, 0);

  const [viewMonth, setViewMonth] = useState({
    y: todayObj.getFullYear(),
    m: todayObj.getMonth(),
  });

  useEffect(() => {
    if (!date || !barber) return;
    const fetchTakenSlots = async () => {
      setSlotsLoading(true);
      const dateStr = `${MONTHS[viewMonth.m]} ${date}, ${viewMonth.y}`;
      try {
        const q = query(
          collection(db, "bookings"),
          where("barberName", "==", barber.name),
          where("date", "==", dateStr)
        );
        const snapshot = await getDocs(q);
        const booked = [];
        snapshot.forEach(d => {
          if (d.data().status !== "cancelled") booked.push(d.data().time);
        });
        setTakenSlots(booked);
      } catch (err) {
        console.error("Error fetching slots:", err);
      } finally {
        setSlotsLoading(false);
      }
    };
    fetchTakenSlots();
  }, [date, viewMonth, barber]);

  const buildCal = (y, m) => {
    const firstDay = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  };

  const isPast = d => new Date(viewMonth.y, viewMonth.m, d) < todayObj;

  const confirm = async () => {
    if (!user && (!guestName || !guestEmail)) {
      setToast({ msg: "Please enter your name and email to proceed.", type: "error" });
      return;
    }

    setSubmitting(true);
    const dateStr = `${MONTHS[viewMonth.m]} ${date}, ${viewMonth.y}`;
    
    const slotId = `${barber.id || barber.name}_${dateStr}_${time}`.replace(/[\s,]+/g, '_');
    const slotLockRef = doc(db, "slot_locks", slotId);
    const bookingRef = doc(collection(db, "bookings"));

    try {
      await runTransaction(db, async (transaction) => {
        const lockSnap = await transaction.get(slotLockRef);
        if (lockSnap.exists() && lockSnap.data().status !== "cancelled") {
           throw new Error("SLOT_TAKEN");
        }

        transaction.set(slotLockRef, { status: "pending", timestamp: new Date() });
        transaction.set(bookingRef, {
          clientId:   auth.currentUser ? auth.currentUser.uid : "guest",
          clientName: user ? user.name : guestName,
          clientEmail: user ? user.email : guestEmail,
          barberId:   barber.id || barber.name,
          barberName: barber.name,
          shop:       barber.shop,
          service:    service.name,
          duration:   service.duration,
          date:       dateStr,
          time,
          price:      service.price,
          note,
          status:     "pending",
          createdAt:  new Date(),
        });
      });

      const templateParams = {
        client_email: user ? user.email : guestEmail,
        barber_email: barber.email, 
        client_name:  user ? user.name  : guestName,
        barber_name:  barber.name,
        shop:         barber.shop,
        service:      service.name,
        date:         dateStr,
        time,
      };

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE, 
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY
      ).catch(err => console.warn("Client notification failed:", err));

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE, 
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY
      ).catch(err => console.warn("Barber notification failed:", err));

      setConfirmed(true);
      setToast({ msg: "Appointment booked! 🎉", type: "success" });
    } catch (err) {
      if (err.message === "SLOT_TAKEN") {
        setToast({ msg: "Sorry, this slot was just booked! Please select another.", type: "error" });
        setTakenSlots(prev => [...prev, time]);
        setTime(null);
        setStep(2);
      } else {
        setToast({ msg: "Booking failed. Please try again.", type: "error" });
      }
      console.error("Booking transaction error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmed) {
    return (
      <div className="booking-wrap">
        <div className="success-wrap">
          <div className="success-icon">✓</div>
          <h2 className="serif">You're booked!</h2>
          <p>
            Your appointment with <strong>{barber.name}</strong> at {barber.shop} is confirmed for{" "}
            <strong>{MONTHS[viewMonth.m]} {date}, {viewMonth.y} at {time}</strong>.
            A confirmation email has been sent.
          </p>
          {/* 👈 Replaced setPage with navigate */}
          <button className="nav-pill" onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  const calCells = buildCal(viewMonth.y, viewMonth.m);
  const steps    = ["Service", "Date & Time", "Confirm"];

  const generateTimeSlots = () => {
    if (!date) return [];
    
    const dateObj = new Date(viewMonth.y, viewMonth.m, date);
    const dayName = FULL_DAYS[dateObj.getDay()];
    const availability = barber.availability || DEFAULT_AVAILABILITY;
    const dayConfig = availability.find(d => d.day === dayName);
    
    if (!dayConfig || !dayConfig.open) return []; 

    const slots = [];
    let currentSlot = new Date(`2000-01-01T${dayConfig.start}:00`);
    const endSlot = new Date(`2000-01-01T${dayConfig.end}:00`);
    
    const realNow = new Date();
    const isActuallyToday = dateObj.toDateString() === realNow.toDateString();
    const currentTimeString = realNow.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });

    while (currentSlot < endSlot) {
      const timeStr = currentSlot.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
      if (!isActuallyToday || timeStr > currentTimeString) {
        slots.push(timeStr);
      }
      currentSlot.setMinutes(currentSlot.getMinutes() + 30);
    }
    return slots;
  };

  const dynamicSlots = generateTimeSlots();

  return (
    <div className="booking-wrap">
      {/* 👈 Replaced setPage with navigate */}
      <button className="back-btn" onClick={() => step > 1 ? setStep(step - 1) : navigate("/")}>
        ← {step > 1 ? "Back" : "All Barbers"}
      </button>

      <div className="booking-barber">
        <div className="avatar" style={{ width: 52, height: 52, fontSize: 18 }}>
          {getInitials(barber.name)}
        </div>
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 17 }}>{barber.name}</div>
          <div style={{ color: C.gold, fontSize: 13, fontWeight: 600 }}>{barber.shop}</div>
          <div style={{ color: C.textLight, fontSize: 13, marginTop: 2 }}>
            📍 {barber.city ? barber.city.charAt(0).toUpperCase() + barber.city.slice(1) : "Canada"}
          </div>
          {barber.bio && <div style={{ fontSize: 13, color: C.textMid, marginTop: 6, fontStyle: "italic" }}>"{barber.bio}"</div>}
          {barber.instagram && <div style={{ fontSize: 12, color: C.gold, marginTop: 4, fontWeight: 600 }}>📷 {barber.instagram}</div>}
        </div>
        <div style={{ marginLeft: "auto" }}>
          <StarRating r={barber.rating} />
        </div>
      </div>

      <div className="step-bar">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="step-item">
              <div className={`step-circle ${i + 1 < step ? "done" : i + 1 === step ? "active" : "todo"}`}>
                {i + 1 < step ? "✓" : i + 1}
              </div>
              <span className="step-label">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`step-line ${i + 1 < step ? "done" : ""}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {step === 1 && (
        <>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, marginBottom: 20 }}>
            Choose a Service
          </h3>
          <div className="service-list">
            {activeServices.map(s => (
              <div
                key={s.id}
                className={`service-item ${service?.id === s.id ? "selected" : ""}`}
                onClick={() => setService(s)}
              >
                <div>
                  <div className="service-name">{s.name}</div>
                  <div className="service-dur">⏱ {s.duration}</div>
                </div>
                <div className="service-detail">
                  <span className="service-price">${s.price}</span>
                  {service?.id === s.id && <span style={{ color: C.gold, fontSize: 18 }}>✓</span>}
                </div>
              </div>
            ))}
          </div>
          <button className="submit-btn" disabled={!service} onClick={() => setStep(2)}>
            Continue →
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, marginBottom: 20 }}>
            Pick a Date & Time
          </h3>
          <div style={{ background: C.white, borderRadius: 16, padding: 24, border: "1px solid #f0ece0", marginBottom: 20 }}>
            <div className="cal-nav">
              <button onClick={() => {
                setDate(null); setTime(null);
                setViewMonth(v => v.m === 0 ? { y: v.y - 1, m: 11 } : { y: v.y, m: v.m - 1 });
              }}>‹</button>
              <h4>{MONTHS[viewMonth.m]} {viewMonth.y}</h4>
              <button onClick={() => {
                setDate(null); setTime(null);
                setViewMonth(v => v.m === 11 ? { y: v.y + 1, m: 0 } : { y: v.y, m: v.m + 1 });
              }}>›</button>
            </div>
            <div className="calendar-grid">
              {DAYS.map(d => <div key={d} className="cal-day-name">{d}</div>)}
              {calCells.map((d, i) => {
                const isToday = d && new Date(viewMonth.y, viewMonth.m, d).toDateString() === todayObj.toDateString();
                return (
                  <button
                    key={i}
                    className={["cal-day", d && date === d ? "selected" : "", d && isPast(d) ? "disabled" : "", isToday && date !== d ? "today" : ""].join(" ").trim()}
                    disabled={!d || isPast(d)}
                    onClick={() => { if (d && !isPast(d)) { setDate(d); setTime(null); } }}
                  >
                    {d || ""}
                  </button>
                );
              })}
            </div>
          </div>

          {date && (
            <>
              <h4 style={{ marginBottom: 14, fontSize: 15, color: C.textMid }}>
                Available times on {MONTHS[viewMonth.m]} {date}
                {slotsLoading && <> <Spinner /></>}
              </h4>
              
              {dynamicSlots.length === 0 ? (
                <div style={{ padding: 16, background: C.redBg, color: C.red, borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
                  No available slots for this date. The barber may be closed or fully booked.
                </div>
              ) : (
                <div className="time-grid">
                  {dynamicSlots.map(s => (
                    <div
                      key={s}
                      className={["time-slot", takenSlots.includes(s) ? "taken" : "", time === s ? "selected" : ""].join(" ").trim()}
                      onClick={() => !takenSlots.includes(s) && setTime(s)}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <button className="submit-btn" disabled={!date || !time} onClick={() => setStep(3)}>
            Continue →
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, marginBottom: 20 }}>
            Confirm Your Appointment
          </h3>
          <div className="confirm-box">
            {[
              { l: "Barber",   v: barber.name },
              { l: "Shop",     v: barber.shop },
              { l: "Service",  v: service?.name },
              { l: "Duration", v: service?.duration },
              { l: "Date",     v: `${MONTHS[viewMonth.m]} ${date}, ${viewMonth.y}` },
              { l: "Time",     v: time },
              { l: "Total",    v: `$${service?.price}` },
            ].map(r => (
              <div key={r.l} className="confirm-row">
                <span className="confirm-label">{r.l}</span>
                <span className="confirm-val">{r.v}</span>
              </div>
            ))}
          </div>

          <div className="field" style={{ marginBottom: 24 }}>
            <label>Special Requests / Notes (optional)</label>
            <textarea
              placeholder="e.g. Please use a guard 2 on the sides, taper the back…"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>

          {!user && (
            <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h4 style={{ fontSize: 15, marginBottom: 12, color: C.dark }}>Your Details (Guest Booking)</h4>
              <div className="row2">
                <div className="field" style={{ marginBottom: 0 }}>
                  <label>Name</label>
                  <input value={guestName} onChange={e => setGuestName(e.target.value)} placeholder="e.g. John Doe" />
                </div>
                <div className="field" style={{ marginBottom: 0 }}>
                  <label>Email</label>
                  <input type="email" value={guestEmail} onChange={e => setGuestEmail(e.target.value)} placeholder="e.g. john@email.com" />
                </div>
              </div>
              <div style={{ marginTop: 14, fontSize: 13, color: "#92650a", background: "#fff8e1", padding: "8px 12px", borderRadius: 8, border: "1px solid #f5e18a" }}>
                {/* 👈 Replaced setPage with navigate */}
                💡 <button style={{ background: "none", border: "none", color: C.gold, fontWeight: 700, cursor: "pointer", fontSize: 13 }} onClick={() => navigate("/auth")}>Sign in</button> to save your booking history and auto-fill details.
              </div>
            </div>
          )}

          <button className="submit-btn" onClick={confirm} disabled={submitting}>
            {submitting ? <><Spinner />Confirming…</> : "✓ Confirm Booking"}
          </button>
        </>
      )}
    </div>
  );
}