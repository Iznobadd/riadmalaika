import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Home from "./pages/Home";
import Gastronomie from "./pages/Gastronomie";
import Hebergement from "./pages/Hebergement";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { useEffect, useLayoutEffect } from "react";
import Mentions from "./pages/Mentions";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Gastronomie />} />
        <Route path="/chambres" element={<Hebergement />} />
        <Route path="/loisirs" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
