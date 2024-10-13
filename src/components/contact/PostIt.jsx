import React from "react";
import { Flip, Zoom } from "react-awesome-reveal";
import PostIt1 from "../../assets/images/postit1.jpg";
import PostIt2 from "../../assets/images/logo-anime.gif";
import PostIt3 from "../../assets/images/postit3.jpg";
import { useTranslation } from "react-i18next";

function PostIt() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Zoom duration={1500}>
        <h1 className="titre-contact">{t("contact.h1")}</h1>
      </Zoom>
      {/* <Flip direction="vertical" duration={2000}> */}
      <div className="postit">
        <img src={PostIt1} alt="Post It Adresse Riad Malaïka" />
        <img src={PostIt2} alt="Post It Logo Contact Riad Malaïka" />

        <img src={PostIt3} alt="Post It WhatsApp Riad Malaïka" />
      </div>
      {/* </Flip> */}
    </div>
  );
}

export default PostIt;
