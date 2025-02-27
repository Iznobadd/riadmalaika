import React from "react";
import FooterBg from "../../assets/images/footer-bg.png";
import LabelGuru from "../../assets/images/restaurantGuru.png";
import TripAdvisor from "../../assets/images/tripadvisor.png";
import TripAdvisor2 from "../../assets/images/tripadvisor2.png";
// import Booking from "../../assets/images/booking.jpg";
import Best from "../../assets/images/best.png";
import Eviivo from "../../assets/images/eviivo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import scrollImg from "../../assets/images/top-arrow.png";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FooterLogo from "../../assets/images/footerLogo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function Footer() {
  const { t } = useTranslation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    const scrollToTopLoop = () => {
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - 20);
        requestAnimationFrame(scrollToTopLoop);
      }
    };
    requestAnimationFrame(scrollToTopLoop);
  };
  return (
    <>
      <footer>
        <img src={FooterLogo} alt="" className="logo-footer" />
        <a
          id="b-circle27"
          target="_blank"
          href="https://restaurantguru.com/Riad-Malaika-Essaouira"
          className="trip-footer"
        >
          {" "}
          <span class="b-circledLeaves27__name ">Riad Malaika</span>
        </a>
        {/* <img src={Booking} alt="" className="booking-footer" /> */}
        <div className="reseaux-hr">
          <div className="reseaux">
            <div className="facebook">
              <a
                href="https://www.facebook.com/riadmalaika/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="fa" size={60} />
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/riad.malaika/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="fa" size={60} />
              </a>
            </div>
            <div className="tripadvisor">
              <a
                href="https://www.tripadvisor.fr/Hotel_Review-g298349-d1582606-Reviews-Riad_Malaika-Essaouira_Marrakech_Safi.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TripAdvisor} alt="Trip Advisor" />
              </a>
            </div>
            <div className="tripadvisor">
              <a
                href="https://www.tripadvisor.fr/Restaurant_Review-g298349-d7359331-Reviews-Malaika_Riad_Table_D_Hotes-Essaouira_Marrakech_Safi.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TripAdvisor2} alt="Trip Advisor" />
              </a>
            </div>
            <div className="best">
              <a
                href="https://www.bestrestaurantsmaroc.com/fr/restaurant-maroc/riad-malaika-essaouira-maroc.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Best} alt="Best Restaurants MAROC" />
              </a>
            </div>
            <div className="booking">
              <a
                href="https://via.eviivo.com/RiadMALAIKA44000"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  Réserver
                  <br /> directement
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="footer-content">
            <div className="footer-riad footer-section">
              <h3>RIAD MALAÏKA</h3>
              <p>
                {t("footer.riad_p1")}
                <br />
                {t("footer.riad_p2")}
              </p>
            </div>{" "}
            <div className="footer-services footer-section">
              <h3>SERVICES</h3>
              <p>
                <Link to="/">{t("navbar.accueil")}</Link>
                <br />
                <Link to="/table">{t("navbar.gastro")}</Link>
                <br />
                <Link to="/chambres">{t("navbar.hebergement")}</Link>
                <br />
                <Link to="/loisirs">{t("navbar.exp")}</Link>
                <br />
                <Link to="/contact">{t("navbar.contact")}</Link>
                <br />
              </p>
            </div>
            <div className="footer-contact footer-section">
              <h3>CONTACT</h3>
              <p>
                <FaMapMarkerAlt color="#f1bb6e" size={20} />{" "}
                <span>17 Rue Zayan, Essaouira, Maroc</span>
              </p>
              <p>
                <IoMail color="#f1bb6e" size={20} />{" "}
                <span>malaikadream@gmail.com</span>
              </p>
              <p>
                <FaPhone color="#f1bb6e" size={20} />{" "}
                <span>
                  <b>Jannick MURA / Hervé FLORET</b>
                  <br />
                  +212 600 055 696
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="siret">
          Siret 45554712289631 |{" "}
          <Link to="/mentions-legales">{t("footer.mentions")}</Link>
        </p>
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Copyright |{" "}
            <Link to="mailto:contact@nomaado.com">NOMAADŌ</Link>{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
      {showScrollButton && (
        <div id="scrollUp" onClick={scrollToTop}>
          <img src={scrollImg} />
        </div>
      )}
    </>
  );
}

export default Footer;
