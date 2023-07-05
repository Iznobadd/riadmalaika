import { Route, Routes } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
