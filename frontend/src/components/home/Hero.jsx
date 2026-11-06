'use client';

import { Button } from '@/components/ui/Button';
import { Link } from '@/components/ui/Link';
import { GitBranch, Users, Mail, ArrowRight, Code, Server, Database } from '@/lib/icons';
import { socialLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-slide-up">
              <Code className="h-4 w-4" aria-hidden="true" />
              Full-Stack MERN Developer
            </div>

            <h1 className="heading-1 mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Building scalable web applications with <span className="text-primary">modern technologies</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Passionate about clean architecture, type-safe APIs, and delightful user experiences.
              4+ years crafting production-ready software with React, Node.js, and MongoDB.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:shihadahmed@example.com">
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '400ms' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'Github' && <GitBranch className="h-5 w-5" aria-hidden="true" />}
                  {social.icon === 'Linkedin' && <Users className="h-5 w-5" aria-hidden="true" />}
                  {social.icon === 'Mail' && <Mail className="h-5 w-5" aria-hidden="true" />}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Code, label: 'Frontend', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                    { icon: Server, label: 'Backend', color: 'text-green-500', bg: 'bg-green-500/10' },
                    { icon: Database, label: 'Database', color: 'text-orange-500', bg: 'bg-orange-500/10' },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4">
                      <div className={cn('mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-3', item.bg)}>
                        <item.icon className={cn('h-8 w-8', item.color)} aria-hidden="true" />
                      </div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">4+ years</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}