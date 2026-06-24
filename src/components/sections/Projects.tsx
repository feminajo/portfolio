import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { projects } from '../../data/projects'
import { SectionHeader } from '../ui/SectionHeader'
import { MotionReveal } from '../ui/MotionReveal'
import type { Project } from '../../types'

function ArchitectureDiagram({ architecture }: { architecture: Project['architecture'] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {architecture.map((layer, i) => (
        <motion.div
          key={layer.layer}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-lg p-4 border border-white/[0.06]"
        >
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-wider mb-3">
            {layer.layer}
          </p>
          <ul className="space-y-1.5">
            {layer.items.map((item) => (
              <li key={item} className="text-xs text-zinc-400 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <MotionReveal delay={index * 0.1}>
      <article className="glass rounded-2xl border border-white/[0.06] overflow-hidden">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 sm:p-8 hover:bg-white/[0.02] transition-colors"
          aria-expanded={expanded}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold text-zinc-100">{project.name}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {project.period}
                </span>
              </div>
              <p className="text-indigo-300/80 text-sm mb-1">{project.tagline}</p>
              <p className="text-zinc-500 text-sm">
                {project.role} · {project.company}
              </p>
            </div>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="text-zinc-500 mt-2">
              <HiChevronDown size={20} />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-8 space-y-8 border-t border-white/[0.06] pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400/80 uppercase tracking-wider mb-2">
                      Problem
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Impact metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                    Impact
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.impact.map((metric) => (
                      <div
                        key={metric.label}
                        className="glass rounded-lg p-4 text-center border border-white/[0.06]"
                      >
                        <p className="text-2xl font-bold accent-gradient">{metric.value}</p>
                        <p className="text-xs text-zinc-500 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-zinc-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                    Architecture
                  </h4>
                  <ArchitectureDiagram architecture={project.architecture} />
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                    Engineering Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="text-sm text-zinc-400 pl-4 border-l-2 border-indigo-500/30 py-1"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </MotionReveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-white/[0.01]">
      <div className="page-container">
        <SectionHeader
          label="Project Showcase"
          title="Case studies from production"
          description="Deep dives into real projects — the problems, solutions, and measurable impact."
        />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
