import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Home from "./pages/Home";
import Gastronomie from "./pages/Gastronomie";
import Hebergement from "./pages/Hebergement";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Mentions from "./pages/Mentions";
import Logo from "./assets/images/logo-anime.gif";
import Logo2 from "./assets/images/page-logo2.gif";
import Typewriter from "./components/loader/Typewriter";
import Popup from "./pages/Popup";

const Loader = ({ fadeOutPage }) => (
  <div className={`page-loader ${fadeOutPage ? "fade-out" : ""}`}>
    <img src={Logo2} alt="Loading..." className="preloader-gif" />
  </div>
);

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOutText, setFadeOutText] = useState(false);
  const [fadeOutPage, setFadeOutPage] = useState(false);
  const [showDirectText, setShowDirectText] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOutText(true);
      setTimeout(() => {
        setShowDirectText(true);
      }, 1000);
    }, 3000);

    const initialTimer = setTimeout(() => {
      setFadeOut(true);
    }, 7000);

    const hidePreloader = setTimeout(() => {
      setInitialLoading(false);
    }, 7500);

    return () => {
      clearTimeout(timer);
      clearTimeout(initialTimer);
      clearTimeout(hidePreloader);
    };
  }, []);

  useEffect(() => {
    if (!initialLoading) {
      setPageLoading(true);
      setFadeOutPage(false);

      const fadeOutTimer = setTimeout(() => {
        setFadeOutPage(true);
      }, 1500);

      const timer = setTimeout(() => {
        setPageLoading(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeOutTimer);
      };
    }
  }, [location]);

  if (initialLoading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <div className="preloader-principal">
          <img src={Logo} alt="Loading..." className="preloader-gif" />
          {/* <h2 className="preloader-title">ESSAOUIRA MOGADOR</h2> */}
        </div>
        <div>
          {!showDirectText ? (
            <div
              className={`text-container ${fadeOutText ? "fade-out-text" : ""}`}
            >
              <Typewriter
                options={{
                  strings: ["عالم منفصل عن العالم"],
                  autoStart: true,
                  loop: false,
                  delay: 75,
                }}
              />
            </div>
          ) : (
            <h2 className="preloader-text-fr">Un monde à part...</h2>
          )}
        </div>
      </div>
    );
  }

  // Si une page est en cours de chargement (avec fade out)
  if (pageLoading) return <Loader fadeOutPage={fadeOutPage} />;

  // Si tout est chargé, afficher le contenu de l'application
  return (
    <>
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Gastronomie />} />
        <Route path="/chambres" element={<Hebergement />} />
        <Route path="/loisirs" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
