import React from "react";
import { useNavigate } from "react-router-dom";
import { codeString } from "./codeString.js";
import { Preview } from "./Preview.jsx";
import { useParams } from "react-router-dom";

export default function ComponentContent() {
  const { componentId } = useParams();

  return (
    <div className="w-full flex h-[calc(100vh-80px)] overflow-y-hidden mt-10">
      <div className="min-w-[20%] mr-[1%] h-full overflow-y-scroll scrollable-content flex flex-col gap-y-2 justify-start">
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
            <li>Avatar</li>
            <li>Avatar</li>
            <li>Avatar</li>
            <li>Avatar</li>
            <li>Avatar</li>
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
      <div className="w-full h-full  bg-black/100 flex justify-center ">
        {/* <ComponentCard /> */}
        <Preview codeString={codeString} />
      </div>
    </div>
  );
}

export const ComponentCard = ({
  name = "Button",
  imageUrl = "https://placehold.co/600x400",
  desc = "Button is a button whose role is button which is button is called button.",
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/components/button")}
      role="button"
      tabIndex={0}
      className="cursor-pointer group bg-black/100 rounded-lg p-3 transition-colors "
    >
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm text-neutral-400">{desc}</div>
      <div className="mb-2 flex justify-center">
        <img
          className="mt-5 h-[80%] w-[80%] group-hover:scale-105 transition-all duration-500 rounded-md"
          src={imageUrl}
          alt={name}
        />
      </div>
    </div>
  );
};
