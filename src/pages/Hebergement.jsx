import React from "react";
import { useEffect } from "react";
import ListChambres from "../components/chambres/ListChambres";
import { Link } from "react-router-dom";
function Hebergement() {
  useEffect(() => {
    document.title = "Hébergement | Riad Malaika";
  }, []);
  return (
    <div>
      <div className="chambres-banner">
        <h2>Hébergement</h2>
      </div>
      <div className="container">
        <div className="intro-chambres text-center">
          <h2>Liste de nos petites attentions en chambre</h2>
          <div class="flex_attentions">
            <p>Bouteille de champagne </p>
            <span className="price_attentions">750 dhs</span>
          </div>

          <div className="separator-chambres"></div>
          <div class="flex_attentions">
            <p>Assortiment de Patisseries orientales </p>
            <span className="price_attentions">100 dhs</span>
          </div>
          <div className="separator-chambres"></div>
          <div class="flex_attentions">
            <p>Corbeille de fruits </p>
            <span className="price_attentions">65 dhs</span>
          </div>
          <div className="separator-chambres"></div>
          <div class="flex_attentions">
            <p>Pétales de roses sur le lit </p>
            <span className="price_attentions">60 dhs</span>
          </div>
          <div className="separator-chambres"></div>
          <div class="flex_attentions">
            <p>Flacon Huile massante à l’huile d’argan </p>
            <span className="price_attentions">250 dhs</span>
          </div>
          <div className="separator-chambres"></div>
          <div class="flex_attentions">
            <p>Bouquet de 20 roses </p>
            <span className="price_attentions">290 dhs</span>
          </div>
          <div className="separator-chambres"></div>
          <div class="flex_attentions">
            <p>
              Formule romance : Bouteille de champagne, Bouquet de 20 roses et
              Pétales de roses
            </p>
            <span className="price_attentions">990 dhs</span>
          </div>

          <div className="contact_mail">
            <Link to="/contact">
              <p>Nous contacter</p>
            </Link>
          </div>
        </div>
      </div>

      <ListChambres />
      {/* <div className="reservation-chambres" id="reservation">
        <div className="container">
          <Zoom duration={1500}>
            <h1>Réserver un hébergement</h1>
          </Zoom>
          <p>
            <strong>Les champs annotés d'un astérisque * sont requis :</strong>
          </p>
          <ChambresForm />
        </div>
      </div> */}
    </div>
  );
}

export default Hebergement;
