import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, collection, addDoc, getDocs, query, where, updateDoc, runTransaction } from "firebase/firestore";
import { auth, db } from "./firebase";
import emailjs from '@emailjs/browser';

// ─── THEME & CSS ──────────────────────────────────────────────────────────────
const C = {
  gold: "#D4AF37", goldDark: "#b8962e", goldLight: "#fcf8f0", goldMid: "#f5e9b8",
  dark: "#1a1a1a", dark2: "#2C2C2C", dark3: "#3a3a3a",
  light: "#faf9f6", white: "#ffffff",
  textLight: "#666666", textMid: "#444444",
  green: "#27ae60", greenBg: "#e8f8f5",
  red: "#e74c3c", redBg: "#fdf0ef", blue: "#1DA1F2",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:#faf9f6;color:#2C2C2C;}
  ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-thumb{background:#ddd;border-radius:3px;}
  .serif{font-family:'Playfair Display',serif;}

  .nav{display:flex;justify-content:space-between;align-items:center;padding:0 5%;height:68px;background:#fff;border-bottom:1px solid #f0ece0;position:sticky;top:0;z-index:100;box-shadow:0 2px 20px rgba(0,0,0,0.04);}
  .logo-text{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:#2C2C2C;cursor:pointer;}
  .logo-text span{color:#D4AF37;}
  .nav-links{display:flex;align-items:center;gap:8px;}
  .nav-btn{background:none;border:none;cursor:pointer;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:#444;border-radius:8px;transition:all .2s;}
  .nav-btn:hover{background:#fcf8f0;color:#2C2C2C;}
  .nav-pill{background:#D4AF37;color:#fff;padding:9px 20px;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .2s;box-shadow:0 3px 12px rgba(212,175,55,0.35);}
  .nav-pill:hover{background:#b8962e;transform:translateY(-1px);box-shadow:0 5px 18px rgba(212,175,55,0.45);}

  .hero{background:#1a1a1a;padding:90px 5% 80px;position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;border-radius:50%;border:60px solid rgba(212,175,55,0.07);pointer-events:none;}
  .hero::after{content:'';position:absolute;bottom:-100px;left:-60px;width:350px;height:350px;border-radius:50%;border:40px solid rgba(212,175,55,0.05);pointer-events:none;}
  .hero-inner{max-width:680px;position:relative;z-index:1;}
  .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(212,175,55,0.15);color:#D4AF37;padding:6px 14px;border-radius:50px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:24px;}
  .hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,58px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;}
  .hero h1 em{color:#D4AF37;font-style:normal;}
  .hero p{color:rgba(255,255,255,0.65);font-size:17px;line-height:1.7;max-width:500px;margin-bottom:36px;}
  .hero-search{display:flex;gap:10px;max-width:520px;}
  .hero-search select{flex:1;padding:14px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.08);color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;cursor:pointer;}
  .hero-search select option{background:#2C2C2C;color:#fff;}
  .hero-search select:focus{border-color:#D4AF37;}
  .search-cta{background:#D4AF37;color:#fff;border:none;padding:14px 28px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:all .2s;box-shadow:0 4px 16px rgba(212,175,55,0.4);}
  .search-cta:hover{background:#b8962e;transform:translateY(-1px);}
  .hero-stats{display:flex;gap:32px;margin-top:48px;padding-top:40px;border-top:1px solid rgba(255,255,255,0.08);}
  .hero-stat span:first-child{display:block;font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#fff;}
  .hero-stat span:last-child{font-size:13px;color:rgba(255,255,255,0.45);}

  .section{padding:70px 5%;}
  .section-label{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#D4AF37;margin-bottom:10px;}
  .section-title{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#2C2C2C;margin-bottom:8px;}
  .section-sub{color:#666;font-size:15px;}
  .grid-3{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;margin-top:40px;}

  .bcard{background:#fff;border-radius:16px;overflow:hidden;border:1px solid #f0ece0;transition:all .25s;cursor:pointer;}
  .bcard:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(212,175,55,0.12);border-color:#e8dfa0;}
  .bcard-top{background:linear-gradient(135deg,#1a1a1a 0%,#3a3a3a 100%);padding:24px;display:flex;align-items:flex-start;gap:16px;}
  .avatar{width:64px;height:64px;border-radius:50%;border:3px solid #D4AF37;background:#3a3a3a;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#D4AF37;flex-shrink:0;}
  .bcard-name{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:3px;}
  .bcard-shop{color:#D4AF37;font-size:13px;font-weight:600;}
  .bcard-body{padding:20px;}
  .bcard-loc{display:flex;align-items:center;gap:5px;color:#666;font-size:13px;margin-bottom:14px;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;}
  .tag{background:#fcf8f0;color:#2C2C2C;padding:4px 10px;border-radius:50px;font-size:12px;font-weight:600;border:1px solid #f5e9b8;}
  .bcard-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
  .rating{display:flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:#2C2C2C;}
  .price{font-size:13px;font-weight:700;color:#27ae60;background:#e8f8f5;padding:4px 10px;border-radius:6px;}
  .book-btn{width:100%;background:#1a1a1a;color:#fff;border:none;padding:12px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;}
  .book-btn:hover{background:#D4AF37;}

  .how-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:40px;}
  .how-card{background:#fff;padding:28px;border-radius:16px;border:1px solid #f0ece0;position:relative;}
  .how-num{width:36px;height:36px;background:#D4AF37;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:16px;}
  .how-card h4{font-weight:600;font-size:16px;margin-bottom:8px;color:#2C2C2C;}
  .how-card p{font-size:14px;color:#666;line-height:1.6;}

  .barbers-hero{background:#1a1a1a;padding:80px 5%;text-align:center;}
  .barbers-hero h2{font-family:'Playfair Display',serif;font-size:42px;font-weight:900;color:#D4AF37;margin-bottom:16px;}
  .barbers-hero p{color:rgba(255,255,255,0.65);font-size:17px;max-width:560px;margin:0 auto 36px;}
  .feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-top:40px;}
  .feat-card{background:#fff;padding:30px;border-radius:16px;border-top:4px solid #D4AF37;box-shadow:0 4px 20px rgba(0,0,0,0.04);}
  .feat-icon{font-size:30px;margin-bottom:16px;}
  .feat-card h3{font-size:17px;font-weight:600;margin-bottom:10px;color:#2C2C2C;}
  .feat-card p{font-size:14px;color:#666;line-height:1.65;}

  .auth-bg{min-height:calc(100vh - 68px);background:#fcf8f0;display:flex;align-items:center;justify-content:center;padding:40px 20px;}
  .auth-box{background:#fff;padding:44px;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.07);width:100%;max-width:420px;}
  .auth-box h2{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#2C2C2C;margin-bottom:8px;}
  .auth-box .sub{color:#666;font-size:14px;margin-bottom:32px;}
  .tabs2{display:flex;background:#faf9f6;border-radius:10px;padding:4px;gap:4px;margin-bottom:28px;}
  .tab2{flex:1;text-align:center;padding:9px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif;color:#666;}
  .tab2.active{background:#fff;color:#2C2C2C;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
  .field{margin-bottom:18px;}
  .field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:#2C2C2C;}
  .field input,.field select,.field textarea{width:100%;padding:12px 14px;border:1.5px solid #e8e8e8;border-radius:10px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border .2s;background:#fff;color:#2C2C2C;}
  .field input:focus,.field select:focus,.field textarea:focus{border-color:#D4AF37;}
  .field textarea{resize:vertical;min-height:80px;}
  .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .submit-btn{width:100%;background:#D4AF37;color:#fff;border:none;padding:14px;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:8px;transition:all .2s;box-shadow:0 4px 16px rgba(212,175,55,0.35);}
  .submit-btn:hover{background:#b8962e;}
  .submit-btn:disabled{background:#ccc;box-shadow:none;cursor:not-allowed;}
  .auth-toggle{text-align:center;margin-top:20px;font-size:13px;color:#666;}
  .auth-toggle button{background:none;border:none;color:#D4AF37;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;}

  .booking-wrap{max-width:860px;margin:0 auto;padding:50px 5%;}
  .back-btn{display:flex;align-items:center;gap:6px;background:none;border:none;color:#666;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:20px;padding:8px 0;transition:color .2s;}
  .back-btn:hover{color:#D4AF37;}
  .booking-barber{display:flex;align-items:center;gap:16px;background:#fff;padding:20px 24px;border-radius:14px;border:1px solid #f0ece0;margin-bottom:28px;}
  .step-bar{display:flex;align-items:center;gap:0;margin-bottom:36px;}
  .step-item{display:flex;align-items:center;gap:8px;flex:1;}
  .step-circle{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;transition:all .2s;}
  .step-circle.done{background:#27ae60;color:#fff;}
  .step-circle.active{background:#D4AF37;color:#fff;}
  .step-circle.todo{background:#eee;color:#666;}
  .step-label{font-size:13px;font-weight:600;color:#444;}
  .step-line{flex:1;height:2px;background:#eee;margin:0 4px;}
  .step-line.done{background:#D4AF37;}

  .service-list{display:grid;gap:10px;margin-bottom:28px;}
  .service-item{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-radius:12px;border:2px solid #f0ece0;cursor:pointer;transition:all .2s;background:#fff;}
  .service-item:hover{border-color:#e8dfa0;}
  .service-item.selected{border-color:#D4AF37;background:#fcf8f0;}
  .service-name{font-weight:600;font-size:15px;}
  .service-detail{display:flex;gap:12px;align-items:center;}
  .service-dur{font-size:13px;color:#666;}
  .service-price{font-size:15px;font-weight:700;color:#2C2C2C;}

  .calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:24px;}
  .cal-day-name{text-align:center;font-size:11px;font-weight:600;color:#666;padding:8px 0;letter-spacing:.05em;}
  .cal-day{text-align:center;padding:10px 4px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:500;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif;color:#2C2C2C;}
  .cal-day:hover:not(.disabled){background:#fcf8f0;color:#2C2C2C;}
  .cal-day.selected{background:#D4AF37;color:#fff;font-weight:700;}
  .cal-day.disabled{color:#ccc;cursor:not-allowed;}
  .cal-day.today{border:2px solid #D4AF37;}
  .cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
  .cal-nav button{background:none;border:1px solid #e8e8e8;width:36px;height:36px;border-radius:8px;cursor:pointer;font-size:16px;transition:all .2s;}
  .cal-nav button:hover{border-color:#D4AF37;color:#D4AF37;}
  .cal-nav h4{font-weight:600;font-size:16px;color:#2C2C2C;}

  .time-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-bottom:28px;}
  .time-slot{padding:10px 6px;border-radius:8px;border:1.5px solid #e8e8e8;cursor:pointer;text-align:center;font-size:13px;font-weight:600;transition:all .2s;background:#fff;}
  .time-slot:hover:not(.taken){border-color:#D4AF37;color:#D4AF37;}
  .time-slot.selected{background:#D4AF37;color:#fff;border-color:#D4AF37;}
  .time-slot.taken{background:#f5f5f5;color:#bbb;cursor:not-allowed;text-decoration:line-through;}

  .confirm-box{background:#fcf8f0;border-radius:16px;padding:28px;border:1px solid #f5e9b8;margin-bottom:24px;}
  .confirm-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f5e9b8;font-size:14px;}
  .confirm-row:last-child{border-bottom:none;font-weight:700;font-size:16px;}
  .confirm-label{color:#666;}
  .confirm-val{font-weight:600;color:#2C2C2C;}

  .dash-layout{display:flex;min-height:calc(100vh - 68px);}
  .sidebar{width:240px;background:#fff;border-right:1px solid #f0ece0;padding:28px 0;flex-shrink:0;}
  .sidebar-user{padding:0 20px 24px;border-bottom:1px solid #f0ece0;margin-bottom:12px;}
  .sidebar-avatar{width:48px;height:48px;border-radius:50%;background:#D4AF37;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;}
  .sidebar-name{font-weight:700;font-size:15px;color:#2C2C2C;}
  .sidebar-role{font-size:12px;color:#666;margin-top:2px;}
  .sidebar-item{display:flex;align-items:center;gap:10px;padding:12px 20px;cursor:pointer;font-size:14px;font-weight:500;color:#666;transition:all .2s;border-right:3px solid transparent;border:none;background:none;width:100%;text-align:left;font-family:'DM Sans',sans-serif;}
  .sidebar-item:hover{background:#faf9f6;color:#2C2C2C;}
  .sidebar-item.active{background:#fcf8f0;color:#D4AF37;border-right:3px solid #D4AF37;}
  .dash-main{flex:1;padding:36px 4%;overflow-y:auto;}
  .dash-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#2C2C2C;margin-bottom:6px;}
  .dash-sub{color:#666;font-size:14px;margin-bottom:28px;}
  .stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px;margin-bottom:28px;}
  .stat-card{background:#fff;padding:22px;border-radius:14px;border:1px solid #f0ece0;border-top:3px solid #D4AF37;}
  .stat-label{font-size:13px;color:#666;margin-bottom:8px;}
  .stat-num{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#2C2C2C;}
  .stat-change{font-size:12px;color:#27ae60;margin-top:4px;font-weight:600;}

  .appt-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.03);}
  .appt-table th{background:#faf9f6;padding:12px 16px;text-align:left;font-size:12px;font-weight:700;color:#666;letter-spacing:.05em;text-transform:uppercase;}
  .appt-table td{padding:14px 16px;border-bottom:1px solid #f5f5f5;font-size:14px;color:#2C2C2C;}
  .appt-table tr:last-child td{border-bottom:none;}
  .status-badge{padding:4px 10px;border-radius:50px;font-size:12px;font-weight:700;}
  .status-confirmed{background:#e8f8f5;color:#27ae60;}
  .status-pending{background:#fff8e1;color:#f59e0b;}
  .status-cancelled{background:#fdf0ef;color:#e74c3c;}
  .status-completed{background:#e8f8f5;color:#27ae60;}

  .avail-grid{display:grid;gap:10px;}
  .avail-row{display:flex;align-items:center;gap:12px;background:#fff;padding:16px 18px;border-radius:12px;border:1px solid #f0ece0;}
  .day-name{width:100px;font-weight:600;font-size:14px;color:#2C2C2C;}
  .toggle-switch{position:relative;width:44px;height:24px;flex-shrink:0;}
  .toggle-switch input{opacity:0;width:0;height:0;}
  .toggle-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#ccc;transition:.3s;border-radius:24px;}
  .toggle-slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background:white;transition:.3s;border-radius:50%;}
  input:checked + .toggle-slider{background:#D4AF37;}
  input:checked + .toggle-slider:before{transform:translateX(20px);}
  .time-range{display:flex;align-items:center;gap:8px;margin-left:auto;}
  .time-range input{padding:6px 10px;border:1.5px solid #e8e8e8;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:90px;}
  .time-range input:focus{border-color:#D4AF37;}
  .time-sep{font-size:12px;color:#666;}

  .success-wrap{text-align:center;padding:60px 20px;}
  .success-icon{width:80px;height:80px;background:#e8f8f5;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;}
  .success-wrap h2{font-family:'Playfair Display',serif;font-size:30px;font-weight:700;color:#2C2C2C;margin-bottom:12px;}
  .success-wrap p{color:#666;font-size:16px;max-width:400px;margin:0 auto 32px;}

  .toast{position:fixed;bottom:28px;right:28px;background:#2C2C2C;color:#fff;padding:14px 20px;border-radius:12px;font-size:14px;font-weight:500;z-index:9999;display:flex;align-items:center;gap:10px;box-shadow:0 8px 30px rgba(0,0,0,0.2);animation:slideup .3s ease;}
  @keyframes slideup{from{transform:translateY(20px);opacity:0;}to{transform:translateY(0);opacity:1;}}
  .toast-dot{width:8px;height:8px;background:#27ae60;border-radius:50%;flex-shrink:0;}
  .toast-dot.error{background:#e74c3c;}

  .spinner{display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.4);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;margin-right:8px;vertical-align:middle;}
  @keyframes spin{to{transform:rotate(360deg);}}

  .loading-screen{display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:'Playfair Display',serif;font-size:20px;color:#D4AF37;}

  footer{background:#1a1a1a;color:rgba(255,255,255,0.45);text-align:center;padding:28px;font-size:13px;}
  footer span{color:#D4AF37;}

  @media(max-width:768px){
    .hero-search{flex-direction:column;}
    .hero-stats{gap:20px;flex-wrap:wrap;}
    .row2{grid-template-columns:1fr;}
    .dash-layout{flex-direction:column;}
    .sidebar{width:100%;border-right:none;border-bottom:1px solid #f0ece0;padding:12px 0;overflow-x:auto;}
    .sidebar-user{display:none;}
    .sidebar-item{padding:10px 14px;font-size:13px;border-right:none!important;border-bottom:3px solid transparent;white-space:nowrap;}
    .sidebar-item.active{border-right:none!important;border-bottom:3px solid #D4AF37;}
    .nav-links .nav-btn:not(:last-child){display:none;}
    .booking-wrap{padding:30px 4%;}
    .auth-box{padding:28px 20px;}
  }
`;

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const GLOBAL_SERVICES = [
  { id: 1, name: "Classic Haircut", duration: "30 min", price: 30 },
  { id: 2, name: "Skin Fade", duration: "45 min", price: 40 },
  { id: 3, name: "Beard Trim & Shape", duration: "20 min", price: 20 },
];

const DEFAULT_AVAILABILITY = [
  { day: "Monday",    open: true,  start: "09:00", end: "18:00" },
  { day: "Tuesday",   open: true,  start: "09:00", end: "18:00" },
  { day: "Wednesday", open: true,  start: "10:00", end: "17:00" },
  { day: "Thursday",  open: true,  start: "09:00", end: "18:00" },
  { day: "Friday",    open: true,  start: "09:00", end: "19:00" },
  { day: "Saturday",  open: true,  start: "08:00", end: "16:00" },
  { day: "Sunday",    open: false, start: "10:00", end: "15:00" },
];

const FULL_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAYS   = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getInitials(name = "") {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

function StarRating({ r = 5 }) {
  const full = Math.floor(r);
  return (
    <span className="rating">
      {"★".repeat(full)}
      <span style={{ color: "#ccc" }}>{"★".repeat(5 - full)}</span>
      &nbsp;{r}
    </span>
  );
}

function Spinner() {
  return <span className="spinner" />;
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function Toast({ msg, type = "success", onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="toast">
      <div className={`toast-dot${type === "error" ? " error" : ""}`} />
      {msg}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ setPage, user, setUser, setToast }) {
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

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ setPage, setSelectedBarber }) {
  const [city, setCity] = useState("toronto"); // Default to Toronto per your strategy
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
    // eslint-disable-next-line
  }, []);

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

// ─── FOR BARBERS PAGE ─────────────────────────────────────────────────────────
function ForBarbersPage({ setPage }) {
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

// ─── AUTH PAGE ────────────────────────────────────────────────────────────────
function AuthPage({ setUser, setPage, setToast }) {
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
            availability: DEFAULT_AVAILABILITY, // Ensure new barbers get default hours
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

// ─── BOOKING PAGE ─────────────────────────────────────────────────────────────
function BookingPage({ barber, user, setPage, setToast }) {
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
    
    // FIX 1: Double Booking Race Condition via Firestore Transaction Slot Lock
    // Create a predictable document ID for this specific time slot
    const slotId = `${barber.id || barber.name}_${dateStr}_${time}`.replace(/[\s,]+/g, '_');
    const slotLockRef = doc(db, "slot_locks", slotId);
    const bookingRef = doc(collection(db, "bookings"));

    try {
      await runTransaction(db, async (transaction) => {
        // Read the lock
        const lockSnap = await transaction.get(slotLockRef);
        if (lockSnap.exists() && lockSnap.data().status !== "cancelled") {
           throw new Error("SLOT_TAKEN");
        }

        // Lock the slot
        transaction.set(slotLockRef, { status: "pending", timestamp: new Date() });

        // Save the actual booking history document
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

      // FIX 4: Send strictly two separate email notifications (Barber & Client)
      const templateParams = {
        client_email: user ? user.email : guestEmail,
        barber_email: barber.email, // Sent to barber's specific email address
        client_name:  user ? user.name  : guestName,
        barber_name:  barber.name,
        shop:         barber.shop,
        service:      service.name,
        date:         dateStr,
        time,
      };

      // Notify the Client
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE, 
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY
      ).catch(err => console.warn("Client notification failed:", err));

      // Notify the Barber (You can duplicate the template in EmailJS and use a second template ID here if you want different designs)
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
          <button className="nav-pill" onClick={() => setPage("home")}>Back to Home</button>
        </div>
      </div>
    );
  }

  const calCells = buildCal(viewMonth.y, viewMonth.m);
  const steps    = ["Service", "Date & Time", "Confirm"];

  // FIX 3: Calculate Dynamic Available Slots based on Barber Profile
  const generateTimeSlots = () => {
    if (!date) return [];
    
    // 1. Get the real day of the week
    const dateObj = new Date(viewMonth.y, viewMonth.m, date);
    const dayName = FULL_DAYS[dateObj.getDay()];
    
    // 2. Find barber's availability for that specific day
    const availability = barber.availability || DEFAULT_AVAILABILITY;
    const dayConfig = availability.find(d => d.day === dayName);
    
    if (!dayConfig || !dayConfig.open) return []; // Barber is closed

    // 3. Generate 30-min increments between their specific Start and End time
    const slots = [];
    let currentSlot = new Date(`2000-01-01T${dayConfig.start}:00`);
    const endSlot = new Date(`2000-01-01T${dayConfig.end}:00`);
    
    // Check current time to hide past slots if the user clicked "Today"
    const realNow = new Date();
    const isActuallyToday = dateObj.toDateString() === realNow.toDateString();
    const currentTimeString = realNow.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });

    while (currentSlot < endSlot) {
      const timeStr = currentSlot.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
      // Only push if it's not today, OR if it's today AND the slot is in the future
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
      <button className="back-btn" onClick={() => step > 1 ? setStep(step - 1) : setPage("home")}>
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
                💡 <button style={{ background: "none", border: "none", color: C.gold, fontWeight: 700, cursor: "pointer", fontSize: 13 }} onClick={() => setPage("auth")}>Sign in</button> to save your booking history and auto-fill details.
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

// ─── CLIENT DASHBOARD ─────────────────────────────────────────────────────────
function ClientDashboard({ user }) {
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

// ─── BARBER DASHBOARD ─────────────────────────────────────────────────────────
function BarberDashboard({ user, setUser, tab, setTab }) {
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
      // Also release the slot lock so it opens back up
      try {
        const booking = appts.find(a => a.id === id);
        if (booking) {
          const slotId = `${user.id || user.name}_${booking.date}_${booking.time}`.replace(/[\s,]+/g, '_');
          await updateDoc(doc(db, "slot_locks", slotId), { status: "cancelled" });
        }
      } catch(e) {} // fail silently if lock isn't found
      setAppts(appts.map(a => a.id === id ? { ...a, status: "cancelled" } : a));
    } catch (err) { console.error("Decline error:", err); }
  };

  const saveAvailability = async () => {
    setSavingAvail(true);
    try {
      await updateDoc(doc(db, "barbers", auth.currentUser.uid), { availability });
      setUser(prev => ({ ...prev, availability })); // FIX 2: Update Local State Immediately
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
      
      setUser(prev => ({ ...prev, ...updates })); // FIX 2: Update Local State Immediately
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
      setUser(prev => ({ ...prev, services: localServices })); // FIX 2: Update Local State Immediately
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

// ─── DASHBOARD SHELL ──────────────────────────────────────────────────────────
function Dashboard({ user, setUser, setPage }) {
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
          onClick={() => setPage("home")}
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

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
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
      <style>{css}</style>
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