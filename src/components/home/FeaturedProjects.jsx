import { Heading } from '@/components/ui/Heading';
import { Link } from '@/components/ui/Link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="featured-projects" className="py-16 sm:py-20 lg:py-24" aria-labelledby="featured-projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <Heading level={2} id="featured-projects-heading" className="mb-2">
              Featured Projects
            </Heading>
            <p className="text-muted-foreground">
              A selection of my most impactful work
            </p>
          </div>
          <Link href="/projects" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}