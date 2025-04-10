import React from "react";
import { useState } from "react";
import { cn } from "../utils/lib";

const Tabs = ({ children, defaultVal = "preview", className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultVal);

  return (
    <>
      <div className={` mt-4 w-[90%] min ${className}`}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            activeTab,
            setActiveTab,
          });
        })}
      </div>
    </>
  );
};

const TabList = ({ children, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={cn(`flex space-x-2  rounded-md`, className)}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeTab, setActiveTab }),
      )}
    </div>
  );
};

const Tab = ({
  title = "Here is the Title",
  value,
  activeTab = "preview",
  setActiveTab,
  className = "",
}) => {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}

      className={cn(` px-6 py-2 rounded-md text-md font-medium cursor-pointer
        ${isActive ? " text-white bg-neutral-900" : " text-gray-600 hover:text-white"}
      `, className)}
    >
      {title}
    </button>
  );
};

const TabContent = ({ value, activeTab, content }) => {
  if (activeTab === value)
    return (
      <div className=" rounded-md flex justify-center min-h-[100%] overflow-x-auto  mt-3">
        {content}
      </div>
    );
};

export { Tabs, Tab, TabList, TabContent };
