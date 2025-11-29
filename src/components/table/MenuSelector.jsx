import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";
import ReveillonMenu from "./ReveillonMenu";
import SignatureMenu from "./SignatureMenu";

function MenuSelector() {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState("classic");

  return (
    <div className="menu-selector-wrapper">
      <div className="container">
        <div className="menu-tabs">
          <button
            className={`menu-tab ${selectedMenu === "classic" ? "active" : ""}`}
            onClick={() => setSelectedMenu("classic")}
          >
            {t("table.menu_selector.classic")}
          </button>
          <button
            className={`menu-tab ${selectedMenu === "signature" ? "active" : ""}`}
            onClick={() => setSelectedMenu("signature")}
          >
            {t("table.menu_selector.signature")}
          </button>
          <button
            className={`menu-tab ${selectedMenu === "reveillon" ? "active" : ""}`}
            onClick={() => setSelectedMenu("reveillon")}
          >
            {t("table.menu_selector.reveillon")}
          </button>
        </div>
      </div>

      <div className="menu-content">
        {selectedMenu === "classic" && <Menu />}
        {selectedMenu === "signature" && <SignatureMenu />}
        {selectedMenu === "reveillon" && <ReveillonMenu />}
      </div>
    </div>
  );
}

export default MenuSelector;
