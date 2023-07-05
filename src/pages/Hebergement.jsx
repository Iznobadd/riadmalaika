import React from "react";
import { useEffect } from "react";
import ListChambres from "../components/chambres/ListChambres";
function Hebergement() {
  useEffect(() => {
    document.title = "Hébergement | Riad Malaika";
  }, []);
  return (
    <div>
      <div className="chambres-banner">
        <h2>Hébergement</h2>
      </div>
      <ListChambres />
    </div>
  );
}

export default Hebergement;
