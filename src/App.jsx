import React from "react";
import { ThemeProvider } from "./Components/Theme.jsx"; // Import ThemeProvider
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import TownMap from "./components/TownMap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider> {/* Wrap entire app in ThemeProvider */}
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Amenities />
        <Gallery />
        <TownMap />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
