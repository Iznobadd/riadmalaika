import React from "react";
import { useEffect } from "react";
import Banner from "../components/table/Banner";
import Menu from "../components/table/Menu";
import TableForm from "../components/table/TableForm";
import Popup from "./Popup";

function Gastronomie() {
  useEffect(() => {
    document.title = "Gastronomie | Riad Malaika";
  }, []);
  return (
    <div>
      <Banner />
      <Menu />
      <TableForm />
      <Popup />
    </div>
  );
}

export default Gastronomie;
