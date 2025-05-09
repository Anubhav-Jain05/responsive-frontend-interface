import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <nav className="bottom-nav">
      <button className="btn-wrapper quote-red">
        <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90"></i>
        Quotes
      </button>
      <button className="btn-wrapper">
        <i class="fa-solid fa-chart-simple"></i>
        Deals
      </button>
      <button className="btn-wrapper">
        <i class="fa-solid fa-chart-simple"></i>
        Net Deals
      </button>
      <button className="btn-wrapper">
        <i className="fa-solid fa-clock-rotate-left"></i>
        History
      </button>
    </nav>
  );
}
