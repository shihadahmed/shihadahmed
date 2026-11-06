import { Link } from '@/components/ui/Link';
import { Button } from '@/components/ui/Button';
import { socialLinks } from '@/lib/constants';
import { Mail, ArrowUp, GitBranch, Users } from '@/lib/icons';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4" aria-label="Shihad Ahmed - Home">
              <span className="text-primary">SA</span>
              <span>Shihad Ahmed</span>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              Full-Stack MERN Developer passionate about building scalable web applications and robust backend systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
                    social.name === 'Email' && 'hover:bg-accent'
                  )}
                  aria-label={social.name}
                >
                  {social.icon === 'Github' && <GitBranch className="h-5 w-5" aria-hidden="true" />}
                  {social.icon === 'Linkedin' && <Users className="h-5 w-5" aria-hidden="true" />}
                  {social.icon === 'Mail' && <Mail className="h-5 w-5" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interested in working together? Let's chat!
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:shihadahmed@example.com">
                Get in Touch
                <ArrowUp className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shihad Ahmed. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/#top" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to top
              <ArrowUp className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="https://github.com/shihadahmed" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}