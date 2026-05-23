import { useState, useEffect, useRef } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────
const C = {
  gold: "#D4AF37",
  goldDark: "#b8962e",
  goldLight: "#fcf8f0",
  goldMid: "#f5e9b8",
  dark: "#1a1a1a",
  dark2: "#2C2C2C",
  dark3: "#3a3a3a",
  light: "#faf9f6",
  white: "#ffffff",
  textLight: "#666666",
  textMid: "#444444",
  green: "#27ae60",
  greenBg: "#e8f8f5",
  red: "#e74c3c",
  redBg: "#fdf0ef",
  blue: "#1DA1F2",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:${C.light};color:${C.dark2};}
  ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-thumb{background:#ddd;border-radius:3px;}
  .serif{font-family:'Playfair Display',serif;}

  /* NAV */
  .nav{display:flex;justify-content:space-between;align-items:center;padding:0 5%;height:68px;background:${C.white};border-bottom:1px solid #f0ece0;position:sticky;top:0;z-index:100;box-shadow:0 2px 20px rgba(0,0,0,0.04);}
  .logo-text{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:${C.dark2};cursor:pointer;}
  .logo-text span{color:${C.gold};}
  .nav-links{display:flex;align-items:center;gap:8px;}
  .nav-btn{background:none;border:none;cursor:pointer;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:${C.textMid};border-radius:8px;transition:all .2s;}
  .nav-btn:hover{background:${C.goldLight};color:${C.dark2};}
  .nav-pill{background:${C.gold};color:${C.white};padding:9px 20px;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .2s;box-shadow:0 3px 12px rgba(212,175,55,0.35);}
  .nav-pill:hover{background:${C.goldDark};transform:translateY(-1px);box-shadow:0 5px 18px rgba(212,175,55,0.45);}

  /* HERO */
  .hero{background:${C.dark};padding:90px 5% 80px;position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;border-radius:50%;border:60px solid rgba(212,175,55,0.07);pointer-events:none;}
  .hero::after{content:'';position:absolute;bottom:-100px;left:-60px;width:350px;height:350px;border-radius:50%;border:40px solid rgba(212,175,55,0.05);pointer-events:none;}
  .hero-inner{max-width:680px;position:relative;z-index:1;}
  .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(212,175,55,0.15);color:${C.gold};padding:6px 14px;border-radius:50px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:24px;}
  .hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,58px);font-weight:900;color:${C.white};line-height:1.1;margin-bottom:20px;}
  .hero h1 em{color:${C.gold};font-style:normal;}
  .hero p{color:rgba(255,255,255,0.65);font-size:17px;line-height:1.7;max-width:500px;margin-bottom:36px;}
  .hero-search{display:flex;gap:10px;max-width:520px;}
  .hero-search select{flex:1;padding:14px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.08);color:${C.white};font-size:14px;font-family:'DM Sans',sans-serif;outline:none;cursor:pointer;}
  .hero-search select option{background:${C.dark2};color:${C.white};}
  .hero-search select:focus{border-color:${C.gold};}
  .search-cta{background:${C.gold};color:${C.white};border:none;padding:14px 28px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:all .2s;box-shadow:0 4px 16px rgba(212,175,55,0.4);}
  .search-cta:hover{background:${C.goldDark};transform:translateY(-1px);}
  .hero-stats{display:flex;gap:32px;margin-top:48px;padding-top:40px;border-top:1px solid rgba(255,255,255,0.08);}
  .hero-stat span:first-child{display:block;font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:${C.white};}
  .hero-stat span:last-child{font-size:13px;color:rgba(255,255,255,0.45);}

  /* SECTION */
  .section{padding:70px 5%;}
  .section-label{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${C.gold};margin-bottom:10px;}
  .section-title{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:${C.dark2};margin-bottom:8px;}
  .section-sub{color:${C.textLight};font-size:15px;}

  /* GRID */
  .grid-3{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;margin-top:40px;}

  /* BARBER CARD */
  .bcard{background:${C.white};border-radius:16px;overflow:hidden;border:1px solid #f0ece0;transition:all .25s;cursor:pointer;}
  .bcard:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(212,175,55,0.12);border-color:#e8dfa0;}
  .bcard-top{background:linear-gradient(135deg,${C.dark} 0%,${C.dark3} 100%);padding:24px;display:flex;align-items:flex-start;gap:16px;}
  .avatar{width:64px;height:64px;border-radius:50%;border:3px solid ${C.gold};background:${C.dark3};display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:${C.gold};flex-shrink:0;}
  .bcard-name{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:${C.white};margin-bottom:3px;}
  .bcard-shop{color:${C.gold};font-size:13px;font-weight:600;}
  .bcard-body{padding:20px;}
  .bcard-loc{display:flex;align-items:center;gap:5px;color:${C.textLight};font-size:13px;margin-bottom:14px;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;}
  .tag{background:${C.goldLight};color:${C.dark2};padding:4px 10px;border-radius:50px;font-size:12px;font-weight:600;border:1px solid ${C.goldMid};}
  .bcard-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
  .rating{display:flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:${C.dark2};}
  .price{font-size:13px;font-weight:700;color:${C.green};background:${C.greenBg};padding:4px 10px;border-radius:6px;}
  .book-btn{width:100%;background:${C.dark};color:${C.white};border:none;padding:12px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;}
  .book-btn:hover{background:${C.gold};}

  /* HOW IT WORKS */
  .how-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:40px;}
  .how-card{background:${C.white};padding:28px;border-radius:16px;border:1px solid #f0ece0;position:relative;}
  .how-num{width:36px;height:36px;background:${C.gold};border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:${C.white};margin-bottom:16px;}
  .how-card h4{font-weight:600;font-size:16px;margin-bottom:8px;color:${C.dark2};}
  .how-card p{font-size:14px;color:${C.textLight};line-height:1.6;}

  /* FOR BARBERS */
  .barbers-hero{background:${C.dark};padding:80px 5%;text-align:center;}
  .barbers-hero h2{font-family:'Playfair Display',serif;font-size:42px;font-weight:900;color:${C.gold};margin-bottom:16px;}
  .barbers-hero p{color:rgba(255,255,255,0.65);font-size:17px;max-width:560px;margin:0 auto 36px;}
  .feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-top:40px;}
  .feat-card{background:${C.white};padding:30px;border-radius:16px;border-top:4px solid ${C.gold};box-shadow:0 4px 20px rgba(0,0,0,0.04);}
  .feat-icon{font-size:30px;margin-bottom:16px;}
  .feat-card h3{font-size:17px;font-weight:600;margin-bottom:10px;color:${C.dark2};}
  .feat-card p{font-size:14px;color:${C.textLight};line-height:1.65;}

  /* AUTH */
  .auth-bg{min-height:calc(100vh - 68px);background:${C.goldLight};display:flex;align-items:center;justify-content:center;padding:40px 20px;}
  .auth-box{background:${C.white};padding:44px;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.07);width:100%;max-width:420px;}
  .auth-box h2{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:${C.dark2};margin-bottom:8px;}
  .auth-box .sub{color:${C.textLight};font-size:14px;margin-bottom:32px;}
  .tabs2{display:flex;background:${C.light};border-radius:10px;padding:4px;gap:4px;margin-bottom:28px;}
  .tab2{flex:1;text-align:center;padding:9px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif;color:${C.textLight};}
  .tab2.active{background:${C.white};color:${C.dark2};box-shadow:0 2px 8px rgba(0,0,0,0.06);}
  .field{margin-bottom:18px;}
  .field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:${C.dark2};}
  .field input,.field select,.field textarea{width:100%;padding:12px 14px;border:1.5px solid #e8e8e8;border-radius:10px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border .2s;background:${C.white};color:${C.dark2};}
  .field input:focus,.field select:focus,.field textarea:focus{border-color:${C.gold};}
  .field textarea{resize:vertical;min-height:80px;}
  .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .submit-btn{width:100%;background:${C.gold};color:${C.white};border:none;padding:14px;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:8px;transition:all .2s;box-shadow:0 4px 16px rgba(212,175,55,0.35);}
  .submit-btn:hover{background:${C.goldDark};}
  .auth-toggle{text-align:center;margin-top:20px;font-size:13px;color:${C.textLight};}
  .auth-toggle button{background:none;border:none;color:${C.gold};font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;}

  /* BOOKING */
  .booking-wrap{max-width:860px;margin:0 auto;padding:50px 5%;}
  .booking-header{margin-bottom:36px;}
  .back-btn{display:flex;align-items:center;gap:6px;background:none;border:none;color:${C.textLight};font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:20px;padding:8px 0;transition:color .2s;}
  .back-btn:hover{color:${C.gold};}
  .booking-barber{display:flex;align-items:center;gap:16px;background:${C.white};padding:20px 24px;border-radius:14px;border:1px solid #f0ece0;margin-bottom:28px;}
  .step-bar{display:flex;align-items:center;gap:0;margin-bottom:36px;}
  .step-item{display:flex;align-items:center;gap:8px;flex:1;}
  .step-circle{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;transition:all .2s;}
  .step-circle.done{background:${C.green};color:${C.white};}
  .step-circle.active{background:${C.gold};color:${C.white};}
  .step-circle.todo{background:#eee;color:${C.textLight};}
  .step-label{font-size:13px;font-weight:600;color:${C.textMid};}
  .step-line{flex:1;height:2px;background:#eee;margin:0 4px;}
  .step-line.done{background:${C.gold};}

  /* SERVICES */
  .service-list{display:grid;gap:10px;margin-bottom:28px;}
  .service-item{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-radius:12px;border:2px solid #f0ece0;cursor:pointer;transition:all .2s;background:${C.white};}
  .service-item:hover{border-color:#e8dfa0;}
  .service-item.selected{border-color:${C.gold};background:${C.goldLight};}
  .service-name{font-weight:600;font-size:15px;}
  .service-detail{display:flex;gap:12px;align-items:center;}
  .service-dur{font-size:13px;color:${C.textLight};}
  .service-price{font-size:15px;font-weight:700;color:${C.dark2};}

  /* CALENDAR */
  .calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:24px;}
  .cal-day-name{text-align:center;font-size:11px;font-weight:600;color:${C.textLight};padding:8px 0;letter-spacing:.05em;}
  .cal-day{text-align:center;padding:10px 4px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:500;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif;color:${C.dark2};}
  .cal-day:hover:not(.disabled){background:${C.goldLight};color:${C.dark2};}
  .cal-day.selected{background:${C.gold};color:${C.white};font-weight:700;}
  .cal-day.disabled{color:#ccc;cursor:not-allowed;}
  .cal-day.today{border:2px solid ${C.gold};}
  .cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
  .cal-nav button{background:none;border:1px solid #e8e8e8;width:36px;height:36px;border-radius:8px;cursor:pointer;font-size:16px;transition:all .2s;}
  .cal-nav button:hover{border-color:${C.gold};color:${C.gold};}
  .cal-nav h4{font-weight:600;font-size:16px;color:${C.dark2};}

  /* TIME SLOTS */
  .time-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-bottom:28px;}
  .time-slot{padding:10px 6px;border-radius:8px;border:1.5px solid #e8e8e8;cursor:pointer;text-align:center;font-size:13px;font-weight:600;transition:all .2s;background:${C.white};}
  .time-slot:hover:not(.taken){border-color:${C.gold};color:${C.gold};}
  .time-slot.selected{background:${C.gold};color:${C.white};border-color:${C.gold};}
  .time-slot.taken{background:#f5f5f5;color:#bbb;cursor:not-allowed;text-decoration:line-through;}

  /* CONFIRM BOX */
  .confirm-box{background:${C.goldLight};border-radius:16px;padding:28px;border:1px solid ${C.goldMid};margin-bottom:24px;}
  .confirm-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid ${C.goldMid};font-size:14px;}
  .confirm-row:last-child{border-bottom:none;font-weight:700;font-size:16px;}
  .confirm-label{color:${C.textLight};}
  .confirm-val{font-weight:600;color:${C.dark2};}

  /* DASHBOARD */
  .dash-layout{display:flex;min-height:calc(100vh - 68px);}
  .sidebar{width:240px;background:${C.white};border-right:1px solid #f0ece0;padding:28px 0;flex-shrink:0;}
  .sidebar-user{padding:0 20px 24px;border-bottom:1px solid #f0ece0;margin-bottom:12px;}
  .sidebar-avatar{width:48px;height:48px;border-radius:50%;background:${C.gold};display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:${C.white};margin-bottom:12px;}
  .sidebar-name{font-weight:700;font-size:15px;color:${C.dark2};}
  .sidebar-role{font-size:12px;color:${C.textLight};margin-top:2px;}
  .sidebar-item{display:flex;align-items:center;gap:10px;padding:12px 20px;cursor:pointer;font-size:14px;font-weight:500;color:${C.textLight};transition:all .2s;border-right:3px solid transparent;border:none;background:none;width:100%;text-align:left;font-family:'DM Sans',sans-serif;}
  .sidebar-item:hover{background:${C.light};color:${C.dark2};}
  .sidebar-item.active{background:${C.goldLight};color:${C.gold};border-right:3px solid ${C.gold};}
  .dash-main{flex:1;padding:36px 4%;overflow-y:auto;}
  .dash-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:${C.dark2};margin-bottom:6px;}
  .dash-sub{color:${C.textLight};font-size:14px;margin-bottom:28px;}
  .stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px;margin-bottom:28px;}
  .stat-card{background:${C.white};padding:22px;border-radius:14px;border:1px solid #f0ece0;border-top:3px solid ${C.gold};}
  .stat-label{font-size:13px;color:${C.textLight};margin-bottom:8px;}
  .stat-num{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:${C.dark2};}
  .stat-change{font-size:12px;color:${C.green};margin-top:4px;font-weight:600;}

  /* APPOINTMENT TABLE */
  .appt-table{width:100%;border-collapse:collapse;background:${C.white};border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.03);}
  .appt-table th{background:${C.light};padding:12px 16px;text-align:left;font-size:12px;font-weight:700;color:${C.textLight};letter-spacing:.05em;text-transform:uppercase;}
  .appt-table td{padding:14px 16px;border-bottom:1px solid #f5f5f5;font-size:14px;color:${C.dark2};}
  .appt-table tr:last-child td{border-bottom:none;}
  .status-badge{padding:4px 10px;border-radius:50px;font-size:12px;font-weight:700;}
  .status-confirmed{background:${C.greenBg};color:${C.green};}
  .status-pending{background:#fff8e1;color:#f59e0b;}
  .status-cancelled{background:${C.redBg};color:${C.red};}

  /* AVAILABILITY */
  .avail-grid{display:grid;gap:10px;}
  .avail-row{display:flex;align-items:center;gap:12px;background:${C.white};padding:16px 18px;border-radius:12px;border:1px solid #f0ece0;}
  .day-name{width:100px;font-weight:600;font-size:14px;color:${C.dark2};}
  .toggle-switch{position:relative;width:44px;height:24px;flex-shrink:0;}
  .toggle-switch input{opacity:0;width:0;height:0;}
  .toggle-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#ccc;transition:.3s;border-radius:24px;}
  .toggle-slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background:white;transition:.3s;border-radius:50%;}
  input:checked + .toggle-slider{background:${C.gold};}
  input:checked + .toggle-slider:before{transform:translateX(20px);}
  .time-range{display:flex;align-items:center;gap:8px;margin-left:auto;}
  .time-range input{padding:6px 10px;border:1.5px solid #e8e8e8;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:90px;}
  .time-range input:focus{border-color:${C.gold};}
  .time-sep{font-size:12px;color:${C.textLight};}

  /* SUCCESS */
  .success-wrap{text-align:center;padding:60px 20px;}
  .success-icon{width:80px;height:80px;background:${C.greenBg};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;}
  .success-wrap h2{font-family:'Playfair Display',serif;font-size:30px;font-weight:700;color:${C.dark2};margin-bottom:12px;}
  .success-wrap p{color:${C.textLight};font-size:16px;max-width:400px;margin:0 auto 32px;}

  /* TOAST */
  .toast{position:fixed;bottom:28px;right:28px;background:${C.dark2};color:${C.white};padding:14px 20px;border-radius:12px;font-size:14px;font-weight:500;z-index:9999;display:flex;align-items:center;gap:10px;box-shadow:0 8px 30px rgba(0,0,0,0.2);animation:slideup .3s ease;}
  @keyframes slideup{from{transform:translateY(20px);opacity:0;}to{transform:translateY(0);opacity:1;}}
  .toast-dot{width:8px;height:8px;background:${C.green};border-radius:50%;flex-shrink:0;}

  /* FOOTER */
  footer{background:${C.dark};color:rgba(255,255,255,0.45);text-align:center;padding:28px;font-size:13px;}
  footer span{color:${C.gold};}

  /* MOBILE */
  @media(max-width:768px){
    .hero-search{flex-direction:column;}
    .hero-stats{gap:20px;}
    .row2{grid-template-columns:1fr;}
    .dash-layout{flex-direction:column;}
    .sidebar{width:100%;border-right:none;border-bottom:1px solid #f0ece0;padding:12px 0;}
    .sidebar-user{display:none;}
    .sidebar-item{padding:10px 14px;font-size:13px;border-right:none!important;border-bottom:3px solid transparent;}
    .sidebar-item.active{border-right:none!important;border-bottom:3px solid ${C.gold};}
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const BARBERS = [
  { id: 1, name: "Yohannes T.", shop: "Crown & Fade Studio", city: "toronto", province: "ontario", rating: 4.9, reviews: 124, price: 35, tags: ["Fades", "Twists", "Line-ups"], specialty: "Afro-Textured Hair", available: true, bio: "Specialized in Habesha cuts for 8+ years. Crown & Fade is your home for precision work." },
  { id: 2, name: "Solomon G.", shop: "Addis Barber Lounge", city: "ottawa", province: "ontario", rating: 4.8, reviews: 87, price: 30, tags: ["Dreads", "Fades", "Braids"], specialty: "Locs & Natural Styles", available: true, bio: "From Addis to Ottawa — bringing authentic Ethiopian barbering traditions to Canada." },
  { id: 3, name: "Dawit M.", shop: "Habesha Chic", city: "calgary", province: "alberta", rating: 5.0, reviews: 62, price: 40, tags: ["Cuts", "Beard", "Skin Fade"], specialty: "Beard Sculpting", available: true, bio: "Precision barber. Every client leaves with a masterpiece." },
  { id: 4, name: "Biruk A.", shop: "Mekelle Style House", city: "vancouver", province: "bc", rating: 4.7, reviews: 99, price: 32, tags: ["Kids", "Fades", "Textured"], specialty: "Kids & Family Cuts", available: false, bio: "Family-friendly shop serving all ages with patience and care." },
  { id: 5, name: "Henok B.", shop: "The Royal Chair", city: "toronto", province: "ontario", rating: 4.9, reviews: 210, price: 45, tags: ["Skin Fade", "Designs", "Fades"], specialty: "Hair Art & Designs", available: true, bio: "Award-winning barber. Known across the GTA for intricate hair designs." },
  { id: 6, name: "Tewodros K.", shop: "Ethio Cuts MTL", city: "montreal", province: "quebec", rating: 4.6, reviews: 73, price: 28, tags: ["Natural", "Twists", "Coils"], specialty: "Natural Textures", available: true, bio: "Celebrating African hair in all its forms. Based in Montreal's vibrant community." },
];

const SERVICES = [
  { id: 1, name: "Classic Haircut", duration: "30 min", price: 30 },
  { id: 2, name: "Skin Fade", duration: "45 min", price: 40 },
  { id: 3, name: "Beard Trim & Shape", duration: "20 min", price: 20 },
  { id: 4, name: "Cut + Beard Combo", duration: "60 min", price: 55 },
  { id: 5, name: "Hair Design / Art", duration: "60 min", price: 60 },
  { id: 6, name: "Kids Cut (under 12)", duration: "20 min", price: 22 },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getInitials(name) { return name.split(" ").map(w => w[0]).join("").slice(0,2); }
function StarRating({ r }) {
  return <span className="rating">{"★".repeat(Math.floor(r))}<span style={{color:"#ccc"}}>{"★".repeat(5-Math.floor(r))}</span> &nbsp;{r}</span>;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Toast({ msg, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, []);
  return <div className="toast"><div className="toast-dot"></div>{msg}</div>;
}

function Nav({ page, setPage, user, setUser }) {
  return (
    <nav className="nav">
      <div className="logo-text serif" onClick={() => setPage("home")}>Habesha<span>Cuts</span></div>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setPage("home")}>Find a Barber</button>
        <button className="nav-btn" onClick={() => setPage("for-barbers")}>For Barbers</button>
        {user ? (
          <>
            <button className="nav-btn" onClick={() => setPage("dashboard")}>Dashboard</button>
            <button className="nav-btn" onClick={() => { setUser(null); setPage("home"); }}>Logout</button>
          </>
        ) : (
          <button className="nav-pill" onClick={() => setPage("auth")}>Login / Sign Up</button>
        )}
      </div>
    </nav>
  );
}

function HomePage({ setPage, setSelectedBarber }) {
  const [city, setCity] = useState("");
  const [filtered, setFiltered] = useState(BARBERS);

  const search = () => {
    setFiltered(city ? BARBERS.filter(b => b.city === city) : BARBERS);
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
              </optgroup>
              <optgroup label="Alberta">
                <option value="calgary">Calgary</option>
                <option value="edmonton">Edmonton</option>
              </optgroup>
              <optgroup label="British Columbia">
                <option value="vancouver">Vancouver</option>
                <option value="surrey">Surrey</option>
              </optgroup>
              <optgroup label="Quebec">
                <option value="montreal">Montreal</option>
              </optgroup>
            </select>
            <button className="search-cta" onClick={search}>Search</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span>120+</span><span>Verified Barbers</span></div>
            <div className="hero-stat"><span>18</span><span>Cities</span></div>
            <div className="hero-stat"><span>4,800+</span><span>Bookings Made</span></div>
          </div>
        </div>
      </header>

      <section className="section" style={{background: C.white}}>
        <div className="section-label">How it works</div>
        <div className="section-title serif">Simple. Fast. Effortless.</div>
        <div className="how-grid">
          {[
            { n:1, t:"Find Your Barber", d:"Browse verified Habesha barbers in your city, read reviews, and explore their specialty." },
            { n:2, t:"Pick a Service", d:"Choose from haircuts, fades, beard trims, loc care, and more — see pricing upfront." },
            { n:3, t:"Book Your Slot", d:"Select a date and time that works for you. Instant confirmation, no calls needed." },
            { n:4, t:"Show Up Fresh", d:"Walk in at your time, skip the wait, and leave looking your best." },
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
        <div className="grid-3">
          {filtered.map(b => (
            <div className="bcard" key={b.id}>
              <div className="bcard-top">
                <div className="avatar">{getInitials(b.name)}</div>
                <div>
                  <div className="bcard-name">{b.name}
                    {b.rating >= 4.9 && <span style={{color:C.gold, fontSize:13, marginLeft:6}}>✓</span>}
                  </div>
                  <div className="bcard-shop">{b.shop}</div>
                  {!b.available && <span style={{background:"rgba(231,76,60,0.2)",color:"#ff8b80",padding:"3px 8px",borderRadius:50,fontSize:11,fontWeight:700,marginTop:6,display:"inline-block"}}>FULLY BOOKED</span>}
                </div>
              </div>
              <div className="bcard-body">
                <div className="bcard-loc">📍 {b.city.charAt(0).toUpperCase()+b.city.slice(1)}, Canada</div>
                <div className="tags">{b.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <div className="bcard-meta">
                  <StarRating r={b.rating} /> <small style={{color:C.textLight, fontSize:12}}>({b.reviews})</small>
                  <span className="price">from ${b.price}</span>
                </div>
                <button
                  className="book-btn"
                  disabled={!b.available}
                  style={!b.available ? {background:"#ccc",cursor:"not-allowed"} : {}}
                  onClick={() => { if(b.available) { setSelectedBarber(b); setPage("booking"); }}}
                >
                  {b.available ? "Book Appointment" : "Fully Booked"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"60px 20px",color:C.textLight}}>
            <div style={{fontSize:40,marginBottom:16}}>🔍</div>
            <p>No barbers found in that city yet. More coming soon!</p>
          </div>
        )}
      </section>

      <footer><p>© 2026 <span>HabeshaCuts</span> Canada. Built for the community.</p></footer>
    </>
  );
}

function ForBarbersPage({ setPage }) {
  return (
    <>
      <div className="barbers-hero">
        <div className="hero-eyebrow" style={{display:"inline-flex",margin:"0 auto 24px",background:"rgba(212,175,55,0.15)",color:C.gold,padding:"6px 14px",borderRadius:50,fontSize:12,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase"}}>For Barbers</div>
        <h2 className="serif">Grow your clientele.<br />Streamline your schedule.</h2>
        <p>Join Canada's fastest-growing Habesha barbershop network. Fill your chair, automate bookings, and focus on what you do best.</p>
        <button className="nav-pill" onClick={() => setPage("auth")}>Join as a Barber</button>
      </div>

      <section className="section" style={{background:C.white}}>
        <div style={{textAlign:"center",marginBottom:0}}>
          <div className="section-label">Why HabeshaCuts</div>
          <div className="section-title serif">Everything you need to run your shop.</div>
        </div>
        <div className="feat-grid">
          {[
            { icon:"📅", t:"Smart Booking System", d:"Clients book 24/7 without calling you. Your calendar stays up to date automatically. No more back-and-forth DMs." },
            { icon:"💰", t:"Transparent Earnings", d:"See your revenue, upcoming appointments, and top services at a glance on your personal dashboard." },
            { icon:"⭐", t:"Ratings & Reputation", d:"Verified reviews build your profile. The better you cut, the more clients find you organically." },
            { icon:"🔔", t:"Instant Notifications", d:"Get notified when a new booking drops, a client cancels, or it's time for your next appointment." },
            { icon:"✂️", t:"Manage Your Services", d:"List your services with custom pricing and duration. Clients know exactly what they're getting." },
            { icon:"📊", t:"Analytics Dashboard", d:"Track your busiest days, most popular services, and monthly growth trends — all in one clean view." },
          ].map(f => (
            <div className="feat-card" key={f.t}>
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:C.dark,textAlign:"center"}}>
        <div className="section-title serif" style={{color:C.white,marginBottom:12}}>Ready to grow your business?</div>
        <p style={{color:"rgba(255,255,255,0.55)",marginBottom:28,fontSize:15}}>It's free to join. Set up your profile in under 5 minutes.</p>
        <button className="nav-pill" onClick={() => setPage("auth")}>Create Your Barber Profile →</button>
      </section>

      <footer><p>© 2026 <span>HabeshaCuts</span> Canada. Built for the community.</p></footer>
    </>
  );
}

function AuthPage({ setUser, setPage }) {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("client");
  const [form, setForm] = useState({ name:"", email:"", password:"", shop:"", city:"toronto" });
  const [err, setErr] = useState("");

  const update = (k, v) => setForm(f => ({...f, [k]:v}));

  const submit = () => {
    if (!form.email || !form.password) { setErr("Please fill all required fields."); return; }
    if (mode === "signup" && !form.name) { setErr("Please enter your name."); return; }
    setUser({ name: form.name || "Guest", email: form.email, role, shop: form.shop, city: form.city });
    setPage("dashboard");
  };

  return (
    <div className="auth-bg">
      <div className="auth-box">
        <h2 className="serif">{mode === "login" ? "Welcome back" : "Join HabeshaCuts"}</h2>
        <p className="sub">{mode === "login" ? "Sign in to your account." : "Create your free account today."}</p>

        {mode === "signup" && (
          <div className="tabs2">
            <button className={`tab2 ${role==="client"?"active":""}`} onClick={() => setRole("client")}>I'm a Client</button>
            <button className={`tab2 ${role==="barber"?"active":""}`} onClick={() => setRole("barber")}>I'm a Barber</button>
          </div>
        )}

        {mode === "signup" && (
          <div className="field"><label>Full Name</label>
            <input placeholder="e.g. Yohannes Tesfaye" value={form.name} onChange={e => update("name", e.target.value)} />
          </div>
        )}

        <div className="field"><label>Email Address</label>
          <input type="email" placeholder="you@email.com" value={form.email} onChange={e => update("email", e.target.value)} />
        </div>

        <div className="field"><label>Password</label>
          <input type="password" placeholder="••••••••" value={form.password} onChange={e => update("password", e.target.value)} />
        </div>

        {mode === "signup" && role === "barber" && (
          <>
            <div className="field"><label>Shop / Studio Name</label>
              <input placeholder="e.g. Crown & Fade Studio" value={form.shop} onChange={e => update("shop", e.target.value)} />
            </div>
            <div className="field"><label>Your City</label>
              <select value={form.city} onChange={e => update("city", e.target.value)}>
                <option value="toronto">Toronto</option>
                <option value="ottawa">Ottawa</option>
                <option value="calgary">Calgary</option>
                <option value="vancouver">Vancouver</option>
                <option value="montreal">Montreal</option>
              </select>
            </div>
          </>
        )}

        {err && <p style={{color:C.red,fontSize:13,marginBottom:12}}>{err}</p>}

        <button className="submit-btn" onClick={submit}>
          {mode === "login" ? "Sign In" : "Create Account"}
        </button>

        <div className="auth-toggle">
          {mode === "login" ? <>Don't have an account? <button onClick={() => setMode("signup")}>Sign up free</button></>
          : <>Already have an account? <button onClick={() => setMode("login")}>Sign in</button></>}
        </div>
      </div>
    </div>
  );
}

function BookingPage({ barber, user, setPage, setToast }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [note, setNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date(2026, 4, 22);
  const [viewMonth, setViewMonth] = useState({ y: 2026, m: 4 });

  const takenSlots = ["09:00", "10:30", "14:00"];
  const slots = ["09:00","09:30","10:00","10:30","11:00","11:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"];

  const buildCal = (y, m) => {
    const first = new Date(y, m, 1).getDay();
    const days = new Date(y, m+1, 0).getDate();
    const cells = [];
    for(let i=0; i<first; i++) cells.push(null);
    for(let d=1; d<=days; d++) cells.push(d);
    return cells;
  };

  const calCells = buildCal(viewMonth.y, viewMonth.m);

  const isPast = (d) => {
    const dt = new Date(viewMonth.y, viewMonth.m, d);
    return dt < today;
  };

  const confirm = () => {
    setConfirmed(true);
    setToast("Appointment booked! 🎉");
  };

  if (confirmed) return (
    <div className="booking-wrap">
      <div className="success-wrap">
        <div className="success-icon">✓</div>
        <h2 className="serif">You're booked!</h2>
        <p>Your appointment with <strong>{barber.name}</strong> at {barber.shop} has been confirmed for <strong>{MONTHS[viewMonth.m]} {date}, 2026 at {time}</strong>.</p>
        <button className="nav-pill" onClick={() => setPage("home")}>Back to Home</button>
      </div>
    </div>
  );

  const steps = ["Service", "Date & Time", "Confirm"];

  return (
    <div className="booking-wrap">
      <button className="back-btn" onClick={() => step > 1 ? setStep(step-1) : setPage("home")}>
        ← {step > 1 ? "Back" : "All Barbers"}
      </button>

      <div className="booking-barber">
        <div className="avatar" style={{width:52,height:52,fontSize:18}}>{getInitials(barber.name)}</div>
        <div>
          <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:17}}>{barber.name}</div>
          <div style={{color:C.gold,fontSize:13,fontWeight:600}}>{barber.shop}</div>
          <div style={{color:C.textLight,fontSize:13,marginTop:2}}>📍 {barber.city.charAt(0).toUpperCase()+barber.city.slice(1)}</div>
        </div>
        <div style={{marginLeft:"auto"}}>
          <StarRating r={barber.rating} />
        </div>
      </div>

      <div className="step-bar">
        {steps.map((s, i) => (
          <>
            <div className="step-item" key={s}>
              <div className={`step-circle ${i+1 < step ? "done" : i+1 === step ? "active" : "todo"}`}>
                {i+1 < step ? "✓" : i+1}
              </div>
              <span className="step-label">{s}</span>
            </div>
            {i < steps.length-1 && <div className={`step-line ${i+1 < step ? "done" : ""}`}></div>}
          </>
        ))}
      </div>

      {step === 1 && (
        <>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20}}>Choose a Service</h3>
          <div className="service-list">
            {SERVICES.map(s => (
              <div key={s.id} className={`service-item ${service?.id === s.id ? "selected" : ""}`} onClick={() => setService(s)}>
                <div>
                  <div className="service-name">{s.name}</div>
                  <div className="service-dur">⏱ {s.duration}</div>
                </div>
                <div className="service-detail">
                  <span className="service-price">${s.price}</span>
                  {service?.id === s.id && <span style={{color:C.gold,fontSize:18}}>✓</span>}
                </div>
              </div>
            ))}
          </div>
          <button className="submit-btn" disabled={!service} style={!service?{background:"#ccc",boxShadow:"none"}:{}} onClick={() => setStep(2)}>
            Continue →
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20}}>Pick a Date & Time</h3>
          <div style={{background:C.white,borderRadius:16,padding:24,border:"1px solid #f0ece0",marginBottom:20}}>
            <div className="cal-nav">
              <button onClick={() => setViewMonth(v => v.m===0 ? {y:v.y-1,m:11} : {y:v.y,m:v.m-1})}>‹</button>
              <h4>{MONTHS[viewMonth.m]} {viewMonth.y}</h4>
              <button onClick={() => setViewMonth(v => v.m===11 ? {y:v.y+1,m:0} : {y:v.y,m:v.m+1})}>›</button>
            </div>
            <div className="calendar-grid">
              {DAYS.map(d => <div key={d} className="cal-day-name">{d}</div>)}
              {calCells.map((d, i) => (
                <button key={i} className={`cal-day ${d===null?"":""}${d && date===d ? "selected" : ""}${d && isPast(d) ? "disabled" : ""}${d && new Date(viewMonth.y,viewMonth.m,d).toDateString()===today.toDateString() && date!==d ? "today" : ""}`}
                  disabled={!d || isPast(d)}
                  onClick={() => d && !isPast(d) && setDate(d)}>
                  {d || ""}
                </button>
              ))}
            </div>
          </div>

          {date && (
            <>
              <h4 style={{marginBottom:14,fontSize:15,color:C.textMid}}>Available times on {MONTHS[viewMonth.m]} {date}</h4>
              <div className="time-grid">
                {slots.map(s => (
                  <div key={s} className={`time-slot ${takenSlots.includes(s) ? "taken" : ""} ${time===s ? "selected" : ""}`}
                    onClick={() => !takenSlots.includes(s) && setTime(s)}>
                    {s}
                  </div>
                ))}
              </div>
            </>
          )}
          <button className="submit-btn" disabled={!date||!time} style={(!date||!time)?{background:"#ccc",boxShadow:"none"}:{}} onClick={() => setStep(3)}>
            Continue →
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20}}>Confirm Your Appointment</h3>
          <div className="confirm-box">
            {[
              { l:"Barber", v: barber.name },
              { l:"Shop", v: barber.shop },
              { l:"Service", v: service?.name },
              { l:"Duration", v: service?.duration },
              { l:"Date", v: `${MONTHS[viewMonth.m]} ${date}, 2026` },
              { l:"Time", v: time },
              { l:"Total", v: `$${service?.price}` },
            ].map(r => (
              <div key={r.l} className="confirm-row">
                <span className="confirm-label">{r.l}</span>
                <span className="confirm-val">{r.v}</span>
              </div>
            ))}
          </div>

          <div className="field" style={{marginBottom:24}}>
            <label>Special Requests / Notes (optional)</label>
            <textarea placeholder="e.g. Please use a guard 2 on the sides, taper the back..." value={note} onChange={e => setNote(e.target.value)} />
          </div>

          {!user && (
            <div style={{background:"#fff8e1",border:"1px solid #f5e18a",borderRadius:12,padding:14,marginBottom:20,fontSize:14,color:"#92650a"}}>
              ⚠️ <strong>You're not logged in.</strong> <button style={{background:"none",border:"none",color:C.gold,fontWeight:700,cursor:"pointer",fontSize:14}} onClick={() => setPage("auth")}>Sign in</button> to save your booking history.
            </div>
          )}

          <button className="submit-btn" onClick={confirm}>
            ✓ Confirm Booking
          </button>
        </>
      )}
    </div>
  );
}

function ClientDashboard({ user }) {
  const [tab, setTab] = useState("upcoming");
  const appts = [
    { id:1, barber:"Yohannes T.", shop:"Crown & Fade Studio", service:"Skin Fade", date:"May 28, 2026", time:"11:00 AM", status:"confirmed", price:40 },
    { id:2, barber:"Henok B.", shop:"The Royal Chair", service:"Cut + Beard Combo", date:"June 4, 2026", time:"2:00 PM", status:"pending", price:55 },
    { id:3, barber:"Solomon G.", shop:"Addis Barber Lounge", service:"Classic Haircut", date:"Apr 15, 2026", time:"10:00 AM", status:"confirmed", price:30 },
  ];
  const upcoming = appts.filter(a => a.status !== "cancelled" && a.id < 3);
  const past = appts.filter(a => a.id === 3);

  return (
    <div className="dash-main">
      <div className="dash-title serif">My Appointments</div>
      <div className="dash-sub">Welcome back, {user.name}.</div>

      <div className="stats-row">
        <div className="stat-card"><div className="stat-label">Total Bookings</div><div className="stat-num">3</div></div>
        <div className="stat-card"><div className="stat-label">Upcoming</div><div className="stat-num">2</div></div>
        <div className="stat-card"><div className="stat-label">Total Spent</div><div className="stat-num">$125</div></div>
        <div className="stat-card"><div className="stat-label">Fav Barber</div><div className="stat-num" style={{fontSize:16,paddingTop:8}}>Yohannes T.</div></div>
      </div>

      <div className="tabs2" style={{maxWidth:280,marginBottom:24}}>
        <button className={`tab2 ${tab==="upcoming"?"active":""}`} onClick={() => setTab("upcoming")}>Upcoming</button>
        <button className={`tab2 ${tab==="past"?"active":""}`} onClick={() => setTab("past")}>Past</button>
      </div>

      <div style={{overflowX:"auto"}}>
        <table className="appt-table">
          <thead><tr>
            <th>Barber</th><th>Service</th><th>Date</th><th>Time</th><th>Price</th><th>Status</th>
          </tr></thead>
          <tbody>
            {(tab==="upcoming" ? upcoming : past).map(a => (
              <tr key={a.id}>
                <td><strong>{a.barber}</strong><br/><span style={{color:C.textLight,fontSize:12}}>{a.shop}</span></td>
                <td>{a.service}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td><strong>${a.price}</strong></td>
                <td><span className={`status-badge status-${a.status}`}>{a.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BarberDashboard({ user }) {
  const [tab, setTab] = useState("overview");
  const [availability, setAvailability] = useState([
    { day:"Monday", open:true, start:"09:00", end:"18:00" },
    { day:"Tuesday", open:true, start:"09:00", end:"18:00" },
    { day:"Wednesday", open:true, start:"10:00", end:"17:00" },
    { day:"Thursday", open:true, start:"09:00", end:"18:00" },
    { day:"Friday", open:true, start:"09:00", end:"19:00" },
    { day:"Saturday", open:true, start:"08:00", end:"16:00" },
    { day:"Sunday", open:false, start:"10:00", end:"15:00" },
  ]);

  const appts = [
    { id:1, client:"Mikias A.", service:"Skin Fade", date:"May 22, 2026", time:"10:00 AM", status:"confirmed", price:40 },
    { id:2, client:"Bereket H.", service:"Cut + Beard", date:"May 22, 2026", time:"11:30 AM", status:"confirmed", price:55 },
    { id:3, client:"Tsegay M.", service:"Classic Haircut", date:"May 23, 2026", time:"2:00 PM", status:"pending", price:30 },
    { id:4, client:"Dawit K.", service:"Hair Design", date:"May 24, 2026", time:"3:00 PM", status:"confirmed", price:60 },
  ];

  const toggleDay = (i) => {
    setAvailability(a => a.map((d,idx) => idx===i ? {...d,open:!d.open} : d));
  };

  const updateTime = (i, field, val) => {
    setAvailability(a => a.map((d,idx) => idx===i ? {...d,[field]:val} : d));
  };

  return (
    <div className="dash-main">
      <div className="dash-title serif">Barber Dashboard</div>
      <div className="dash-sub">Welcome back, {user.name} · {user.shop || "Your Shop"}</div>

      <div className="tabs2" style={{maxWidth:480,marginBottom:28}}>
        {["overview","appointments","availability","services"].map(t => (
          <button key={t} className={`tab2 ${tab===t?"active":""}`} onClick={() => setTab(t)} style={{textTransform:"capitalize"}}>{t}</button>
        ))}
      </div>

      {tab === "overview" && (
        <>
          <div className="stats-row">
            <div className="stat-card"><div className="stat-label">Today's Bookings</div><div className="stat-num">2</div><div className="stat-change">↑ vs yesterday</div></div>
            <div className="stat-card"><div className="stat-label">This Week</div><div className="stat-num">9</div><div className="stat-change">+3 vs last week</div></div>
            <div className="stat-card"><div className="stat-label">Monthly Revenue</div><div className="stat-num">$810</div><div className="stat-change">↑ 12% vs last month</div></div>
            <div className="stat-card"><div className="stat-label">Avg Rating</div><div className="stat-num">4.9 ⭐</div></div>
          </div>
          <h4 style={{marginBottom:16,color:C.textMid,fontSize:15}}>Today's Schedule</h4>
          <div style={{overflowX:"auto"}}>
            <table className="appt-table">
              <thead><tr><th>Client</th><th>Service</th><th>Time</th><th>Price</th><th>Status</th></tr></thead>
              <tbody>
                {appts.slice(0,2).map(a => (
                  <tr key={a.id}>
                    <td><strong>{a.client}</strong></td>
                    <td>{a.service}</td>
                    <td>{a.time}</td>
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
          <h4 style={{marginBottom:16,color:C.textMid,fontSize:15}}>All Upcoming Appointments</h4>
          <div style={{overflowX:"auto"}}>
            <table className="appt-table">
              <thead><tr><th>Client</th><th>Service</th><th>Date</th><th>Time</th><th>Price</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {appts.map(a => (
                  <tr key={a.id}>
                    <td><strong>{a.client}</strong></td>
                    <td>{a.service}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>${a.price}</td>
                    <td><span className={`status-badge status-${a.status}`}>{a.status}</span></td>
                    <td>
                      {a.status === "pending" && (
                        <button style={{background:C.green,color:C.white,border:"none",padding:"5px 12px",borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600}}>Accept</button>
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
        <>
          <div style={{marginBottom:20}}>
            <h4 style={{fontSize:16,marginBottom:6,color:C.dark2}}>Set Your Weekly Hours</h4>
            <p style={{fontSize:14,color:C.textLight}}>Toggle days on/off and set your working hours for each day.</p>
          </div>
          <div className="avail-grid">
            {availability.map((d, i) => (
              <div className="avail-row" key={d.day}>
                <div className="day-name">{d.day}</div>
                <label className="toggle-switch">
                  <input type="checkbox" checked={d.open} onChange={() => toggleDay(i)} />
                  <span className="toggle-slider"></span>
                </label>
                {d.open ? (
                  <div className="time-range">
                    <input type="time" value={d.start} onChange={e => updateTime(i,"start",e.target.value)} />
                    <span className="time-sep">to</span>
                    <input type="time" value={d.end} onChange={e => updateTime(i,"end",e.target.value)} />
                  </div>
                ) : (
                  <span style={{marginLeft:"auto",color:C.textLight,fontSize:13}}>Closed</span>
                )}
              </div>
            ))}
          </div>
          <button className="submit-btn" style={{maxWidth:200,marginTop:24}}>Save Changes</button>
        </>
      )}

      {tab === "services" && (
        <>
          <div style={{marginBottom:20}}>
            <h4 style={{fontSize:16,marginBottom:6,color:C.dark2}}>Your Services & Pricing</h4>
            <p style={{fontSize:14,color:C.textLight}}>Clients see these when booking with you.</p>
          </div>
          <div className="service-list">
            {SERVICES.map(s => (
              <div key={s.id} className="service-item" style={{cursor:"default"}}>
                <div>
                  <div className="service-name">{s.name}</div>
                  <div className="service-dur">⏱ {s.duration}</div>
                </div>
                <div className="service-detail">
                  <span className="service-price">${s.price}</span>
                  <button style={{background:"none",border:"1px solid #ddd",padding:"5px 10px",borderRadius:8,fontSize:12,cursor:"pointer",color:C.textLight}}>Edit</button>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-pill" style={{marginTop:8,fontSize:13}}>+ Add Service</button>
        </>
      )}
    </div>
  );
}

function Dashboard({ user, setPage }) {
  const [tab, setTab] = useState(user.role === "barber" ? "overview" : "appointments");
  const isBarber = user.role === "barber";
  const clientTabs = [{ k:"appointments", l:"📅 Appointments" }, { k:"profile", l:"👤 Profile" }];
  const barberTabs = [{ k:"overview", l:"📊 Overview" }, { k:"appointments", l:"📅 Appointments" }, { k:"availability", l:"🕐 Availability" }, { k:"services", l:"✂️ Services" }];
  const tabs = isBarber ? barberTabs : clientTabs;

  return (
    <div className="dash-layout">
      <div className="sidebar">
        <div className="sidebar-user">
          <div className="sidebar-avatar">{getInitials(user.name)}</div>
          <div className="sidebar-name">{user.name}</div>
          <div className="sidebar-role">{isBarber ? `✂️ Barber · ${user.shop||"Your Shop"}` : "👤 Client"}</div>
        </div>
        {tabs.map(t => (
          <button key={t.k} className={`sidebar-item ${tab===t.k?"active":""}`} onClick={() => setTab(t.k)}>{t.l}</button>
        ))}
        <button className="sidebar-item" style={{marginTop:"auto",color:C.red}} onClick={() => setPage("home")}>← Back to Home</button>
      </div>
      {isBarber ? <BarberDashboard user={user} tab={tab} setTab={setTab} /> : <ClientDashboard user={user} />}
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [toast, setToastMsg] = useState(null);

  const setToast = (msg) => { setToastMsg(msg); };

  return (
    <>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} user={user} setUser={setUser} />
      {page === "home" && <HomePage setPage={setPage} setSelectedBarber={setSelectedBarber} />}
      {page === "for-barbers" && <ForBarbersPage setPage={setPage} />}
      {page === "auth" && <AuthPage setUser={setUser} setPage={setPage} />}
      {page === "booking" && selectedBarber && <BookingPage barber={selectedBarber} user={user} setPage={setPage} setToast={setToast} />}
      {page === "dashboard" && user && <Dashboard user={user} setPage={setPage} />}
      {toast && <Toast msg={toast} onClose={() => setToastMsg(null)} />}
    </>
  );
}