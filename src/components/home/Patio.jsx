import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Patio1 from "../../assets/images/patio1.jpg";
import Patio2 from "../../assets/images/patio2.jpg";
import Patio3 from "../../assets/images/patio3.jpg";
import Patio4 from "../../assets/images/patio4.jpg";
import Patio5 from "../../assets/images/patio5.jpg";
import Patio6 from "../../assets/images/patio6.jpg";
import { Zoom } from "react-awesome-reveal";
function Patio() {
  return (
    <div className="patio">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>Le Patio</h1>
        </Zoom>
        <section id="image-patio">
          <Splide
            options={{
              type: "fade",
              rewind: true,
              autoplay: true,
              cover: true,
              height: "70vh",
              width: "60vw",
              pauseOnHover: false,
              pagination: false,
              arrows: false,
              speed: 1500,
              drag: false,
              lazyLoad: "nearby",
              breakpoints: {
                500: {
                  height: "200px",
                },
              },
            }}
          >
            <SplideSlide>
              <img src={Patio1} alt="" data-splide-lazy={Patio1} />
            </SplideSlide>
            <SplideSlide>
              <img src={Patio2} alt="" data-splide-lazy={Patio2} />
            </SplideSlide>
            <SplideSlide>
              <img src={Patio3} alt="" data-splide-lazy={Patio3} />
            </SplideSlide>
            <SplideSlide>
              <img src={Patio4} alt="" data-splide-lazy={Patio4} />
            </SplideSlide>
            <SplideSlide>
              <img src={Patio5} alt="" data-splide-lazy={Patio5} />
            </SplideSlide>
            <SplideSlide>
              <img src={Patio6} alt="" data-splide-lazy={Patio6} />
            </SplideSlide>
          </Splide>
        </section>
        <h2>Le patio est le cœur d’un Riad mais aussi son âme</h2>

        <p>
          Le patio est certainement l’élément le plus caractéristique d’un riad
          traditionnel marocain, il s’agit d’une cour intérieure à ciel ouvert
          autour de laquelle sont réparties les pièces de la maison.
        </p>
        <p>
          Au riad Malaika, le patio est non seulement le centre de la bâtisse
          mais aussi son cœur, bien plus qu’un puits de lumière c’est un
          vériPatio espace de vie dans et autour duquel tout s’organise.
        </p>
        <p>
          Au centre de celui-ci, la fontaine centrale entourée des quatre
          piliers en pierres comme la tradition le requiert, coule en
          permanence* et crée une ambiance très apaisante qui attire à certaines
          heures de la journée des oiseaux assoiffés et curieux.
        </p>
        <p>
          C’est un lieu où l’on aime passer et repasser pour aller selon son
          humeur dans l’un des trois salons.
        </p>
        <p>
          <i>
            * en circuit fermé, afin d’éviter le gaspillage de l’eau qui est une
            ressource vitale essentielle.
          </i>
        </p>
      </div>
    </div>
  );
}

export default Patio;
