import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';
import useEmblaCarousel, {UseEmblaCarouselType} from 'embla-carousel-react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

export type CarouselApi = UseEmblaCarouselType[1];
export type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
export type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  onApiChange?: (api: CarouselApi) => void;
}

export interface CarouselButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

interface CarouselContextProps {
  api: CarouselApi | undefined;
  options?: CarouselOptions;
  orientation: 'horizontal' | 'vertical';
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
};

const cn = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      options,
      plugins,
      orientation = 'horizontal',
      onApiChange,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [, emblaApi] = useEmblaCarousel(
      {
        ...options,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
      if (emblaApi && onApiChange) {
        onApiChange(emblaApi);
      }
    }, [emblaApi, onApiChange]);

    useEffect(() => {
      if (!emblaApi) return;

      onSelect();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);

      return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      };
    }, [emblaApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          api: emblaApi,
          options,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          containerRef,
        }}
      >
        <div
          ref={(node) => {
            if (forwardedRef) {
              if (typeof forwardedRef === 'function') {
                forwardedRef(node);
              } else {
                forwardedRef.current = node;
              }
            }
            if (containerRef.current !== node) {
              containerRef.current = node;
            }
          }}
          className={cn('carousel-container relative', className)}
          onKeyDownCapture={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          tabIndex={0}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = 'Carousel';

export const CarouselViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('carousel-viewport overflow-hidden', className)}
      {...props}
    />
  );
});

CarouselViewport.displayName = 'CarouselViewport';

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const {orientation} = useCarousel();

  return (
    <div
      ref={ref}
      className={cn(
        'carousel-content flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        className
      )}
      {...props}
    />
  );
});

CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const {orientation} = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'carousel-item min-w-0 flex-shrink-0 flex-grow-0',
        orientation === 'horizontal' ? 'w-full' : 'h-full',
        className
      )}
      {...props}
    />
  );
});

CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(({className, variant = 'outline', size = 'md', ...props}, ref) => {
  const {scrollPrev, canScrollPrev, orientation} = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'carousel-previous rounded-full flex items-center justify-center',
        size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10',
        variant === 'outline' ? 'border border-gray-200' : '',
        variant === 'ghost' ? 'hover:bg-gray-100' : 'bg-white',
        'absolute z-10',
        orientation === 'horizontal'
          ? 'top-1/2 -translate-y-1/2 left-4'
          : 'left-1/2 -translate-x-1/2 top-4 rotate-90',
        !canScrollPrev && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ChevronLeft
        className={cn(
          size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
        )}
      />
    </button>
  );
});

CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(({className, variant = 'outline', size = 'md', ...props}, ref) => {
  const {scrollNext, canScrollNext, orientation} = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'carousel-next rounded-full flex items-center justify-center',
        size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10',
        variant === 'outline' ? 'border border-gray-200' : '',
        variant === 'ghost' ? 'hover:bg-gray-100' : 'bg-white',
        'absolute z-10',
        orientation === 'horizontal'
          ? 'top-1/2 -translate-y-1/2 right-4'
          : 'left-1/2 -translate-x-1/2 bottom-4 rotate-90',
        !canScrollNext && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ChevronRight
        className={cn(
          size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
        )}
      />
    </button>
  );
});

CarouselNext.displayName = 'CarouselNext';

export const CarouselIndicators = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {count: number; activeIndex?: number}
>(({className, count, activeIndex, ...props}, ref) => {
  const {api} = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(activeIndex || 0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api, activeIndex]);

  return (
    <div
      ref={ref}
      className={cn(
        'carousel-indicators flex gap-2 justify-center mt-4',
        className
      )}
      {...props}
    >
      {Array.from({length: count}).map((_, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            'h-2 w-2 rounded-full transition-colors',
            selectedIndex === index ? 'bg-black' : 'bg-gray-300'
          )}
          onClick={() => api?.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
});

CarouselIndicators.displayName = 'CarouselIndicators';
