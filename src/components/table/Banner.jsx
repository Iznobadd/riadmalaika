import React from "react";
import CarteTable from "../../assets/images/carte-table.png";
import { Fade } from "react-awesome-reveal";
function Banner() {
  return (
    <>
      <div className="table-banner">
        <h2>Gastronomie</h2>
      </div>
      <div className="container">
        <div className="table_welcome">
          <div className="table_carte">
            <Fade direction="left" duration={1200}>
              <img src={CarteTable} alt="" />
            </Fade>
          </div>

          <div className="table_description">
            <Fade direction="top" duration={1500}>
              <p>
                <strong>
                  Le MALAÏKA Riad & Table d’Hôtes vous propose de découvrir les
                  véritables saveurs et parfums de la cuisine marocaine qui se
                  veut authentique et familiale, ainsi que la fusion de
                  plusieurs cultures culinaires internationales qui vous
                  surprendra de par sa présentation mise en scène dans votre
                  assiette.
                </strong>
              </p>
              <p>
                L’équipe du MALAÏKA Riad & Table d’Hôtes vous invite à découvrir
                la véritable cuisine traditionnelle marocaine, celle qui se
                transmet de mère en fille, mais également une cuisine Terre-Mer
                internationale & inventive, sous la houlette de sa cheffe Mina
                qui n’a de cesse de se renouveler. <br />
                Élégante et raffinée, La Table est dressée dans nos salons
                chaque soir pour un nombre limité de convives qui a l’occasion
                de découvrir des saveurs originales accompagnées de vins
                marocains sélectionnés, où, vaisselle fine, argenterie, fleurs
                et chandeliers se côtoient pour leur plus grand plaisir
                olfactif, gustatif et visuel.
              </p>
              <p>
                <span>
                  Si les Arts Culinaires sont particulièrement développés dans
                  la tradition marocaine on ne peut en découvrir que bien peu
                  d’aspects dans les restaurants marocains touristiques.
                </span>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
