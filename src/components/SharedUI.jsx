import React, { useEffect } from "react";

export function StarRating({ r = 5 }) {
  const full = Math.floor(r);
  return (
    <span className="rating">
      {"★".repeat(full)}
      <span style={{ color: "#ccc" }}>{"★".repeat(5 - full)}</span>
      &nbsp;{r}
    </span>
  );
}

export function Spinner() {
  return <span className="spinner" />;
}

export function Toast({ msg, type = "success", onClose }) {
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