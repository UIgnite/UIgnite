import React from 'react';
import {cn} from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn(
        'border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md w-sm px-4 py-2',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export interface CardSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader: React.FC<CardSectionProps> = ({className, ...props}) => (
  <div className={cn('mb-2', className)} {...props} />
);
CardHeader.displayName = 'CardHeader';

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => <h3 className={cn('text-lg font-semibold', className)} {...props} />;
CardTitle.displayName = 'CardTitle';

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p className={cn('text-sm', className)} {...props} />;
CardDescription.displayName = 'CardDescription';

const CardContent: React.FC<CardSectionProps> = ({className, ...props}) => (
  <div className={cn('mt-2', className)} {...props} />
);
CardContent.displayName = 'CardContent';

const CardFooter: React.FC<CardSectionProps> = ({className, ...props}) => (
  <div className={cn('mt-4', className)} {...props} />
);
CardFooter.displayName = 'CardFooter';

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};
