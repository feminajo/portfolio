import type { HireReason, MindsetPillar, Testimonial } from '../types'

export const hireReasons: HireReason[] = [
  {
    id: 'experience',
    title: '4.5+ Years Experience',
    metric: '4.5+',
    description:
      'Proven track record across enterprise banking, retail e-commerce, and cutting-edge AI platforms.',
    icon: 'experience',
  },
  {
    id: 'production',
    title: 'Production Project Experience',
    metric: '10K+',
    description:
      'Built UIs serving 10,000+ daily active users with strict SLA compliance and zero-downtime migrations.',
    icon: 'production',
  },
  {
    id: 'ai',
    title: 'AI Application Development',
    metric: '3 LLMs',
    description:
      'Architected multi-model AI platforms with streaming interfaces, model switching, and real-time orchestration.',
    icon: 'ai',
  },
  {
    id: 'react',
    title: 'React Specialist',
    metric: '50+',
    description:
      '50+ production components across React, TypeScript strict mode, and shared library patterns.',
    icon: 'react',
  },
  {
    id: 'learner',
    title: 'Fast Learner',
    metric: '2 Certs',
    description:
      'Continuously upskilling in Next.js, LLM patterns (RAG, tool calling), and advanced TypeScript.',
    icon: 'learner',
  },
  {
    id: 'team',
    title: 'Team Collaboration',
    metric: '2 Mentored',
    description:
      'Mentored junior developers, collaborated cross-functionally, and established patterns adopted by full teams.',
    icon: 'team',
  },
]

export const mindsetPillars: MindsetPillar[] = [
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Every millisecond matters in user-facing applications.',
    practices: [
      'Cut AI response latency by ~40% via streaming',
      'Improved scroll performance ~20% on Walmart pages',
      'Eliminated redundant DOM updates',
      'Profiled with React DevTools for race conditions',
    ],
  },
  {
    id: 'architecture',
    title: 'Component Architecture',
    description: 'Scalable, reusable systems that teams can build on.',
    practices: [
      'Designed frontend architecture from scratch at Cavin',
      '40% code reuse via shared component library at SBI',
      'API abstraction layers adopted by full teams',
      'Strict TypeScript patterns across 15+ components',
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'Inclusive interfaces that work for everyone.',
    practices: [
      'Semantic HTML structure',
      'ARIA labels and keyboard navigation',
      'Cross-browser compatibility testing',
      'Responsive design for all device sizes',
    ],
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    description: 'Maintainable codebases that scale with teams.',
    practices: [
      'TypeScript strict mode enforcement',
      '70%+ test coverage with Jest & RTL',
      'ESLint & Prettier standards',
      'SonarQube maintainability improvements',
    ],
  },
  {
    id: 'scalability',
    title: 'Scalability',
    description: 'Systems designed to grow with user demand.',
    practices: [
      'Stable for 200+ concurrent AI chat users',
      'Centralized state management patterns',
      'Modular component library architecture',
      'CI/CD pipelines with regression prevention',
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Root-cause analysis over quick fixes.',
    practices: [
      'Resolved streaming race conditions via profiling',
      'Migrated legacy jQuery without production disruption',
      'Built validation-driven multi-step form systems',
      'Production-critical bug resolution within SLA',
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Joyce architected our AI platform frontend from the ground up. Her streaming implementation cut response latency dramatically, and the component patterns she established became our team standard.',
    name: 'Engineering Lead',
    role: 'Technical Lead',
    company: 'Cavin Infotech',
  },
  {
    id: '2',
    quote:
      'The shared component library Joyce built transformed our development velocity. We saw 40% code reuse across modules, and her mentoring helped our junior developers grow significantly.',
    name: 'Project Manager',
    role: 'Delivery Manager',
    company: 'Tata Consultancy Services',
  },
  {
    id: '3',
    quote:
      'Joyce consistently delivers production-quality UI with attention to performance. Her refactoring of product listing pages measurably improved scroll performance on low-end devices.',
    name: 'Senior Developer',
    role: 'Frontend Architect',
    company: 'Walmart Project — TCS',
  },
]
