import { Button } from '@/components/ui/Button';
import { Link } from '@/components/ui/Link';
import { Mail, ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="heading-2 mb-4">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          I&apos;m always open to discussing new projects, opportunities, or just chatting about technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="mailto:shihadahmed@example.com">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Get In Touch
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}