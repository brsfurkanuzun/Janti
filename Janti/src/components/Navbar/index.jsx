import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/index";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <button className="menu-button" onClick={() => setMenuOpen(true)}>MENU</button>
      <Link to="/" className="logo">
        <img src="/orjLogo.png" alt="Logo" draggable="false" />
      </Link>
      <Menu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
