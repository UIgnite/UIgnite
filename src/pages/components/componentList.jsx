import React from "react";
import { useNavigate } from "react-router-dom";

export default function ComponentList() {
  return (
    <div className="w-full h-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2">
      {["", "","", "","", "",].map((_, idx) => (
        <ComponentCard key={idx} />
      ))}
    </div>
  );
}

const ComponentCard = ({
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
      className="cursor-pointer group hover:bg-black/60 rounded-lg p-3 transition-colors"
    >
      <div className="mb-2">
        <img
          className="group-hover:scale-105 transition-all rounded-md"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm text-neutral-400">{desc}</div>
    </div>
  );
};
