import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ComponentList from "./ComponentList"; 
import {components} from "../../utils/lib"

export default function ComponentLayout() {
  const { componentId } = useParams();

  return (
    <div className="w-full flex h-[calc(100vh-80px)] overflow-y-hidden mt-10">
      {/* Side Bar  */}
      {componentId && (
        <div className="ml-[4%] min-w-[15%] mr-[1%] h-full overflow-y-scroll scrollable-content flex flex-col gap-y-2 justify-start">
          <div>
            <div className="font-med ">Components</div>
            <ul className="text-gray-400 my-4 flex flex-col gap-y-2">
              <li>Button</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
              <li>Avatar</li>
             
            </ul>
          </div>
        </div>
      )}

      <div className="flex-grow h-full px-4 scrollable-content overflow-y-scroll">
        {componentId ? <Outlet /> : <ComponentList />}
      </div>

      
    </div>
  );
}
