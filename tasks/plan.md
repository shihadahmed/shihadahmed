# Implementation Plan: Shihad Ahmed Portfolio Website

## Overview

Build a clean, minimal Next.js 14+ portfolio website with App Router, featuring Home, Projects, Skills, Experience, Blog, and Testimonials pages. Implementation follows vertical slicing — each phase delivers a working, deployable slice.

---

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **App Router + Server Components** | Default RSC reduces client bundle; streaming SSR for performance |
| **Tailwind CSS with CSS Variables** | Design tokens as CSS custom properties enable theming without config changes |
| **MDX for Blog (local files)** | Zero external dependencies; version-controlled content; fast builds |
| **next/font (Inter + JetBrains Mono)** | Self-hosted, zero layout shift, optimized loading |
| **Lucide React for Icons** | Tree-shakeable, consistent, lightweight |
| **No UI Library (Headless UI primitives)** | Full control, minimal bundle, no "AI aesthetic" |
| **Theme via CSS Variables + localStorage** | No context provider overhead for simple theme toggle |
| **Vercel Deployment** | Native Next.js support, edge functions, preview deployments |

---

## Task List

### Phase 1: Foundation (Tasks 1-7)

**Goal:** Working Next.js project with design system, layout, and navigation.

- [ ] **Task 1: Project Initialization & Config**
  - Initialize Next.js 14+ with TypeScript, Tailwind, ESLint, Prettier
  - Configure `next.config.js`, `tsconfig.json`, `tailwind.config.ts`
  - Set up `next/font` for Inter + JetBrains Mono
  - **Acceptance:** `npm run dev` starts; `npm run build` passes; `npm run lint` clean
  - **Verification:** `npm run build && npm run lint && npm run typecheck`
  - **Files:** `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `.eslintrc.json`, `.prettierrc`
  - **Scope:** Medium

- [ ] **Task 2: Design Tokens & Global Styles**
  - Create CSS variables for colors, spacing, typography, radius, transitions (from SPEC)
  - Configure Tailwind to use design tokens via `theme.extend`
  - Create `globals.css` with `@tailwind` imports and base styles
  - **Acceptance:** Design tokens applied; dark/light mode works via `[data-theme]`
  - **Verification:** Visual check in browser; `npm run build`
  - **Files:** `src/app/globals.css`, `tailwind.config.ts`
  - **Scope:** Small

- [ ] **Task 3: Theme Provider & Toggle**
  - Create `ThemeProvider` client component (minimal, uses `localStorage` + `document.documentElement`)
  - Create `ThemeToggle` button with icon swap (sun/moon)
  - Persist preference; respect `prefers-color-scheme` default
  - **Acceptance:** Toggle switches theme; persists on reload; no flash on load
  - **Verification:** Manual test in browser; check localStorage
  - **Files:** `src/components/providers/ThemeProvider.tsx`, `src/components/layout/ThemeToggle.tsx`
  - **Scope:** Small

- [ ] **Task 4: Layout Components (Header, Footer, Navigation)**
  - `Header`: Logo, navigation links, ThemeToggle, mobile menu button
  - `Navigation`: Responsive (desktop horizontal, mobile slide-in drawer)
  - `Footer`: Social links, copyright, back-to-top
  - All semantic HTML, accessible (ARIA, focus management)
  - **Acceptance:** Navigation works on all breakpoints; mobile menu accessible
  - **Verification:** Manual test at 320px, 768px, 1024px, 1440px
  - **Files:** `src/components/layout/Header.tsx`, `src/components/layout/Navigation.tsx`, `src/components/layout/Footer.tsx`
  - **Scope:** Medium

- [ ] **Task 5: Root Layout & Metadata**
  - `app/layout.tsx`: Providers, fonts, global styles, metadata defaults
  - `generateMetadata` for site title, description, OG image, Twitter card
  - Favicon, robots.txt, sitemap.ts configuration
  - **Acceptance:** Metadata renders correctly; fonts load without layout shift
  - **Verification:** View source; Lighthouse SEO audit
  - **Files:** `src/app/layout.tsx`, `src/app/metadata.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`
  - **Scope:** Small

- [ ] **Task 6: UI Primitive Components**
  - `Button` (variants: primary, secondary, outline, ghost; sizes: sm, md, lg)
  - `Card` (compound: CardHeader, CardTitle, CardContent, CardFooter)
  - `Badge` (variants: default, secondary, outline)
  - `Section` (consistent padding, max-width container)
  - `Container` (responsive max-widths)
  - `Heading` (h1-h6 with design token styles)
  - `Link` (styled, accessible)
  - All with TypeScript interfaces, forwarded refs, className merging via `cn()`
  - **Acceptance:** All primitives render; Storybook-ready (optional); accessible
  - **Verification:** `npm run test` (unit tests); visual check
  - **Files:** `src/components/ui/*.tsx`, `src/components/ui/index.ts`, `src/lib/utils.ts`
  - **Scope:** Medium

- [ ] **Task 7: Site Configuration & Data Layer**
  - `lib/constants.ts`: Site config (name, title, description, social links, nav items)
  - `lib/data/site.ts`: Author info, SEO defaults
  - `lib/types.ts`: Shared TypeScript interfaces (Project, Skill, Experience, Testimonial, BlogPost)
  - `lib/utils.ts`: `cn()`, `formatDate()`, `readingTime()`, slug helpers
  - **Acceptance:** Type-safe data structures; constants used across components
  - **Verification:** `npm run typecheck`; import in components
  - **Files:** `src/lib/constants.ts`, `src/lib/data/site.ts`, `src/lib/types.ts`, `src/lib/utils.ts`
  - **Scope:** Small

---

### Checkpoint: Foundation Complete
- [ ] `npm run build` passes with 0 errors
- [ ] `npm run lint` clean
- [ ] `npm run typecheck` clean
- [ ] All tests pass
- [ ] Dev server runs; navigation works; theme toggle persists
- [ ] **Human review before proceeding**

---

### Phase 2: Home Page & Core Sections (Tasks 8-13)

**Goal:** Complete home page with all sections, reusable components for reuse.

- [ ] **Task 8: Hero Section**
  - `Hero` component: Name, title, tagline, CTA buttons (Projects, Contact), social icons
  - Animated entrance (fade-up, stagger); responsive typography
  - **Acceptance:** Visually matches spec; CTAs navigate correctly; animated on load
  - **Verification:** Visual check; click CTAs
  - **Files:** `src/components/home/Hero.tsx`
  - **Scope:** Small

- [ ] **Task 9: Featured Projects Section**
  - `FeaturedProjects`: Grid of 3 featured ProjectCards (from data)
  - `ProjectCard` component (reusable for Projects page)
  - Links to project detail pages
  - **Acceptance:** Displays 3 featured projects; cards link correctly; responsive grid
  - **Verification:** Visual check; click through to detail (404 until Task 11)
  - **Files:** `src/components/home/FeaturedProjects.tsx`, `src/components/projects/ProjectCard.tsx`
  - **Scope:** Small

- [ ] **Task 10: Skills Preview Section**
  - `SkillsPreview`: Top 8-10 skills with proficiency rings/bars
  - `SkillBar` component (reusable for Skills page)
  - Link to full Skills page
  - **Acceptance:** Shows proficiency visually; links to /skills
  - **Verification:** Visual check
  - **Files:** `src/components/home/SkillsPreview.tsx`, `src/components/skills/SkillBar.tsx`
  - **Scope:** Small

- [ ] **Task 11: Experience Highlight Section**
  - `ExperienceHighlight`: Current role + 1 previous (from data)
  - `TimelineItem` component (reusable for Experience page)
  - Link to full Experience page
  - **Acceptance:** Shows 2 roles correctly; links to /experience
  - **Verification:** Visual check
  - **Files:** `src/components/home/ExperienceHighlight.tsx`, `src/components/experience/TimelineItem.tsx`
  - **Scope:** Small

- [ ] **Task 12: CTA Banner**
  - `CTABanner`: "Let's work together" with email/contact link
  - Styled prominently; accessible
  - **Acceptance:** Renders correctly; link works
  - **Verification:** Visual check; click link
  - **Files:** `src/components/home/CTABanner.tsx`
  - **Scope:** XS

- [ ] **Task 13: Home Page Assembly**
  - `app/(main)/page.tsx`: Compose all sections with proper semantics
  - Add `generateMetadata` for home page
  - **Acceptance:** Full home page renders; all sections present; metadata correct
  - **Verification:** Visual check; view source for metadata
  - **Files:** `src/app/(main)/page.tsx`
  - **Scope:** Small

---

### Checkpoint: Home Page Complete
- [ ] Home page loads with all sections
- [ ] Navigation between sections works
- [ ] Responsive at all breakpoints
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

### Phase 3: Projects Pages (Tasks 14-17)

**Goal:** Projects listing with filtering + detail pages.

- [ ] **Task 14: Projects Data & Filtering Logic**
  - `lib/data/projects.ts`: Array of Project objects (10+ projects with varied categories)
  - Filter utility: by category (all, web, api, tool, library)
  - **Acceptance:** Data typed correctly; filter utility tested
  - **Verification:** `npm run test` (unit tests for filter)
  - **Files:** `src/lib/data/projects.ts`, `src/lib/utils.ts` (filter fn)
  - **Scope:** Small

- [ ] **Task 15: Projects Listing Page**
  - `app/(main)/projects/page.tsx`: Server Component fetching/displaying projects
  - Filter tabs (All, Web, API, Tool, Library) — client-side filter
  - `ProjectGrid` component: responsive grid of `ProjectCard`
  - Empty state for no results
  - **Acceptance:** Lists all projects; filter works; responsive; empty state shown
  - **Verification:** Visual check; filter each category
  - **Files:** `src/app/(main)/projects/page.tsx`, `src/components/projects/ProjectGrid.tsx`
  - **Scope:** Medium

- [ ] **Task 16: Project Detail Page**
  - `app/(main)/projects/[slug]/page.tsx`: Dynamic route for each project
  - `ProjectDetail` component: Hero image, title, description, tech stack, links, long description (MDX)
  - Problem/Solution/Architecture/Outcomes sections
  - Next/Previous project navigation
  - `generateMetadata` from project data
  - `loading.tsx` and `error.tsx` boundaries
  - **Acceptance:** Detail page renders for each slug; metadata correct; navigation works
  - **Verification:** Visit each project URL; check metadata; test prev/next
  - **Files:** `src/app/(main)/projects/[slug]/page.tsx`, `src/components/projects/ProjectDetail.tsx`, `src/app/(main)/projects/[slug]/loading.tsx`, `src/app/(main)/projects/[slug]/error.tsx`
  - **Scope:** Medium

- [ ] **Task 17: Project Images & Optimization**
  - Add placeholder images to `public/projects/` or use external CDN
  - Configure `next/image` remote patterns if external
  - Priority loading for featured projects
  - **Acceptance:** Images load optimized; no layout shift; WebP/AVIF served
  - **Verification:** Lighthouse Performance audit; Network tab check formats
  - **Files:** `public/projects/*`, `next.config.js` (images config)
  - **Scope:** Small

---

### Checkpoint: Projects Complete
- [ ] Projects listing works with filters
- [ ] All detail pages accessible via slug
- [ ] Images optimized
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

### Phase 4: Skills Page (Tasks 18-19)

**Goal:** Categorized skills with proficiency visualization.

- [ ] **Task 18: Skills Data & Components**
  - `lib/data/skills.ts`: Skills array with category, proficiency (1-5), years, icon
  - `SkillCategory` component: Tab panel for each category
  - `TechStack` component: Grid of skill badges with proficiency bars
  - **Acceptance:** Data complete; components render correctly per category
  - **Verification:** Visual check; unit tests for proficiency calc
  - **Files:** `src/lib/data/skills.ts`, `src/components/skills/SkillCategory.tsx`, `src/components/skills/TechStack.tsx`
  - **Scope:** Small

- [ ] **Task 19: Skills Page Assembly**
  - `app/(main)/skills/page.tsx`: Tabbed interface (Frontend, Backend, Database, DevOps, Tools, UI)
  - Summary stats: "X technologies, Y years experience"
  - `generateMetadata`
  - **Acceptance:** Page renders all categories; tabs switch; stats correct
  - **Verification:** Visual check; click each tab
  - **Files:** `src/app/(main)/skills/page.tsx`
  - **Scope:** Small

---

### Checkpoint: Skills Complete
- [ ] Skills page functional
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

### Phase 5: Experience Page (Tasks 20-21)

**Goal:** Vertical timeline with roles and achievements.

- [ ] **Task 20: Experience Data & Timeline Components**
  - `lib/data/experience.ts`: Experience entries (current + 3-4 previous)
  - `Timeline` component: Vertical line, dots, responsive layout
  - `TimelineItem` (from Task 11, enhanced for full page)
  - **Acceptance:** Data complete; timeline renders correctly
  - **Verification:** Visual check
  - **Files:** `src/lib/data/experience.ts`, `src/components/experience/Timeline.tsx`, `src/components/experience/TimelineItem.tsx`
  - **Scope:** Small

- [ ] **Task 21: Experience Page Assembly**
  - `app/(main)/experience/page.tsx`: Compose timeline
  - Current role highlighted (different styling)
  - `generateMetadata`
  - **Acceptance:** Page renders full timeline; current role distinct
  - **Verification:** Visual check
  - **Files:** `src/app/(main)/experience/page.tsx`
  - **Scope:** XS

---

### Checkpoint: Experience Complete
- [ ] Experience page functional
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

### Phase 6: Blog (MDX) (Tasks 22-26)

**Goal:** Blog with MDX posts, syntax highlighting, pagination.

- [ ] **Task 22: MDX Setup & Configuration**
  - Install `next-mdx-remote` or `contentlayer` (prefer `next-mdx-remote` for simplicity)
  - Configure MDX processing: remark/rehype plugins for GFM, syntax highlighting (shiki)
  - Create `lib/mdx.ts` utilities: `getAllPosts()`, `getPostBySlug()`, `getPostsByTag()`
  - **Acceptance:** MDX compiles; frontmatter typed; syntax highlighting works
  - **Verification:** `npm run build`; test MDX rendering
  - **Files:** `package.json`, `src/lib/mdx.ts`, `src/lib/types.ts` (BlogPost interface)
  - **Scope:** Medium

- [ ] **Task 23: Blog Post Components**
  - `PostContent`: Renders MDX with custom components (code blocks, headings, images)
  - `PostCard`: Listing card with cover, title, excerpt, date, tags, reading time
  - `TableOfContents`: Auto-generated from headings, sticky on desktop
  - Code blocks with copy button, line numbers, language badge
  - **Acceptance:** MDX renders with all features; TOC works; code blocks styled
  - **Verification:** Visual check on sample post
  - **Files:** `src/components/blog/PostContent.tsx`, `src/components/blog/PostCard.tsx`, `src/components/blog/TableOfContents.tsx`, `src/components/blog/CodeBlock.tsx`
  - **Scope:** Medium

- [ ] **Task 24: Blog Listing Page**
  - `app/(main)/blog/page.tsx`: Paginated list (10 per page)
  - Tag filter sidebar (client-side)
  - `PostList` component: Grid of `PostCard`
  - `generateMetadata`
  - **Acceptance:** Lists posts; pagination works; tag filter works
  - **Verification:** Visual check; paginate; filter tags
  - **Files:** `src/app/(main)/blog/page.tsx`, `src/components/blog/PostList.tsx`
  - **Scope:** Medium

- [ ] **Task 25: Blog Post Detail Page**
  - `app/(main)/blog/[slug]/page.tsx`: Dynamic route for each post
  - Render `PostContent` with `TableOfContents`
  - Prev/Next navigation (by date)
  - Share buttons (Twitter, LinkedIn, Copy link)
  - `generateMetadata` from frontmatter (OG image, description)
  - `loading.tsx` and `error.tsx`
  - **Acceptance:** Post renders fully; metadata correct; nav works; share works
  - **Verification:** Visit post URLs; check metadata; test prev/next
  - **Files:** `src/app/(main)/blog/[slug]/page.tsx`, `src/app/(main)/blog/[slug]/loading.tsx`, `src/app/(main)/blog/[slug]/error.tsx`
  - **Scope:** Medium

- [ ] **Task 26: Sample Blog Posts**
  - Create 3-4 MDX posts in `content/blog/`:
    - "Building Scalable MERN Applications"
    - "Backend Architecture Patterns for SaaS"
    - "Type-Safe APIs with tRPC and Zod"
    - "Modern React Patterns in 2024"
  - Each with frontmatter, cover image, realistic content
  - **Acceptance:** Posts render correctly; reading time calculated; tags work
  - **Verification:** Visual check all posts
  - **Files:** `content/blog/*.mdx`, `public/blog/*.jpg` (cover images)
  - **Scope:** Small

---

### Checkpoint: Blog Complete
- [ ] Blog listing + detail pages functional
- [ ] MDX rendering with syntax highlighting
- [ ] Pagination and tag filtering work
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

### Phase 7: Testimonials Page (Tasks 27-28)

**Goal:** Testimonials carousel/grid.

- [ ] **Task 27: Testimonials Data & Components**
  - `lib/data/testimonials.ts`: 3-5 testimonial objects (or placeholder structure)
  - `TestimonialCard`: Avatar, name, role, company, content, project ref
  - `TestimonialSlider`: Auto-rotate, pause on hover, keyboard nav, dots
  - **Acceptance:** Data ready; slider works with all interactions
  - **Verification:** Visual check; test auto-rotate, pause, keyboard
  - **Files:** `src/lib/data/testimonials.ts`, `src/components/testimonials/TestimonialCard.tsx`, `src/components/testimonials/TestimonialSlider.tsx`
  - **Scope:** Small

- [ ] **Task 28: Testimonials Page Assembly**
  - `app/(main)/testimonials/page.tsx`: Slider or grid layout
  - Empty state if no testimonials
  - `generateMetadata`
  - **Acceptance:** Page renders; responsive; empty state handled
  - **Verification:** Visual check
  - **Files:** `src/app/(main)/testimonials/page.tsx`
  - **Scope:** XS

---

### Checkpoint: Testimonials Complete
- [ ] Testimonials page functional
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

### Phase 8: Polish & Deploy (Tasks 29-33)

**Goal:** Production-ready quality, performance, accessibility.

- [ ] **Task 29: Accessibility Audit & Fixes**
  - Run `axe-core` in dev; fix all violations
  - Verify heading hierarchy, focus states, ARIA labels, contrast
  - Test with screen reader (NVDA/VoiceOver)
  - Add skip-to-main-content link
  - **Acceptance:** Zero axe violations; WCAG 2.1 AA compliant
  - **Verification:** `npm run test:a11y` (if configured); manual screen reader test
  - **Files:** Various (fixes across components)
  - **Scope:** Medium

- [ ] **Task 30: Performance Optimization**
  - Optimize images (proper sizes, formats, priority)
  - Ensure font loading optimal (`display: swap`, preload)
  - Add `loading="lazy"` where appropriate
  - Review bundle size (`next build` output); code-split heavy components
  - **Acceptance:** Lighthouse Performance ≥ 90
  - **Verification:** `npm run build`; Lighthouse CI or local audit
  - **Files:** Various; `next.config.js`
  - **Scope:** Medium

- [ ] **Task 31: SEO & Metadata Polish**
  - Verify all pages have proper `generateMetadata`
  - Add JSON-LD structured data (Person, WebSite, BlogPosting)
  - Verify sitemap.xml and robots.txt generation
  - Add canonical URLs
  - **Acceptance:** Lighthouse SEO ≥ 95; structured data validates
  - **Verification:** Lighthouse SEO audit; Google Rich Results Test
  - **Files:** `src/app/**/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/data/site.ts`
  - **Scope:** Small

- [ ] **Task 32: Cross-Browser & Responsive Testing**
  - Test in Chrome, Firefox, Safari (mobile/desktop)
  - Verify at 320px, 375px, 768px, 1024px, 1440px, 1920px
  - Fix any layout issues
  - **Acceptance:** No visual regressions across targets
  - **Verification:** Manual test matrix
  - **Files:** Various (fixes)
  - **Scope:** Medium

- [ ] **Task 33: Deployment Configuration**
  - Configure Vercel project (connect repo)
  - Set environment variables (if any)
  - Enable preview deployments for PRs
  - Configure custom domain (if provided) or use Vercel subdomain
  - Verify production build on Vercel
  - **Acceptance:** Deploys successfully; preview works; custom domain resolves
  - **Verification:** Visit deployed URL; check preview on PR
  - **Files:** `vercel.json` (if needed); Vercel dashboard config
  - **Scope:** Small

---

### Final Checkpoint: Production Ready
- [ ] All previous checkpoints passed
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] Zero TypeScript/ESLint errors
- [ ] All tests pass
- [ ] Deployed to Vercel successfully
- [ ] **Final human review & sign-off**

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| MDX syntax highlighting complexity | Medium | Use `next-mdx-remote` + `shiki` with pre-built themes; test early |
| Theme flash on load | Low | Inline script in `layout.tsx` to set theme before paint |
| Mobile navigation accessibility | Medium | Use `<dialog>` or proper ARIA for drawer; test with screen reader |
| Image optimization for many projects | Low | Use placeholder service initially; replace with real images later |
| Blog content management | Low | Start with local MDX; migrate to CMS later if needed |
| Bundle size from many components | Low | Dynamic import heavy components (slider, MDX renderer) |

---

## Open Questions (from Spec)

1. **Blog CMS:** Local MDX confirmed in plan. Revisit if content grows.
2. **Analytics:** Add Vercel Analytics (zero-config) in Task 33.
3. **Contact form:** Deferred — mailto/social links in footer/CTA for now. Can add Server Action + Resend later.
4. **Project images:** Use placeholder service (via.placeholder.com) in Task 17; replace with real screenshots.
5. **Testimonials:** Create placeholder structure in Task 27; you can populate later.
6. **Domain:** Deploy to `shihadahmed.vercel.app` first; custom domain in Task 33.

---

## Parallelization Opportunities

- **Tasks 8-12** (Home sections) can be parallelized after Task 7
- **Tasks 14-16** (Projects) have internal dependency but independent of Phase 4-6
- **Tasks 18-21** (Skills + Experience) independent of each other
- **Tasks 22-26** (Blog) must be sequential
- **Tasks 29-32** (Polish) can overlap with final feature tasks