import React from "react";
import equipe from "../../assets/images/contact-equipe.png";
import { useTranslation } from "react-i18next";
function Equipe() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="equipe-contact">
        <img src={equipe} alt="" />
        <p>
          {t("footer.riad_p1")}
          <br />
          {t("footer.riad_p2")}
        </p>
      </div>
    </div>
  );
}

export default Equipe;
