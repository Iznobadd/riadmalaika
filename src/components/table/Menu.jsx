import React from "react";
import Signature from "../../assets/images/carte_signature.jpg";
import Entree from "../../assets/images/carte_entree.jpg";
import Viande from "../../assets/images/carte_viande.jpg";
import Maroc from "../../assets/images/carte_maroc.jpg";
import Mer from "../../assets/images/carte_mer.jpg";
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
              largeURL: Entree,
              thumbnailURL: Entree,
              width: 1080,
              height: 1920,
            },
            {
              largeURL: Viande,
              thumbnailURL: Viande,
              width: 1080,
              height: 1920,
            },
            {
              largeURL: Mer,
              thumbnailURL: Mer,
              width: 1080,
              height: 1920,
            },

            {
              largeURL: Maroc,
              thumbnailURL: Maroc,
              width: 1080,
              height: 1920,
            },
            {
              largeURL: Signature,
              thumbnailURL: Signature,
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
