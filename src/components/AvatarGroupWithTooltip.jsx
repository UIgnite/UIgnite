import React from "react";
import AvatarGroup from "./AvatarGroup";
import { Tooltip } from "./Tooltip";

// Mapping avatars to its tootip
const AvatarGroupWithTooltip = ({ avatars = [] }) => {
  const avatarsWithTooltips = avatars.map((avatar) => ({
    ...avatar,
    element: (
      <Tooltip key={avatar.alt} title={avatar.alt}>
        <img
          src={avatar.url}
          alt={avatar.alt}
          className="w-10 h-10  mt-2 rounded-full object-cover ring-2 ring-white shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </Tooltip>
    ),
  }));

  return (
    <div className="flex items-center mt-6 pl-2 overflow-visible">
      {avatarsWithTooltips.map((avatar, index) => (
        <div
          key={index}
          className={`
            relative transition-all duration-300 ease-in-out
            ${index !== 0 ? "-ml-4 " : ""}
            hover:z-20
          `}
        >
          {avatar.element}
        </div>
      ))}
    </div>
  );
};

export default AvatarGroupWithTooltip;
