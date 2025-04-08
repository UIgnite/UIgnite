import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/website/Navbar";

export default function RootLayout() {
  return (
      <>
      <Navbar />
      <Outlet />
      </>
    
  );
}
