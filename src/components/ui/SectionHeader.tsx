import { type ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`max-w-2xl mb-10 sm:mb-12 ${alignClass}`}>
      <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gradient mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'success'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/[0.05] text-zinc-300 border-white/[0.08]',
    accent: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    success: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  )
}
