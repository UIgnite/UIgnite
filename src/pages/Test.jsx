import React from "react";

import { Button } from "../components/Button";
import Navbar from "../components/website/Navbar";
import { CustomTheme } from "../utils/customTheme";

const Test = () => {
  return (
    <CustomTheme>
      <Navbar />
      <div className="px-18 min-h-screen mt-10 ">
        <div>
          <div className=" text-4xl mb-5"> Buttons</div>
          <div className="space-x-4 space-y-4">
            <Button variant="primary">primary</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="success">success</Button>
            <Button variant="warning">warning</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button isLoading variant="gradient" />
            <Button variant="ghost">ghost</Button>
            <Button variant="glass">glass</Button>
            <Button variant="dark">dark</Button>
            <Button variant="light">light</Button>
            <Button variant="gradient">gradient</Button>
            <Button animatedBorder>animatedBorder</Button>
            <Button gradientBorder>gradientBorder</Button>
            <Button className="animate-border text-white font-semibold px-6 py-3 rounded-xl">
              Hover Me
            </Button>
          </div>
        </div>
      </div>
    </CustomTheme>
  );
};

export default Test;
