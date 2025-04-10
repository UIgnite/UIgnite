import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ComponentList from "./ComponentList";
import { components } from "../../utils/lib";
import { useNavigate } from "react-router-dom";

export default function ComponentLayout() {
  const { componentId } = useParams();
  const navigate = useNavigate();
  console.log(componentId);
  return (
    <div className="w-full flex h-[calc(100vh-80px)] overflow-y-hidden mt-10">
      {/* Side Bar  */}
      {componentId && (
        <div className="ml-[4%] min-w-[15%] mr-[1%] h-full overflow-y-scroll scrollable-content flex flex-col gap-y-2 justify-start">
          <div>
            <div className="font-med ">Components</div>
            <ul className="text-gray-400 my-4 flex flex-col gap-y-2">
              {components.map((component, index) => (
                <button
                  onClick={() => navigate(`/components/${component.id}`)}
                  className="text-left cursor-pointer hover:text-white"
                >
                  {component.name}
                </button>
              ))}
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
