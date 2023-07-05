import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Table1 from "../../assets/images/table1.jpg";
import Table2 from "../../assets/images/table2.jpg";
import Table3 from "../../assets/images/table3.jpg";
import Table4 from "../../assets/images/table4.jpg";
import Table5 from "../../assets/images/table5.jpg";
import Table6 from "../../assets/images/table6.jpg";
import Table7 from "../../assets/images/table7.jpg";
import Table8 from "../../assets/images/table8.jpg";
import { Zoom } from "react-awesome-reveal";
function Restaurant() {
  return (
    <div className="restaurant">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>Le Restaurant</h1>
        </Zoom>
        <section id="image-restaurant">
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
              <img src={Table1} alt="" data-splide-lazy={Table1} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table2} alt="" data-splide-lazy={Table2} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table3} alt="" data-splide-lazy={Table3} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table4} alt="" data-splide-lazy={Table4} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table5} alt="" data-splide-lazy={Table5} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table6} alt="" data-splide-lazy={Table6} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table7} alt="" data-splide-lazy={Table7} />
            </SplideSlide>
            <SplideSlide>
              <img src={Table8} alt="" data-splide-lazy={Table8} />
            </SplideSlide>
          </Splide>
        </section>
        <h2>La gastronomie est un art qui dépasse la barrière du langage</h2>
        <p>
          L’équipe du MALAÏKA Riad & Table d’Hôtes vous invite à découvrir la
          véritable cuisine traditionnelle marocaine, celle qui se transmet de
          mère en fille, mais également une cuisine Terre-Mer internationale &
          inventive, sous la houlette de sa cheffe Mina, passionnée et qui n’a
          de cesse de se renouveler.
        </p>
        <p>
          Élégante et raffinée, La Table est dressée dans nos salons chaque soir
          pour un nombre limité de convives qui a l’occasion de découvrir des
          saveurs originales accompagnées de vins marocains sélectionnés, où,
          vaisselle fine, argenterie, fleurs et chandeliers se côtoient pour
          leur plus grand plaisir olfactif, gustatif et visuel.
        </p>
        <p>
          Si les Arts Culinaires sont particulièrement développés dans la
          tradition marocaine on ne peut en découvrir que bien peu d’aspects
          dans les restaurants marocains touristiques, pour cela, le Riad
          Malaïka vous propose de découvrir les véritables saveurs et parfums de
          la cuisine marocaine qui se veut authentique et familiale, ainsi que
          la fusion de plusieurs cultures culinaires internationales qui vous
          surprendra de par sa présentation mise en scène dans votre assiette.
        </p>
      </div>
    </div>
  );
}

export default Restaurant;
