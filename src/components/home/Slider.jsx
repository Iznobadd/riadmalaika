import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Slider1 from "../../assets/images/slider1.jpg";
import Reception from "../../assets/images/reception.jpg";
import Slider3 from "../../assets/images/slider3.jpg";
function Slider() {
  return (
    <div>
      {/* <img src={Logo} alt="Logo du Riad Malaïka animé" className="gif" /> */}
      <Splide
        options={{
          type: "loop",
          rewind: true,
          autoplay: true,
          cover: true,
          height: "100vh",
          pauseOnHover: false,
          direction: "ttb",
          arrows: false,
          speed: 3600,
          drag: false,
        }}
      >
        <SplideSlide>
          <img src={Slider1} alt="Grande porte d'entrée Riad Malaïka" />
        </SplideSlide>
        <SplideSlide>
          <img src={Reception} alt="Réception du Riad Malaïka" />
        </SplideSlide>
        <SplideSlide>
          <img src={Slider3} alt="Patio du Riad Malaïka" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
