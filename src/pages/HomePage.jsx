import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { C, getInitials } from "../shared";
import { StarRating, Spinner } from "../components/SharedUI";

export default function HomePage({ setPage, setSelectedBarber }) {
  const [city, setCity] = useState("toronto"); 
  const [allBarbers, setAllBarbers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "barbers"));
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        setAllBarbers(list);
        setFiltered(list.filter(b => b.city?.toLowerCase() === city.toLowerCase()));
      } catch (err) {
        console.error("Error fetching barbers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBarbers();
  }, [city]);

  const search = () => {
    setFiltered(
      city
        ? allBarbers.filter(b => b.city?.toLowerCase() === city.toLowerCase())
        : allBarbers
    );
  };

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">✦ Canada's #1 Habesha Barbershop Platform</div>
          <h1>Book top <em>Habesha</em> barbers<br />across Canada.</h1>
          <p>Skip the wait. Find specialists in your hair texture, book instantly, and secure your spot in minutes.</p>
          <div className="hero-search">
            <select value={city} onChange={e => setCity(e.target.value)}>
              <option value="">All Cities</option>
              <optgroup label="Ontario">
                <option value="toronto">Toronto</option>
                <option value="ottawa">Ottawa</option>
                <option value="mississauga">Mississauga</option>
                <option value="brampton">Brampton</option>
                <option value="hamilton">Hamilton</option>
                <option value="london">London</option>
                <option value="kitchener">Kitchener</option>
              </optgroup>
              <optgroup label="Alberta">
                <option value="calgary">Calgary</option>
                <option value="edmonton">Edmonton</option>
              </optgroup>
              <optgroup label="British Columbia">
                <option value="vancouver">Vancouver</option>
                <option value="surrey">Surrey</option>
                <option value="burnaby">Burnaby</option>
              </optgroup>
              <optgroup label="Quebec">
                <option value="montreal">Montreal</option>
                <option value="laval">Laval</option>
                <option value="gatineau">Gatineau</option>
              </optgroup>
              <optgroup label="Manitoba">
                <option value="winnipeg">Winnipeg</option>
              </optgroup>
              <optgroup label="Nova Scotia">
                <option value="halifax">Halifax</option>
              </optgroup>
            </select>
            <button className="search-cta" onClick={search}>Search</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span>{allBarbers.length || "—"}</span>
              <span>Verified Barbers</span>
            </div>
            <div className="hero-stat"><span>18</span><span>Cities</span></div>
            <div className="hero-stat"><span>4,800+</span><span>Bookings Made</span></div>
          </div>
        </div>
      </header>

      <section className="section" style={{ background: C.white }}>
        <div className="section-label">How it works</div>
        <div className="section-title serif">Simple. Fast. Effortless.</div>
        <div className="how-grid">
          {[
            { n: 1, t: "Find Your Barber", d: "Browse verified Habesha barbers in your city, read reviews, and explore their specialty." },
            { n: 2, t: "Pick a Service",   d: "Choose from haircuts, fades, beard trims, loc care, and more — see pricing upfront." },
            { n: 3, t: "Book Your Slot",   d: "Select a date and time that works for you. Instant confirmation, no calls needed." },
            { n: 4, t: "Show Up Fresh",    d: "Walk in at your time, skip the wait, and leave looking your best." },
          ].map(h => (
            <div key={h.n} className="how-card">
              <div className="how-num">{h.n}</div>
              <h4>{h.t}</h4>
              <p>{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-label">Featured Barbers</div>
        <div className="section-title serif">Top-rated talent near you.</div>
        <div className="section-sub">Discover specialists who know your hair.</div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: C.textLight }}>
            <Spinner /> Loading barbers…
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.textLight }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
            <p>No barbers found in that city yet. More coming soon!</p>
          </div>
        ) : (
          <div className="grid-3">
            {filtered.map(b => (
              <div className="bcard" key={b.id}>
                <div className="bcard-top">
                  <div className="avatar">{getInitials(b.name)}</div>
                  <div>
                    <div className="bcard-name">
                      {b.name}
                      {(b.rating >= 4.9) && (
                        <span style={{ color: C.gold, fontSize: 13, marginLeft: 6 }}>✓</span>
                      )}
                    </div>
                    <div className="bcard-shop">{b.shop}</div>
                    {b.available === false && (
                      <span style={{ background: "rgba(231,76,60,0.2)", color: "#ff8b80", padding: "3px 8px", borderRadius: 50, fontSize: 11, fontWeight: 700, marginTop: 6, display: "inline-block" }}>
                        FULLY BOOKED
                      </span>
                    )}
                  </div>
                </div>
                <div className="bcard-body">
                  <div className="bcard-loc">
                    📍 {b.city ? b.city.charAt(0).toUpperCase() + b.city.slice(1) : "Canada"}
                  </div>
                  {b.bio && (
                    <div style={{ fontSize: 13, color: C.textMid, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {b.bio}
                    </div>
                  )}
                  <div className="tags">
                    {(b.tags || ["Fade", "Lineup"]).map(t => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="bcard-meta">
                    <StarRating r={b.rating || 5} />
                    <small style={{ color: C.textLight, fontSize: 12 }}>({b.reviews || 0})</small>
                    <span className="price">from ${b.price || 30}</span>
                  </div>
                  {b.instagram && (
                    <a
                      className="ig-btn"
                      href={`https://instagram.com/${b.instagram.replace(/^@/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                      View Portfolio on Instagram
                    </a>
                  )}
                  <button
                    className="book-btn"
                    disabled={b.available === false}
                    style={b.available === false ? { background: "#ccc", cursor: "not-allowed" } : {}}
                    onClick={() => {
                      if (b.available !== false) {
                        setSelectedBarber(b);
                        setPage("booking");
                      }
                    }}
                  >
                    {b.available !== false ? "Book Appointment" : "Fully Booked"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer>
        <p>© 2026 <span>HabeshaCuts</span> Canada. Built for the community.</p>
      </footer>
    </>
  );
}