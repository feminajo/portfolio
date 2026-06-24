import type { CommandItem, NavItem } from '../types'

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'why-hire', label: 'Why Hire Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'mindset', label: 'Mindset' },
  { id: 'contact', label: 'Contact' },
]

export const commandItems: CommandItem[] = [
  { id: 'home', label: 'Go to Home', section: 'hero', keywords: ['home', 'hero', 'start'], icon: 'home' },
  { id: 'journey', label: 'Career Journey', section: 'journey', keywords: ['timeline', 'career', 'history'], icon: 'timeline' },
  { id: 'skills', label: 'Skill Galaxy', section: 'skills', keywords: ['tech', 'stack', 'skills'], icon: 'skills' },
  { id: 'why-hire', label: 'Why Hire Me', section: 'why-hire', keywords: ['recruiter', 'hire', 'metrics'], icon: 'hire' },
  { id: 'projects', label: 'View Projects', section: 'projects', keywords: ['work', 'case study', 'portfolio'], icon: 'projects' },
  { id: 'mindset', label: 'Engineering Mindset', section: 'mindset', keywords: ['engineering', 'practices', 'quality'], icon: 'mindset' },
  { id: 'contact', label: 'Contact Me', section: 'contact', keywords: ['email', 'linkedin', 'reach'], icon: 'contact' },
  { id: 'resume', label: 'Download Resume', section: 'resume', keywords: ['cv', 'pdf', 'download'], icon: 'resume' },
]

export const seo = {
  title: 'Joyce Femina J — Frontend Engineer | React, TypeScript & AI',
  description:
    'Frontend Engineer with 4.5+ years building high-performance React & TypeScript applications. Currently leading UI for AI-powered multi-model LLM platforms at Cavin Infotech.',
  url: 'https://joyce-femina.dev',
  image: '/og-image.png',
  keywords:
    'Joyce Femina, Frontend Engineer, React Developer, TypeScript, AI Applications, LLM Platform, Chennai Developer',
}

export const sectionIds = navItems.map((item) => item.id)
