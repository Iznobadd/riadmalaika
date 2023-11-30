import React from "react";
import Riad2 from "../../assets/images/riad2.jpg";
import Riad1 from "../../assets/images/riad1.jpg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Riad() {
  const { t } = useTranslation();
  return (
    <div className="res-riad">
      <div className="riad-imgs">
        <Fade direction="left" duration={1200}>
          <img
            src={Riad2}
            alt="Réception Riad Malaïka"
            className="relative-img"
          />
        </Fade>
        <Fade direction="left" duration={1500}>
          <img
            src={Riad1}
            alt="Terrasse Riad Malaïka"
            className="absolute-img"
          />
        </Fade>
      </div>

      <div className="riad-description">
        <Fade direction="top" duration={1500}>
          <h1>{t("home.malaika.riad_h1")}</h1>

          <p>{t("home.malaika.riad_p1")}</p>
          <p>{t("home.malaika.riad_p2")}</p>

          <Link to="/chambres">{t("home.malaika.riad_button")}</Link>
        </Fade>
      </div>
    </div>
  );
}

export default Riad;
