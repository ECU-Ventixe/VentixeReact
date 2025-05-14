import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Events from "./pages/events/events";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="wrapper d-flex">
            <SideBar />
            <div className="d-flex-column">
              <div className="header-desktop header-tablet">
                <Header />
              </div>
              <div className="header-mobile">
                <NavBar />
              </div>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/events" element={<Events />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
