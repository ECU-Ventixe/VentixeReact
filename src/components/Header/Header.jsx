import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Dashboard</h1>
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
              <span className="username">Orlando Laurentius</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
