import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const headingStyles = {
  1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
  2: 'text-3xl sm:text-4xl font-bold tracking-tight',
  3: 'text-2xl sm:text-3xl font-semibold tracking-tight',
  4: 'text-xl sm:text-2xl font-semibold',
  5: 'text-lg font-semibold',
  6: 'text-base font-semibold',
};

const headingTags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

const Heading = forwardRef(({ className, level = 2, children, ...props }, ref) => {
  const Tag = headingTags[level];
  return (
    <Tag ref={ref} className={cn(headingStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
});
Heading.displayName = 'Heading';

export { Heading };