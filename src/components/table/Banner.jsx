import React from "react";
import CarteTable from "../../assets/images/carte-table.jpg";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
function Banner() {
  const { t } = useTranslation();
  return (
    <>
      <div className="table-banner">
        <h2>{t("table.banner.title")}</h2>
      </div>
      <div className="container">
        <div className="table_welcome">
          <div className="table_carte">
            <Fade direction="left" duration={1200}>
              <img src={CarteTable} alt="" />
            </Fade>
          </div>

          <div className="table_description">
            <Fade direction="top" duration={1500}>
              <p>{t("table.banner.p1")}</p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
