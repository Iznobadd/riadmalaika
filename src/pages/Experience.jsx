import React from "react";
import Equitation from "../assets/images/equitation.gif";
import Dromadaire from "../assets/images/dromadaire.gif";
import KiteSurf from "../assets/images/kitesurf.gif";
import Quad from "../assets/images/quad.gif";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
function Experience() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Expériences | Riad Malaika";
  }, []);
  const contactRef = useRef(null);
  return (
    <>
      <div className="loisirs-banner">
        <h2>{t("exp.title")}</h2>
      </div>
      <div className="container">
        <p className="intro-experiences">
          <b>{t("exp.intro")}</b>
        </p>
        <div className="res-riad">
          <div className="loisirs-imgs">
            {/* <Slide direction="left" duration={1500}> */}
            <img
              src={Equitation}
              alt="Loisir équitation Riad Malaïka"
              className="relative-img"
            />
            {/* </Slide> */}
          </div>

          <div className="loisirs-description">
            {/* <Slide direction="right" duration={1500}> */}
            <h1>{t("exp.equitation.title")}</h1>
            <p>{t("exp.equitation.p1")}</p>
            <p>{t("exp.equitation.p2")}</p>
            <p>{t("exp.equitation.p3")}</p>
            <p className="link_contact">
              <Link
                to="/contact#contact"
                onClick={() => contactRef.current.scrollIntoView()}
              >
                {t("exp.infos")}
              </Link>
            </p>
            {/* </Slide> */}
          </div>
        </div>

        <div className="res-riad reverse">
          <div className="loisirs-description">
            {/* <Slide direction="left" duration={1500}> */}
            <h1>{t("exp.rando.title")}</h1>
            <p>{t("exp.rando.p1")}</p>
            <p>{t("exp.rando.p2")}</p>
            <p className="link_contact">
              <Link
                to="/contact#contact"
                onClick={() => contactRef.current.scrollIntoView()}
              >
                {t("exp.infos")}
              </Link>
            </p>
            {/* </Slide> */}
          </div>

          <div className="loisirs-imgs">
            {/* <Slide direction="right" duration={1500}> */}
            <img
              src={Dromadaire}
              alt="Experience dromadaires Riad Malaïka"
              className="relative-img"
            />
            {/* </Slide> */}
          </div>
        </div>

        <div className="res-riad">
          <div className="loisirs-imgs">
            {/* <Slide direction="left" duration={1500}> */}
            <img
              src={KiteSurf}
              alt="Experience KiteSurf Riad Malaïka"
              className="relative-img"
            />
            {/* </Slide> */}
          </div>

          <div className="loisirs-description">
            {/* <Slide direction="right" duration={1500}> */}
            <h1>{t("exp.surf.title")}</h1>
            <p>
              {t("exp.surf.p1")}
              <br />
              {t("exp.surf.p2")}
            </p>
            <p className="link_contact">
              <Link
                to="/contact#contact"
                onClick={() => contactRef.current.scrollIntoView()}
              >
                {t("exp.infos")}
              </Link>
            </p>
            {/* </Slide> */}
          </div>
        </div>

        <div className="res-riad reverse">
          <div className="loisirs-description">
            {/* <Slide direction="left" duration={1500}> */}
            <h1>{t("exp.quad.title")}</h1>
            <p>{t("exp.quad.p1")}</p>
            <p>{t("exp.quad.p2")}</p>
            <p>{t("exp.quad.p3")}</p>
            <p className="link_contact">
              <Link
                to="/contact#contact"
                onClick={() => contactRef.current.scrollIntoView()}
              >
                {t("exp.infos")}
              </Link>
            </p>
            {/* </Slide> */}
          </div>

          <div className="loisirs-imgs">
            {/* <Slide direction="right" duration={1500}> */}
            <img
              src={Quad}
              alt="Experience Quad Riad Malaïka"
              className="relative-img"
            />
            {/* </Slide> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
