import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import About from "./components/About";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

const App: React.FC = () => {
  return (
    <div className="page">
      <img src="bg.jpg" className="background" />
      <div className="components-container">
        <Header id="header" />
        <Menu />
        <About />
        <Map />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
