import {Skeleton} from '@pkgs/uignite';

const AccordionSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="space-y-2 border-b pb-4">
          {/* Title skeleton */}
          <Skeleton className="h-5 w-3/4 rounded-md" />

          {/* Content skeleton */}
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export {AccordionSkeleton};
