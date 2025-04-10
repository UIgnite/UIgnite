import React from "react";
import { Button } from "../components/Button";
import { CustomTheme } from "../utils/CustomTheme";
import Navbar from "../components/website/Navbar";

const Home = () => {
  return (
    <CustomTheme>
      <Navbar />
      {/* Main Content */}
      <div className="flex justify-center items-center">
        <div className=" min-w-[1200px] ">
          <div className="  -mt-12 z-1 px-4 md:px-8  min-h-screen flex justify-center">
            <div className="w-full max-w-6xl  flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-8xl font-heading font-semibold tracking-tight text-zinc-200 mb-6">
                  <span className="!dark text-black dark:text-light-primary block -mb-2">
                    Less Tweaking
                  </span>
                  <span className="block relative py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
                    More Shipping
                  </span>
                </h1>

                <p className="!dark text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-prose mx-auto dark:text-zinc-400">
                  UIgnite helps you{"  "}
                  <span className="!dark font-semibold text-blue-900 dark:text-blue-50 drop-shadow-[0_0_4px_rgba(30,64,175,0.1)] dark:drop-shadow-[0_0_4px_rgba(30,64,175,0.8)]">
                    skip the design rabbit hole
                  </span>{" "}
                  with ready-to-use components that just look right.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="!dark text-black border-gray-700 bg-transparent border text-lg dark:border-white/20 dark:text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 transition duration-300 rounded-lg px-6 py-6">
                    Get Started
                  </Button>
                  <Button className="bg-blue-600  hover:bg-blue-800 text-white font-semibold rounded-lg px-6 py-6 text-lg transition duration-300 shadow-md ">
                    Explore Components
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center gap-4">
            <div className="text-[#f7f7f8] font-heading  font-semibold relative text-7xl">
              Don't worry too much{" "}
            </div>
            <div className="text-[#c4c0c0] text-2xl font-heading">
              Copy Paste and Relax
            </div>
          </div>

          <div className=" flex flex-row gap-5 z-10 relative mt-24 cursor-pointer">
            <div className="relative flex-1 bg-gray-200 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">Card</div>
            </div>

            <div className="relative flex-2 bg-gray-200 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">Coming Soon</div>
            </div>

            <div className="relative flex-1 bg-gray-200 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">Card</div>
            </div>
          </div>

          <div className=" flex flex-row gap-5 z-10 relative mt-5 cursor-pointer">
            <div className="relative flex-2 bg-gray-200 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">Coming Soon</div>
            </div>

            <div className="relative flex-2 bg-gray-200 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">Coming Soon</div>
            </div>

            <div className="relative flex-2 bg-gray-200 dark:bg-[#17171c] rounded-xl flex justify-center items-center h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-noisy pointer-events-none"></div>
              <div className="relative z-10">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </CustomTheme>
  );
};

export default Home;
