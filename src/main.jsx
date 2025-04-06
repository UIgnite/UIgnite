import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "./hooks/toast.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Components from "./pages/Components.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import { ThemeProvider } from "./hooks/theme.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>     
        <Route path="/" element={<Landing/>} />
        <Route path="components" element={<Components/>} />
        <Route path="pricing" element={<PricingPage/>}/>
        <Route path="landing" element={<LandingPage/>}/>
    </>
  )
);

createRoot(document.getElementById("root")).render(
   
      <ThemeProvider>
    <ToastProvider>
      <RouterProvider router={router}/>
    </ToastProvider>
    </ThemeProvider>
   
 
);
