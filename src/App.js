import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import MostPopularCourses from "./Components/MostPopularCourses";
import SuccessStories from "./Components/SuccessStories";
import OurTrainers from "./Components/OurTrainers";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <HeroSection />
        <MostPopularCourses />
        <SuccessStories />
        <OurTrainers />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
