import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Events from "./pages/events/events";
import Layout from "./Layout";
import SignIn from "./pages/Auth/SignIn/SignIn";
import Register from "./pages/Auth/Register/Register";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
