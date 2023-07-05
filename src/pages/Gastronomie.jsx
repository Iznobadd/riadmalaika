import React from "react";
import { useEffect } from "react";
import Banner from "../components/table/Banner";
import Menu from "../components/table/Menu";
function Gastronomie() {
  useEffect(() => {
    document.title = "Gastronomie | Riad Malaika";
  }, []);
  return (
    <div>
      <Banner />
      <Menu />
    </div>
  );
}

export default Gastronomie;
