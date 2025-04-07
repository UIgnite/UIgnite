import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/Button";
import { useTheme } from "../hooks/theme";
import { useToast } from "../hooks/toast";

const LandingPage = () => {
  const { theme } = useTheme();
  const toast = useToast()
  return (
    <div className=" max-h-full">
      <Navbar
        lightLogo={"/Darklogo.svg?url"}
        darkLogo={"/Logo.svg"}
        lightGithub={"/GD.png"}
        darkGithub={"/GL.png"}
        lightThemeIcon={"/dark.png"}
        darkThemeIcon={"/light.png"}
        navLinks={[
          { label: "Home", href: "#home" },
          { label: "Docs", href: "#docs" },
          { label: "Components", href: "#components" },
          { label: "Team", href: "#team" },
        ]}
      />
      <div className="flex justify-center items-center">
        <div className="min-w-[1200px]  h-screen flex flex-row ">
          <div className="flex flex-col items-center justify-center h-full w-[60%] relative ">
            <p className="text-6xl absolute">
              Build faster with UGinite – your ultimate React component toolkit
            </p>
            <div className="absolute bottom-0 left-0 right-0 flex  mb-42">
              <Button
                variant={`${theme === "dark" ? "light" : "dark"}`}
                className="w-32 h-12 text-md font-semibold p-2 mr-2"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="w-2/4 flex items-center justify-center">
             <Button
                     onClick={() => {
                       toast.showToast("New toast here", {
                         desc: "I am the new desc.",
                         timeout: 3000,
                       });
                     }}
                     variant={`${theme === "dark" ? "light" : "dark"}`}
                   >
                    Toast
                   </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;