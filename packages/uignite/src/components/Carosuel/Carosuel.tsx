import React, {useState, useRef, useEffect, ReactNode} from 'react';
import {cn} from '@/utils/lib';
import {cva} from 'class-variance-authority';
import {MoveLeft, MoveRight} from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

const carouselVariants = cva('relative w-full', {
  variants: {
    size: {
      default: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const Carosuel: React.FC<CarouselProps> = ({children, className}) => {
  const [current, setCurrent] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (current < children.length - 1) setCurrent((prev) => prev + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const width = container.offsetWidth;
      container.scrollTo({left: current * width, behavior: 'smooth'});
    }
  }, [current]);

  return (
    <div className={cn(carouselVariants(), className)}>
      <div ref={containerRef} className="flex overflow-x-hidden scroll-smooth">
        {React.Children.map(children, (child) => (
          <div className="w-full flex-shrink-0">{child}</div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute top-1/2 -left-10 cursor-pointer transform -translate-y-1/2 dark:bg-black bg-gray-100 border-1 border-gray-200 dark:border-gray-800 rounded-full p-2 shadow hover:bg-gray-200 dark:hover:bg-gray-900 disabled:opacity-40"
      >
        <MoveLeft className="dark:text-gray-200 text-gray-900 " />
      </button>
      <button
        onClick={next}
        disabled={current === children.length - 1}
        className="absolute top-1/2 -right-10 cursor-pointer transform -translate-y-1/2 dark:bg-black bg-gray-100 border-1 border-gray-200 dark:border-gray-800 rounded-full p-2 shadow hover:bg-gray-200 dark:hover:bg-gray-900 disabled:opacity-40"
      >
        <MoveRight className="dark:text-gray-200 text-gray-900" />
      </button>
    </div>
  );
};

export {Carosuel};
