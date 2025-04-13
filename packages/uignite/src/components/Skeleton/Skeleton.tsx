import {cn} from '../utils/lib';

export interface SkeletonParams {
  className?: string;
}
const Skeleton = ({className}: SkeletonParams) => {
  return (
    <div
      className={cn(`bg-gray-600 animate-pulse rounded-full ${className}`)}
    ></div>
  );
};

export default Skeleton;
