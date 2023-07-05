import React from "react";
import Riad2 from "../../assets/images/riad2.jpg";
import Riad1 from "../../assets/images/riad1.jpg";
import { Fade } from "react-awesome-reveal";
function Riad() {
  return (
    <div className="res-riad">
      <div className="riad-imgs">
        <Fade direction="left" duration={1200}>
          <img
            src={Riad2}
            alt="Réception Riad Malaïka"
            className="relative-img"
          />
        </Fade>
        <Fade direction="left" duration={1500}>
          <img
            src={Riad1}
            alt="Terrasse Riad Malaïka"
            className="absolute-img"
          />
        </Fade>
      </div>

      <div className="riad-description">
        <Fade direction="top" duration={1500}>
          <h1>Malaïka Le Riad</h1>

          <p>
            Le RIAD MALAÏKA Essaouira offre une atmosphère contemporaine tout en
            conservant le charme d’une ancienne maison marocaine et accueille
            une clientèle internationale désireuse de vivre une expérience
            orientale plus intime.
          </p>
          <p>
            Alliant confort et convivialité, cette maison d’hôtes au luxe
            discret bâtie au 18e siècle, et entièrement restauré en 2022 vous
            propose un hébergement de qualité au centre de l’ancienne Mogador.
          </p>

          <a href="chambres.php">RÉSERVER UNE CHAMBRE</a>
        </Fade>
      </div>
    </div>
  );
}

export default Riad;
