import React from "react";
import "./NavBar.css";
import VentixLogo from "../../assets/Symbol.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <img src={VentixLogo} alt="Ventix Logo" className="ventix-logo" />
        <h2 className="nav-bar-title">Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="nav-bar-toggle">
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
      <div>
        {isOpen && (
          <div className="nav-bar-dropdown">
            <ul className="nav-bar-list">
              <li>
                <NavLink to="/" className="nav-link">
                  <i className="fa-light fa-grid-2"></i>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="nav-link">
                  <i className="fa-light fa-square-check"></i>
                  <span>Events</span>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default HeaderMobile;
