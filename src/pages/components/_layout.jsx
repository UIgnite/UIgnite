import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ComponentList from "./componentList";

export default function ComponentLayout() {
  const { componentId } = useParams();

  return (
    <div className="w-full flex h-[calc(100vh-80px)] overflow-y-hidden">
      <div className="w-sm h-full overflow-y-scroll scrollable-content flex flex-col gap-y-2 justify-start">
        <div>
          <div className="font-medium">Components</div>
          <ul className="text-neutral-300 my-4 flex flex-col gap-y-2">
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
  );
}
