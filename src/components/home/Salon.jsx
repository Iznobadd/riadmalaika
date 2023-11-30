import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Salon1 from "../../assets/images/salon1.jpg";
import Salon2 from "../../assets/images/salon2.jpg";
import Salon3 from "../../assets/images/salon3.jpg";
import Salon4 from "../../assets/images/salon4.jpg";
import Salon5 from "../../assets/images/salon5.jpg";
import Salon6 from "../../assets/images/salon6.jpg";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

function Salon() {
  const { t } = useTranslation();
  return (
    <div className="salons">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>{t("home.salon.h1")}</h1>
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
        <h2>{t("home.salon.alt")}</h2>
        <p>{t("home.salon.p1")}</p>
        <p>{t("home.salon.p2")}</p>
        <p>{t("home.salon.p3")}</p>
        <p>
          {t("home.salon.p4")} <br />
          {t("home.salon.p5")}
        </p>
      </div>
    </div>
  );
}

export default Salon;
