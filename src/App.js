import { Route, Routes } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Home from "./pages/Home";
import Gastronomie from "./pages/Gastronomie";
import Hebergement from "./pages/Hebergement";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Gastronomie />} />
        <Route path="/chambres" element={<Hebergement />} />
        <Route path="/loisirs" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
