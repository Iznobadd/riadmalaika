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
import Superieur1 from "../../assets/images/superieur1-new.jpg";
import Superieur2 from "../../assets/images/superieur2.jpg";
import Superieur3 from "../../assets/images/superieur3-new.jpg";
import Superieur4 from "../../assets/images/superieur4.jpg";
import Superieur5 from "../../assets/images/superieur5.jpg";
import Superieur6 from "../../assets/images/superieur6.jpg";
import Junior1 from "../../assets/images/suite1-new.jpg";
import Junior2 from "../../assets/images/suite2-new.jpg";
import Junior3 from "../../assets/images/suite3-new.jpg";
import Junior4 from "../../assets/images/suite4-new.jpg";
import Junior5 from "../../assets/images/suite5-new.jpg";
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
import TwinSup6 from "../../assets/images/twin-sup6.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ModalComponent({ isOpen, onRequestClose, buttonId }) {
  const { t } = useTranslation();
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
              <h2 className="text-center my-5">
                {t("hebergement.standard.title")}
              </h2>
              <p>{t("hebergement.standard.p1")}</p>
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
              <h2 class="text-center my-5">{t("hebergement.confort.title")}</h2>
              <p>{t("hebergement.confort.p1")}</p>

              <div class="modal-imgs">
                <img src={Confort1} alt="" />
                <img src={Confort2} alt="" />
                <img src={Confort3} alt="" />
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
              <h2 class="text-center my-5">
                {t("hebergement.superieure.title")}
              </h2>
              <p>{t("hebergement.superieure.p1")}</p>

              <div class="modal-imgs">
                <img src={Superieur1} alt="" />
                <img src={Superieur2} alt="" />
                <img src={Superieur3} alt="" />
                <img src={Superieur4} alt="" />
                <img src={Superieur5} alt="" />
                <img src={Superieur6} alt="" />
              </div>
              <div class="text-center">
                <Link
                  to="https://via.eviivo.com/RiadMALAIKA44000"
                  target="_blank"
                  title="Riad Malaika"
                  className="modal_reservation"
                >
                  Réserver
                </Link>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre4-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">{t("hebergement.junior.title")}</h2>
              <p>{t("hebergement.junior.p1")}</p>

              <div class="modal-imgs">
                <img src={Junior1} alt="" />
                <img src={Junior2} alt="" />
                <img src={Junior3} alt="" />
                <img src={Junior4} alt="" />
                <img src={Junior5} alt="" />
              </div>
              <div class="text-center">
                <Link
                  to="https://via.eviivo.com/RiadMALAIKA44000"
                  target="_blank"
                  title="Riad Malaika"
                  className="modal_reservation"
                >
                  Réserver
                </Link>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre5-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">
                {t("hebergement.twin_standard.title")}
              </h2>
              <p>{t("hebergement.twin_standard.p1")}</p>

              <div class="modal-imgs">
                <img src={Twin1} alt="" />
                <img src={Twin2} alt="" />
                <img src={Twin3} alt="" />
                <img src={Twin4} alt="" />
                <img src={Twin5} alt="" />
                <img src={Twin6} alt="" />
              </div>
              <div class="text-center">
                <Link
                  to="https://via.eviivo.com/RiadMALAIKA44000"
                  target="_blank"
                  title="Riad Malaika"
                  className="modal_reservation"
                >
                  Réserver
                </Link>
              </div>
            </div>
          )}
          {buttonId === "modal-chambre6-btn" && (
            <div>
              <span class="close" onClick={onRequestClose}>
                &times;
              </span>
              <h2 class="text-center my-5">
                {t("hebergement.twin_sup.title")}
              </h2>
              <p>{t("hebergement.twin_sup.p1")}</p>
              <div class="modal-imgs">
                <img src={TwinSup1} alt="" />
                <img src={TwinSup2} alt="" />
                <img src={TwinSup3} alt="" />
                <img src={TwinSup4} alt="" />
                <img src={TwinSup5} alt="" />
                <img src={TwinSup6} alt="" />
              </div>
              <div class="text-center">
                <Link
                  to="https://via.eviivo.com/RiadMALAIKA44000"
                  target="_blank"
                  title="Riad Malaika"
                  className="modal_reservation"
                >
                  Réserver
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

export default ModalComponent;
