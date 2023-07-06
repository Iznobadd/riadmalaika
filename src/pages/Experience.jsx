import React from "react";
import { Slide } from "react-awesome-reveal";
import Equitation from "../assets/images/equitation.gif";
import Dromadaire from "../assets/images/dromadaire.gif";
import KiteSurf from "../assets/images/kitesurf.gif";
import Quad from "../assets/images/quad.gif";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Experience() {
  useEffect(() => {
    document.title = "Expériences | Riad Malaika";
  }, []);
  return (
    <>
      <div className="loisirs-banner">
        <h2>Expériences</h2>
      </div>
      <div className="container">
        <p className="intro-experiences">
          <b>
            Le MALAÎKA Riad & Table d’Hôtes propose un large choix d’activités
            de loisirs et d’activités pour découvrir la ville et la région
            pendant votre séjour. N’hésitez pas de nous contacter pour organiser
            vos loisirs.
          </b>
        </p>
        <div className="res-riad">
          <div className="loisirs-imgs">
            <Slide direction="left" duration={1500}>
              <img
                src={Equitation}
                alt="Loisir équitation Riad Malaïka"
                className="relative-img"
              />
            </Slide>
          </div>

          <div className="loisirs-description">
            <Slide direction="right" duration={1500}>
              <h1>Equitation : randonnées à cheval autour d’Essaouira</h1>
              <p>
                Monter à cheval sur la plage et galoper à perte de vue sur le
                sable restent un rêve souvent impossible et pourtant, nous
                pouvons vous proposer des excursions au départ de la grande
                plage via le Cap Sim, d'une ou plusieurs heures, et même avec
                petit-déjeuner ou un pique-nique inclus.
              </p>
              <p>
                Pour les plus jeunes, les moins jeunes et pour tous les niveaux,
                les chevaux Arabes, seront à votre disposition pour votre plus
                grand plaisir.
              </p>
              <p>
                Un mode très doux pour allier aventure, nature, sport et
                découverte d’une région encore assez sauvage.
              </p>
              <p className="link_contact">
                <Link to="/contact#contact">En savoir plus...</Link>
              </p>
            </Slide>
          </div>
        </div>

        <div className="res-riad reverse">
          <div className="loisirs-description">
            <Slide direction="left" duration={1500}>
              <h1>Randonnée à dos de dromadaire à Essaouira</h1>
              <p>
                Les balades à dos de dromadaire ont lieu à la plage parmi les
                dunes et à travers la forêt environnante, accompagnées par des
                professionnels marocains qui vous guideront en toute sécurité.
              </p>
              <p>
                D’une demi-heure à une journée entière, vous pourrez vivre une
                expérience aussi amusante pour les adultes que pour les enfants,
                tout en découvrant, souvent avec humour, une terre encore
                vierge.
              </p>
              <p className="link_contact">
                <Link to="/contact#contact">En savoir plus...</Link>
              </p>
            </Slide>
          </div>

          <div className="loisirs-imgs">
            <Slide direction="right" duration={1500}>
              <img
                src={Dromadaire}
                alt="Experience dromadaires Riad Malaïka"
                className="relative-img"
              />
            </Slide>
          </div>
        </div>

        <div className="res-riad">
          <div className="loisirs-imgs">
            <Slide direction="left" duration={1500}>
              <img
                src={KiteSurf}
                alt="Experience KiteSurf Riad Malaïka"
                className="relative-img"
              />
            </Slide>
          </div>

          <div className="loisirs-description">
            <Slide direction="right" duration={1500}>
              <h1>
                Essaouira: Un paradis pour le surf, le windsurf et le kitesurf.
              </h1>
              <p>
                En fonction des vents dominants, vous pourrez pratiquer votre
                sport favori si vous êtes un «pro», mais sinon, pourquoi ne pas
                tenter une initiation accompagné d’un moniteur agréé, profiter
                de quelques cours, et repartir en meilleure forme mentale &
                physique.
                <br />
                Dédié aux vents et aux passionnés de sport de glisse, le spot de
                surf & kitesurf est idéalement situé sur la plage, face à l'île
                de Mogador, où vous pourrez tout autant pratiquer qu'admirer
                leurs tricks; un réel plaisir en soi.
              </p>
              <p className="link_contact">
                <Link to="/contact#contact">En savoir plus...</Link>
              </p>
            </Slide>
          </div>
        </div>

        <div className="res-riad reverse">
          <div className="loisirs-description">
            <Slide direction="left" duration={1500}>
              <h1>Randonnées et excursions en quad avec le Riad Malaika</h1>
              <p>
                Découvrir une large bande de l’arrière-pays en quad est une
                véritable aventure qui vous laissera un souvenir fantastique et
                des émotions inoubliables.
              </p>
              <p>
                Entre mer et sable, dunes et forêt, les pistes, en fonction de
                la marée, offrent des panoramas variés, tous totalement sauvages
                et rafraîchissants, à la différence de ce que vous avez
                l’habitude de vivre.
              </p>
              <p>
                D’une demi-heure à une journée entière, accompagné d’un guide
                spécialisé, vous pourrez soit seul, soit à deux, entre amis ou
                en famille, combiner nature et technique en toute sécurité.
              </p>
              <p className="link_contact">
                <Link to="/contact#contact">En savoir plus...</Link>
              </p>
            </Slide>
          </div>

          <div className="loisirs-imgs">
            <Slide direction="right" duration={1500}>
              <img
                src={Quad}
                alt="Experience Quad Riad Malaïka"
                className="relative-img"
              />
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
