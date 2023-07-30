import React from "react";
import { Flip, Zoom } from "react-awesome-reveal";
import PostIt1 from "../../assets/images/postit1.png";
import PostIt2 from "../../assets/images/postit2.gif";
import PostIt3 from "../../assets/images/postit3.png";
import equipe from "../../assets/images/contact-equipe.png";
function PostIt() {
  return (
    <div className="container">
      <Zoom duration={1500}>
        <h1 className="titre-contact">
          L'équipe Malaika vous remercie de votre visite
        </h1>
      </Zoom>
      <Flip direction="vertical" duration={2000}>
        <div className="postit">
          <img src={PostIt1} alt="Post It Adresse Riad Malaïka" />
          <img src={PostIt2} alt="Post It Logo Contact Riad Malaïka" />
          <a
            href="https://wa.me/00212600055696"
            target="_blank"
            rel="noreferrer"
          >
            <img src={PostIt3} alt="Post It WhatsApp Riad Malaïka" />
          </a>
        </div>
      </Flip>
    </div>
  );
}

export default PostIt;
