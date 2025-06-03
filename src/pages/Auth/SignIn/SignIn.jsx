import React from "react";
import "./SignIn.css";
import VentixLogo from "../../../assets/Symbol.svg";
import { useState, useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext.jsx";
import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    const res = await fetch("https://ventixe-account-ecu-c5frc3h3c8hcfmav.swedencentral-01.azurewebsites.net/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      const data = await res.json();
      login(data.token);
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      const error = await res.json();
      console.error("Error signing in user" + error.message);
    }
  };
  return (
    <div className="signin-overlay">
      <div className="signin-modal-card">
        <img src={VentixLogo} alt="Ventix Logo" className="signin-logo" />
        <div className="signin-modal">
          <div className="signin-modal-header">
            <h2 className="signin-modal-title">Sign In</h2>
          </div>
          <div className="signin-modal-content">
            <form className="signin-form" onSubmit={handleSignIn}>
              <div className="signin-form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  id="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signin-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="signin-btn">
                Sign In
              </button>
            </form>
            <div className="signin-footer">
              <p>
                Don't have an account?{" "}
                <NavLink to="/register" className="signin-link">
                  Create an account
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
