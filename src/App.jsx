import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Events from "./pages/events/events";
import Layout from "./Layout";
import SignIn from "./pages/Auth/SignIn/SignIn";
import Register from "./pages/Auth/Register/Register";
import Bookings from "./pages/Bookings/Bookings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
