import React, { useState } from "react";
import "./Register.css";
import VentixLogo from "../../../assets/Symbol.svg";
import { NavLink } from "react-router-dom";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    const newUser = {
      email: registerEmail,
      password: registerPassword,
    };
    console.log(newUser);
    const res = await fetch("https://localhost:7080/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (res.ok) {
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterConfirmPassword("");
    } else {
      const error = await res.json();
      console.error("Error registering user" + error.message);
    }
  };
  return (
    <div className="register-overlay">
      <div className="register-modal-card">
        <img src={VentixLogo} alt="Ventix Logo" className="register-logo" />
        <div className="register-modal">
          <div className="register-modal-header">
            <h2 className="register-modal-title">Register</h2>
          </div>
          <div className="register-modal-content">
            <form className="register-form" onSubmit={handleRegister}>
              <div className="register-form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  id="username"
                  required
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                />
                {error && (
                  <div className="error-message">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    {error}
                  </div>
                )}
              </div>
              <button type="submit" className="register-btn">
                Create Account
              </button>
            </form>
            <div className="register-footer">
              <p>
                Already have an account?{" "}
                <NavLink to="/signin" className="register-link">
                  Sign In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
