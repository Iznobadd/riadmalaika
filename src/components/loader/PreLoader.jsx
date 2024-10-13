import React from "react";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-anime.gif";
import Typewriter from "./Typewriter";
const PreLoader = ({ setLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOutText, setFadeOutText] = useState(false);
  const [showDirectText, setShowDirectText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOutText(true);
      setTimeout(() => {
        setShowDirectText(true);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    const hidePreloader = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hidePreloader);
    };
  }, []);
  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <img src={Logo} alt="Loading..." className="preloader-gif" />

      {!showDirectText ? (
        <div className={`text-container ${fadeOutText ? "fade-out-text" : ""}`}>
          <Typewriter
            options={{
              strings: ["عالم منفصل عن العالم"],
              autoStart: true,
              loop: false,
              delay: 60,
            }}
          />
        </div>
      ) : (
        <h2 className="preloader-text-fr">Un monde à part...</h2>
      )}
    </div>
  );
};

export default PreLoader;
