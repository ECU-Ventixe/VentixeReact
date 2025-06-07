import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Ventixe</h1>
        <p>Your one-stop solution for event management and ticketing.</p>
        <NavLink to="/register" className="hero-link">
          <button className="hero-btn">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Hero;
