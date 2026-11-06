import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Container = forwardRef(({ className, size = 'lg', children, ...props }, ref) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full',
  };

  return (
    <div ref={ref} className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)} {...props}>
      {children}
    </div>
  );
});
Container.displayName = 'Container';

export { Container };