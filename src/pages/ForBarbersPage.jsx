import React from "react";
import { C } from "../shared";

export default function ForBarbersPage({ setPage }) {
  return (
    <>
      <div className="barbers-hero">
        <div className="hero-eyebrow" style={{ display: "inline-flex", margin: "0 auto 24px", background: "rgba(212,175,55,0.15)", color: C.gold, padding: "6px 14px", borderRadius: 50, fontSize: 12, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase" }}>
          For Barbers
        </div>
        <h2 className="serif">Grow your clientele.<br />Streamline your schedule.</h2>
        <p>Join Canada's fastest-growing Habesha barbershop network. Fill your chair, automate bookings, and focus on what you do best.</p>
        <button className="nav-pill" onClick={() => setPage("auth")}>Join as a Barber</button>
      </div>

      <section className="section" style={{ background: C.white }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-label">Why HabeshaCuts</div>
          <div className="section-title serif">Everything you need to run your shop.</div>
        </div>
        <div className="feat-grid">
          {[
            { icon: "📅", t: "Smart Booking System",   d: "Clients book 24/7 without calling you. Your calendar stays up to date automatically. No more back-and-forth DMs." },
            { icon: "💰", t: "Transparent Earnings",    d: "See your revenue, upcoming appointments, and top services at a glance on your personal dashboard." },
            { icon: "⭐", t: "Ratings & Reputation",    d: "Verified reviews build your profile. The better you cut, the more clients find you organically." },
            { icon: "🔔", t: "Instant Notifications",   d: "Get notified when a new booking drops, a client cancels, or it's time for your next appointment." },
            { icon: "✂️", t: "Manage Your Services",    d: "List your services with custom pricing and duration. Clients know exactly what they're getting." },
            { icon: "📊", t: "Analytics Dashboard",     d: "Track your busiest days, most popular services, and monthly growth trends — all in one clean view." },
          ].map(f => (
            <div className="feat-card" key={f.t}>
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: C.dark, textAlign: "center" }}>
        <div className="section-title serif" style={{ color: C.white, marginBottom: 12 }}>
          Ready to grow your business?
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 28, fontSize: 15 }}>
          It's free to join. Set up your profile in under 5 minutes.
        </p>
        <button className="nav-pill" onClick={() => setPage("auth")}>
          Create Your Barber Profile →
        </button>
      </section>

      <footer><p>© 2026 <span>HabeshaCuts</span> Canada. Built for the community.</p></footer>
    </>
  );
}