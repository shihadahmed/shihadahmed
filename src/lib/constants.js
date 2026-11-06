export const siteConfig = {
  name: 'Shihad Ahmed',
  title: 'Shihad Ahmed — Full-Stack MERN Developer',
  description:
    'Full-Stack MERN Developer passionate about building scalable web applications and robust backend systems. Experienced in React, Node.js, Express, MongoDB, TypeScript, and modern UI libraries.',
  url: 'https://shihadahmed.vercel.app',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/shihadahmed',
    linkedin: 'https://linkedin.com/in/shihadahmed',
    email: 'mailto:shihadahmed@example.com',
  },
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
];

export const socialLinks = [
  { name: 'GitHub', href: siteConfig.links.github, icon: 'Github' },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: 'Linkedin' },
  { name: 'Email', href: siteConfig.links.email, icon: 'Mail' },
];

export const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web Apps' },
  { value: 'api', label: 'APIs' },
  { value: 'tool', label: 'Tools' },
  { value: 'library', label: 'Libraries' },
];

export const skillCategories = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'database', label: 'Database' },
  { value: 'devops', label: 'DevOps' },
  { value: 'tools', label: 'Tools' },
  { value: 'ui', label: 'UI Libraries' },
];