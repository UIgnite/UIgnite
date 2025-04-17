import {cn} from '@/lib/utils';

export interface SkeletonParams {
  className?: string;
}
const Skeleton = ({className}: SkeletonParams) => {
  return (
    <div
      className={cn(`dark:bg-gray-600 bg-gray-400 animate-pulse rounded-full ${className}`)}
    ></div>
  );
};

export default Skeleton;
