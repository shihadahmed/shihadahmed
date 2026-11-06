# Task List: Shihad Ahmed Portfolio Website

## Phase 1: Foundation

- [x] **Task 1: Project Initialization & Config**
  - Acceptance: `npm run dev` starts; `npm run build` passes; `npm run lint` clean
  - Verify: `npm run build && npm run lint && npm run typecheck`
  - Files: `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `.eslintrc.json`, `.prettierrc`
  - Scope: Medium

- [x] **Task 2: Design Tokens & Global Styles**
  - Acceptance: Design tokens applied; dark/light mode works via `[data-theme]`
  - Verify: Visual check in browser; `npm run build`
  - Files: `src/app/globals.css`, `tailwind.config.ts`
  - Scope: Small

- [x] **Task 3: Theme Provider & Toggle**
  - Acceptance: Toggle switches theme; persists on reload; no flash on load
  - Verify: Manual test in browser; check localStorage
  - Files: `src/components/providers/ThemeProvider.tsx`, `src/components/layout/ThemeToggle.tsx`
  - Scope: Small

- [x] **Task 4: Layout Components (Header, Footer, Navigation)**
  - Acceptance: Navigation works on all breakpoints; mobile menu accessible
  - Verify: Manual test at 320px, 768px, 1024px, 1440px
  - Files: `src/components/layout/Header.tsx`, `src/components/layout/Navigation.tsx`, `src/components/layout/Footer.tsx`
  - Scope: Medium

- [x] **Task 5: Root Layout & Metadata**
  - Acceptance: Metadata renders correctly; fonts load without layout shift
  - Verify: View source; Lighthouse SEO audit
  - Files: `src/app/layout.tsx`, `src/app/metadata.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`
  - Scope: Small

- [x] **Task 6: UI Primitive Components**
  - Acceptance: All primitives render; accessible; TypeScript interfaces complete
  - Verify: `npm run test`; visual check
  - Files: `src/components/ui/*.tsx`, `src/components/ui/index.ts`, `src/lib/utils.ts`
  - Scope: Medium

- [x] **Task 7: Site Configuration & Data Layer**
  - Acceptance: Type-safe data structures; constants used across components
  - Verify: `npm run typecheck`; import in components
  - Files: `src/lib/constants.ts`, `src/lib/data/site.ts`, `src/lib/types.ts`, `src/lib/utils.ts`
  - Scope: Small

---

## Checkpoint: Foundation Complete
- [x] `npm run build` passes with 0 errors
- [x] `npm run lint` clean
- [x] `npm run typecheck` clean
- [x] All tests pass
- [x] Dev server runs; navigation works; theme toggle persists
- [x] **Human review before proceeding**

---

## Phase 2: Home Page & Core Sections

- [x] **Task 8: Hero Section**
  - Acceptance: Visually matches spec; CTAs navigate correctly; animated on load
  - Verify: Visual check; click CTAs
  - Files: `src/components/home/Hero.tsx`
  - Scope: Small

- [x] **Task 9: Featured Projects Section**
  - Acceptance: Displays 3 featured projects; cards link correctly; responsive grid
  - Verify: Visual check; click through to detail
  - Files: `src/components/home/FeaturedProjects.tsx`, `src/components/projects/ProjectCard.tsx`
  - Scope: Small

- [x] **Task 10: Skills Preview Section**
  - Acceptance: Shows proficiency visually; links to /skills
  - Verify: Visual check
  - Files: `src/components/home/SkillsPreview.tsx`, `src/components/skills/SkillBar.tsx`
  - Scope: Small

- [x] **Task 11: Experience Highlight Section**
  - Acceptance: Shows 2 roles correctly; links to /experience
  - Verify: Visual check
  - Files: `src/components/home/ExperienceHighlight.tsx`, `src/components/experience/TimelineItem.tsx`
  - Scope: Small

- [x] **Task 12: CTA Banner**
  - Acceptance: Renders correctly; link works
  - Verify: Visual check; click link
  - Files: `src/components/home/CTABanner.tsx`
  - Scope: XS

- [x] **Task 13: Home Page Assembly**
  - Acceptance: Full home page renders; all sections present; metadata correct
  - Verify: Visual check; view source for metadata
  - Files: `src/app/(main)/page.tsx`
  - Scope: Small

---

## Checkpoint: Home Page Complete
- [x] Home page loads with all sections
- [x] Navigation between sections works
- [x] Responsive at all breakpoints
- [x] `npm run build` passes
- [x] **Human review before proceeding**

---

## Phase 3: Projects Pages

- [ ] **Task 14: Projects Data & Filtering Logic**
  - Acceptance: Data typed correctly; filter utility tested
  - Verify: `npm run test` (unit tests for filter)
  - Files: `src/lib/data/projects.ts`, `src/lib/utils.ts`
  - Scope: Small

- [ ] **Task 15: Projects Listing Page**
  - Acceptance: Lists all projects; filter works; responsive; empty state shown
  - Verify: Visual check; filter each category
  - Files: `src/app/(main)/projects/page.tsx`, `src/components/projects/ProjectGrid.tsx`
  - Scope: Medium

- [ ] **Task 16: Project Detail Page**
  - Acceptance: Detail page renders for each slug; metadata correct; navigation works
  - Verify: Visit each project URL; check metadata; test prev/next
  - Files: `src/app/(main)/projects/[slug]/page.tsx`, `src/components/projects/ProjectDetail.tsx`, `src/app/(main)/projects/[slug]/loading.tsx`, `src/app/(main)/projects/[slug]/error.tsx`
  - Scope: Medium

- [ ] **Task 17: Project Images & Optimization**
  - Acceptance: Images load optimized; no layout shift; WebP/AVIF served
  - Verify: Lighthouse Performance audit; Network tab check formats
  - Files: `public/projects/*`, `next.config.js`
  - Scope: Small

---

## Checkpoint: Projects Complete
- [ ] Projects listing works with filters
- [ ] All detail pages accessible via slug
- [ ] Images optimized
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

## Phase 4: Skills Page

- [ ] **Task 18: Skills Data & Components**
  - Acceptance: Data complete; components render correctly per category
  - Verify: Visual check; unit tests for proficiency calc
  - Files: `src/lib/data/skills.ts`, `src/components/skills/SkillCategory.tsx`, `src/components/skills/TechStack.tsx`
  - Scope: Small

- [ ] **Task 19: Skills Page Assembly**
  - Acceptance: Page renders all categories; tabs switch; stats correct
  - Verify: Visual check; click each tab
  - Files: `src/app/(main)/skills/page.tsx`
  - Scope: Small

---

## Checkpoint: Skills Complete
- [ ] Skills page functional
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

## Phase 5: Experience Page

- [ ] **Task 20: Experience Data & Timeline Components**
  - Acceptance: Data complete; timeline renders correctly
  - Verify: Visual check
  - Files: `src/lib/data/experience.ts`, `src/components/experience/Timeline.tsx`, `src/components/experience/TimelineItem.tsx`
  - Scope: Small

- [ ] **Task 21: Experience Page Assembly**
  - Acceptance: Page renders full timeline; current role distinct
  - Verify: Visual check
  - Files: `src/app/(main)/experience/page.tsx`
  - Scope: XS

---

## Checkpoint: Experience Complete
- [ ] Experience page functional
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

## Phase 6: Blog (MDX)

- [ ] **Task 22: MDX Setup & Configuration**
  - Acceptance: MDX compiles; frontmatter typed; syntax highlighting works
  - Verify: `npm run build`; test MDX rendering
  - Files: `package.json`, `src/lib/mdx.ts`, `src/lib/types.ts`
  - Scope: Medium

- [ ] **Task 23: Blog Post Components**
  - Acceptance: MDX renders with all features; TOC works; code blocks styled
  - Verify: Visual check on sample post
  - Files: `src/components/blog/PostContent.tsx`, `src/components/blog/PostCard.tsx`, `src/components/blog/TableOfContents.tsx`, `src/components/blog/CodeBlock.tsx`
  - Scope: Medium

- [ ] **Task 24: Blog Listing Page**
  - Acceptance: Lists posts; pagination works; tag filter works
  - Verify: Visual check; paginate; filter tags
  - Files: `src/app/(main)/blog/page.tsx`, `src/components/blog/PostList.tsx`
  - Scope: Medium

- [ ] **Task 25: Blog Post Detail Page**
  - Acceptance: Post renders fully; metadata correct; nav works; share works
  - Verify: Visit post URLs; check metadata; test prev/next
  - Files: `src/app/(main)/blog/[slug]/page.tsx`, `src/app/(main)/blog/[slug]/loading.tsx`, `src/app/(main)/blog/[slug]/error.tsx`
  - Scope: Medium

- [ ] **Task 26: Sample Blog Posts**
  - Acceptance: Posts render correctly; reading time calculated; tags work
  - Verify: Visual check all posts
  - Files: `content/blog/*.mdx`, `public/blog/*.jpg`
  - Scope: Small

---

## Checkpoint: Blog Complete
- [ ] Blog listing + detail pages functional
- [ ] MDX rendering with syntax highlighting
- [ ] Pagination and tag filtering work
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

## Phase 7: Testimonials Page

- [ ] **Task 27: Testimonials Data & Components**
  - Acceptance: Data ready; slider works with all interactions
  - Verify: Visual check; test auto-rotate, pause, keyboard
  - Files: `src/lib/data/testimonials.ts`, `src/components/testimonials/TestimonialCard.tsx`, `src/components/testimonials/TestimonialSlider.tsx`
  - Scope: Small

- [ ] **Task 28: Testimonials Page Assembly**
  - Acceptance: Page renders; responsive; empty state handled
  - Verify: Visual check
  - Files: `src/app/(main)/testimonials/page.tsx`
  - Scope: XS

---

## Checkpoint: Testimonials Complete
- [ ] Testimonials page functional
- [ ] `npm run build` passes
- [ ] **Human review before proceeding**

---

## Phase 8: Polish & Deploy

- [ ] **Task 29: Accessibility Audit & Fixes**
  - Acceptance: Zero axe violations; WCAG 2.1 AA compliant
  - Verify: `npm run test:a11y`; manual screen reader test
  - Files: Various
  - Scope: Medium

- [ ] **Task 30: Performance Optimization**
  - Acceptance: Lighthouse Performance ≥ 90
  - Verify: `npm run build`; Lighthouse CI or local audit
  - Files: Various; `next.config.js`
  - Scope: Medium

- [ ] **Task 31: SEO & Metadata Polish**
  - Acceptance: Lighthouse SEO ≥ 95; structured data validates
  - Verify: Lighthouse SEO audit; Google Rich Results Test
  - Files: `src/app/**/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/data/site.ts`
  - Scope: Small

- [ ] **Task 32: Cross-Browser & Responsive Testing**
  - Acceptance: No visual regressions across targets
  - Verify: Manual test matrix
  - Files: Various
  - Scope: Medium

- [ ] **Task 33: Deployment Configuration**
  - Acceptance: Deploys successfully; preview works; custom domain resolves
  - Verify: Visit deployed URL; check preview on PR
  - Files: `vercel.json`; Vercel dashboard config
  - Scope: Small

---

## Final Checkpoint: Production Ready
- [ ] All previous checkpoints passed
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] Zero TypeScript/ESLint errors
- [ ] All tests pass
- [ ] Deployed to Vercel successfully
- [ ] **Final human review & sign-off**