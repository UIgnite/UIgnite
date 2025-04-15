import React from 'react';
import {useState} from 'react';
import {cn} from '@/utils/lib';
import {ReactElement} from 'react';

interface TabContentParams {
  value: string;
  activeTab?: string;
  content: any;
}
interface TabParams {
  title: string;
  value: string;
  activeTab?: string;
  setActiveTab?: any;
  className?: string;
}
interface TabListParams {
  children: ReactElement<TabParams> | ReactElement<TabParams>[];
  activeTab?: any;
  setActiveTab?: (value: string) => void;
  className?: string;
}
interface TabsParams {
  children: ReactElement<TabListParams> | ReactElement<TabListParams>[];
  defaultVal?: string;
  className?: string;
}

const Tabs = ({children, defaultVal = '', className = ''}: TabsParams) => {
  const [activeTab, setActiveTab] = useState<string>(defaultVal);

  return (
    <>
      <div
        className={`  w-[90%] dark:text-white  text-black  ring-[0.5px] ring-neutral-200  dark:ring-neutral-700 rounded-md ${className}`}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            activeTab,
            setActiveTab,
          });
        })}
      </div>
    </>
  );
};

const TabList = ({
  children,
  activeTab,
  setActiveTab,
  className = '',
}: TabListParams) => {
  return (
    <div className={cn(`flex space-x-2   rounded-md`, className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {activeTab, setActiveTab})
      )}
    </div>
  );
};

const Tab = ({
  title = 'Here is the Title',
  value,
  activeTab = '',
  setActiveTab,
  className = '',
}: TabParams) => {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        ` px-6 py-2 rounded-md text-md font-medium cursor-pointer
        ${isActive ? ' dark:text-white dark:bg-neutral-900 text-black bg-neutral-200 ' : ' text-gray-500 hover:text-black dark:text-gray-600 dark:hover:text-white'}
      `,
        className
      )}
    >
      {title}
    </button>
  );
};

const TabContent = ({value, activeTab, content}: TabContentParams) => {
  if (activeTab === value)
    return (
      <div className=" dark:text-white  text-black   rounded-md flex overflow-x-auto scrollable-content  mt-3">
        {content}
      </div>
    );
};

export {Tabs, Tab, TabList, TabContent};
