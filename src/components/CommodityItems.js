import React from "react";
import "../styles/CommodityItem.css";

export default function CommodityItems({
  script,
  bid,
  bidIsValue,
  ask,
  askisvalue,
  change,
  bidInfo,
  open,
  close,
  high,
  low,
}) {
  return (
    <div className="quote-item">
      <div className="full-row change">
        <i
          className="fa-solid fa-arrow-trend-up"
          style={{ marginRight: "2px" }}
        ></i>
        {change}
      </div>

      <div className="row">
        <div className="script">{script}</div>
        <div className={`col-2 bid ${bidIsValue === "+" ? "up" : "down"}`}>
          <span className="price">{bid}</span>
        </div>
        <div className={`col-3 ask ${askisvalue === "+" ? "up" : "down"}`}>
          <span className="price">{ask}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-1 info">{bidInfo}</div>
        <div className="col-2">
          <i className="fa-solid fa-arrow-up-from-bracket"></i> {open}
        </div>
        <div className="col-3">
          <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-180"></i>{" "}
          {high}
        </div>
      </div>

      <div className="row">
        <div className="col-1">O: {close}</div>
        <div className="col-2">C: {low}</div>
        <div className="col-3">L: {high}</div>
      </div>
    </div>
  );
}
