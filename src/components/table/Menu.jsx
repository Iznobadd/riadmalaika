import React from "react";
import Signature from "../../assets/images/carte_signature.jpg";
import Entree from "../../assets/images/carte_entree.jpg";
import Plat from "../../assets/images/carte_plat.jpg";
import Dessert from "../../assets/images/carte_dessert.jpg";
import Lightbox from "../partials/Lightbox";

function Menu() {
  return (
    <div className="carte">
      <div className="container">
        <Lightbox
          galleryID="menu-gallery"
          images={[
            {
              largeURL: Signature,
              thumbnailURL: Signature,
              width: 1080,
              height: 1920,
            },
            {
              largeURL: Entree,
              thumbnailURL: Entree,
              width: 1080,
              height: 1920,
            },
            {
              largeURL: Plat,
              thumbnailURL: Plat,
              width: 1080,
              height: 1920,
            },
            {
              largeURL: Dessert,
              thumbnailURL: Dessert,
              width: 1080,
              height: 1920,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Menu;
