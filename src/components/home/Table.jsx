import React from "react";
import Table1 from "../../assets/images/latable1.jpg";
import Table2 from "../../assets/images/latable2.jpg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Table() {
  const { t } = useTranslation();
  return (
    <div className="res-riad">
      <div className="riad-description">
        <Fade direction="top" duration={1500}>
          <h1>{t("home.table.table_h1")}</h1>
          <p>{t("home.table.table_p1")}</p>
          <p>{t("home.table.table_p2")}</p>

          <Link to="/table">{t("home.table.table_button")}</Link>
        </Fade>
      </div>

      <div className="riad-imgs">
        <Fade direction="left" duration={1200}>
          <img
            src={Table2}
            alt="Decoration rose Riad Malaïka"
            className="relative-img"
          />
        </Fade>
        <Fade direction="left" duration={1500}>
          <img src={Table1} alt="The Riad Malaïka" className="absolute-img" />
        </Fade>
      </div>
    </div>
  );
}

export default Table;
