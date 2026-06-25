import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'nebula',
    name: 'Nebula',
    company: 'Cavin Infotech',
    role: 'Frontend Engineer',
    period: '2025 – Present',
    tagline: 'Internal Multi-Model AI Chatbot Platform',
    problem:
      'The organization needed a unified AI interface supporting multiple LLM providers with real-time responses, model comparison capabilities, and enterprise-grade reliability for 200+ concurrent users.',
    solution:
      'Architected and built the frontend from scratch — component hierarchy, Redux Toolkit state patterns, API abstraction layer, and streaming UI with incremental rendering across GPT-4, Claude, and Gemini.',
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'OpenAI API',
      'Material UI',
    ],
    impact: [
      { label: 'Latency Reduction', value: '~40%' },
      { label: 'UI Bug Reduction', value: '~30%' },
      { label: 'Concurrent Users', value: '200+' },
      { label: 'Components Built', value: '15+' },
    ],
    challenges: [
      'Resolved 2 race conditions in streaming state by profiling with React DevTools',
      'Built model-switching module with zero page reloads for live A/B testing',
      'Enforced TypeScript strict mode across all components for type safety',
    ],
    features: [
      'Real-time OpenAI streaming with incremental rendering',
      'Multi-model switching (GPT-4, Claude, Gemini)',
      'API abstraction layer adopted by full team',
      'Strictly-typed component architecture',
    ],
    architecture: [
      { layer: 'Presentation', items: ['Chat UI', 'Model Selector', 'Stream Renderer', 'Settings Panel'] },
      { layer: 'State', items: ['Redux Toolkit', 'Streaming Buffer', 'Model Config', 'Error Boundaries'] },
      { layer: 'Integration', items: ['OpenAI API', 'Claude API', 'Gemini API', 'WebSocket Streams'] },
    ],
  },
  {
    id: 'smartpetbowl',
    name: 'SmartPetBowl',
    company: 'Cavin Infotech',
    role: 'Frontend Engineer',
    period: '2025 – Present',
    tagline: 'IoT-based Pet Health Monitoring Platform',
    problem:
      'Pet owners lacked a unified interface to monitor real-time health and nutrition data from IoT-enabled smart collars and feeding bowls, with varying access levels across user roles.',
    solution:
      'Designed a scalable dashboard application with interactive health metrics visualization, real-time IoT data streams, role-based access control, and full CRUD operations for pet profiles and device management.',
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Material UI',
      'IoT APIs',
    ],
    impact: [
      { label: 'Reusable Components', value: '15+' },
      { label: 'User Roles', value: '3' },
      { label: 'Data Streams', value: 'Real-time' },
      { label: 'CRUD Modules', value: 'Full' },
    ],
    challenges: [
      'Optimized rendering for continuous IoT data updates in data-heavy views',
      'Implemented RBAC (Admin, User, Customer) with granular permissions',
      'Ensured seamless synchronization between IoT devices and backend APIs',
    ],
    features: [
      'Real-time pet health & nutrition dashboards',
      'IoT device data visualization',
      'Role-based access control',
      'Pet profile & device management',
    ],
    architecture: [
      { layer: 'Dashboard', items: ['Health Metrics', 'Nutrition Tracker', 'Device Status', 'Alerts'] },
      { layer: 'Access Control', items: ['Admin Panel', 'User Portal', 'Customer View', 'RBAC Middleware'] },
      { layer: 'Data Layer', items: ['IoT Streams', 'REST APIs', 'Redux Store', 'WebSocket Sync'] },
    ],
  },
  {
    id: 'sbi',
    name: 'SBI Banking Portal',
    company: 'Tata Consultancy Services',
    role: 'UI Developer',
    period: '2021 – 2025',
    tagline: 'Core Banking Application',
    problem:
      'Legacy jQuery modules created maintenance overhead, inconsistent UI patterns, and poor testability across a core banking portal serving 10,000+ daily active users.',
    solution:
      'Migrated 6 legacy modules to React, built 20+ responsive components, created a shared component library, and implemented validation-driven multi-step forms for complex banking workflows.',
    technologies: ['React.js', 'JavaScript', 'Material UI', 'REST APIs', 'Jest', 'React Testing Library'],
    impact: [
      { label: 'Codebase Reduction', value: '~25%' },
      { label: 'Daily Active Users', value: '10,000+' },
      { label: 'Test Coverage', value: '70%+' },
      { label: 'Code Reuse', value: '40%' },
    ],
    challenges: [
      'Migrated jQuery modules without disrupting production banking workflows',
      'Built centralized error handling across 15+ REST API integrations',
      'Mentored 2 junior developers on component library patterns',
    ],
    features: [
      'Shared component library (40% reuse)',
      'Multi-step validation forms',
      'Centralized API error handling',
      'Responsive banking UI components',
    ],
    architecture: [
      { layer: 'Components', items: ['Form System', 'Data Tables', 'Navigation', 'Modals'] },
      { layer: 'Services', items: ['API Client', 'Error Handler', 'Auth Guard', 'Cache Layer'] },
      { layer: 'Testing', items: ['Jest Unit Tests', 'RTL Integration', 'Snapshot Tests', 'CI Pipeline'] },
    ],
  },
  {
    id: 'walmart',
    name: 'Walmart Retail UI',
    company: 'Tata Consultancy Services',
    role: 'UI Developer',
    period: '2021 – 2025',
    tagline: 'E-commerce UI Enhancements',
    problem:
      'Product listing pages suffered from redundant DOM updates causing poor scroll performance on low-end devices, impacting the shopping experience for millions of users.',
    solution:
      'Refactored product listing rendering pipeline, delivered 10+ UI features across sprints, and integrated CI build checks to catch regression categories before staging.',
    technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'CI/CD'],
    impact: [
      { label: 'Scroll Performance', value: '+~20%' },
      { label: 'Features Shipped', value: '10+' },
      { label: 'Regression Prevention', value: '3 categories' },
      { label: 'SLA Compliance', value: '100%' },
    ],
    challenges: [
      'Eliminated redundant DOM updates without breaking existing product card layouts',
      'Resolved production-critical bugs within strict SLA timelines',
      'Collaborated with cross-functional teams across sprint cycles',
    ],
    features: [
      'Optimized product listing renderer',
      'Cross-browser compatible UI',
      'CI-integrated regression checks',
      'Performance profiling on low-end devices',
    ],
    architecture: [
      { layer: 'UI Layer', items: ['Product Cards', 'Filters', 'Pagination', 'Lazy Images'] },
      { layer: 'Rendering', items: ['Virtual DOM Diff', 'Batch Updates', 'Event Delegation'] },
      { layer: 'Quality', items: ['CI Checks', 'Cross-browser Tests', 'Performance Audits'] },
    ],
  },
]
