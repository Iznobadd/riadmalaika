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
import { useTranslation } from "react-i18next";
function Restaurant() {
  const { t } = useTranslation();
  return (
    <div className="restaurant">
      <div className="container">
        <Zoom direction="top" duration={1500}>
          <h1>{t("home.restaurant.h1")}</h1>
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
        <h2>{t("home.restaurant.alt")}</h2>
        <p>{t("home.restaurant.p1")}</p>
        <p>{t("home.restaurant.p2")}</p>
        <p>{t("home.restaurant.p3")}</p>
      </div>
    </div>
  );
}

export default Restaurant;
