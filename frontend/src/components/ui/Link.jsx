import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Link = forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const variants = {
    default: 'text-primary underline-offset-4 hover:underline transition-colors',
    muted: 'text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors',
  };

  return (
    <a
      ref={ref}
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
});
Link.displayName = 'Link';

export { Link };