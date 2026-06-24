import { motion } from 'framer-motion'
import { HiMail, HiDownload, HiArrowRight } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { MotionReveal } from '../ui/MotionReveal'

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <HiMail size={20} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/joyce-femina',
    href: profile.linkedin,
    icon: <FaLinkedinIn size={18} />,
  },
  {
    label: 'GitHub',
    value: 'github.com/feminajo',
    href: profile.github,
    icon: <FaGithub size={18} />,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="page-container text-center">
        <MotionReveal>
          <motion.div
            className="glass rounded-2xl p-8 sm:p-12 border border-white/[0.08] relative overflow-hidden"
            whileHover={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] to-violet-500/[0.03]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
                Let&apos;s build something impactful together.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
                I&apos;m open to frontend engineering roles focused on React, TypeScript, and
                AI-powered products. Let&apos;s connect.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Button href={`mailto:${profile.email}`} variant="primary" size="lg">
                  <HiMail />
                  Send Email
                  <HiArrowRight className="text-sm" />
                </Button>
                <Button href="/resume.pdf" variant="secondary" size="lg">
                  <HiDownload />
                  Download Resume
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="glass rounded-lg p-4 border border-white/[0.06] hover:border-indigo-500/20 transition-all group text-left"
                  >
                    <div className="flex items-center gap-2 text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors">
                      {link.icon}
                      <span className="text-sm font-medium">{link.label}</span>
                    </div>
                    <p className="text-xs text-zinc-500 truncate">{link.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  )
}
