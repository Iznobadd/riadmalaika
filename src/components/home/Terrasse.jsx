import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Terrasse1 from "../../assets/images/terrasse1.jpg";
import Terrasse2 from "../../assets/images/terrasse2.jpg";
import Terrasse3 from "../../assets/images/terrasse3.jpg";
import Terrasse4 from "../../assets/images/terrasse4.jpg";
import Terrasse5 from "../../assets/images/terrasse5.jpg";
import Terrasse6 from "../../assets/images/terrasse6.jpg";
import { Zoom } from "react-awesome-reveal";
function Terrasse() {
  return (
    <div className="terrasse">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>La Terrasse</h1>
        </Zoom>
        <section id="image-terrasse">
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
              <img src={Terrasse1} alt="" data-splide-lazy={Terrasse1} />
            </SplideSlide>
            <SplideSlide>
              <img src={Terrasse2} alt="" data-splide-lazy={Terrasse2} />
            </SplideSlide>
            <SplideSlide>
              <img src={Terrasse3} alt="" data-splide-lazy={Terrasse3} />
            </SplideSlide>
            <SplideSlide>
              <img src={Terrasse4} alt="" data-splide-lazy={Terrasse4} />
            </SplideSlide>
            <SplideSlide>
              <img src={Terrasse5} alt="" data-splide-lazy={Terrasse5} />
            </SplideSlide>
            <SplideSlide>
              <img src={Terrasse6} alt="" data-splide-lazy={Terrasse6} />
            </SplideSlide>
          </Splide>
        </section>
        <h2>
          Entre ciel et terre, à l’ombre ou au soleil, mais surtout à l’abri des
          regards.
        </h2>
        <p>
          Il existe au Riad Malaika un endroit à part, un espace où coupé du
          monde chacun pourra profiter d’un moment unique : le toit terrasse.
        </p>
        <p>
          Sur celle-ci il est possible de s’isoler de l’agitation de la médina
          pour lire, surfer sur internet, rêver ou bronzer allongés sur un
          transat, et pour ceux qui préfèrent, une partie de la terrasse est
          abritée du soleil et du vent…
        </p>
        <p>
          Le matin, prendre son petit déjeuner sous le ciel bleu caressé par le
          soleil levant, en admirant l'incessant ballet des goélands est un réel
          plaisir, tandis qu’au clair de lune, entouré de lumières, vous pourrez
          apprécier le murmure des vagues mêlé à celui de la fontaine en
          tadelakt.
        </p>
        <p>
          Le wifi omniprésent vous permettra de rester en contacts avec vos
          proches et partager ainsi vos impressions «marocaines»…
        </p>
      </div>
    </div>
  );
}

export default Terrasse;
