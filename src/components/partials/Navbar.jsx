import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/footerLogo.png";
import Booking from "../../assets/images/bookingcom.png";
import { HiHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
  ];
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setTimeout(() => {
      setMenuOpen(false);
    }, 5000);
  };

  return (
    <header>
      <nav id="menu" className={`${scrolled ? "sticky" : ""}`}>
        <label htmlFor="toggle">
          <span id="btn_menu" onClick={handleMenuToggle}>
            {menuOpen ? <IoCloseOutline /> : <FaBars />}
          </span>
        </label>
        <Link to="/" title="Riad Malaika" className="logo-resp">
          <img src={Logo} alt="Logo du Riad Malaïka" />
        </Link>
        <input type="checkbox" id="toggle" checked={menuOpen} readOnly />
        <ul className={`menu_resp ${menuOpen ? "menu_open" : ""}`}>
          <li className={`logo_img`}>
            <Link to="/" title="Riad Malaika">
              <img src={Logo} alt="Logo du Riad Malaïka" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              title="Riad Malaika"
              className={`${pathname === "/" ? "active-menu" : ""}`}
            >
              <HiHome size={20} />
            </Link>
          </li>
          <li>
            <Link
              to="/table"
              title="Riad Malaika"
              className={`${pathname === "/table" ? "active-menu" : ""}`}
            >
              {t("navbar.gastro")}
            </Link>
          </li>
          <li>
            <Link
              to="/chambres"
              title="Riad Malaika"
              className={`${pathname === "/chambres" ? "active-menu" : ""}`}
            >
              {t("navbar.hebergement")}
            </Link>
          </li>
          <li>
            <Link
              to="/loisirs"
              title="Riad Malaika"
              className={`${pathname === "/loisirs" ? "active-menu" : ""}`}
            >
              {t("navbar.exp")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              title="Riad Malaika"
              className={`${pathname === "/contact" ? "active-menu" : ""}`}
            >
              {t("navbar.contact")}
            </Link>
          </li>
          <li className="booking_img">
            <a
              href="https://www.booking.com/hotel/ma/malaika.fr.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Booking} alt="Lien Booking du Riad Malaïka" />
            </a>
          </li>
        </ul>
        <div className="language">
          {languages.map(({ code, name, country_code }) => (
            <div
              key={country_code}
              onClick={() => {
                i18n.changeLanguage(code);
              }}
            >
              <span className={`fi fi-${country_code}`}></span>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
