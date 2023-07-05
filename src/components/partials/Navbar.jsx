import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Booking from "../../assets/images/bookingcom.png";
import { HiHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
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
              GASTRONOMIE
            </Link>
          </li>
          <li>
            <Link
              to="/chambres"
              title="Riad Malaika"
              className={`${pathname === "/chambres" ? "active-menu" : ""}`}
            >
              HÉBERGEMENT
            </Link>
          </li>
          <li>
            <Link
              to="/loisirs"
              title="Riad Malaika"
              className={`${pathname === "/loisirs" ? "active-menu" : ""}`}
            >
              EXPÉRIENCES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              title="Riad Malaika"
              className={`${pathname === "/contact" ? "active-menu" : ""}`}
            >
              CONTACT
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
      </nav>
    </header>
  );
}

export default Navbar;
