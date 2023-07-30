import React from "react";
import Modal from "react-modal";
import Standard1 from "../../assets/images/standard1.jpg";
import Standard2 from "../../assets/images/standard2.jpg";
import Standard3 from "../../assets/images/standard3.jpg";
import Standard4 from "../../assets/images/standard4.jpg";
import Standard5 from "../../assets/images/standard5.jpg";
import Standard6 from "../../assets/images/standard6.jpg";
import Confort1 from "../../assets/images/confort1.jpg";
import Confort2 from "../../assets/images/confort2.jpg";
import Confort3 from "../../assets/images/confort3.jpg";
import Confort4 from "../../assets/images/confort4.jpg";
import Confort5 from "../../assets/images/confort5.jpg";
import Confort6 from "../../assets/images/confort6.jpg";
import Superieur1 from "../../assets/images/superieur1.jpg";
import Superieur2 from "../../assets/images/superieur2.jpg";
import Superieur3 from "../../assets/images/superieur3.jpg";
import Superieur4 from "../../assets/images/superieur4.jpg";
import Superieur5 from "../../assets/images/superieur5.jpg";
import Superieur6 from "../../assets/images/superieur6.jpg";
import Junior1 from "../../assets/images/junior1.jpg";
import Junior2 from "../../assets/images/junior2.jpg";
import Junior3 from "../../assets/images/junior3.jpg";
import Junior4 from "../../assets/images/junior4.jpg";
import Junior5 from "../../assets/images/junior5.jpg";
import Junior6 from "../../assets/images/junior6.jpg";
import Twin1 from "../../assets/images/twin-standard1.jpg";
import Twin2 from "../../assets/images/twin-standard2.jpg";
import Twin3 from "../../assets/images/twin-standard3.jpg";
import Twin4 from "../../assets/images/twin-standard4.jpg";
import Twin5 from "../../assets/images/twin-standard5.jpg";
import Twin6 from "../../assets/images/twin-standard6.jpg";
import TwinSup1 from "../../assets/images/twin-sup1.jpg";
import TwinSup2 from "../../assets/images/twin-sup2.jpg";
import TwinSup3 from "../../assets/images/twin-sup3.jpg";
import TwinSup4 from "../../assets/images/twin-sup4.jpg";
import TwinSup5 from "../../assets/images/twin-sup5.jpg";
function ModalComponent({ isOpen, onRequestClose, buttonId }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
        content: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          border: "none",
          zIndex: "1000",
          margin: "auto",
          width: "80%",
        },
      }}
    >
      {isOpen && (
        <div>
          {buttonId === "modal-chambre1-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 className="text-center my-5">Chambres double standard</h2>
              <p className="intro-experiences text-center">
                <b>
                  Les chambres Standard proposent une décoration inédite pour
                  chacune.
                </b>
              </p>
              <p>
                Nos chambres « Standard », double ou twin ont une vue sur la
                médina, leur décor typiquement marocain, vous plongera aussitôt
                dans une atmosphère sobre et dépaysante. Fer forgé, bois de
                thuya, cuivre et tapis multicolores composent le décor et font
                partie du mobilier fabriqué sur place par les artisans Souiris.
              </p>
              <p>
                Chacune des chambres « Standard » offre le confort d’une salle
                de bains privative aux murs de Tadelakt, enduit ciré
                traditionnel aux couleurs naturelles. Elles sont équipées d’une
                fenêtre, d’une douche et de toilettes. Pour votre confort nous
                changeons les serviettes de bain chaque jour.
              </p>
              <p>
                Nos produits d’accueil : savon, gel douche et shampoing composés
                à base de produits naturels sont élaborés à Marrakech
                spécialement pour nous par Nectarome.
              </p>
              <p className="italic">
                De 62€ à 76€ avec ou sans petits déjeuners (hors taxes de séjour
                de 2€50 par personne et par nuit)
              </p>
              <div className="modal-imgs">
                <img src={Standard1} alt="" />
                <img src={Standard2} alt="" />
                <img src={Standard3} alt="" />
                <img src={Standard4} alt="" />
                <img src={Standard5} alt="" />
                <img src={Standard6} alt="" />
              </div>
              <div className="text-center">
                <a href="#reservation" className="modal_reservation">
                  Réserver
                </a>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre2-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">Chambres confort</h2>
              <p class="intro-experiences text-center">
                <b>Les chambres Confort vous invitent au dépaysement</b>
              </p>
              <p>
                Au 1er ou au 2eme étage du riad, nos chambres Confort sont
                équipées d’un lit double queen-size et d’un décor lumineux. Au
                calme, elles donnent sur le patio et vous invitent à la détente.{" "}
              </p>
              <p>
                «Haiks» aux fenêtres, lustres en cuivre et verre Iraki
                multicolore ravivent le charme Marocain qu’on trouvait dans les
                maisons bourgeoises autrefois.{" "}
              </p>
              <p>
                Les salles d’eau traditionnelles en zelliges colorées vous font
                voyager dans le temps tout en vous apportant le niveau de
                confort des standards de l’hotellerie d’aujourd’hui. Pour votre
                bien-être le linge de toilette est changé chaque matin. Nos
                savons, gel douche et shampoing à base d’huiles essentielles
                sont élaborés à Marrakech pour le Malaïka.{" "}
              </p>

              <p class="italic">
                De 73€ à 87€ avec ou sans petits déjeuners (hors taxes de séjour
                de 2€50 par personne et par nuit)
              </p>
              <div class="modal-imgs">
                <img src={Confort1} alt="" />
                <img src={Confort2} alt="" />
                <img src={Confort3} alt="" />
                <img src={Confort4} alt="" />
                <img src={Confort5} alt="" />
                <img src={Confort6} alt="" />
              </div>
              <div class="text-center">
                <a href="#reservation" className="modal_reservation">
                  Réserver
                </a>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre3-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">Chambres supérieures</h2>
              <p class="intro-experiences text-center">
                <b>
                  Les chambres Supérieures sont toutes décorées sur des
                  thématiques différentes.
                </b>
              </p>
              <p>
                Entourés d’objets chinés dans les souks de la région vous y
                trouverez un confort propice à la rêverie. L’espace sommeil
                équipé d’un lit double queen-size confortable et le coin salon
                vous offrent un espace agréable pour décompresser.{" "}
              </p>
              <p>
                Le mobilier en marqueterie de thuya, en cèdre parfumé ou en fer
                forgé a été chiné ça et là entre Essaouira et Marrakech. Nos
                chambres Supérieures en format chambre double ou chambre twin,
                se situent au 1er et au 2éme étage, leurs fenêtres donnent sur
                la médina ou sur le patio du riad.
              </p>
              <p>
                Les salles d’eau orientales mêlant le tadelakt et les zelliges
                vous ferons découvrir les matières traditionnelles utilisées
                dans les hamams marocains depuis la nuit des temps. Chaque salle
                de bain privée offre douche et toilettes. Afin de vous offrir un
                séjour de qualité, nous changeons les serviettes de toilettes
                chaque matin et nous faisons fabriquer nos produits d’accueil à
                base d’huile essentielle par Nectarome Marrakech dans la vallée
                de l’Ourika.
              </p>

              <p class="italic">
                De 84€ à 98€ avec ou sans petits déjeuners (hors taxes de séjour
                de 2€50 par personne et par nuit)
              </p>
              <div class="modal-imgs">
                <img src={Superieur1} alt="" />
                <img src={Superieur2} alt="" />
                <img src={Superieur3} alt="" />
                <img src={Superieur4} alt="" />
                <img src={Superieur5} alt="" />
                <img src={Superieur6} alt="" />
              </div>
              <div class="text-center">
                <a href="#reservation" className="modal_reservation">
                  Réserver
                </a>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre4-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">Junior suite</h2>
              <p class="intro-experiences text-center">
                <b>La Junior Suite Terrasse pour un séjour unique</b>
              </p>
              <p>
                Passer du temps isolé du monde, prendre son petit-déjeuner,
                boire un verre ou lire au soleil est un atout de cette Suite sur
                la terrasse.
              </p>
              <p>
                A votre disposition, une chambre double équipée d’un lit double
                queen-size, un salon lumineux et spacieux avec cheminée où il
                fait bon cocooner, un mini-bar sans alcool et une machine
                Nespresso. Tableaux, meubles et objets, y racontent une partie
                de l’histoire de ce continent…
              </p>
              <p>
                La salle de bains, en Tadelakt traditionnel, vous offre une
                baignoire et les accessoires traditionnels utilisés autrefois
                dans les hamams. Pour optimiser votre bien-être, les serviettes
                de toilettes sont changées chaque jour, et les toilettes sont
                indépendantes de la salle d’eau. Les produits d’accueil aux
                fragrances orientales «Malaïka» que nous faisons fabriquer dans
                la vallée de l’Ourika sont à disposition tout au long de votre
                séjour.
              </p>

              <p>
                Le Salon étant équipé d'un lit simple, cette Junior-Suite permet
                d'accueillir jusqu'à 3 personnes.
              </p>
              <p class="italic">
                Double de 106€ à 120€ avec ou sans petits déjeuners (hors taxes
                de séjour de 2€50 par personne et par nuit)
              </p>
              <p class="italic">
                Triple de 130€ à 150€ avec ou sans petits déjeuners (hors taxes
                de séjour de 2€50 par personne et par nuit)
              </p>
              <div class="modal-imgs">
                <img src={Junior1} alt="" />
                <img src={Junior2} alt="" />
                <img src={Junior3} alt="" />
                <img src={Junior4} alt="" />
                <img src={Junior5} alt="" />
                <img src={Junior6} alt="" />
              </div>
              <div class="text-center">
                <a href="#reservation" className="modal_reservation">
                  Réserver
                </a>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre5-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">Chambres twin standard</h2>
              <p class="intro-experiences text-center">
                <b>
                  La Chambre Twin Standard se situe au deuxième étage avec une
                  vue sur la médina.
                </b>
              </p>
              <p>
                Comme toutes les chambres du Riad Malaïka, la chambre Twin
                Standard bénéficie d’une décoration sobre où les meubles et
                objets venus du Maroc ont su trouver leur place. Lumineuse et
                agréable cette chambre au charme unique possède sa salle de bain
                privative.
              </p>
              <p>
                Le linge de toilette est changé chaque jour afin de vous
                procurer une sensation de bien-être, tout comme les produits
                d’accueil aux essences naturelles d’ambre que nous vous offrons.
              </p>

              <p class="italic">
                De 62€ à 76€ avec ou sans petits déjeuners (hors taxes de séjour
                de 2€50 par personne et par nuit)
              </p>
              <div class="modal-imgs">
                <img src={Twin1} alt="" />
                <img src={Twin2} alt="" />
                <img src={Twin3} alt="" />
                <img src={Twin4} alt="" />
                <img src={Twin5} alt="" />
                <img src={Twin6} alt="" />
              </div>
              <div class="text-center">
                <a href="#reservation" className="modal_reservation">
                  Réserver
                </a>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre6-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">Chambres twin supérieures</h2>
              <p class="intro-experiences text-center">
                <b>
                  La Chambre Twin Supérieure au premier étage avec vue sur le
                  patio, vous offre confort et intimité.
                </b>
              </p>
              <p>
                Une véritable invitation au voyage grâce au décor typiquement
                marocain de cette chambre équipée de deux lits séparées
                confortables, d’une cheminée, d’une salle d’eau traditionnelle
                et d’objets locaux plein de charme.
              </p>{" "}
              <p>
                Pour votre bien-être nous changeons chaque jour le linge de
                toilette et nous vous offrons de délicieux produits d’accueil
                naturels aux essences d’ambre fabriqués dans la vallée de
                l’Ouriqua spécialement pour le Riad Malaïka.
              </p>
              <p class="italic">
                de 84€ à 98€ avec ou sans petits déjeuners (hors taxes de séjour
                de 2€50 par personne et par nuit)
              </p>
              <div class="modal-imgs">
                <img src={TwinSup1} alt="" />
                <img src={TwinSup2} alt="" />
                <img src={TwinSup3} alt="" />
                <img src={TwinSup4} alt="" />
                <img src={TwinSup5} alt="" />
              </div>
              <div class="text-center">
                <a href="#reservation" className="modal_reservation">
                  Réserver
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

export default ModalComponent;
