import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Founders from "./components/Founders";
import Testimonials from "./components/Testimonials";
import bg from "./assets/image4.png"


const App = () => {
  return (
    <div className="bg-black"
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}>
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
};

export default App;
