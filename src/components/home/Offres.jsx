import React from "react";
import Culture from "../../assets/images/pack-culture.png";
import BienEtre from "../../assets/images/pack-emotion.png";
import Decouverte from "../../assets/images/pack-decouverte.png";
import Gastronomie from "../../assets/images/pack-gastro.png";
import { Fade, Flip } from "react-awesome-reveal";
function Offres() {
  return (
    <div className="offres-speciales">
      <Fade direction="down" duration={800}>
        <div className="offre-trait"></div>
        <div className="offre-banner">
          <h1>NOS OFFRES SPÉCIALES</h1>
        </div>
        <div className="offre-trait"></div>
      </Fade>
      <div className="container">
        <div className="pack-card" id="all_packs">
          <div className="culture pack">
            <Flip direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>
                    PACK ÉMOTION <br />
                    CULTURE
                  </h1>
                </div>
                <img src={Culture} alt="Pack emotion culture" />
                <div className="pack-description">
                  <p>
                    Mieux connaître l’histoire d’une ville, d’un pays, permet de
                    mieux se connaître soi-même, et la visite de la Médina
                    accompagnée d’un guide officiel, vous fera découvrir
                    certains secrets de l’ancienne Mogador, si chère aux
                    principales cultures artistiques et religieuses. Son
                    classNameement au patrimoine mondial de l’UNESCO n’est pas
                    le fruit du hasard...
                    <br />
                    <span className="link_pack">
                      <a href="./">Plus d'infos</a>
                    </span>
                  </p>
                </div>
              </div>
            </Flip>
          </div>

          <div className="bien-etre pack">
            <Flip direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>
                    PACK ÉMOTION <br />
                    BIEN-ÊTRE
                  </h1>
                </div>
                <img src={BienEtre} alt="Pack emotion bien etre" />
                <div className="pack-description">
                  <p>
                    Laissez vous aller à gouter le plaisir du hammam, des
                    massages berbères, des soins du corps & visage dans une
                    ambiance aux senteurs de fleurs d’orangers, d’eau de rose et
                    d’huile d’argan…
                    <br />
                    <span className="link_pack">
                      <a href="./">Plus d'infos</a>
                    </span>
                  </p>
                </div>
              </div>
            </Flip>
          </div>
          <div className="decouverte pack">
            <Flip direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>PACK ÉMOTION DÉCOUVERTE</h1>
                </div>
                <img src={Decouverte} alt="Pack emotion decouverte" />
                <div className="pack-description">
                  <p>
                    Que ce soit au Golf, sur la plage ou dans la forêt, sur un
                    quad, un cheval, un dromadaire, une planche de surf ou de
                    kite surf, vous découvrirez de façon ludique et sportive
                    l’authenticité des paysages de notre si chère Essaouira…
                    <br />
                    <span className="link_pack">
                      <a href="./">Plus d'infos</a>
                    </span>
                  </p>
                </div>
              </div>
            </Flip>
          </div>
          <div className="gastronomie pack">
            <Flip direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>PACK ÉMOTION GASTRONOMIE</h1>
                </div>
                <img src={Gastronomie} alt="Pack emotion gastronomie" />
                <div className="pack-description">
                  <p>
                    Notre table élégante & raffinée vous attend pour des diners
                    romantiques où vous découvrirez les valeurs traditionnelles
                    de la cuisine Marocaine, et notre équipe en cuisine vous
                    guidera, si vous le souhaitez, pour la préparation d’un plat
                    que vous aurez choisi après une visite des marchés Souiris.
                    <br />
                    <span className="link_pack">
                      <a href="./">Plus d'infos</a>
                    </span>
                  </p>
                </div>
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offres;
