import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { mindsetPillars } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { MotionReveal } from '../ui/MotionReveal'

export function EngineeringMindset() {
  const [activeId, setActiveId] = useState(mindsetPillars[0].id)
  const active = mindsetPillars.find((p) => p.id === activeId)!

  return (
    <section id="mindset" className="section-padding">
      <div className="page-container">
        <SectionHeader
          label="Engineering Mindset"
          title="How I build software"
          description="The principles and practices behind every line of code I write."
        />

        <MotionReveal>
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Pillar tabs */}
            <div className="lg:col-span-2 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {mindsetPillars.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveId(pillar.id)}
                  className={`shrink-0 text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeId === pillar.id
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03] border border-transparent'
                  }`}
                >
                  {pillar.title}
                </button>
              ))}
            </div>

            {/* Active pillar content */}
            <div className="lg:col-span-3 glass rounded-xl p-6 sm:p-8 border border-white/[0.06] min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">{active.title}</h3>
                  <p className="text-zinc-400 mb-6">{active.description}</p>
                  <ul className="space-y-3">
                    {active.practices.map((practice, i) => (
                      <motion.li
                        key={practice}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 text-sm text-zinc-400"
                      >
                        <span className="mt-1.5 w-5 h-5 rounded-full bg-indigo-500/15 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        </span>
                        {practice}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
