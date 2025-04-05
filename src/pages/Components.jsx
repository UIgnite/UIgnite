import React, { useState } from "react";
import { Button } from "../components/Button";
import { Tooltip } from "../components/Tooltip";
import { useToast } from "../hooks/toast";
import Avatar from "../components/Avatar";
import Accordion from "../components/Accordion";
import AccordionWrapper from "../components/AccordionWrapper";
import { DatePicker } from "../components/DatePicker";
import MessageBot from "../components/MessageBot";
import Navbar from "../components/Navbar";

import lightLogo from "../assets/uignitelight.png";
import darkLogo from "../assets/uignitelight.png";
import lightGithub from "../assets/GD.png";
import darkGithub from "../assets/GL.png";
import lightThemeIcon from "../assets/dark.png";
import darkThemeIcon from "../assets/light.png";

import { Textarea } from "../components/Textarea";
import Testimonials from "../components/Testimonials";

const Components = () => {
  const toast = useToast(); // Correct placement
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Navbar
        lightLogo={lightLogo}
        darkLogo={darkLogo}
        lightGithub={lightGithub}
        darkGithub={darkGithub}
        lightThemeIcon={lightThemeIcon}
        darkThemeIcon={darkThemeIcon}
      />

      <div className="flex flex-col items-center justify-center text-center bg-zinc-700">
        <Button
          onClick={() => {
            toast.showToast("New toast here", {
              desc: "I am the new desc.",
              timeout: 3000,
            });
          }}
          className="mt-5 bg-gray-50 text-black hover:bg-gray-100"
        >
          Browse Components
        </Button>

        <Tooltip className="" title={"I am Tooltip "} options={{ delay: 300 }}>
          <Button variant="dark"> Hover Me </Button>
        </Tooltip>

        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />

        <div className="mt-5 p-4 bg-gray-800 rounded-md">
          <h3 className="text-lg font-semibold mb-2 text-white">Date Picker</h3>
          <DatePicker
            value={selectedDate}
            onChange={setSelectedDate}
            placeholder="Select a date"
            className="w-64"
            darkMode={true}
          />
          {selectedDate && (
            <p className="mt-2 text-gray-400">
              Selected Date: {selectedDate.toLocaleDateString()}
            </p>
          )}
        </div>
        <Button variant="dark" className="mt-10" isLoading />
        <Button variant="gradient" className="mt-10">
          Click Me
        </Button>

        <AccordionWrapper>
          <Accordion
            title="Title 1"
            content="Content 1"
            className="bg-gray-900"
            defaultOpen
            open
          />
          <Accordion
            title="Title 2"
            content="Content 2"
            className="bg-gray-700"
            defaultOpen={false}
            open
          />
        </AccordionWrapper>
        <MessageBot url={"/piyush-sir.png"} alt={"/hitesh-sir.png"} />
        <MessageBot
          url={"/piyush-sir.png"}
          alt={"/hitesh-sir.png"}
        ></MessageBot>

        <Textarea 
        placeholder="Type your message here..." 
        className="w-96 h-30 max-w-full my-4"></Textarea>
      </div>
    </>
  );
};

export default Components;
