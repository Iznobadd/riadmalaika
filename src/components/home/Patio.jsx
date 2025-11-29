import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Patio1 from "../../assets/images/patio1.jpg";
import Patio2 from "../../assets/images/patio2.jpg";
import Patio3 from "../../assets/images/patio3.jpg";
import Patio4 from "../../assets/images/patio4.jpg";
import Patio5 from "../../assets/images/patio5.jpg";
import Patio6 from "../../assets/images/patio6.jpg";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
function Patio() {
  const { t } = useTranslation();
  return (
    <div className="patio">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>{t("home.patio.h1")}</h1>
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
          </Splide>
        </section>
        <h2>{t("home.patio.alt")}</h2>
        <p>{t("home.patio.p1")}</p>
      </div>
    </div>
  );
}

export default Patio;
