import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="copyright">
            <span>Copyright © 2025 Peterdraw</span>
          </div>
          <div className="footer-menu">
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="footer-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
}
export default Footer;
