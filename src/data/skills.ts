import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#6366f1',
    skills: ['React.js', 'TypeScript', 'Next.js', 'React Hooks', 'HTML5', 'CSS3'],
  },
  {
    id: 'state',
    label: 'State Management',
    color: '#8b5cf6',
    skills: ['Redux Toolkit', 'Context API', 'Custom Hooks', 'React Query'],
  },
  {
    id: 'apis',
    label: 'APIs',
    color: '#06b6d4',
    skills: ['REST APIs', 'WebSocket', 'Streaming APIs', 'Error Handling'],
  },
  {
    id: 'ai',
    label: 'AI Integrations',
    color: '#10b981',
    skills: ['OpenAI API', 'Claude API', 'Gemini API', 'Prompt Engineering', 'Multi-model Orchestration'],
  },
  {
    id: 'styling',
    label: 'Styling',
    color: '#f59e0b',
    skills: ['Tailwind CSS', 'Material UI', 'Responsive Design', 'CSS Modules'],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#ec4899',
    skills: ['Vite', 'Webpack', 'Git', 'GitHub Actions', 'Jest', 'ESLint', 'Figma'],
  },
]
