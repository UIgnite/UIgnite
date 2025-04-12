import {cn} from '../utils/lib';

interface AvatarParamsT {
  url: string;
  alt: string;
  className?: string;
}

const Avatar = ({url, alt, className = ''}: AvatarParamsT) => {
  return (
    <div className="flex gap-4 mt-2">
      <img
        className={cn(`rounded-full h-12 w-12 object-cover`, className)}
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
