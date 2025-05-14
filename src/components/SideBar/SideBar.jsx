import React from "react";
import "./SideBar.css";
import VentixLogo from "../../assets/Symbol.svg";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <img src={VentixLogo} alt="Ventix Logo" />
          <h2>Ventixe</h2>
        </div>
        <ul className="sidebar-menu">
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
    </div>
  );
}
export default SideBar;
