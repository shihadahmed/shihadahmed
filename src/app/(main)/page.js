import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { SkillsPreview } from '@/components/home/SkillsPreview';
import { ExperienceHighlight } from '@/components/home/ExperienceHighlight';
import { CTABanner } from '@/components/home/CTABanner';

export const metadata = {
  title: 'Shihad Ahmed — Full-Stack MERN Developer',
  description:
    'Full-Stack MERN Developer passionate about building scalable web applications and robust backend systems. Experienced in React, Node.js, Express, MongoDB, TypeScript, and modern UI libraries.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <ExperienceHighlight />
      <CTABanner />
    </>
  );
}