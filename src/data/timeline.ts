import type { TimelineEvent } from '../types'

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'education',
    year: '2020',
    period: '2016 – 2020',
    title: 'B.Tech — Electronics & Media Technology',
    organization: 'Karunya Institute of Technology and Sciences',
    description:
      'Built a strong foundation in engineering principles, media technology, and problem-solving that shaped my transition into frontend development.',
    type: 'education',
    highlights: ['Engineering fundamentals', 'Media technology', 'Technical problem solving'],
  },
  {
    id: 'tcs',
    year: '2025',
    period: 'Dec 2021 – May 2025',
    title: 'UI Developer',
    organization: 'Tata Consultancy Services — Chennai, India',
    description:
      'Spent 3+ years building enterprise-scale UIs for core banking and retail e-commerce. Migrated legacy modules to React, delivered components for 10,000+ daily users, and improved performance on high-traffic product pages.',
    type: 'work',
    highlights: [
      'SBI Core Banking Portal',
      'Walmart E-commerce UI',
      '40% code reuse via shared library',
      'Mentored 2 junior developers',
    ],
  },
  {
    id: 'cavin',
    year: 'Present',
    period: 'Sep 2025 – Present',
    title: 'Frontend Developer — AI/LLM Applications',
    organization: 'Cavin Infotech (CavinKare Group) — Chennai, India',
    description:
      'Leading UI development for AI-powered platforms — architecting multi-model LLM chat interfaces, real-time streaming, and IoT health monitoring dashboards from the ground up.',
    type: 'work',
    highlights: [
      'Nebula — Multi-Model AI Platform',
      'SmartPetBowl — IoT Health Monitoring',
      '~40% latency reduction via streaming',
      '200+ concurrent users',
    ],
  },
]
