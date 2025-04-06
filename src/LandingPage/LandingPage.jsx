import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/Button";

import lightLogo from "../assets/uignitelight.png";
import darkLogo from "../assets/uignitelight.png";
import lightGithub from "../assets/GD.png";
import darkGithub from "../assets/GL.png";
import lightThemeIcon from "../assets/dark.png";
import darkThemeIcon from "../assets/light.png";
import { useTheme } from "../hooks/theme";
import { useToast } from "../hooks/toast";

const LandingPage = () => {
  const { theme } = useTheme();
  const toast = useToast()
  return (
        
        <div className='h-screen'>
            <Navbar
                lightLogo={lightLogo}
                darkLogo={darkLogo}
                lightGithub={lightGithub}
                darkGithub={darkGithub}
                lightThemeIcon={lightThemeIcon}
                darkThemeIcon={darkThemeIcon}
            />
        </div>
   
  )
}

export default LandingPage
