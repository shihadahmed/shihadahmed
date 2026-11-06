import { Heading } from '@/components/ui/Heading';
import { Link } from '@/components/ui/Link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { getCurrentExperience, getPastExperiences } from '@/lib/data/experience';
import { cn } from '@/lib/utils';

export function ExperienceHighlight() {
  const current = getCurrentExperience();
  const past = getPastExperiences().slice(0, 1);

  const experiences = [current, ...past].filter((exp) => exp !== undefined);

  return (
    <section id="experience-highlight" className="py-16 sm:py-20 lg:py-24" aria-labelledby="experience-highlight-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <Heading level={2} id="experience-highlight-heading" className="mb-2">
              Experience
            </Heading>
            <p className="text-muted-foreground">
              My professional journey
            </p>
          </div>
          <Link href="/experience" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
            View Full Timeline
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article key={exp.id} className={cn('relative pl-8 pb-8', index < experiences.length - 1 && 'border-l border-muted/50')}>
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" aria-hidden="true" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    {exp.type === 'full-time' && <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">Full-time</span>}
                    {exp.type === 'freelance' && <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-500 rounded-full">Freelance</span>}
                  </div>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                  {exp.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {exp.techStack.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground">
                      +{exp.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-4 text-muted-foreground line-clamp-3">{exp.description}</p>
              <ul className="mt-4 space-y-1">
                {exp.achievements.slice(0, 2).map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/experience" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            View complete timeline
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function formatDateRange(start, end) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endStr = end ? endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
  return `${startStr} - ${endStr}`;
}