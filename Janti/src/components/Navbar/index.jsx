import React from "react";
import logo from "/orjLogo.png";
import "./style.css";

function Navbar() {
  return (
    <div class="topnav">
      <div class="topnav-centered">
        <a href="#home" class="active">
          <img src={logo} href="#home" className="logo"  draggable="false" />
        </a>
      </div>
        <a href="#about" className="menu-item1">Hakkımızda</a>
        <a href="#services" className="menu-item2">Hizmetlerimiz</a>

        <a href="#galery" className="menu-item3">Galeri</a>
        <a href="#contact" className="menu-item4">İletişim</a>
    </div>
  );
}

export default Navbar;
