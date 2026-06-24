import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiStar, HiBadgeCheck } from 'react-icons/hi'
import { timelineEvents } from '../../data/timeline'
import { SectionHeader } from '../ui/SectionHeader'
import { MotionReveal } from '../ui/MotionReveal'
import type { TimelineEvent } from '../../types'

const typeIcons = {
  education: HiAcademicCap,
  work: HiBriefcase,
  milestone: HiStar,
  certification: HiBadgeCheck,
}

const typeColors = {
  education: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  work: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
  milestone: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
  certification: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
}

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const Icon = typeIcons[event.type]

  return (
    <MotionReveal delay={index * 0.08} direction={index % 2 === 0 ? 'left' : 'right'}>
      <div className="relative pl-8 pb-12 last:pb-0">
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-indigo-500 bg-[var(--color-surface)] z-10" />
        <div className="glass rounded-xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-colors group">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg border ${typeColors[event.type]}`}>
                <Icon size={16} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-medium">{event.period}</p>
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {event.title}
                </h3>
              </div>
            </div>
            <span className="text-sm font-mono text-indigo-400/80">{event.year}</span>
          </div>
          <p className="text-sm text-indigo-300/70 mb-2">{event.organization}</p>
          <p className="text-sm text-zinc-400 leading-relaxed mb-3">{event.description}</p>
          {event.highlights && (
            <div className="flex flex-wrap gap-2">
              {event.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </MotionReveal>
  )
}

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" className="section-padding">
      <div className="page-container">
        <SectionHeader
          label="Career Journey"
          title="From engineering roots to AI-powered products"
          description="Education and roles at TCS and Cavin Infotech — project deep-dives are in the showcase below."
        />

        <div ref={containerRef} className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]">
            <motion.div
              className="w-full bg-gradient-to-b from-indigo-500 to-violet-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
