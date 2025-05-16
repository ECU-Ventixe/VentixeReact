import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
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
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Layout;
