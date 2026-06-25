import { motion } from 'framer-motion'
import {
  HiClock,
  HiServer,
  HiChip,
  HiCode,
  HiLightningBolt,
  HiUserGroup,
} from 'react-icons/hi'
import { hireReasons } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { MotionReveal } from '../ui/MotionReveal'

const iconMap: Record<string, React.ReactNode> = {
  experience: <HiClock size={24} />,
  production: <HiServer size={24} />,
  ai: <HiChip size={24} />,
  react: <HiCode size={24} />,
  learner: <HiLightningBolt size={24} />,
  team: <HiUserGroup size={24} />,
}

export function WhyHireMe() {
  return (
    <section id="why-hire" className="section-padding bg-white/[0.01]">
      <div className="page-container">
        <SectionHeader
          label="Highlights"
          title="Why hire me?"
          description="The metrics and highlights that matter — distilled for quick evaluation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hireReasons.map((reason, index) => (
            <MotionReveal key={reason.id} delay={index * 0.08}>
              <motion.div
                className="glass rounded-xl p-6 border border-white/[0.06] h-full hover:border-indigo-500/20 transition-colors group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    {iconMap[reason.icon]}
                  </div>
                  <span className="text-3xl font-bold accent-gradient">{reason.metric}</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{reason.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
