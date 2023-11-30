import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Booking from "../../assets/images/bookingcom.png";
import { HiHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

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
  const [scrolled, setScrolled] = React.useState(false);
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

  return (
    <header>
      <nav id="menu" className={`${scrolled ? "sticky" : ""}`}>
        <label htmlFor="toggle">
          <span id="btn_menu">
            <FaBars />
          </span>
        </label>
        <input type="checkbox" id="toggle" />
        <ul className="menu_resp">
          <li className="logo_img">
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
          <li className="aaa">
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
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
