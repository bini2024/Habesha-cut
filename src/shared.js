export const C = {
  gold: "#D4AF37", goldDark: "#b8962e", goldLight: "#fcf8f0", goldMid: "#f5e9b8",
  dark: "#1a1a1a", dark2: "#2C2C2C", dark3: "#3a3a3a",
  light: "#faf9f6", white: "#ffffff",
  textLight: "#666666", textMid: "#444444",
  green: "#27ae60", greenBg: "#e8f8f5",
  red: "#e74c3c", redBg: "#fdf0ef", blue: "#1DA1F2",
};

export const GLOBAL_SERVICES = [
  { id: 1, name: "Classic Haircut", duration: "30 min", price: 30 },
  { id: 2, name: "Skin Fade", duration: "45 min", price: 40 },
  { id: 3, name: "Beard Trim & Shape", duration: "20 min", price: 20 },
];

export const DEFAULT_AVAILABILITY = [
  { day: "Monday",    open: true,  start: "09:00", end: "18:00" },
  { day: "Tuesday",   open: true,  start: "09:00", end: "18:00" },
  { day: "Wednesday", open: true,  start: "10:00", end: "17:00" },
  { day: "Thursday",  open: true,  start: "09:00", end: "18:00" },
  { day: "Friday",    open: true,  start: "09:00", end: "19:00" },
  { day: "Saturday",  open: true,  start: "08:00", end: "16:00" },
  { day: "Sunday",    open: false, start: "10:00", end: "15:00" },
];

export const FULL_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const DAYS    = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getInitials(name = "") {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}