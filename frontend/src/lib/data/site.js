import { siteConfig } from '../constants';

export const author = {
  name: 'Shihad Bin Ahmed',
  title: 'Full-Stack MERN Developer',
  bio: 'Passionate about building scalable web applications and robust backend systems. Experienced in React, Node.js, Express, MongoDB, TypeScript, and modern UI libraries.',
  location: 'Dhaka, Bangladesh',
  email: 'shihadahmed@example.com',
  avatar: '/avatar.jpg',
  resume: '/resume.pdf',
};

export const siteMetadata = {
  ...siteConfig,
  author,
  keywords: [
    'Full-Stack Developer',
    'MERN Stack',
    'React Developer',
    'Node.js Developer',
    'MongoDB',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
  ],
};