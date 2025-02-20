import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Terrasse1 from "../../assets/images/terrasse1.jpg";
import Terrasse2 from "../../assets/images/terrasse2.jpg";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
function Terrasse() {
  const { t } = useTranslation();
  return (
    <div className="terrasse">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>{t("home.terrasse.h1")}</h1>
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
          </Splide>
        </section>
        <h2>{t("home.terrasse.alt")}</h2>
        <p>{t("home.terrasse.p1")}</p>
        <p>{t("home.terrasse.p2")}</p>
        <p>{t("home.terrasse.p3")}</p>
        <p>{t("home.terrasse.p4")}</p>
      </div>
    </div>
  );
}

export default Terrasse;
