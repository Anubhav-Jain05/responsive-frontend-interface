import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <i className="fa-solid fa-bars icon"></i>
      </div>
      <div className="header-actions">
        <header className="header">Quotes</header>
        <i className="fa-regular fa-star icon"></i>
        <i className="fa-solid fa-plus icon"></i>
        <i className="fa-solid fa-pen-to-square icon"></i>
      </div>
    </div>
  );
}
