import { Heading } from '@/components/ui/Heading';
import { Link } from '@/components/ui/Link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { skills, getSkillCategories } from '@/lib/data/skills';
import { cn } from '@/lib/utils';

export function SkillsPreview() {
  const categories = getSkillCategories();
  const topSkills = skills
    .filter((s) => s.proficiency >= 4)
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, 8);

  return (
    <section id="skills-preview" className="py-16 sm:py-20 lg:py-24 bg-muted/30" aria-labelledby="skills-preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <Heading level={2} id="skills-preview-heading" className="mb-2">
              Core Competencies
            </Heading>
            <p className="text-muted-foreground">
              Technologies I work with daily
            </p>
          </div>
          <Link href="/skills" className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
            View All Skills
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topSkills.map((skill) => (
            <div key={skill.name} className="group p-6 bg-card border rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{skill.category}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Proficiency</span>
                  <span className="font-medium text-primary">{skill.proficiency}/5</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                    role="progressbar"
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={1}
                    aria-valuemax={5}
                    aria-label={`${skill.name} proficiency`}
                  />
                </div>
                {skill.yearsExperience && (
                  <p className="text-xs text-muted-foreground">
                    {skill.yearsExperience}+ years experience
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Proficient in {categories.length} technology categories
          </p>
          <Link href="/skills" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            Explore full tech stack
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}