import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/About";
import Register from "./Components/Register";
import SmartEffect from "./Components/SmartEffect";
import ScientificImpact from "./Components/ScientificImpact";
import BusinessIntelligence from "./Components/BusinessIntelligence";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/smart-effect" element={<SmartEffect />} />
          <Route path="/Scientific-Impact" element={<ScientificImpact />} />
          <Route
            path="/Business-Intelligence"
            element={<BusinessIntelligence />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
