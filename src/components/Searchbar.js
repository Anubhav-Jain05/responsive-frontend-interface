import React from "react";
import "../styles/Searchbar.css";

export default function Searchbar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="&nbsp; &nbsp;&nbsp; Search by Script Name"
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}
