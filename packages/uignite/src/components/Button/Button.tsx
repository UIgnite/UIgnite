import React, {useEffect, useState} from 'react';
import {cn} from '@/utils/lib';
import {cva} from 'class-variance-authority';
import {Spinner} from '@/components/Spinner';

export interface ButtonParams
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  variant?:
    | 'primary'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'glass'
    | 'gradient'
    | 'dark'
    | 'light'
    | 'movingBorder';
  fullWidth?: boolean;
  animatedBorder?: boolean;
  gradientBorder?: boolean;
  responsiveSize?: 'auto' | 'compact' | 'expand';
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonParams>
>(
  (
    {
      children,
      size = 'default',
      className = '',
      isLoading = false,
      icon,
      variant = 'primary',
      fullWidth,
      animatedBorder = false,
      gradientBorder = false,
      responsiveSize,
      ...props
    },
    ref
  ) => {
    const [animationPosition, setAnimationPosition] = useState({x: 0, y: 0});

    useEffect(() => {
      if (!animatedBorder) return;

      const interval = setInterval(() => {
        setAnimationPosition((prev) => ({
          x: (prev.x + 1) % 100,
          y: (prev.y + 1) % 100,
        }));
      }, 50);

      return () => clearInterval(interval);
    }, [animatedBorder]);

    const buttonVariants = cva(
      'inline-flex text-4xl items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative',
      {
        variants: {
          variant: {
            primary: 'bg-[#305CDE] text-white hover:bg-blue-600',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
            success: 'bg-[#00b306] text-white hover:bg-green-600',
            warning: 'bg-[#ff8a00] text-white hover:bg-yellow-600',
            outline: 'border border-gray-500 bg-transparent hover:bg-gray-700',
            secondary: 'bg-rose-500 text-white hover:bg-rose-400',
            ghost:
              'dark:hover:bg-gray-700 dark:text-white text-gray-700 hover:bg-gray-800 hover:text-gray-100',
            glass:
              'dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 hover:bg-white/60',
            gradient:
              'bg-gradient-to-r from-[#d60db8] to-[#1919e0] text-white hover:from-blue-600 hover:to-purple-700',
            dark: 'bg-black text-white hover:bg-black/70',
            light: 'bg-gray-50 text-black hover:bg-gray-100',
            movingBorder: 'text-white bg-black border-none',
          },
          size: {
            default: 'h-10 px-4 py-2 min-w-[90px]',
            sm: 'h-9 rounded-md px-3 min-w-[80px]',
            lg: 'h-11 rounded-md px-8 min-w-[110px]',
            xl: 'h-12 rounded-md px-10 min-w-[130px] text-base',
            icon: 'h-10 w-10 min-w-[40px]',
          },
          fullWidth: {
            true: 'w-full',
            false: '',
          },
          responsiveSize: {
            auto: 'md:text-base text-xs md:h-10 h-8 md:px-4 px-2',
            compact:
              'lg:h-10 md:h-9 h-8 lg:px-4 md:px-3 px-2 lg:text-sm text-xs',
            expand: 'lg:h-12 md:h-11 h-10 lg:px-8 md:px-6 px-4',
          },
        },
        defaultVariants: {
          variant: 'primary',
          size: 'default',
          fullWidth: false,
          responsiveSize: undefined,
        },
      }
    );

    const getBorderStyle = () => {
      if (animatedBorder) {
        return {
          backgroundImage: `linear-gradient(90deg, #00f0ff, #00ff6a, #ff00e6, #0096ff)`,
          backgroundSize: '300% 300%',
          backgroundPosition: `${animationPosition.x}% ${animationPosition.y}%`,
          padding: '2px',
          borderRadius: '0.375rem',
          animation: "5s ease infinite",
        };
      }
      if (gradientBorder) {
        return {
          backgroundImage:
            'linear-gradient(to right, #4f46e5, #9333ea, #e11d48)',
          padding: '2px',
          borderRadius: '0.375rem',
        };
      }
      return undefined;
    };

    const buttonContent = (
      <>
        {isLoading ? (
          <Spinner className={cn(children ? 'mr-2' : '')} />
        ) : icon ? (
          <span className={cn(children ? 'mr-2' : '')}>{icon}</span>
        ) : null}
        {children}
      </>
    );

    const renderButton = () => (
      <button
        {...props}
        ref={ref}
        className={cn(
          buttonVariants({
            variant: animatedBorder || gradientBorder ? 'dark' : variant,
            size,
            fullWidth,
            responsiveSize,
            className: cn(
              (animatedBorder || gradientBorder) &&
                'w-full m-0 rounded-[calc(0.375rem-1px)]',
              className
            ),
          })
        )}
      >
        {buttonContent}
      </button>
    );

    const borderStyle = getBorderStyle();

    return borderStyle ? (
      <div
        className={cn('inline-flex', fullWidth && 'w-full')}
        style={borderStyle}
      >
        {renderButton()}
      </div>
    ) : (
      renderButton()
    );
  }
);

Button.displayName = 'Button';
