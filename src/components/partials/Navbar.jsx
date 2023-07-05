import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Booking from "../../assets/images/bookingcom.png";
import { HiHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
function Navbar() {
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
        <label for="toggle">
          <span id="btn_menu">
            <FaBars />
          </span>
        </label>
        <input type="checkbox" id="toggle" />
        <ul className="menu_resp">
          <li className="logo_img">
            <a href="index">
              <img src={Logo} alt="Logo du Riad Malaïka" />
            </a>
          </li>
          <li>
            <a href="index" title="Riad Malaika">
              <HiHome size={20} />
            </a>
          </li>
          <li>
            <a className="" href="table" title="Riad Malaika">
              GASTRONOMIE
            </a>
          </li>
          <li>
            <a className="" href="chambres" title="Riad Malaika">
              HÉBERGEMENT
            </a>
          </li>
          <li>
            <a className="" href="loisirs" title="Riad Malaika">
              EXPÉRIENCES
            </a>
          </li>
          <li>
            <a className="" href="contact" title="Riad Malaika">
              CONTACT
            </a>
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
