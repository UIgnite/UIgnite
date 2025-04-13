import React from 'react';
import Avatar from './Avatar';
import {Tooltip} from './Tooltip';

interface AvatarData {
  url: string;
  alt: string;
}

interface AvatarGroupProps {
  avatars?: AvatarData[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({avatars = []}) => {
  return (
    <div className="flex items-center mt-6 pl-2 overflow-visible">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`relative transition-all duration-300 ease-in-out ${
            index !== 0 ? '-ml-7' : ''
          } hover:z-20`}
        >
          <Tooltip title={avatar.alt} options={{tooltipStyle: {width: 'auto'}}}>
            <Avatar
              url={avatar.url}
              alt={avatar.alt}
              className={`
                w-12 h-12 rounded-full object-cover
                ring-2 ring-white shadow-md
                hover:scale-110 hover:white-500
                transition-transform duration-300 ease-in-out
              `}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
