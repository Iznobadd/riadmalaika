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
