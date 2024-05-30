import React from "react";
import { Link } from "react-router-dom";

function Mentions() {
  return (
    <>
      <div className="contact-banner">
        <h2>Mentions légales</h2>
      </div>
      <div className="container">
        <div className="legales">
          <p>
            Editeur du site :{" "}
            <Link to="https://www.brandon-cebi.com" target="_blank">
              Brandon CEBI
            </Link>{" "}
            - 16 RUE DU COIN ROND - 07.50.42.19.91 - brandon.cebi.pro@gmail.com
          </p>

          <p>Directeur de la publication : Halim et Sylvie</p>

          <p>Hébergeur du site : Vercel</p>

          <p>
            Le site Riad Malaïka est un site de réservation de riads. Les
            informations et les tarifs présentés sur le site sont fournis par
            les propriétaires des riads. Riad Malaïka ne garantit pas
            l'exactitude, la fiabilité ou l'exhaustivité des informations
            fournies sur le site.
          </p>

          <p>
            Les images et les descriptions des riads présentés sur le site sont
            la propriété des propriétaires des riads et ne peuvent être
            utilisées sans leur autorisation expresse.
          </p>

          <p>
            Les réservations effectuées sur le site sont soumises aux conditions
            générales de vente, qui sont disponibles sur le site et doivent être
            acceptées par les utilisateurs avant de finaliser leur réservation.
          </p>

          <p>
            Le site peut contenir des liens vers d'autres sites qui ne sont pas
            gérés par Riad Malaïka. Riad Malaïka n'est pas responsable du
            contenu de ces sites et décline toute responsabilité pour tout
            dommage ou perte découlant de l'utilisation de ces sites.
          </p>

          <p>
            Conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés, vous disposez d'un
            droit d'accès, de modification, de rectification et de suppression
            des données vous concernant. Pour exercer ce droit, veuillez vous
            adresser à Riad Malaïka - Derb Zayan numéro 17 44100 ESSAOUIRA -
            ROYAUME DU MAROC ou à malaikadream@gmail.com.
          </p>
        </div>
      </div>
    </>
  );
}

export default Mentions;
