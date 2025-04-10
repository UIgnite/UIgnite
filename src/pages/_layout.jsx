import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/website/Navbar";
import { CustomTheme } from "../utils/customTheme";

export default function RootLayout() {
  const location = useLocation();
  console.log("location: ", location);
  return (
    <>
      {location.pathname === "/" || location.pathname === "/home" || location.pathname==="/test" ? null : (
        <Navbar />
      )}
      <Outlet />
    </>
  );
}
