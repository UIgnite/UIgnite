import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ComponentList from "./componentList";

export default function ComponentLayout() {
  const { componentId } = useParams();

  return (
    <div className="!dark  bg-light-primary dark:bg-dark-primary flex items-center justify-center ">
      <div className="max-w-[85rem] flex h-[calc(100vh-80px)] overflow-y-hidden">
        <div className="w-[300px] h-full px-4 overflow-y-scroll scrollable-content flex flex-col justify-start">
          <div>
            <div className="font-medium">Components</div>
            <ul className="!dark dark:text-neutral-300 text-gray-600 font-md my-4 flex flex-col gap-y-2">
              <li>Button</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow h-full px-4 scrollable-content overflow-y-scroll">
          {componentId ? <Outlet /> : <ComponentList />}
        </div>
      </div>
    </div>
  );
}
