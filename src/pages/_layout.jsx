import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/website/Navbar";

export default function RootLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Outlet />
    </div>
  );
}
