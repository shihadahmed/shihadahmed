import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Section = forwardRef(({ className, size = 'default', children, ...props }, ref) => {
  const sizes = {
    sm: 'py-10 sm:py-12 lg:py-16',
    default: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-24 lg:py-32',
  };

  return (
    <section ref={ref} className={cn(sizes[size], className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
});
Section.displayName = 'Section';

export { Section };