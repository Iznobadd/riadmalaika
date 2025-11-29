import React from "react";
import { useTranslation } from "react-i18next";

function ReveillonMenu() {
  const { t } = useTranslation();

  return (
    <div className="reveillon-menu-section">
      <div className="container">
        <div className="reveillon-menu">
          <h2>{t("table.reveillon.title")}</h2>
          <p className="reveillon-subtitle">{t("table.reveillon.subtitle")}</p>
          <p className="reveillon-price">{t("table.reveillon.price")}</p>

          <div className="separator-chambres"></div>

          <div className="reveillon-amuse-bouche">
            <h3>{t("table.reveillon.amuse_bouche")}</h3>
          </div>

          <div className="reveillon-course">
            <h3>{t("table.reveillon.first.title")}</h3>
            <p>{t("table.reveillon.first.option1")}</p>
            <p className="reveillon-or">{t("table.reveillon.or")}</p>
            <p>{t("table.reveillon.first.option2")}</p>
          </div>

          <div className="reveillon-course">
            <h3>{t("table.reveillon.second.title")}</h3>
            <p>{t("table.reveillon.second.option1")}</p>
            <p className="reveillon-or">{t("table.reveillon.or")}</p>
            <p>{t("table.reveillon.second.option2")}</p>
          </div>

          <div className="reveillon-course">
            <h3>{t("table.reveillon.third.title")}</h3>
            <p>{t("table.reveillon.third.option1")}</p>
            <p className="reveillon-or">{t("table.reveillon.or")}</p>
            <p>{t("table.reveillon.third.option2")}</p>
          </div>

          <div className="reveillon-course">
            <h3>{t("table.reveillon.fourth.title")}</h3>
            <p>{t("table.reveillon.fourth.option1")}</p>
            <p className="reveillon-or">{t("table.reveillon.or")}</p>
            <p>{t("table.reveillon.fourth.option2")}</p>
          </div>

          <div className="separator-chambres"></div>

          <div className="reveillon-finale">
            <h3>{t("table.reveillon.finale")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReveillonMenu;
