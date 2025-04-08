import React from "react";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <div>
      {/* Background Grid */}

      {/* Main Content */}
      <div className="-mt-2 px-8 md:px-12 min-w-[1200px] min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl text-pretty font-heading font-semibold tracking-tight text-zinc-200 mb-8 funnel">
            <span className="mb-2">Less Tweaking</span>
            <br />
            <span className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-transparent bg-clip-text">
              More Shipping
            </span>
          </h1>

          <p className="text-base/7  max-w-prose text-center text-pretty">
            UIgnite helps you{" "}
            <span className="font-semibold text-orange-600">
              skip the design rabbit hole
            </span>{" "}
            with ready-to-use components that just look right.
          </p>

          <div className="mt-10">
            <Button variant={"ghost"}>Get Started</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Explore Components
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
