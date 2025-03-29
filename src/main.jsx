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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>     
        <Route path="/" element={<Landing/>} />
        <Route path="components" element={<Components/>} />
       
    </>
  )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
    <ToastProvider>
      <RouterProvider router={router}>
      <App />
      </RouterProvider>
    </ToastProvider>
    </StrictMode>
 
);
