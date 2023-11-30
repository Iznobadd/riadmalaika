import React from "react";
import { useTranslation } from "react-i18next";
function ParallaxTitle() {
  const { t } = useTranslation();
  return (
    <div className="riad-banner">
      <h2>
        {t("home.parallax.title1")}
        <br />
        {t("home.parallax.title2")}
      </h2>
    </div>
  );
}

export default ParallaxTitle;
