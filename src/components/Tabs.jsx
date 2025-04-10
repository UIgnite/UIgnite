import React from "react";
import { useState } from "react";

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
    <div
      className={`p-2 flex space-x-2  rounded-md border-1 border-gray-700  ${className}`}
    >
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
  console.log(value, activeTab);
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={` px-4 py-1 m-2 rounded-md text-md font-medium 
        ${isActive ? " text-white" : " text-gray-600 hover:text-white"}
      `}
    >
      {title}
    </button>
  );
};

const TabContent = ({ value, activeTab, content }) => {
  if (activeTab === value)
    return (
      <div className=" rounded-md flex justify-center min-h-[100%] overflow-x-auto  mt-4">
        {content}
      </div>
    );
};

export { Tabs, Tab, TabList, TabContent };
