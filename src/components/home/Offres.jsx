import React from "react";
import Culture from "../../assets/images/pack-culture.png";
import BienEtre from "../../assets/images/pack-emotion.png";
import Decouverte from "../../assets/images/pack-decouverte.png";
import Gastronomie from "../../assets/images/pack-gastro.png";
import { Zoom, Flip, Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Offres() {
  const { t } = useTranslation();
  return (
    <div className="offres-speciales offres-banner">
      {/* <div className="offre-trait"></div>
      <div className="offre-banner">
        <h1>NOS OFFRES SPÉCIALES</h1>
      </div>
      <div className="offre-trait"></div> */}
      <Zoom direction="top" duration={1500}>
        <h2 className="text-center">{t("home.offres.h1")}</h2>
      </Zoom>
      <div className="container">
        <div className="pack-card" id="all_packs">
          <div className="culture pack">
            <Bounce direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>
                    {t("home.offres.title")}
                    <br />
                    {t("home.offres.culture_title")}
                  </h1>
                </div>
                <img src={Culture} alt="Pack emotion culture" />
                <div className="pack-description">
                  <p>
                    {t("home.offres.culture_desc")}
                    <br />
                    <span className="link_pack">
                      <Link to="contact">{t("home.offres.infos")}</Link>
                    </span>
                  </p>
                </div>
              </div>
            </Bounce>
          </div>

          <div className="bien-etre pack">
            <Bounce direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>
                    {t("home.offres.title")}
                    <br />
                    {t("home.offres.bien_title")}
                  </h1>
                </div>
                <img src={BienEtre} alt="Pack emotion bien etre" />
                <div className="pack-description">
                  <p>
                    {t("home.offres.bien_desc")}
                    <br />
                    <span className="link_pack">
                      <Link to="contact">{t("home.offres.infos")}</Link>
                    </span>
                  </p>
                </div>
              </div>
            </Bounce>
          </div>
          <div className="decouverte pack">
            <Bounce direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>
                    {t("home.offres.title")} {t("home.offres.decouverte_title")}
                  </h1>
                </div>
                <img src={Decouverte} alt="Pack emotion decouverte" />
                <div className="pack-description">
                  <p>
                    {t("home.offres.decouverte_desc")}
                    <br />
                    <span className="link_pack">
                      <Link to="contact">{t("home.offres.infos")}</Link>
                    </span>
                  </p>
                </div>
              </div>
            </Bounce>
          </div>
          <div className="gastronomie pack">
            <Bounce direction="vertical" duration={1500}>
              <div>
                <div className="pack-title">
                  <h1>
                    {t("home.offres.title")} {t("home.offres.gastro_title")}
                  </h1>
                </div>
                <img src={Gastronomie} alt="Pack emotion gastronomie" />
                <div className="pack-description">
                  <p>
                    {t("home.offres.gastro_desc")}
                    <br />
                    <span className="link_pack">
                      <Link to="contact">{t("home.offres.infos")}</Link>
                    </span>
                  </p>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offres;
