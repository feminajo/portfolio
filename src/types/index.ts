export interface Profile {
  name: string
  firstName: string
  title: string
  tagline: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  availability: 'available' | 'open' | 'unavailable'
  availabilityLabel: string
  currentRole: string
  currentCompany: string
  experienceYears: string
  highlights: string[]
}

export interface TimelineEvent {
  id: string
  year: string
  period: string
  title: string
  organization: string
  description: string
  type: 'education' | 'work' | 'milestone' | 'certification'
  highlights?: string[]
}

export interface Project {
  id: string
  name: string
  company: string
  role: string
  period: string
  tagline: string
  problem: string
  solution: string
  technologies: string[]
  impact: { label: string; value: string }[]
  challenges: string[]
  features: string[]
  architecture: { layer: string; items: string[] }[]
}

export interface SkillCategory {
  id: string
  label: string
  skills: string[]
  color: string
}

export interface HireReason {
  id: string
  title: string
  metric: string
  description: string
  icon: string
}

export interface MindsetPillar {
  id: string
  title: string
  description: string
  practices: string[]
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export interface NavItem {
  id: string
  label: string
}

export interface CommandItem {
  id: string
  label: string
  section: string
  keywords: string[]
  icon: string
}
