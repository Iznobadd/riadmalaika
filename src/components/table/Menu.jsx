import React from "react";
import Signature from "../../assets/images/carte_signature.png";
import Entree from "../../assets/images/carte_entree.jpg";
import Plat from "../../assets/images/carte_plat.jpg";
import Dessert from "../../assets/images/carte_dessert.jpg";
import { Flip } from "react-awesome-reveal";
function Menu() {
  return (
    <div className="carte">
      <div className="container">
        <div className="all_cartes">
          <div>
            <Flip direction="vertical" duration={1500}>
              <img src={Signature} alt="Carte Signature Riad Malaïka" />
            </Flip>
          </div>
          <div>
            <Flip direction="vertical" duration={1500} delay={800}>
              <img src={Entree} alt="Carte des entrées Riad Malaïka" />
            </Flip>
          </div>
          <div>
            <Flip direction="vertical" duration={1500} delay={1600}>
              <img src={Plat} alt="Carte des plats Riad Malaïka" />
            </Flip>
          </div>
          <div>
            <Flip direction="vertical" duration={1500} delay={2400}>
              <img src={Dessert} alt="Carte des desserts Riad Malaïka" />
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
