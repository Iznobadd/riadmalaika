import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Salon1 from "../../assets/images/salon1.jpg";
import Salon2 from "../../assets/images/salon2.jpg";
import Salon3 from "../../assets/images/salon3.jpg";
import Salon4 from "../../assets/images/salon4.jpg";
import Salon5 from "../../assets/images/salon5.jpg";
import Salon6 from "../../assets/images/salon6.jpg";
import { Zoom } from "react-awesome-reveal";
function Salon() {
  return (
    <div className="salons">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>Les Salons</h1>
        </Zoom>
        <section id="image-salons">
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
        <h2>La tradition de l’hospitalité marocaine</h2>
        <p>
          Le maroc est un pays où l’hospitalité et l’art de recevoir sont au
          cœur de toutes les attentions, depuis toujours les salons orientaux,
          d’été ou d’hiver, sont les véritables pièces à recevoir d’une maison.
        </p>
        <p>
          On y prend le thé, on y discute, on y mange, on y dort même parfois…
          en un mot se sont les pièces où l’on reçoit ses invités et où l’on
          partage l’intimité de la maison.
        </p>
        <p>
          Dans la plus pure tradition marocaine, le riad Malaika dispose de
          trois salons, situés au rez de chaussée et ouverts sur le patio dont
          ils font le tour. Ils sont à la disposition des hôtes de la maison
          tout au long de la journée.
        </p>
        <p>
          Trois salons, trois ambiances différentes afin de pouvoir offrir une
          dynamique orientale tout en restant dans un cadre très épuré. <br />
          Du petit déjeuner à la nuit tombée pour lire, boire un verre entre
          amis ou en famille, écouter de la musique et vous laisser réchauffer
          par la cheminée, nos salons sont une invitation au farniente.
        </p>
      </div>
    </div>
  );
}

export default Salon;
