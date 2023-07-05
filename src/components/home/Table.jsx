import React from "react";
import Table1 from "../../assets/images/latable1.jpg";
import Table2 from "../../assets/images/latable2.jpg";
function Table() {
  return (
    <div className="res-riad">
      <div className="riad-description">
        <h1>Malaïka La Table</h1>
        <p>
          La TABLE D’HÔTES s’installe élégamment pour vous chaque soir dans les
          salons du MALAÏKA Essaouira pour vous faire découvrir le mariage de la
          traditionnelle cuisine familiale marocaine associée à l’inventivité
          d’une cheffe passionnée.
        </p>
        <p>
          N’hésitez pas de réserver et de venir découvrir nos saveurs d’orient
          et de celles d'une cuisine internationale qui saura faire voyager vos
          papilles.
        </p>

        <a href="table.php">RÉSERVER UNE TABLE</a>
      </div>

      <div className="riad-imgs">
        <img
          src={Table2}
          alt="Decoration rose Riad Malaïka"
          className="relative-img"
        />
        <img src={Table1} alt="The Riad Malaïka" className="absolute-img" />
      </div>
    </div>
  );
}

export default Table;
