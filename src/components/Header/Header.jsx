import React from "react";
import "./Header.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const { getUserEmail } = useContext(AuthContext);
  const userEmail = getUserEmail();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/events":
        return "Events";
      case "/bookings":
        return "Bookings";
      default:
        return "Ventixe";
    }
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>{getTitle()}</h1>
          <span>Hello Orlando, Welcome back!</span>
        </div>
        <div className="header-right">
          <div className="header-search">
            <input type="text" placeholder="Search..." />
            <i className="fa-light fa-magnifying-glass"></i>
          </div>
          <div className="header-search-btn">
            <i className="fa-light fa-magnifying-glass"></i>
          </div>
          <div className="header-notifications">
            <i className="fa-light fa-bell"></i>
            <span className="notification-count"></span>
          </div>
          <div className="header-settings">
            <i className="fa-light fa-gear"></i>
          </div>
          <div className="header-user">
            <div className="user-avatar"></div>
            <div className="user-info">
              <span className="username">{userEmail}</span>
              <span className="user-role"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
