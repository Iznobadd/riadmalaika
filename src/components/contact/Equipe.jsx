import React from "react";
import equipe from "../../assets/images/contact-equipe.png";
function Equipe() {
  return (
    <div className="container">
      <div className="equipe-contact">
        <img src={equipe} alt="" />
        <p>
          Le Riad Malaïka, “Les Anges” en arabe, est animé par un couple de
          Français d'Aix en Provence, entouré d’un personnel Marocain attentif ,
          ils offrent à leurs hôtes un service hôtelier efficace et discret.
          <br />
          Passionnés et envoûtés par la magie naturelle d’Essaouira, dont ils
          connaissent les charmes secrets, Sylvie, Halim et l’équipe du riad
          Malaïka sauront vous faire partager leur “Monde à Part”.
        </p>
      </div>
    </div>
  );
}

export default Equipe;
