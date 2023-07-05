import React from "react";
import Slider from "../components/home/Slider";
import Riad from "../components/home/Riad";
import Table from "../components/home/Table";
import ParallaxTitle from "../components/home/ParallaxTitle";
import Restaurant from "../components/home/Restaurant";
import Patio from "../components/home/Patio";
import Salon from "../components/home/Salon";
import Terrasse from "../components/home/Terrasse";
import Offres from "../components/home/Offres";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Accueil | Riad Malaika";
  }, []);
  return (
    <div>
      <Slider />
      <div className="container">
        <Riad />
        <Table />
      </div>
      <ParallaxTitle />
      <div className="container p-index">
        <p>
          Poussez la porte du riad Malaika et découvrez une maison d’hôtes
          singulière et accueillante.
        </p>
        <p>
          L’ambiance orientale de chaque chambre, claire, aérée, enrichie de
          meubles anciens, de tapis et d’objets chinés au Maroc, invite au
          dépaysement. Ainsi, vous pourrez profitez du soleil de la terrasse, de
          la douceur d’un feu de cheminée en vous laissant bercer par le murmure
          des fontaines ou par le chant des oiseaux.
        </p>
        <p>
          Découvrez un espace où le wifi omniprésent vous permettra de rester en
          contact avec vos proches et de partager ainsi vos impressions
          «marocaines». Découvrez également un personnel au service de ses
          invités.
        </p>
        <p>
          Tout est fait pour vous faire vivre un moment unique mais aussi pour
          vous faire découvrir le maroc autrement : massages berbères à l’huile
          d’argan, hammams traditionnels , gommages au savon noir ou encore
          balades dans les environs accompagnés d’un guide d’excursions. Une
          fois de retour au riad profitez d’un moment de détente autour du
          traditionnel thé à la menthe servi dans l’un des salons ou sur la
          terrasse, tout comme le petit-déjeuner “Beldi” différent chaque jour.
        </p>
      </div>
      <Restaurant />
      <Patio />
      <Salon />
      <Terrasse />
      <Offres />
    </div>
  );
}

export default Home;
