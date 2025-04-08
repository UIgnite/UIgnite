import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Landing from "./pages/Landing";
import PricingSection from "./pages/PricingPage";
import Navbar from "./components/website/Navbar";
import Footer from "./components/website/Footer";
import NotFound from "./components/website/NotFound";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Landing />} />
        <Route path="/components/:component" element={<Components />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
