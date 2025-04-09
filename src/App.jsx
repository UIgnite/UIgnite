import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import PricingSection from "./pages/PricingPage";
import NotFound from "./components/website/NotFound";
import Test from "./pages/Test";
import Component from "./pages/components";
import RootLayout from "./pages/_layout";
import ComponentLayout from "./pages/components/_layout";
import { ComponentsPage } from "./ComponentsPage/ComponentsPage";
import ComponentContent from "./pages/components/ComponentContent";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Landing />} />
        <Route element={<ComponentLayout />}>
          <Route path="/components/" element={<Component />} />
          <Route path="/components/:componentId" element={<Component />} />
        </Route>
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/testing" element={<ComponentContent />} />

      </Route>
    </Routes>
  );
};

export default App;
