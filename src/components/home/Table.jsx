import React from "react";
import Table1 from "../../assets/images/latable1.jpg";
import Table2 from "../../assets/images/latable2.jpg";
import { Fade } from "react-awesome-reveal";
function Table() {
  return (
    <div className="res-riad">
      <div className="riad-description">
        <Fade direction="top" duration={1500}>
          <h1>Malaïka La Table</h1>
          <p>
            La TABLE D’HÔTES s’installe élégamment pour vous chaque soir dans
            les salons du MALAÏKA Essaouira pour vous faire découvrir le mariage
            de la traditionnelle cuisine familiale marocaine associée à
            l’inventivité d’une cheffe passionnée.
          </p>
          <p>
            N’hésitez pas de réserver et de venir découvrir nos saveurs d’orient
            et de celles d'une cuisine internationale qui saura faire voyager
            vos papilles.
          </p>

          <a href="table.php">RÉSERVER UNE TABLE</a>
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
