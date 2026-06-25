import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { skillCategories } from '../../data/skills'
import { SectionHeader } from '../ui/SectionHeader'
import { MotionReveal } from '../ui/MotionReveal'

const diagramCategories = skillCategories.filter((category) => category.id !== 'tools')

const categoryPositions = [
  { x: 50, y: 15 },
  { x: 85, y: 35 },
  { x: 75, y: 70 },
  { x: 25, y: 75 },
  { x: 15, y: 40 },
]

function SkillDiagram({
  activeCategory,
  onSelect,
}: {
  activeCategory: string | null
  onSelect: (id: string) => void
}) {
  const active = skillCategories.find((c) => c.id === activeCategory)

  return (
    <div className="relative aspect-square w-full max-w-[280px] sm:max-w-xs mx-auto lg:max-w-none lg:mx-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
        {diagramCategories.map((cat, i) =>
          diagramCategories.slice(i + 1).map((other, j) => {
            const pos1 = categoryPositions[i]
            const pos2 = categoryPositions[i + j + 1]
            if (!pos1 || !pos2) return null

            const touchesActive =
              activeCategory &&
              (activeCategory === cat.id || activeCategory === other.id)
            const strokeColor = touchesActive
              ? active?.color ?? cat.color
              : 'rgba(255,255,255,0.06)'
            const strokeWidth = touchesActive ? 0.45 : 0.15

            return (
              <motion.line
                key={`${cat.id}-${other.id}`}
                x1={pos1.x}
                y1={pos1.y}
                x2={pos2.x}
                y2={pos2.y}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.08 }}
              />
            )
          }),
        )}
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass border border-indigo-500/30 flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(99,102,241,0.1)',
              '0 0 40px rgba(99,102,241,0.2)',
              '0 0 20px rgba(99,102,241,0.1)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-[10px] sm:text-xs font-semibold text-indigo-300 text-center leading-tight">
            Tech
            <br />
            Stack
          </span>
        </motion.div>
      </div>

      {diagramCategories.map((category, index) => {
        const pos = categoryPositions[index]
        const isActive = activeCategory === category.id

        return (
          <motion.button
            key={category.id}
            type="button"
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            onClick={() => onSelect(category.id)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-pressed={isActive}
            aria-label={`${category.label} skills`}
          >
            <motion.div
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium border transition-all duration-300 whitespace-nowrap"
              style={{
                backgroundColor: isActive ? `${category.color}20` : 'rgba(255,255,255,0.03)',
                borderColor: isActive ? `${category.color}60` : 'rgba(255,255,255,0.08)',
                color: isActive ? category.color : '#a1a1aa',
                boxShadow: isActive ? `0 0 20px ${category.color}30` : 'none',
              }}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {category.label}
            </motion.div>
          </motion.button>
        )
      })}
    </div>
  )
}

function SkillPanel({
  activeCategory,
  hoveredSkill,
  onHoverSkill,
}: {
  activeCategory: string | null
  hoveredSkill: string | null
  onHoverSkill: (skill: string | null) => void
}) {
  const active = skillCategories.find((c) => c.id === activeCategory)

  return (
    <div className="glass rounded-xl p-5 sm:p-6 border border-white/[0.06] self-start w-full">
      {active ? (
        <motion.div
          key={active.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">Selected category</p>
          <h3 className="text-xl font-semibold mb-4" style={{ color: active.color }}>
            {active.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {active.skills.map((skill) => (
              <motion.span
                key={skill}
                className="px-3 py-1.5 rounded-lg text-sm border cursor-default transition-all"
                style={{
                  borderColor:
                    hoveredSkill === skill ? `${active.color}60` : 'rgba(255,255,255,0.08)',
                  backgroundColor:
                    hoveredSkill === skill ? `${active.color}15` : 'rgba(255,255,255,0.03)',
                  color: hoveredSkill === skill ? active.color : '#a1a1aa',
                }}
                onMouseEnter={() => onHoverSkill(skill)}
                onMouseLeave={() => onHoverSkill(null)}
                whileHover={{ y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="text-center px-4">
          <p className="text-zinc-400 text-base mb-2">Select a category</p>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Click any node on the diagram to view the skills in that area.
          </p>
        </div>
      )}
    </div>
  )
}

function AllSkillsStrip({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: string | null
  onSelectCategory: (id: string) => void
}) {
  return (
    <div className="glass rounded-xl p-5 sm:p-6 border border-white/[0.06] mb-6 lg:mb-8">
      <div className="mb-5">
        <p className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1">At a glance</p>
        <h3 className="text-lg font-semibold text-zinc-100">Full tech stack</h3>
      </div>

      <div className="space-y-3.5">
        {skillCategories.map((category) => {
          const isActive = activeCategory === category.id

          return (
            <div
              key={category.id}
              className={`rounded-lg border transition-colors ${
                isActive
                  ? 'border-white/[0.1] bg-white/[0.03]'
                  : 'border-transparent'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 sm:p-0 sm:py-1">
                <button
                  type="button"
                  onClick={() => onSelectCategory(category.id)}
                  className="shrink-0 text-left text-sm font-semibold sm:w-36 pt-0.5 hover:opacity-80 transition-opacity"
                  style={{ color: category.color }}
                >
                  {category.label}
                </button>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function SkillGalaxy() {
  const [activeCategory, setActiveCategory] = useState<string | null>(skillCategories[0]?.id ?? null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [explorerOpen, setExplorerOpen] = useState(false)

  const handleSelect = (id: string) => {
    setActiveCategory((prev) => (prev === id ? prev : id))
    setHoveredSkill(null)
  }

  return (
    <section id="skills" className="section-padding">
      <div className="page-container">
        <SectionHeader
          label="Skills"
          title="Tech stack at a glance"
          description="Every skill listed below — expand to explore the interactive diagram."
        />

        <MotionReveal>
          <AllSkillsStrip
            activeCategory={activeCategory}
            onSelectCategory={handleSelect}
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <button
            type="button"
            onClick={() => setExplorerOpen(!explorerOpen)}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors mb-4"
            aria-expanded={explorerOpen}
          >
            <span className="uppercase tracking-wider text-xs">Explore visually</span>
            <motion.span animate={{ rotate: explorerOpen ? 180 : 0 }}>
              <HiChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {explorerOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start pb-2">
                  <SkillDiagram activeCategory={activeCategory} onSelect={handleSelect} />
                  <SkillPanel
                    activeCategory={activeCategory}
                    hoveredSkill={hoveredSkill}
                    onHoverSkill={setHoveredSkill}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionReveal>
      </div>
    </section>
  )
}
