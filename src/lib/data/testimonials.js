export const testimonials = [
  {
    id: 'test-1',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechCorp Solutions',
    avatar: '/testimonials/sarah-chen.jpg',
    content:
      'Shihad is an exceptional engineer who combines deep technical expertise with strong product sense. He architected our multi-tenant platform from scratch and mentored the team through the entire process. His code quality and attention to detail are outstanding.',
    project: 'SaaS Starter Kit',
    date: '2024-03-15',
  },
  {
    id: 'test-2',
    author: 'Michael Rodriguez',
    role: 'Engineering Manager',
    company: 'StartupXYZ',
    avatar: '/testimonials/michael-rodriguez.jpg',
    content:
      'Working with Shihad was a pleasure. He took ownership of our payment integration and optimized our database queries, resulting in significant performance improvements. He communicates clearly and delivers reliable, maintainable code.',
    project: 'MERN E-commerce API',
    date: '2023-11-20',
  },
  {
    id: 'test-3',
    author: 'Emily Watson',
    role: 'Product Designer',
    company: 'Digital Agency Co.',
    avatar: '/testimonials/emily-watson.jpg',
    content:
      'Shihad has a rare ability to translate designs into pixel-perfect implementations while maintaining accessibility standards. He proactively suggests improvements and collaborates effectively with designers. A true partner in the product development process.',
    project: 'Multiple Client Projects',
    date: '2021-04-10',
  },
  {
    id: 'test-4',
    author: 'David Park',
    role: 'Founder',
    company: 'Freelance Client',
    avatar: '/testimonials/david-park.jpg',
    content:
      'Hired Shihad for a custom e-commerce project. He delivered a complete solution with Stripe integration, admin panel, and mobile-responsive design ahead of schedule. His communication was excellent throughout, and the code was clean and well-documented.',
    project: 'Custom E-commerce Site',
    date: '2019-10-05',
  },
  {
    id: 'test-5',
    author: 'Lisa Thompson',
    role: 'Senior Developer',
    company: 'Open Source Community',
    avatar: '/testimonials/lisa-thompson.jpg',
    content:
      "Shihad's open-source contributions are impressive. His SaaS Starter Kit and Real-time Editor projects are well-architected, documented, and actively maintained. He's responsive to issues and welcoming to contributors. A great example of open-source citizenship.",
    project: 'SaaS Starter Kit / Real-time Editor',
    date: '2024-01-08',
  },
];

export function getTestimonials() {
  return testimonials;
}