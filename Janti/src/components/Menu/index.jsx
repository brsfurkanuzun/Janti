import { Link } from "react-router-dom";
import "./style.css";

const Menu = ({ isOpen, closeMenu }) => {
    return (
        <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
            <button className="close-button" onClick={closeMenu}>X</button>
            <nav className="menu-nav">
                <Link to="/about" onClick={closeMenu} className="menu-item">HAKKIMIZDA</Link>
                <Link to="/services" onClick={closeMenu}>HİZMETLERİMİZ</Link>
                <Link to="/gallery" onClick={closeMenu}>GALERİ</Link>
                <Link to="/contact" onClick={closeMenu}>BLOG</Link>
                <Link to="/contact" onClick={closeMenu}>İLETİŞİM</Link>
            </nav>
            <div className="nav-social-media">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                <a href="https://www.instagram.com/jantiorganizasyon/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">PINTEREST</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">X</a>
            </div>
        </div>
    );
};

export default Menu;
