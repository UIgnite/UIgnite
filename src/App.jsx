import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import PricingSection from "./pages/PricingPage";
import NotFound from "./components/website/NotFound";
import Auth from "./pages/Auth";
import Component from "./pages/components";
import RootLayout from "./pages/_layout";
import ComponentLayout from "./pages/components/_layout";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Landing />} />
        <Route element={<ComponentLayout />}>
          <Route path="/components/" element={<Component />} />
          <Route path="/components/:componentId" element={<Component />} />
        </Route>
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
