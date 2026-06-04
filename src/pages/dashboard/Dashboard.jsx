import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Added
import { C, getInitials } from "../../shared";
import ClientDashboard from "./ClientDashboard";
import BarberDashboard from "./BarberDashboard";

// 👈 Removed setPage
export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate(); // 👈 Added
  const isBarber = user.role === "barber";
  const [tab, setTab] = useState(isBarber ? "overview" : "upcoming");

  const clientTabs = [
    { k: "upcoming", l: "📅 Appointments" },
  ];
  const barberTabs = [
    { k: "overview",       l: "📊 Overview"      },
    { k: "appointments",   l: "📅 Appointments"  },
    { k: "availability",   l: "🕐 Availability"  },
    { k: "services",       l: "✂️ Services"      },
    { k: "profile",        l: "⚙️ Profile"       },
  ];
  const tabs = isBarber ? barberTabs : clientTabs;

  return (
    <div className="dash-layout">
      <div className="sidebar">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{getInitials(user.name)}</div>
          <div className="sidebar-name">{user.name}</div>
          <div className="sidebar-role">
            {isBarber ? `✂️ Barber · ${user.shop || "Your Shop"}` : "👤 Client"}
          </div>
        </div>
        {tabs.map(t => (
          <button
            key={t.k}
            className={`sidebar-item ${tab === t.k ? "active" : ""}`}
            onClick={() => setTab(t.k)}
          >
            {t.l}
          </button>
        ))}
        <button
          className="sidebar-item"
          style={{ color: C.red, marginTop: 16 }}
          onClick={() => navigate("/")} // 👈 Replaced setPage
        >
          ← Back to Home
        </button>
      </div>

      {isBarber
        ? <BarberDashboard user={user} setUser={setUser} tab={tab} setTab={setTab} />
        : <ClientDashboard user={user} />
      }
    </div>
  );
}