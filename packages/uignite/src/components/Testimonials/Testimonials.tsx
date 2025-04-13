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
        `flex-shrink-0 w-88 h-60 m-4 flex flex-col gap-2 shadow-sm p-4 text-black grainy-light rounded-lg`,
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 justify-center items-center">
          <img
            src={imageSrc || '/default-avatar.png'}
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

      <p className="text-md mt-2 overflow-y-auto flex-grow">{message}</p>
    </div>
  );
};

export default Testimonials;
