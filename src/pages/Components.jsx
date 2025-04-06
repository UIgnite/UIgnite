import React, { useState } from "react";
import { Button } from "../components/Button";
import { Tooltip } from "../components/Tooltip";
import { Accordion, AccordionWrapper } from "../components/Accordion";
import { Tabs,TabList, TabContent, Tab } from "../components/Tabs";
import { useToast } from "../hooks/toast";
import Avatar from "../components/Avatar";
import { DatePicker } from "../components/DatePicker";
import MessageBot from "../components/MessageBot";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";

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
        navLinks={[
          { label: "Home", href: "#home" },
          { label: "Docs", href: "#docs" },
          { label: "Components", href: "#components" },
          { label: "Team", href: "#team" },
        ]}
      />

      <div className="flex flex-col items-center justify-center text-center bg-[#0f0f0f]">
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
        <NavMenu />

        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />

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

        <Button className="mt-10" isLoading />
        <Button variant="gradient" className="mt-10">
          Click Me
        </Button>
        
        <Tabs defaultVal="preview" >
          <TabList>
            <Tab title="Preview" value="preview"></Tab>
            <Tab title="Code" value="code"></Tab>
          </TabList>
          <TabContent content="this is preview"  value="preview"></TabContent>
          <TabContent 
            content= {
              <pre className="text-left">
                <code >
{`
  const TabList = ({children, activeTab, setActiveTab}) => {
          return(
        <div className="p-2 flex space-x-2 bg-gray-700 rounded-md border-2" >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, { activeTab, setActiveTab})
          )}
        </div>
      )
  };
`}
                </code>
              </pre>
            }
            value="code"></TabContent>
        </Tabs>


        <Tooltip className="" title={"I am Tooltip "} options={{ delay: 300 }}>
          <Button variant="dark"> Hover Me </Button>
        </Tooltip>

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
          className="w-96 h-10 max-w-full my-4"
        ></Textarea>

        <Testimonials
          imageSrc="/piyush-sir.png"
          name="Piyush Sir"
          title="Co-founder of OnlyFans"
          // rating={O}
          message="Bhai mujhe to literally lgta tumlog ka bhut ganda hoga!"
        ></Testimonials>

      </div>
    </>
  );
};

export default Components;
