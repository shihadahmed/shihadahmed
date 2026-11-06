export const skills = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 5, icon: 'Code', yearsExperience: 4 },
  { name: 'Next.js', category: 'frontend', proficiency: 5, icon: 'Code', yearsExperience: 3 },
  { name: 'TypeScript', category: 'frontend', proficiency: 5, icon: 'Code', yearsExperience: 4 },
  { name: 'JavaScript', category: 'frontend', proficiency: 5, icon: 'Code', yearsExperience: 5 },
  { name: 'HTML/CSS', category: 'frontend', proficiency: 5, icon: 'Code', yearsExperience: 5 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 5, icon: 'Palette', yearsExperience: 3 },
  { name: 'Redux/Zustand', category: 'frontend', proficiency: 4, icon: 'Database', yearsExperience: 3 },
  { name: 'React Query', category: 'frontend', proficiency: 5, icon: 'Database', yearsExperience: 3 },
  { name: 'Vite', category: 'frontend', proficiency: 4, icon: 'Zap', yearsExperience: 2 },
  { name: 'Storybook', category: 'frontend', proficiency: 3, icon: 'BookOpen', yearsExperience: 2 },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 5, icon: 'Server', yearsExperience: 4 },
  { name: 'Express.js', category: 'backend', proficiency: 5, icon: 'Server', yearsExperience: 4 },
  { name: 'tRPC', category: 'backend', proficiency: 4, icon: 'Code', yearsExperience: 2 },
  { name: 'GraphQL', category: 'backend', proficiency: 4, icon: 'Code', yearsExperience: 2 },
  { name: 'REST APIs', category: 'backend', proficiency: 5, icon: 'Globe', yearsExperience: 4 },
  { name: 'WebSockets', category: 'backend', proficiency: 4, icon: 'MessageSquare', yearsExperience: 2 },
  { name: 'Serverless', category: 'backend', proficiency: 3, icon: 'Cloud', yearsExperience: 2 },

  // Database
  { name: 'MongoDB', category: 'database', proficiency: 5, icon: 'Database', yearsExperience: 4 },
  { name: 'Mongoose', category: 'database', proficiency: 5, icon: 'Database', yearsExperience: 4 },
  { name: 'PostgreSQL', category: 'database', proficiency: 4, icon: 'Database', yearsExperience: 3 },
  { name: 'Prisma', category: 'database', proficiency: 4, icon: 'Database', yearsExperience: 2 },
  { name: 'Redis', category: 'database', proficiency: 4, icon: 'Database', yearsExperience: 3 },
  { name: 'SQLite', category: 'database', proficiency: 3, icon: 'Database', yearsExperience: 2 },

  // DevOps
  { name: 'Docker', category: 'devops', proficiency: 4, icon: 'Box', yearsExperience: 3 },
  { name: 'GitHub Actions', category: 'devops', proficiency: 4, icon: 'GitBranch', yearsExperience: 3 },
  { name: 'Vercel', category: 'devops', proficiency: 5, icon: 'Cloud', yearsExperience: 3 },
  { name: 'AWS', category: 'devops', proficiency: 3, icon: 'Cloud', yearsExperience: 2 },
  { name: 'Kubernetes', category: 'devops', proficiency: 2, icon: 'Cube', yearsExperience: 1 },
  { name: 'Nginx', category: 'devops', proficiency: 3, icon: 'Server', yearsExperience: 2 },
  { name: 'Linux', category: 'devops', proficiency: 4, icon: 'Terminal', yearsExperience: 4 },

  // Tools
  { name: 'Git', category: 'tools', proficiency: 5, icon: 'GitBranch', yearsExperience: 5 },
  { name: 'VS Code', category: 'tools', proficiency: 5, icon: 'Code', yearsExperience: 5 },
  { name: 'Postman', category: 'tools', proficiency: 4, icon: 'Send', yearsExperience: 3 },
  { name: 'Figma', category: 'tools', proficiency: 3, icon: 'Figma', yearsExperience: 2 },
  { name: 'Jest/Vitest', category: 'tools', proficiency: 4, icon: 'CheckCircle', yearsExperience: 3 },
  { name: 'Playwright', category: 'tools', proficiency: 3, icon: 'CheckCircle', yearsExperience: 2 },
  { name: 'ESLint/Prettier', category: 'tools', proficiency: 5, icon: 'Code', yearsExperience: 4 },

  // UI Libraries
  { name: 'Radix UI', category: 'ui', proficiency: 4, icon: 'Palette', yearsExperience: 2 },
  { name: 'Headless UI', category: 'ui', proficiency: 4, icon: 'Palette', yearsExperience: 2 },
  { name: 'DaisyUI', category: 'ui', proficiency: 4, icon: 'Palette', yearsExperience: 2 },
  { name: 'HeroUI', category: 'ui', proficiency: 3, icon: 'Palette', yearsExperience: 1 },
  { name: 'Shadcn/UI', category: 'ui', proficiency: 4, icon: 'Palette', yearsExperience: 2 },
  { name: 'Framer Motion', category: 'ui', proficiency: 4, icon: 'Move', yearsExperience: 2 },
  { name: 'Recharts', category: 'ui', proficiency: 4, icon: 'BarChart', yearsExperience: 2 },
];

export function getSkillsByCategory(category) {
  return skills.filter((s) => s.category === category);
}

export function getSkillCategories() {
  const categories = new Set(skills.map((s) => s.category));
  return Array.from(categories);
}

export function getProficiencyLabel(level) {
  const labels = {
    1: 'Beginner',
    2: 'Novice',
    3: 'Intermediate',
    4: 'Advanced',
    5: 'Expert',
  };
  return labels[level];
}

export function getProficiencyColor(level) {
  const colors = {
    1: 'bg-red-500',
    2: 'bg-orange-500',
    3: 'bg-yellow-500',
    4: 'bg-blue-500',
    5: 'bg-green-500',
  };
  return colors[level];
}