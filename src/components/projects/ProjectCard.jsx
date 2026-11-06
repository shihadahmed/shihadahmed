import Image from 'next/image';
import { Link } from '@/components/ui/Link';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, Code, GitBranch } from '@/lib/icons';

export function ProjectCard({ project, priority = false }) {
  return (
    <article>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        {project.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={priority}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
        )}
        <CardContent className="flex-1 flex flex-col p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-foreground truncate">{project.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            </div>
            {project.featured && (
              <Badge variant="outline" className="shrink-0">
                Featured
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 5} more
              </Badge>
            )}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-4 border-t">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                Code
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </Link>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              Details
              <Code className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}