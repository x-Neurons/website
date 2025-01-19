import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Founders from "./components/Founders";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs"; // Import Blogs component
import bg from "./assets/image4.png";

const Home = () => (
  <div
    className="bg-black"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "auto",
      backgroundPosition: "center",
    }}
  >
    <Navbar />
    <HeroSection />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Services />
      <Workflow />
      <Founders />
      <Testimonials />
      <Footer />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/blogs" element={<Blogs />} /> {/* Blogs route */}
      </Routes>
    </Router>
  );
};

export default App;
