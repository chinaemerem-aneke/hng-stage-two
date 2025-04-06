import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <div className="theme-toggle-container">
      <span className="theme-label">☀️</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={onToggle}
        />
        <span className="slider round"></span>
      </label>
      <span className="theme-label">🌙</span>
    </div>
  );
};

export default ThemeToggle;
