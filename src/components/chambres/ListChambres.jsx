import React from "react";
import Standard1 from "../../assets/images/standard1.jpg";
import Standard2 from "../../assets/images/standard2.jpg";
import Standard3 from "../../assets/images/standard3.jpg";
import Confort1 from "../../assets/images/confort1.jpg";
import Confort2 from "../../assets/images/confort2.jpg";
import Confort3 from "../../assets/images/confort3.jpg";
import Superieur1 from "../../assets/images/superieur1.jpg";
import Superieur2 from "../../assets/images/superieur2.jpg";
import Superieur3 from "../../assets/images/superieur3.jpg";
import Junior1 from "../../assets/images/junior1.jpg";
import Junior2 from "../../assets/images/junior2.jpg";
import Junior3 from "../../assets/images/junior3.jpg";
import Twin1 from "../../assets/images/twin-standard1.jpg";
import Twin2 from "../../assets/images/twin-standard2.jpg";
import Twin3 from "../../assets/images/twin-standard3.jpg";
import TwinSup1 from "../../assets/images/twin-sup1.jpg";
import TwinSup2 from "../../assets/images/twin-sup2.jpg";
import TwinSup3 from "../../assets/images/twin-sup3.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Slide } from "react-awesome-reveal";
import ModalComponent from "./ModalComponent";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function ListChambres() {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonId, setButtonId] = useState("");

  const openModal = (id, event) => {
    event.preventDefault();
    setButtonId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        buttonId={buttonId}
      />
      <div className="l-chambres">
        <section id="chambres1-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                interval: 2000,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Standard1}
                  data-splide-lazy={Standard1}
                  alt="chambres standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Standard2}
                  data-splide-lazy={Standard2}
                  alt="chambres standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Standard3}
                  data-splide-lazy={Standard3}
                  alt="chambres standard au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>

        <div className="description-chambres">
          <div>
            <h2>{t("hebergement.standard.title")}</h2>
            <p>{t("hebergement.standard.p1")}</p>
            <span>
              <a
                href="./"
                id="modal-chambre1-btn"
                onClick={(event) => openModal("modal-chambre1-btn", event)}
              >
                {t("home.offres.infos")}
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="l-chambres reverse-chambres">
        <div className="description-chambres desc-white">
          <h2>{t("hebergement.confort.title")}</h2>
          <p>{t("hebergement.confort.p1")}</p>
          <span>
            <a
              href="./"
              id="modal-chambre2-btn"
              onClick={(event) => openModal("modal-chambre2-btn", event)}
            >
              {t("home.offres.infos")}
            </a>
          </span>
        </div>

        <section id="chambres2-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                interval: 2000,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Confort1}
                  data-splide-lazy={Confort1}
                  alt="chambres confort au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Confort2}
                  data-splide-lazy={Confort2}
                  alt="chambres confort au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Confort3}
                  data-splide-lazy={Confort3}
                  alt="chambres confort au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
      </div>

      <div className="l-chambres">
        <section id="chambres3-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                interval: 2000,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Superieur1}
                  data-splide-lazy={Superieur1}
                  alt="chambres supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Superieur2}
                  data-splide-lazy={Superieur2}
                  alt="chambres supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Superieur3}
                  data-splide-lazy={Superieur3}
                  alt="chambres supérieurs au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
        <div className="description-chambres">
          <h2>{t("hebergement.superieure.title")}</h2>
          <p>{t("hebergement.superieure.p1")}</p>
          <span>
            <a
              href="./"
              id="modal-chambre3-btn"
              onClick={(event) => openModal("modal-chambre3-btn", event)}
            >
              {t("home.offres.infos")}
            </a>
          </span>
        </div>
      </div>

      <div className="l-chambres reverse-chambres">
        <div className="description-chambres desc-white">
          <h2>{t("hebergement.junior.title")}</h2>
          <p>{t("hebergement.junior.p1")}</p>
          <span>
            <a
              href="./"
              id="modal-chambre4-btn"
              onClick={(event) => openModal("modal-chambre4-btn", event)}
            >
              {t("home.offres.infos")}
            </a>
          </span>
        </div>

        <section id="chambres4-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                interval: 2000,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Junior1}
                  data-splide-lazy={Junior1}
                  alt="chambres Junior au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Junior2}
                  data-splide-lazy={Junior2}
                  alt="chambres Junior au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Junior3}
                  data-splide-lazy={Junior3}
                  alt="chambres Junior au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
      </div>

      <div className="l-chambres">
        <section id="chambres5-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                interval: 2000,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={Twin1}
                  data-splide-lazy={Twin1}
                  alt="chambres Twin standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Twin2}
                  data-splide-lazy={Twin2}
                  alt="chambres Twin standard au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Twin3}
                  data-splide-lazy={Twin3}
                  alt="chambres Twin standard au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
        <div className="description-chambres">
          <h2>{t("hebergement.twin_standard.title")}</h2>
          <p>{t("hebergement.twin_standard.p1")}</p>
          <span>
            <a
              href="./"
              id="modal-chambre5-btn"
              onClick={(event) => openModal("modal-chambre5-btn", event)}
            >
              {t("home.offres.infos")}
            </a>
          </span>
        </div>
      </div>

      <div className="l-chambres reverse-chambres">
        <div className="description-chambres desc-white">
          <h2>{t("hebergement.twin_sup.title")}</h2>
          <p>{t("hebergement.twin_sup.p1")}</p>
          <span>
            <a
              href="./"
              id="modal-chambre6-btn"
              onClick={(event) => openModal("modal-chambre6-btn", event)}
            >
              {t("home.offres.infos")}
            </a>
          </span>
        </div>

        <section id="chambres6-slider">
          <Slide direction="left" duration={1500}>
            <Splide
              options={{
                type: "fade",
                rewind: true,
                autoplay: true,
                cover: true,
                height: "346px",
                width: "519px",
                pauseOnHover: false,
                pagination: false,
                arrows: false,
                speed: 1500,
                interval: 2000,
                drag: false,
                lazyLoad: "nearby",
              }}
            >
              <SplideSlide>
                <img
                  src={TwinSup1}
                  data-splide-lazy={TwinSup1}
                  alt="chambres Twin supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={TwinSup2}
                  data-splide-lazy={TwinSup2}
                  alt="chambres Twin supérieurs au Riad Malaïka"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={TwinSup3}
                  data-splide-lazy={TwinSup3}
                  alt="chambres Twin supérieurs au Riad Malaïka"
                />
              </SplideSlide>
            </Splide>
          </Slide>
        </section>
      </div>
    </div>
  );
}

export default ListChambres;
