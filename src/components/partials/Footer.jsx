import React from "react";
import FooterBg from "../../assets/images/footer-bg.png";
import LabelTrip from "../../assets/images/labeltripadvisor.png";
import TripAdvisor from "../../assets/images/tripadvisor.png";
import TripAdvisor2 from "../../assets/images/tripadvisor2.png";
import Booking from "../../assets/images/booking.png";
import BookingCom from "../../assets/images/bookingcom.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <img src={FooterBg} alt="" className="logo-footer" />
      <img src={LabelTrip} alt="" className="trip-footer" />
      <img src={Booking} alt="" className="booking-footer" />
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
              href="https://www.tripadvisor.fr/Restaurant_Review-g298349-d7359331-Reviews-Malaika_Riad_Table_D_Hotes-Essaouira_Marrakech_Safi.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TripAdvisor} alt="Trip Advisor" />
            </a>
          </div>
          <div className="tripadvisor">
            <a
              href="https://www.tripadvisor.fr/Hotel_Review-g298349-d1582606-Reviews-Riad_Malaika-Essaouira_Marrakech_Safi.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TripAdvisor2} alt="Trip Advisor" />
            </a>
          </div>
          <div className="booking">
            <a
              href="https://www.booking.com/hotel/ma/malaika.fr.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={BookingCom} alt="Booking" />
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="footer-content">
          <div className="footer-riad footer-section">
            <h3>RIAD MALAÏKA</h3>
            <p>
              Le Riad Malaïka, “Les Anges” en arabe, est animé par un couple de
              Français d'Aix en Provence, entouré d’un personnel Marocain
              attentif , ils offrent à leurs hôtes un service hôtelier efficace
              et discret.
              <br />
              Passionnés et envoûtés par la magie naturelle d’Essaouira, dont
              ils connaissent les charmes secrets, Sylvie, Halim et l’équipe du
              riad Malaïka sauront vous faire partager leur “Monde à Part”.
            </p>
          </div>
          <div className="footer-services footer-section">
            <h3>SERVICES</h3>
            <p>
              <Link to="/">Accueil</Link>
              <br />
              <Link to="/table">Gastronomie</Link>
              <br />
              <Link to="/chambres">Hébergements</Link>
              <br />
              <Link to="/loisirs">Expériences</Link>
              <br />
              <Link to="/contact">Contact</Link>
              <br />
            </p>
          </div>
          <div className="footer-contact footer-section">
            <h3>CONTACT</h3>
            <p>
              Riad Malaïka <br />
              Derb Zayan n°17 <br />
              44100 ESSAOUIRA <br />
              ROYAUME DU MAROC
            </p>
            <p>
              +212 (0)524 784 908 Malaïka Fixe <br />
              +212 (0)600 055 696 Malaïka WhatsApp <br />
              +212 (0)608 900 000 Sylvie WhatsApp
            </p>
          </div>
        </div>
      </div>
      <p className="siret">
        Siret 45554712289631 |{" "}
        <Link to="/mentions-legales">Mentions Légales</Link>
      </p>
      <div className="copyright">
        <p>
          © 2022 Copyright | <strong>VB Digital Nomad</strong> tous droits
          réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
