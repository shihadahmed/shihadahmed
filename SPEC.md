# Spec: Shihad Ahmed — Portfolio Website

## Objective

Build a **clean, minimal, production-quality portfolio website** for Shihad Ahmed (Full-Stack MERN Developer) using Next.js 14+ App Router. The site will serve as a professional showcase replacing/enhancing the GitHub profile README, with distinct sections for Projects, Skills, Experience, Blog, and Testimonials.

**Target audience:** Potential employers, clients, and collaborators in the tech industry.
**Success metrics:** Fast load times (LCP < 2.5s), accessible (WCAG 2.1 AA), SEO-optimized, responsive across all devices.

---

## Tech Stack

| Layer | Technology | Version/Notes |
|-------|------------|---------------|
| Framework | Next.js | 14+ (App Router, RSC by default) |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Latest, with custom design tokens |
| UI Components | Custom + Headless UI | No component library dependency |
| Icons | Lucide React | Lightweight, consistent |
| Fonts | next/font (Inter + JetBrains Mono) | Self-hosted, optimized |
| Images | next/image | Automatic optimization |
| Content | MDX (for blog/posts) | `next-mdx-remote` or `contentlayer` |
| Deployment | Vercel | Edge-ready |
| Linting | ESLint + Prettier | Airbnb/Next.js config |
| Testing | Vitest + React Testing Library | Unit/integration |

---

## Commands

```bash
# Development
npm run dev           # Start dev server (Turbopack)

# Build & Validate
npm run build         # Production build (must pass with 0 errors)
npm run lint          # ESLint with --fix
npm run typecheck     # tsc --noEmit
npm run test          # Vitest run --coverage
npm run test:watch    # Vitest watch mode

# Deployment preview
npm run preview       # next build && next start
```

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Route group for main layout
│   │   ├── layout.tsx            # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx              # Home page (hero + featured sections)
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Project detail page
│   │   ├── skills/
│   │   │   └── page.tsx          # Skills & Tech Stack
│   │   ├── experience/
│   │   │   └── page.tsx          # Experience timeline
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Blog post detail
│   │   └── testimonials/
│   │       └── page.tsx          # Testimonials
│   ├── globals.css               # Global styles + Tailwind imports
│   ├── favicon.ico
│   └── robots.txt
├── components/
│   ├── ui/                       # Reusable primitive components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   ├── Heading.tsx
│   │   ├── Link.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeToggle.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── SkillsPreview.tsx
│   │   └── CTABanner.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ProjectDetail.tsx
│   ├── skills/
│   │   ├── SkillCategory.tsx
│   │   ├── SkillBar.tsx
│   │   └── TechStack.tsx
│   ├── experience/
│   │   ├── Timeline.tsx
│   │   └── TimelineItem.tsx
│   ├── blog/
│   │   ├── PostCard.tsx
│   │   ├── PostList.tsx
│   │   └── PostContent.tsx
│   ├── testimonials/
│   │   ├── TestimonialCard.tsx
│   │   └── TestimonialSlider.tsx
│   └── providers/
│       └── ThemeProvider.tsx
├── lib/
│   ├── utils.ts                  # cn(), formatDate(), etc.
│   ├── constants.ts              # Site config, nav links, social links
│   ├── data/
│   │   ├── projects.ts           # Projects data
│   │   ├── skills.ts             # Skills data
│   │   ├── experience.ts         # Experience data
│   │   ├── testimonials.ts       # Testimonials data
│   │   └── site.ts               # Site metadata, author info
│   ├── mdx.ts                    # MDX utilities (if using)
│   └── types.ts                  # Shared TypeScript types
├── content/                      # MDX content (blog posts)
│   └── blog/
│       ├── getting-started-mern.mdx
│       ├── backend-architecture-patterns.mdx
│       └── ...
├── styles/
│   └── globals.css               # Already in app/, but can separate
└── types/
    └── index.ts                  # Global type definitions
```

---

## Code Style

### Component Pattern (Server Component by default)

```tsx
// src/components/projects/ProjectCard.tsx
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        {project.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={priority}
            />
          </div>
        )}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
            </div>
            {project.featured && (
              <Badge variant="outline" className="shrink-0">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-2 border-t">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Card>
    </article>
  );
}
```

### Key Conventions

- **Server Components by default** — Add `'use client'` only at interactive boundaries
- **Semantic HTML** — `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<main>`
- **Tailwind utilities** — No arbitrary values; use design tokens
- **TypeScript strict** — No `any`, explicit return types for exported functions
- **Accessibility first** — ARIA labels, focus states, semantic structure
- **Mobile-first responsive** — `sm:`, `md:`, `lg:`, `xl:` breakpoints

---

## Testing Strategy

| Level | Tool | Scope | Coverage Target |
|-------|------|-------|-----------------|
| Unit | Vitest + RTL | Components, utils, hooks | ≥ 80% |
| Integration | Vitest + RTL | Page compositions, data fetching | Key user flows |
| E2E | Playwright | Critical paths (nav, contact, blog) | Smoke tests |
| Visual | Storybook (optional) | UI component states | All variants |

**Run:** `npm run test -- --coverage` — must pass before commit.

---

## Boundaries

### Always Do
- Run `npm run build` and `npm run lint` before committing
- Use Server Components for data fetching; Client Components only for interactivity
- Optimize all images with `next/image`
- Add `loading.tsx` and `error.tsx` for async route segments
- Use `generateMetadata` for all pages
- Follow mobile-first responsive design
- Ensure WCAG 2.1 AA compliance (contrast, focus, ARIA)

### Ask First
- Adding new npm dependencies (especially UI libraries)
- Changing `next.config.js` or TypeScript config
- Modifying deployment/CI configuration
- Database/schema decisions (if adding CMS later)

### Never Do
- Commit secrets or `.env` files
- Use `<img>` for content images
- Hardcode metadata in JSX
- Skip loading/error boundaries on async routes
- Use arbitrary Tailwind values (`w-[123px]`, `text-[#abc123]`)
- Remove failing tests to make CI pass

---

## Success Criteria

### Functional
- [ ] Home page loads with Hero, Featured Projects, Skills Preview, CTA
- [ ] Projects page lists all projects with filtering by tech stack
- [ ] Project detail page shows full case study (problem, solution, stack, outcomes)
- [ ] Skills page displays categorized tech stack with proficiency indicators
- [ ] Experience page shows timeline with roles, companies, achievements
- [ ] Blog lists posts with pagination; post detail renders MDX with syntax highlighting
- [ ] Testimonials page displays carousel/grid of recommendations
- [ ] Navigation works across all pages; mobile menu functional
- [ ] Dark/light theme toggle persists preference

### Technical
- [ ] `npm run build` completes with 0 TypeScript errors, 0 ESLint warnings
- [ ] Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] All images optimized (WebP/AVIF, responsive sizes)
- [ ] Fonts self-hosted via `next/font` (no layout shift)
- [ ] Proper caching headers for static assets
- [ ] Sitemap.xml and robots.txt generated

### Design & UX
- [ ] Clean minimal aesthetic: ample whitespace, clear hierarchy, restrained color palette
- [ ] Consistent spacing scale (4px base)
- [ ] Smooth transitions (200-300ms) on interactive elements
- [ ] Focus-visible states on all interactive elements
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Works at 320px, 768px, 1024px, 1440px breakpoints

---

## Open Questions

1. **Content source for blog:** Will you write MDX files locally, or prefer a headless CMS (Contentful, Sanity, Notion)?
2. **Analytics:** Do you want Vercel Analytics, Plausible, or Google Analytics?
3. **Contact form:** Should the footer CTA link to a contact form (Server Action + email service like Resend) or just mailto/social links?
4. **Project data:** Do you have project images/screenshots ready, or should we use placeholders initially?
5. **Testimonials:** Do you have 3-5 written testimonials ready, or should we create placeholder structure?
6. **Domain:** Will you deploy to `shihadahmed.vercel.app` first, then connect a custom domain?

---

## Design Tokens (Clean Minimal)

```css
/* Color palette — neutral with single accent */
--color-background: #ffffff;        /* Light mode */
--color-foreground: #0f172a;        /* slate-900 */
--color-muted: #f1f5f9;             /* slate-100 */
--color-muted-foreground: #64748b;  /* slate-500 */
--color-border: #e2e8f0;            /* slate-200 */
--color-primary: #0284c7;           /* sky-600 — professional blue */
--color-primary-foreground: #ffffff;
--color-accent: #f1f5f9;            /* slate-100 */
--color-accent-foreground: #0f172a;

/* Dark mode */
[data-theme="dark"] {
  --color-background: #020617;      /* slate-950 */
  --color-foreground: #f8fafc;      /* slate-50 */
  --color-muted: #0f172a;           /* slate-900 */
  --color-muted-foreground: #94a3b8; /* slate-400 */
  --color-border: #1e293b;          /* slate-800 */
  --color-primary: #38bdf8;         /* sky-400 */
  --color-primary-foreground: #020617;
  --color-accent: #1e293b;          /* slate-800 */
  --color-accent-foreground: #f8fafc;
}

/* Spacing scale (4px base) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */

/* Typography */
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
--text-base: 1rem;        /* 16px */
--text-lg: 1.125rem;      /* 18px */
--text-xl: 1.25rem;       /* 20px */
--text-2xl: 1.5rem;       /* 24px */
--text-3xl: 1.875rem;     /* 30px */
--text-4xl: 2.25rem;      /* 36px */
--text-5xl: 3rem;         /* 48px */

/* Border radius */
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-full: 9999px;

/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

---

## Data Structure Examples

### Project
```ts
interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;  // MDX for detail page
  image?: string;            // OG image / thumbnail
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'api' | 'tool' | 'library';
  startDate: string;         // ISO date
  endDate?: string;
  outcomes?: string[];       // Metrics, results
}
```

### Skill
```ts
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'ui';
  proficiency: 1 | 2 | 3 | 4 | 5;  // 1=beginner, 5=expert
  icon?: string;                    // Lucide icon name or custom SVG
  yearsExperience?: number;
}
```

### Experience
```ts
interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate?: string;      // undefined = current
  description: string;   // MDX supported
  achievements: string[];
  techStack: string[];
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
}
```

### Testimonial
```ts
interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  project?: string;      // Related project
  date: string;
}
```

### Blog Post (MDX Frontmatter)
```yaml
---
title: "Building Scalable MERN Applications"
slug: "building-scalable-mern-applications"
date: "2024-01-15"
excerpt: "Lessons learned from building production SaaS products..."
tags: ["MERN", "Architecture", "Scalability"]
coverImage: "/blog/mern-architecture.jpg"
readingTime: "8 min read"
---
```

---

## Page Specifications

### Home (`/`)
- **Hero**: Name, title, one-liner, CTA buttons (View Projects, Contact), social links
- **Featured Projects**: 3 featured projects (grid on desktop, stack on mobile)
- **Skills Preview**: Top 8-10 skills with proficiency rings/bars
- **Experience Highlight**: Current role + 1 previous
- **CTA Banner**: "Let's work together" with contact link

### Projects (`/projects`)
- Filterable grid (All, Web, API, Tool, Library)
- Each card: thumbnail, title, description, tech badges, links
- Empty state for filtered results

### Project Detail (`/projects/[slug]`)
- Hero: title, description, tech stack, links, image
- Sections: Problem, Solution, Architecture, Outcomes, Learnings
- Next/Previous project navigation

### Skills (`/skills`)
- Categorized tabs: Frontend, Backend, Database, DevOps, Tools, UI
- Each skill: name, proficiency bar (visual), years experience, icon
- Summary stats: "X technologies, Y years experience"

### Experience (`/experience`)
- Vertical timeline (left-aligned on mobile, centered on desktop)
- Each entry: role, company, dates, location, description, achievements, tech stack
- Current role highlighted

### Blog (`/blog`)
- Paginated list (10 per page)
- Each card: cover, title, excerpt, date, tags, reading time
- Tag filter sidebar

### Blog Post (`/blog/[slug]`)
- MDX rendering with syntax highlighting (shiki)
- Table of contents (sticky on desktop)
- Prev/Next navigation
- Share buttons

### Testimonials (`/testimonials`)
- Carousel (auto-rotate, pause on hover) or grid
- Each: avatar, name, role, company, content, project reference
- Empty state if none yet

---

## Accessibility Checklist

- [ ] Semantic heading hierarchy (h1 → h2 → h3)
- [ ] Focus-visible on all interactive elements
- [ ] Skip to main content link
- [ ] Alt text for all images
- [ ] ARIA labels for icon-only buttons
- [ ] Color contrast ≥ 4.5:1 (normal), ≥ 3:1 (large)
- [ ] Reduced motion respected
- [ ] Keyboard navigable (Tab order logical)
- [ ] Screen reader tested (NVDA/VoiceOver)

---

## Deployment Checklist

- [ ] `vercel.json` configured (if needed)
- [ ] Environment variables set in Vercel dashboard
- [ ] Custom domain configured (if applicable)
- [ ] Preview deployments enabled for PRs
- [ ] Analytics script added (if chosen)
- [ ] Sitemap generation verified
- [ ] Robots.txt allows indexing

---

**Next Step:** Please review this spec. Once approved, I'll create the implementation plan (`tasks/plan.md`) and task breakdown (`tasks/todo.md`), then begin implementation.