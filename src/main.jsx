import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from "./hooks/theme.jsx";
import { ToastProvider } from "./hooks/toast.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </ThemeProvider>
);
