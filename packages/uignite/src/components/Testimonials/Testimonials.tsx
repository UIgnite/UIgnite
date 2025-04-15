import React from 'react';
import {Star} from 'lucide-react';
import {cn} from '@/utils/lib';

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
        `w-full max-w-sm sm:max-w-md md:max-w-lg m-4 flex flex-col gap-2 shadow-sm p-4 text-black grainy-light rounded-lg`,
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex gap-2 justify-center items-center">
          <img
            src={imageSrc || 'https://avatar.iran.liara.run/public'}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start">
            <div className="font-medium">{name}</div>
            <div className="text-xs opacity-60">{title}</div>
          </div>
        </div>

        <div className="flex gap-0.5">
          {Array.from({length: 5}).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 fill-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-base mt-2 overflow-y-auto scrollable-content">
        {message}
      </p>
    </div>
  );
};

export default Testimonials;
