import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Salon1 from "../../assets/images/salon1.jpg";
import Salon2 from "../../assets/images/salon2.jpg";
import Salon3 from "../../assets/images/salon3.jpg";
import Salon4 from "../../assets/images/salon4.jpg";
import Salon5 from "../../assets/images/salon5.jpg";
import Salon6 from "../../assets/images/salon6.jpg";

function Terrasse() {
  return (
    <div class="terrasse">
      <div class="container">
        <h1 data-aos="zoom-in" data-aos-duration="1500">
          La Terrasse
        </h1>
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
              <img src={Salon1} alt="" data-splide-lazy={Salon1} />
            </SplideSlide>
            <SplideSlide>
              <img src={Salon2} alt="" data-splide-lazy={Salon2} />
            </SplideSlide>
            <SplideSlide>
              <img src={Salon3} alt="" data-splide-lazy={Salon3} />
            </SplideSlide>
            <SplideSlide>
              <img src={Salon4} alt="" data-splide-lazy={Salon4} />
            </SplideSlide>
            <SplideSlide>
              <img src={Salon5} alt="" data-splide-lazy={Salon5} />
            </SplideSlide>
            <SplideSlide>
              <img src={Salon6} alt="" data-splide-lazy={Salon6} />
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
