import React, {useState} from 'react';
import {Star} from 'lucide-react';
import {cn} from '@/lib/utils';

export interface RatingsProps {
  className?: string;
  size?: number;
  disabled?: boolean;
}

const StarRating: React.FC<RatingsProps> = ({
  className,
  size = 8,
  disabled = false,
}) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const iconSize = `w-${size} h-${size}`;

  return (
    <div className={cn('flex gap-1 items-center', className)}>
      {Array.from({length: 5}).map((_, index) => {
        const isActive =
          hovered !== null ? index < hovered + 1 : index < rating;

        return (
          <button
            key={index}
            type="button"
            onClick={() => !disabled && setRating(index + 1)}
            onMouseEnter={() => !disabled && setHovered(index)}
            onMouseLeave={() => !disabled && setHovered(null)}
            className={cn(
              'transition-all duration-150 focus:outline-none',
              !disabled && 'cursor-pointer hover:scale-110 active:scale-95'
            )}
            aria-label={`Rate ${index + 1} star${index === 0 ? '' : 's'}`}
          >
            <Star
              className={cn(
                iconSize,
                isActive
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 dark:text-zinc-600 fill-none'
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export {StarRating};
