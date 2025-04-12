import React from 'react';
import {cn} from '../utils/lib';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  url: string;
  alt: string;
  className?: string;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({url, alt, className = '', ...props}, ref) => {
    return (
      <div className="flex gap-4 mt-2">
        <img
          ref={ref}
          src={url}
          alt={alt}
          className={cn('rounded-full h-12 w-12 object-cover', className)}
          {...props}
        />
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
