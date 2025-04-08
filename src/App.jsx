import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import PricingSection from "./pages/PricingPage";
import NotFound from "./components/website/NotFound";
import Test from "./pages/Test";
import Component from "./pages/components";
import RootLayout from "./pages/_layout";

const App = () => {
  return (
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Landing />} />
        <Route path="/components/" element={<Component />} />
        <Route path="/components/:component" element={<Component />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};

export default App;
