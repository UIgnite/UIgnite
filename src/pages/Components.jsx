import React, { useState } from "react";
import { Button } from "../components/Button";
import { Tooltip } from "../components/Tooltip";
import { useToast } from "../hooks/toast";
import Avatar from "../components/Avatar";
import Accordion from "../components/Accordion";
import AccordionWrapper from "../components/AccordionWrapper";
import { DatePicker } from "../components/DatePicker";
import MessageBot from "../components/MessageBot";

const Components = () => {
  const toast = useToast();
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center bg-zinc-700">
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

        <Avatar url={"piyush-sir.png"} alt={"user"} />
        <Avatar url={"hitesh-sir.png"} alt={"user"} />

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

        <Button variant="dark" className="mt-10" isLoading></Button>
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

        <MessageBot
          url={"/piyush-sir.png"}
          alt={"/hitesh-sir.png"}
        ></MessageBot>
      </div>
    </>
  );
};

export default Components;
