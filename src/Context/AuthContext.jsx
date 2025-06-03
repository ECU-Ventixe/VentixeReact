import { createContext, useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const getUserId = () => {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded.sub;
  };
  const getUserEmail = () => {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded.email;
  };

  const isAuthenticated = !!token;
  const notAuthenticated = !isAuthenticated;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
        notAuthenticated,
        getUserId,
        getUserEmail,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
