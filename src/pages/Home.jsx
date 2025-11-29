import React from "react";
import Slider from "../components/home/Slider";
import Riad from "../components/home/Riad";
import Table from "../components/home/Table";
import ParallaxTitle from "../components/home/ParallaxTitle";
import Restaurant from "../components/home/Restaurant";
import Patio from "../components/home/Patio";
import Salon from "../components/home/Salon";
import Terrasse from "../components/home/Terrasse";
import Offres from "../components/home/Offres";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Accueil | Riad Malaika";
  }, []);
  return (
    <div>
      <Slider />
      <div className="container">
        {/* <Riad /> */}
        <Table />
      </div>
      <ParallaxTitle />
      <div className="container p-index">
        <p>{t("home.pres.pres1")}</p>
      </div>
      <Restaurant />
      <Patio />
      <Salon />
      <Terrasse />
      <Offres />
    </div>
  );
}

export default Home;
