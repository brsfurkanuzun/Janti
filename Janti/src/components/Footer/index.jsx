import './style.css'
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo">
                    <img src="/orjLogo.png" alt="Janti Organizasyon Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Anasayfa</a></li>
                        <li><a href="/hizmetler">Hizmetler</a></li>
                        <li><a href="/iletisim">İletişim</a></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <h1>takip edin</h1>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                    <a href="https://www.instagram.com/jantiorganizasyon/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">PINTEREST</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">X</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer