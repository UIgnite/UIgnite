import React from 'react'
import Navbar from '../components/Navbar'

import lightLogo from "../assets/uignitelight.png";
import darkLogo from "../assets/uignitelight.png";
import lightGithub from "../assets/GD.png";
import darkGithub from "../assets/GL.png";
import lightThemeIcon from "../assets/dark.png";
import darkThemeIcon from "../assets/light.png";

const LandingPage = () => {
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
