import React from "react";
import "./SideBar.css";
import VentixLogo from "../../assets/Symbol.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

function SideBar() {
  const { isAuthenticated, logout, login } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <img src={VentixLogo} alt="Ventix Logo" />
          <NavLink to="/">
            <h2>Ventixe</h2>
          </NavLink>
        </div>
        {isAuthenticated && (
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/dashboard" className="nav-link">
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
            <li>
              <NavLink to="/bookings" className="nav-link">
                <i className="fa-light fa-calendar-check"></i>
                <span>Bookings</span>
              </NavLink>
            </li>
          </ul>
        )}
        {!isAuthenticated && (
          <ul className="sidebar-menu">
            <li className="nav-link not-authenticated">
              <i className="fa-light fa-grid-2"></i>
              <span>Dashboard</span>
              <i className="fa-regular fa-lock"></i>
              <span className="lock-message">Log in to access</span>
            </li>
            <li className="nav-link not-authenticated">
              <i className="fa-light fa-square-check"></i>
              <span>Events</span>
              <i className="fa-regular fa-lock"></i>
              <span className="lock-message">Log in to access</span>
            </li>
            <li className="nav-link not-authenticated">
              <i className="fa-light fa-calendar-check"></i>
              <span>Bookings</span>
              <i className="fa-regular fa-lock"></i>
              <span className="lock-message">Log in to access</span>
            </li>
          </ul>
        )}
        <div className="signout">
          {isAuthenticated && (
            <button className="signout-btn" onClick={logout}>
              <i className="fa-light fa-right-from-bracket"></i>
              <span>Sign Out</span>
            </button>
          )}
          {!isAuthenticated && (
            <NavLink to="/signin" className="nav-link">
              <i className="fa-light fa-right-from-bracket"></i>
              <span>Sign In</span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
