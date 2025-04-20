import React from 'react';
import {Star} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Avatar} from '../Avatar';

export interface TestimonialsProps {
  imageSrc?: string;
  name: string;
  title: string;
  rating?: number;
  message: string;
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  imageSrc,
  name,
  title,
  rating = 5,
  message,
  className,
}) => {
  return (
    <div
      className={cn(
        'w-full max-w-lg rounded-2xl shadow-md p-6 sm:p-8 flex flex-col gap-4 text-black',
        'transition-all duration-200 ease-in-out',
        'grainy-light',
        className
      )}
    >
      {/*  Avatar + Info + Rating */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar
            url={imageSrc || 'https://avatar.iran.liara.run/public'}
            alt={name}
            className="sm:size-14 object-cover"
          />
          <div>
            <div className="font-medium text-base sm:text-lg">{name}</div>
            <div className="text-xs text-zinc-500">{title}</div>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          {Array.from({length: 5}).map((_, index) => (
            <Star
              key={index}
              className={cn(
                'w-4 h-4',
                index < rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 dark:text-zinc-600 fill-none'
              )}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Message */}
      <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-700/90">
        {message}
      </p>
    </div>
  );
};

export {Testimonials};
