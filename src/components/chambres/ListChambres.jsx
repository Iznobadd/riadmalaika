import React from "react";
import Standard1 from "../../assets/images/standard1.jpg";
import Standard2 from "../../assets/images/standard2.jpg";
import Standard3 from "../../assets/images/standard3.jpg";
import Confort1 from "../../assets/images/confort1.jpg";
import Confort2 from "../../assets/images/confort2.jpg";
import Confort3 from "../../assets/images/confort3.jpg";
import Superieur1 from "../../assets/images/superieur1.jpg";
import Superieur2 from "../../assets/images/superieur2.jpg";
import Superieur3 from "../../assets/images/superieur3.jpg";
import Junior1 from "../../assets/images/junior1.jpg";
import Junior2 from "../../assets/images/junior2.jpg";
import Junior3 from "../../assets/images/junior3.jpg";
import Twin1 from "../../assets/images/twin-standard1.jpg";
import Twin2 from "../../assets/images/twin-standard2.jpg";
import Twin3 from "../../assets/images/twin-standard3.jpg";
import TwinSup1 from "../../assets/images/twin-sup1.jpg";
import TwinSup2 from "../../assets/images/twin-sup2.jpg";
import TwinSup3 from "../../assets/images/twin-sup3.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Slide } from "react-awesome-reveal";
function ListChambres() {
  return (
    <div className="container">
      <div className="l-chambres">
        <section id="chambres1-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Standard1}
                  data-splide-lazy={Standard1}
                  alt="chambres standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Standard2}
                  data-splide-lazy={Standard2}
                  alt="chambres standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Standard3}
                  data-splide-lazy={Standard3}
                  alt="chambres standard au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>

        <div className="description-chambres">
          <div>
            <h2>Chambre Double Standard</h2>
            <p>
              Nos chambres « Standard », double ou twin ont une vue sur la
              médina, leur décor typiquement marocain, vous plongera aussitôt
              dans une atmosphère sobre et dépaysante...
            </p>
            <span>
              <a href="./" id="modal-chambre1-btn">
                Plus d'infos
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="l-chambres reverse-chambres">
        <div className="description-chambres desc-white">
          <h2>Chambres Double Confort</h2>
          <p>
            Au 1er ou au 2eme étage du riad, nos chambres Confort sont équipées
            d’un lit double queen-size et d’un décor lumineux. Au calme, elles
            donnent sur le patio et vous invitent à la détente...
          </p>
          <span>
            <a href="./" id="modal-chambre2-btn">
              Plus d'infos
            </a>
          </span>
        </div>

        <section id="chambres2-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Confort1}
                  data-splide-lazy={Confort1}
                  alt="chambres confort au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Confort2}
                  data-splide-lazy={Confort2}
                  alt="chambres confort au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Confort3}
                  data-splide-lazy={Confort3}
                  alt="chambres confort au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
      </div>

      <div className="l-chambres">
        <section id="chambres3-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Superieur1}
                  data-splide-lazy={Superieur1}
                  alt="chambres supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Superieur2}
                  data-splide-lazy={Superieur2}
                  alt="chambres supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Superieur3}
                  data-splide-lazy={Superieur3}
                  alt="chambres supérieurs au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
        <div className="description-chambres">
          <h2>Chambres Double supérieures</h2>
          <p>
            Entourés d’objets chinés dans les souks de la région vous y
            trouverez un confort propice à la rêverie. L’espace sommeil équipé
            d’un lit double queen-size confortable et le coin salon vous offrent
            un espace agréable pour décompresser...
          </p>
          <span>
            <a href="./" id="modal-chambre3-btn">
              Plus d'infos
            </a>
          </span>
        </div>
      </div>

      <div className="l-chambres reverse-chambres">
        <div className="description-chambres desc-white">
          <h2>Junior Suite</h2>
          <p>
            Passer du temps isolé du monde, prendre son petit-déjeuner, boire un
            verre ou lire au soleil est un atout de cette Suite sur la
            terrasse...
          </p>
          <span>
            <a href="./" id="modal-chambre4-btn">
              Plus d'infos
            </a>
          </span>
        </div>

        <section id="chambres4-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Junior1}
                  data-splide-lazy={Junior1}
                  alt="chambres Junior au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Junior2}
                  data-splide-lazy={Junior2}
                  alt="chambres Junior au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Junior3}
                  data-splide-lazy={Junior3}
                  alt="chambres Junior au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
      </div>

      <div className="l-chambres">
        <section id="chambres5-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Twin1}
                  data-splide-lazy={Twin1}
                  alt="chambres Twin standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Twin2}
                  data-splide-lazy={Twin2}
                  alt="chambres Twin standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Twin3}
                  data-splide-lazy={Twin3}
                  alt="chambres Twin standard au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
        <div className="description-chambres">
          <h2>Chambre Twin Standard</h2>
          <p>
            Comme toutes les chambres du Riad Malaïka, la chambre Twin Standard
            bénéficie d’une décoration sobre où les meubles et objets venus du
            Maroc ont su trouver leur place. Lumineuse et agréable cette chambre
            au charme unique possède sa salle de bain privative...
          </p>
          <span>
            <a href="./" id="modal-chambre5-btn">
              Plus d'infos
            </a>
          </span>
        </div>
      </div>

      <div className="l-chambres reverse-chambres">
        <div className="description-chambres desc-white">
          <h2>Chambre Twin Supérieure</h2>
          <p>
            Une véritable invitation au voyage grâce au décor typiquement
            marocain de cette chambre équipée de deux lits séparées
            confortables, d’une cheminée, d’une salle d’eau traditionnelle et
            d’objets locaux plein de charme...
          </p>
          <span>
            <a href="./" id="modal-chambre6-btn">
              Plus d'infos
            </a>
          </span>
        </div>

        <section id="chambres6-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={TwinSup1}
                  data-splide-lazy={TwinSup1}
                  alt="chambres Twin supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={TwinSup2}
                  data-splide-lazy={TwinSup2}
                  alt="chambres Twin supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={TwinSup3}
                  data-splide-lazy={TwinSup3}
                  alt="chambres Twin supérieurs au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
      </div>
    </div>
  );
}

export default ListChambres;
