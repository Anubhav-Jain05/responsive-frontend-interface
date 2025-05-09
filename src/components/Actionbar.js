import React, { useState } from "react";
import "../styles/Actionbar.css";

const ToggleSwitch = ({ id, label, checked, onChange }) => (
  <label htmlFor={id} className="toggle-label">
    {label}
    <div className="relative toggle-container">
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className={`toggle-bg ${checked ? "bg-pink" : "bg-zinc"}`}></div>
      <div
        className={`toggle-dot ${
          checked ? "dot-on bg-red" : "dot-off bg-white"
        }`}
      ></div>
    </div>
  </label>
);

const ScriptButton = ({ text }) => (
  <button className="script-button">
    <i className="fa-solid fa-circle-plus fa-lg icon-blue"></i>
    {text}
  </button>
);

export default function Actionbar() {
  const [isProViewEnabled, setProView] = useState(true);
  const [isOneClickTradeEnabled, setOneClickTrade] = useState(false);

  return (
    <>
      <div className="action-bar">
        <ScriptButton text="Press and hold to select script" />
        <hr />
        <ScriptButton text="Press and hold to select script" />
      </div>

      <div className="toggle-group">
        <ToggleSwitch
          id="toggleSwitch"
          label="Pro view"
          checked={isProViewEnabled}
          onChange={() => setProView((prev) => !prev)}
        />
        <ToggleSwitch
          id="oneClickTrade"
          label="One Click Trade"
          checked={isOneClickTradeEnabled}
          onChange={() => setOneClickTrade((prev) => !prev)}
        />
      </div>
    </>
  );
}
