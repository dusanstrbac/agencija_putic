import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        
        {/* Logo */}
        <div className="logo">
          <img src="/logofirme.jpg" alt="Agencija Putić Logo" className="logo-img" />
          <span className="logo-text">Agencija Putić</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <a href="/">Početna</a>

          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-title">
              Usluge osiguranja
              <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}></span>
            </span>
            
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="/usluga/putno-zdravstveno-osiguranje">Putno zdravstveno osiguranje</a>
                <a href="/usluga/osiguranje-domacinstva">Osiguranje domaćinstva</a>
                <a href="/usluga/zivotno-osiguranje">Životno osiguranje</a>
                <a href="/usluga/kasko-osiguranje-i-pomoc-na-putu">Kasko osiguranje i pomoć na putu</a>
                <a href="/usluga/dobrovoljno-zdravstveno-osiguranje">Dobrovoljno zdravstveno osiguranje</a>
              </div>
            )}
          </div>

          <a href="contact">Kontakt</a>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/">Početna</a>

          <div className="mobile-dropdown">
            <span>Usluge osiguranja</span>
            <div className="mobile-submenu">
              <a href="/usluga/putno-zdravstveno-osiguranje">Putno zdravstveno osiguranje</a>
              <a href="/usluga/osiguranje-domacinstva">Osiguranje domaćinstva</a>
              <a href="/usluga/zivotno-osiguranje">Životno osiguranje</a>
              <a href="/usluga/kasko-osiguranje-i-pomoc-na-putu">Kasko osiguranje i pomoć na putu</a>
              <a href="/usluga/dobrovoljno-zdravstveno-osiguranje">Dobrovoljno zdravstveno osiguranje</a>
            </div>
          </div>

          <a href="contact">Kontakt</a>
        </div>
      )}
    </header>
  );
}

export default Header;