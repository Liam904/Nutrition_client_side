import React from "react";
import "../css/style.css"

const Header = ({ input, handleChange, results }) => (
  <div id="header">
    <h1 id="h1">FitNutritionX</h1>
    <input
      id="search"
      type="search"
      className="search"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Search for food..."
    />
  </div>
);

export default Header;
