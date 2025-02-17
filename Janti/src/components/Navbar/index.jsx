import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu/index";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="navbar">
      <div className={`top-item top-item-one ${isHome ? "navbar-header-white" : "navbar-header-black"}`} >
        <a onClick={() => setMenuOpen(true)}>
          MENU
        </a>
      </div>
      <div className="top-item top-item-two">
        <Link to="/" className="logo">
          <img src="/orjLogo.png" alt="Logo" draggable="false" />
        </Link>
      </div>
      <div className={`top-item top-item-three ${isHome ? "navbar-header-white" : "navbar-header-black"}`}>
        <Link to="/contact">İLETİŞİM</Link>
      </div>

      <Menu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
