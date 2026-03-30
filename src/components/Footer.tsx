import "../styles/Footer.css";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <p className="footer-text">Pretplatite se na mreže i ostanite u toku</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mladen-jakovljevic-b62641129/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/people/Agencija-Puti%C4%87/61567014200971/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/agencija_putic" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Agencija Putić. Sva prava zadržana.</p>
        <nav className="footer-nav">
          <a href="/o-nama">O nama</a>
          <a href="/usluge-osiguranja">Usluge osiguranja</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;