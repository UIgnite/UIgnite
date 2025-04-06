import { cn } from "../utils/lib";

const Skeleton = ({ className }) => {
  return (
    <div
      className={cn(`bg-gray-600 animate-pulse rounded-full ${className}`)}
    ></div>
  );
};

export default Skeleton;
