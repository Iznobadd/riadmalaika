import React from "react";
import { useState } from "react";
function Faq() {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (itemId) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <div className="container">
      <div className="faq">
        <h2>Foire aux Questions</h2>

        <div className="accordion">
          <div className="accordion-item">
            <button
              id="accordion-button-1"
              aria-expanded={expandedItem === "accordion-button-1"}
              onClick={() => toggleAccordion("accordion-button-1")}
            >
              <span className="accordion-title">
                Le Riad est-il accessible aux fauteuils roulants ?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === "accordion-button-1" ? "expanded" : ""
              }`}
            >
              <p>
                Étant donné que les chambres sont à l'étage, ce n'est pas
                accessible aux fauteuils roulants.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              id="accordion-button-2"
              aria-expanded={expandedItem === "accordion-button-2"}
              onClick={() => toggleAccordion("accordion-button-2")}
            >
              <span className="accordion-title">
                Quels sont les horaires d'arrivée et de départ à l'établissement
                Riad MALAÏKA ?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === "accordion-button-2" ? "expanded" : ""
              }`}
            >
              <p>
                L'enregistrement à l'établissement Riad MALAÏKA se fait à partir
                de 14h00 et le départ est possible jusqu'à 12h00.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              id="accordion-button-3"
              aria-expanded={expandedItem === "accordion-button-3"}
              onClick={() => toggleAccordion("accordion-button-3")}
            >
              <span className="accordion-title">
                L'établissement Riad MALAÏKA est-il proche de la plage ?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === "accordion-button-3" ? "expanded" : ""
              }`}
            >
              <p>
                La plage la plus proche se trouve à seulement 500 m de
                l'établissement Riad MALAÏKA.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              id="accordion-button-4"
              aria-expanded={expandedItem === "accordion-button-4"}
              onClick={() => toggleAccordion("accordion-button-4")}
            >
              <span className="accordion-title">
                L'établissement Riad MALAÏKA est-il proche du centre
                (Essaouira) ?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === "accordion-button-4" ? "expanded" : ""
              }`}
            >
              <p>
                L'établissement Riad MALAÏKA se trouve à 200 m du centre
                (Essaouira).
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={expandedItem === "accordion-button-5"}
              onClick={() => toggleAccordion("accordion-button-5")}
            >
              <span className="accordion-title">
                Quelles activités l'établissement Riad MALAÏKA propose-t-il ?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === "accordion-button-5" ? "expanded" : ""
              }`}
            >
              <p>
                L'établissement Riad MALAÏKA propose les activités et les
                services suivants (des frais peuvent s'appliquer) :<br />
                - Massages
                <br />
                - Cyclisme
                <br />
                - Randonnée
                <br />
                - Pêche
                <br />
                - Planche à voile
                <br />
                - Parcours de golf (à moins de 3 km)
                <br />
                - Solarium
                <br />
                - Front de mer
                <br />
                - Équitation
                <br />
                - Cours de cuisine
                <br />
                - Location de vélos
                <br />
                - Balades à pied
                <br />
                - Forfaits spa/bien-être
                <br />- Plage
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <button
              id="accordion-button-6"
              aria-expanded={expandedItem === "accordion-button-6"}
              onClick={() => toggleAccordion("accordion-button-6")}
            >
              <span className="accordion-title">
                Quel type de petit-déjeuner l'établissement Riad MALAÏKA sert-il
                ?{" "}
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                expandedItem === "accordion-button-6" ? "expanded" : ""
              }`}
            >
              <p>
                L'établissement sert les types de petit-déjeuner suivants :
                <br />
                - Continental
                <br />
                - Végétarien
                <br />
                - Végétalien
                <br />
                - Halal
                <br />
                - Sans gluten
                <br />- À la carte
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
