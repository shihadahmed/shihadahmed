export const experiences = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    companyUrl: 'https://techcorp.example.com',
    location: 'Dhaka, Bangladesh (Remote)',
    startDate: '2023-01-01',
    endDate: undefined,
    description:
      'Leading the development of scalable SaaS products using the MERN stack. Architected and implemented a multi-tenant platform serving 50+ enterprise clients. Mentoring a team of 5 developers and establishing engineering best practices.',
    achievements: [
      'Architected multi-tenant SaaS platform reducing infrastructure costs by 40%',
      'Implemented CI/CD pipelines reducing deployment time from 30min to 3min',
      'Introduced TypeScript strict mode across codebase, reducing runtime errors by 60%',
      'Mentored 5 junior developers, 3 promoted to mid-level within 18 months',
      'Built real-time collaboration features using WebSockets and CRDTs',
      'Established component library adopted across 4 product teams',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'WebSockets', 'Docker', 'GitHub Actions'],
    type: 'full-time',
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    companyUrl: 'https://startupxyz.example.com',
    location: 'Dhaka, Bangladesh',
    startDate: '2021-06-01',
    endDate: '2022-12-31',
    description:
      'Full-stack developer on a 10-person team building a B2B e-commerce platform. Responsible for both frontend and backend features, API design, and database optimization.',
    achievements: [
      'Built REST API handling 100k+ requests/day with 99.9% uptime',
      'Optimized MongoDB queries reducing average response time from 800ms to 120ms',
      'Implemented Stripe payment integration processing $2M+ in transactions',
      'Developed admin dashboard with real-time analytics using React Query and Recharts',
      'Wrote comprehensive test suite achieving 85% code coverage',
      'Migrated legacy JavaScript codebase to TypeScript',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Stripe', 'Tailwind CSS', 'Jest', 'Docker'],
    type: 'full-time',
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    companyUrl: 'https://digitalagency.example.com',
    location: 'Dhaka, Bangladesh',
    startDate: '2020-01-01',
    endDate: '2021-05-31',
    description:
      'Frontend developer working on client projects across various industries. Built responsive, accessible web applications using React and modern CSS.',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Implemented design system reducing UI development time by 50%',
      'Achieved WCAG 2.1 AA compliance for all public-facing projects',
      'Optimized Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms',
      'Introduced component-driven development with Storybook',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
    techStack: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Storybook', 'Jest', 'Cypress'],
    type: 'full-time',
  },
  {
    id: 'exp-4',
    role: 'Junior Web Developer',
    company: 'Freelance',
    location: 'Remote',
    startDate: '2019-01-01',
    endDate: '2019-12-31',
    description:
      'Freelance web developer building websites and web applications for small businesses and startups. Full project lifecycle from requirements to deployment.',
    achievements: [
      'Completed 20+ freelance projects with 5-star ratings',
      'Built e-commerce sites with Shopify and custom React solutions',
      'Developed custom WordPress themes and plugins',
      'Implemented SEO best practices improving client search rankings',
      'Managed client communication and project timelines',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Shopify', 'PHP', 'MySQL'],
    type: 'freelance',
  },
];

export function getCurrentExperience() {
  return experiences.find((e) => !e.endDate);
}

export function getPastExperiences() {
  return experiences.filter((e) => e.endDate);
}

export function getExperienceById(id) {
  return experiences.find((e) => e.id === id);
}