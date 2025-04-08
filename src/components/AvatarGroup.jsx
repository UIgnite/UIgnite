import React from "react";
import Avatar from "./Avatar";

const AvatarGroup = ({ avatars = [] }) => {
  return (
    <div className="flex items-center mt-6 pl-2 overflow-visible">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`
            relative transition-all duration-300 ease-in-out
            ${index !== 0 ? "-ml-4" : ""}
            hover:z-20
          `}
        >
          <Avatar
            url={avatar.url}
            alt={avatar.alt}
            className={`
              w-10 h-10 rounded-full object-cover
              ring-2 ring-white shadow-md
              hover:scale-110 hover:white-500
              transition-transform duration-300 ease-in-out
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
