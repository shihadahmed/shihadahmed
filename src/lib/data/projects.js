export const projects = [
  {
    slug: 'saas-starter-kit',
    title: 'SaaS Starter Kit',
    description: 'A production-ready SaaS boilerplate with authentication, billing, and multi-tenancy built on the MERN stack.',
    longDescription: `
## Problem
Building a SaaS from scratch involves repeating the same foundational work: authentication, subscription billing, team management, and admin dashboards.

## Solution
A comprehensive starter kit that includes:
- **Authentication**: Better Auth with email/password, OAuth providers, and magic links
- **Billing**: Stripe integration with subscription management, webhooks, and customer portal
- **Multi-tenancy**: Organization/workspace model with role-based access control
- **Admin Dashboard**: User management, analytics, and system monitoring

## Architecture
- **Frontend**: Next.js 14 App Router, React Server Components, Tailwind CSS
- **Backend**: Node.js/Express API with tRPC for type-safe APIs
- **Database**: MongoDB with Mongoose (flexible schema for multi-tenancy)
- **Auth**: Better Auth (modern, secure, framework-agnostic)
- **Payments**: Stripe with webhook handling for subscription events

## Outcomes
- Reduced new project setup time from 2 weeks to 2 hours
- Used as foundation for 3 client projects
- Open-sourced with 500+ GitHub stars
`,
    image: '/projects/saas-starter.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Better Auth', 'Stripe', 'MongoDB', 'tRPC'],
    githubUrl: 'https://github.com/shihadahmed/saas-starter',
    liveUrl: 'https://saas-starter-demo.vercel.app',
    featured: true,
    category: 'web',
    startDate: '2024-01-15',
    endDate: '2024-04-20',
    outcomes: [
      '500+ GitHub stars',
      'Used in 3 production client projects',
      'Reduced setup time by 95%',
    ],
  },
  {
    slug: 'realtime-collaboration-tool',
    title: 'Real-time Collaboration Tool',
    description: 'A collaborative document editor with real-time sync, presence, and conflict resolution using WebSockets and CRDTs.',
    longDescription: `
## Problem
Building real-time collaborative editing is complex — handling concurrent edits, conflict resolution, and presence requires sophisticated algorithms.

## Solution
A Google Docs-like editor built with:
- **Real-time Sync**: WebSocket server with Yjs CRDT for conflict-free replication
- **Presence**: User cursors, selections, and online status
- **Rich Text**: TipTap editor with collaborative extensions
- **Offline Support**: Local-first architecture with sync on reconnect

## Architecture
- **Frontend**: React, TipTap, Yjs, WebSocket client
- **Backend**: Node.js WebSocket server (ws library) with Yjs awareness
- **Database**: MongoDB for document persistence
- **Infrastructure**: Redis for pub/sub scaling

## Outcomes
- Handles 50+ concurrent editors per document
- Sub-100ms latency for sync
- Open-sourced with 1.2k stars
`,
    image: '/projects/realtime-editor.jpg',
    techStack: ['React', 'TipTap', 'Yjs', 'WebSockets', 'Node.js', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com/shihadahmed/realtime-editor',
    liveUrl: 'https://realtime-editor-demo.vercel.app',
    featured: true,
    category: 'web',
    startDate: '2023-09-01',
    endDate: '2023-12-15',
    outcomes: [
      '1.2k GitHub stars',
      '50+ concurrent users tested',
      '<100ms sync latency',
    ],
  },
  {
    slug: 'mern-ecommerce-api',
    title: 'MERN E-commerce API',
    description: 'A scalable e-commerce REST API with product management, cart, orders, payments, and admin panel.',
    longDescription: `
## Problem
E-commerce backends require complex domain logic: inventory management, cart persistence, order processing, payment integration, and admin workflows.

## Solution
A complete e-commerce API with:
- **Products**: Variants, categories, attributes, inventory tracking
- **Cart & Checkout**: Persistent carts, coupon codes, tax calculation
- **Orders**: State machine (pending → confirmed → shipped → delivered)
- **Payments**: Stripe integration with webhooks
- **Admin**: Role-based access, analytics, order management

## Architecture
- **Runtime**: Node.js/Express with TypeScript
- **Database**: MongoDB with Mongoose
- **Auth**: JWT with refresh tokens, RBAC
- **Validation**: Zod schemas
- **Testing**: Jest + Supertest (90% coverage)
- **Documentation**: OpenAPI/Swagger

## Outcomes
- Powers 2 live e-commerce sites
- 99.9% uptime over 12 months
- Processed 10,000+ orders
`,
    image: '/projects/ecommerce-api.jpg',
    techStack: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Stripe', 'Zod', 'Jest'],
    githubUrl: 'https://github.com/shihadahmed/mern-ecommerce-api',
    liveUrl: undefined,
    featured: true,
    category: 'api',
    startDate: '2023-03-01',
    endDate: '2023-08-15',
    outcomes: [
      '2 production deployments',
      '10,000+ orders processed',
      '99.9% uptime',
    ],
  },
  {
    slug: 'devtools-cli',
    title: 'DevTools CLI',
    description: 'A command-line tool for scaffolding MERN projects with customizable templates and built-in best practices.',
    longDescription: `
## Problem
Setting up a new MERN project involves many decisions: folder structure, linting, testing, CI/CD, Docker, and more.

## Solution
An interactive CLI that scaffolds production-ready projects:
- **Templates**: MERN, Next.js, Express API, Chrome Extension
- **Features**: TypeScript, ESLint, Prettier, Husky, GitHub Actions, Docker
- **Customization**: Interactive prompts for features
- **Updates**: Template versioning with upgrade command

## Architecture
- **Language**: TypeScript
- **CLI Framework**: Commander.js + Inquirer
- **Templating**: Handlebars with conditional blocks
- **Package Manager**: Auto-detects npm/yarn/pnpm

## Outcomes
- 300+ weekly downloads on npm
- Used internally by team of 15 developers
- Reduced project init from 30 min to 2 min
`,
    image: '/projects/devtools-cli.jpg',
    techStack: ['TypeScript', 'Commander.js', 'Inquirer', 'Handlebars', 'Node.js'],
    githubUrl: 'https://github.com/shihadahmed/devtools-cli',
    liveUrl: 'https://www.npmjs.com/package/@shihadahmed/create-mern',
    featured: false,
    category: 'tool',
    startDate: '2024-02-01',
    endDate: '2024-03-15',
    outcomes: [
      '300+ weekly npm downloads',
      'Adopted by 15-person team',
      '95% time reduction',
    ],
  },
  {
    slug: 'component-library',
    title: 'UI Component Library',
    description: 'A headless, accessible component library built with React, Tailwind CSS, and Radix UI primitives.',
    longDescription: `
## Problem
Building accessible, customizable UI components from scratch is time-consuming and error-prone.

## Solution
A library of 40+ accessible components:
- **Primitives**: Button, Input, Select, Dialog, Dropdown, Tooltip, Toast
- **Compound**: Card, Table, Form, Navigation, Data Display
- **Features**: Dark mode, RTL, full TypeScript, zero dependencies
- **Styling**: Tailwind CSS with CSS variables for theming

## Architecture
- **Framework**: React 18 with forwardRef
- **Accessibility**: Radix UI primitives + custom hooks
- **Styling**: Tailwind CSS + class-variance-authority
- **Build**: Vite + Vitest + Storybook
- **Publishing**: npm with changesets

## Outcomes
- Used in 5 production applications
- 100% accessibility score (axe-core)
- 15+ contributors
`,
    image: '/projects/ui-library.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Vite', 'Vitest', 'Storybook'],
    githubUrl: 'https://github.com/shihadahmed/ui-library',
    liveUrl: 'https://ui-library-docs.vercel.app',
    featured: false,
    category: 'library',
    startDate: '2023-11-01',
    endDate: '2024-02-15',
    outcomes: [
      '5 production apps',
      '100% axe-core score',
      '15+ contributors',
    ],
  },
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'A real-time analytics dashboard with customizable widgets, data visualization, and export capabilities.',
    longDescription: `
## Problem
Business teams need flexible dashboards to visualize metrics without engineering support.

## Solution
A no-code dashboard builder:
- **Widgets**: Charts (line, bar, pie), metrics, tables, funnels
- **Data Sources**: REST APIs, GraphQL, MongoDB, PostgreSQL
- **Real-time**: WebSocket updates for live metrics
- **Sharing**: Embeddable dashboards, scheduled PDF exports
- **Customization**: Drag-drop layout, theme builder

## Architecture
- **Frontend**: Next.js, React Grid Layout, Recharts, TanStack Query
- **Backend**: Node.js/Express with plugin system for data sources
- **Database**: PostgreSQL for dashboard configs, Redis for caching
- **Auth**: SSO (SAML/OIDC) + RBAC

## Outcomes
- 200+ dashboards created by non-technical users
- 50% reduction in ad-hoc data requests
- Enterprise pilot with 3 companies
`,
    image: '/projects/analytics-dashboard.jpg',
    techStack: ['Next.js', 'React', 'Recharts', 'TanStack Query', 'Node.js', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/shihadahmed/analytics-dashboard',
    liveUrl: 'https://analytics-demo.vercel.app',
    featured: false,
    category: 'web',
    startDate: '2024-05-01',
    endDate: undefined,
    outcomes: [
      '200+ user-created dashboards',
      '50% fewer data requests',
      '3 enterprise pilots',
    ],
  },
  {
    slug: 'markdown-blog-engine',
    title: 'Markdown Blog Engine',
    description: 'A fast, SEO-optimized static blog engine with MDX support, syntax highlighting, and automatic sitemap generation.',
    longDescription: `
## Problem
Existing blog solutions are either too complex (WordPress) or too limited (basic static generators).

## Solution
A modern blog engine with:
- **Content**: MDX with frontmatter, custom components
- **SEO**: Automatic metadata, JSON-LD, sitemap, RSS
- **Performance**: Static generation, image optimization, font optimization
- **Features**: Tags, series, reading time, table of contents, search
- **Deployment**: Zero-config Vercel/Netlify deploy

## Architecture
- **Framework**: Next.js 14 App Router
- **Content**: next-mdx-remote + gray-matter
- **Syntax Highlighting**: Shiki with custom themes
- **Search**: FlexSearch (client-side)
- **Styling**: Tailwind CSS + Tailwind Typography

## Outcomes
- Powers this portfolio site
- Lighthouse 100/100/100/100
- <50KB initial JS bundle
`,
    image: '/projects/markdown-blog.jpg',
    techStack: ['Next.js', 'MDX', 'Shiki', 'Tailwind CSS', 'FlexSearch', 'TypeScript'],
    githubUrl: 'https://github.com/shihadahmed/markdown-blog-engine',
    liveUrl: 'https://blog-engine-demo.vercel.app',
    featured: false,
    category: 'tool',
    startDate: '2024-01-01',
    endDate: '2024-02-28',
    outcomes: [
      'Lighthouse 100/100/100/100',
      '<50KB JS bundle',
      'Zero-config deploy',
    ],
  },
  {
    slug: 'graphql-gateway',
    title: 'GraphQL Gateway',
    description: 'A federated GraphQL gateway with schema stitching, rate limiting, caching, and observability.',
    longDescription: `
## Problem
Microservices need a unified GraphQL API with proper gateway features: authentication, rate limiting, caching, and monitoring.

## Solution
A production-ready GraphQL gateway:
- **Federation**: Apollo Federation v2 for schema composition
- **Performance**: DataLoader batching, Redis caching, persisted queries
- **Security**: JWT validation, rate limiting, depth limiting, cost analysis
- **Observability**: OpenTelemetry tracing, Prometheus metrics, structured logging

## Architecture
- **Runtime**: Node.js with @apollo/gateway
- **Cache**: Redis with cache invalidation via Redis Pub/Sub
- **Monitoring**: OpenTelemetry + Jaeger, Prometheus + Grafana
- **Deployment**: Kubernetes with Helm charts

## Outcomes
- Handles 100k requests/day
- P99 latency < 200ms
- Used across 8 microservices
`,
    image: '/projects/graphql-gateway.jpg',
    techStack: ['Node.js', 'Apollo Federation', 'GraphQL', 'Redis', 'OpenTelemetry', 'Kubernetes', 'Prometheus'],
    githubUrl: 'https://github.com/shihadahmed/graphql-gateway',
    liveUrl: undefined,
    featured: false,
    category: 'api',
    startDate: '2023-06-01',
    endDate: '2023-10-15',
    outcomes: [
      '100k requests/day',
      'P99 < 200ms',
      '8 microservices',
    ],
  },
  {
    slug: 'mobile-app-react-native',
    title: 'React Native Mobile App',
    description: 'A cross-platform mobile app with offline-first architecture, push notifications, and biometric authentication.',
    longDescription: `
## Problem
Building a production mobile app requires handling offline sync, push notifications, deep linking, and platform-specific features.

## Solution
A React Native app with:
- **Offline-First**: WatermelonDB with sync engine
- **Auth**: Biometric (FaceID/TouchID) + JWT refresh
- **Notifications**: Expo push notifications with segmentation
- **Navigation**: Expo Router (file-based)
- **UI**: NativeWind (Tailwind for React Native)

## Architecture
- **Framework**: React Native + Expo SDK 50
- **Database**: WatermelonDB (SQLite) + sync adapter
- **State**: Zustand + React Query
- **Backend**: Shared Node.js API with mobile-specific endpoints
- **CI/CD**: EAS Build + Expo Updates

## Outcomes
- 4.8★ App Store rating
- 10k+ downloads
- 99.9% crash-free sessions
`,
    image: '/projects/mobile-app.jpg',
    techStack: ['React Native', 'Expo', 'TypeScript', 'WatermelonDB', 'Zustand', 'NativeWind', 'EAS'],
    githubUrl: 'https://github.com/shihadahmed/mobile-app',
    liveUrl: 'https://expo.dev/@shihadahmed/mobile-app',
    featured: false,
    category: 'mobile',
    startDate: '2023-08-01',
    endDate: '2024-01-15',
    outcomes: [
      '4.8★ App Store rating',
      '10k+ downloads',
      '99.9% crash-free',
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category) {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectCategories() {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories);
}