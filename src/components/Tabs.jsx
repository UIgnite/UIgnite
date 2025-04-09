import React from "react";
import { useState } from "react";

const Tabs = ({ children, defaultVal = "preview", className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultVal);

  return (
    <>
      <div className={`bg-neutral-800 mt-4 w-[60%] min`}>
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

const TabList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="p-2 flex space-x-2 bg-neutral-800 rounded-md border-2">
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
      className={` px-4 py-1 m-2 rounded-md text-sm font-medium 
        ${isActive ? "bg-green-800 text-gray hover:bg-green-700" : "bg-gray-600 text-white hover:bg-gray-500"}
      `}
    >
      {title}
    </button>
  );
};

const TabContent = ({ value, activeTab, content }) => {
  if (activeTab === value)
    return <div className="overflow-x-auto bg-neutral-800 mt-4">{content}</div>;
};

export { Tabs, Tab, TabList, TabContent };
