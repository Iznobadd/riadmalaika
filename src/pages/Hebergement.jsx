import React from "react";
import { useEffect } from "react";
import ListChambres from "../components/chambres/ListChambres";
import ChambresForm from "../components/chambres/ChambresForm";
import { Zoom } from "react-awesome-reveal";
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
          <p>Bouteille de champagne</p>
          <div className="separator-chambres"></div>
          <p>Assortiments de Patisserie orientales</p>
          <div className="separator-chambres"></div>
          <p>Corbeille de fruits</p>
          <div className="separator-chambres"></div>
          <p>Pétales de roses sur le lit</p>
          <div className="separator-chambres"></div>
          <p>Flacon Huile massante à l’huile d’argan</p>
          <div className="separator-chambres"></div>
          <p>Bouquet de 20 roses</p>
          <div className="separator-chambres"></div>
          <p>
            Formule romance : Bouteille de champagne, Bouquet de 20 roses et
            Pétales de roses
          </p>
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
