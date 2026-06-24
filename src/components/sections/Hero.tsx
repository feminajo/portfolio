import { HiLocationMarker, HiDownload, HiMail } from 'react-icons/hi'
import { FaReact, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { profile, typingPhrases } from '../../data/profile'
import { Button } from '../ui/Button'
import { Badge } from '../ui/SectionHeader'
import { TypingEffect } from '../ui/TypingEffect'
import { MotionReveal } from '../ui/MotionReveal'

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding flex items-center !pt-28 sm:!pt-36"
    >
      <div className="page-container">
        <MotionReveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="success">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {profile.availabilityLabel}
            </Badge>
            <Badge variant="accent">
              {profile.experienceYears} Years Experience
            </Badge>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{' '}
            <span className="accent-gradient">{profile.firstName}</span>
          </h1>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <p className="text-xl sm:text-2xl text-zinc-400 mb-2 font-light">
            {profile.title} building{' '}
            <TypingEffect phrases={typingPhrases} className="text-indigo-300 font-normal" />
          </p>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-3 mt-6 mb-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <FaReact className="text-[#61DAFB]" /> React
            </span>
            <span className="text-zinc-700">|</span>
            <span className="flex items-center gap-1.5">
              <SiTypescript className="text-[#3178C6]" /> TypeScript
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">AI Products</span>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.25}>
          <p className="text-zinc-500 mb-2">{profile.currentRole}</p>
          <p className="text-zinc-500 flex items-center gap-1.5 mb-8">
            <HiLocationMarker className="shrink-0" />
            {profile.location} · {profile.currentCompany}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.3}>
          <div className="flex flex-wrap gap-3">
            <Button href="/resume.pdf" variant="primary" size="lg">
              <HiDownload />
              Download Resume
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <HiMail />
              Contact Me
            </Button>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.35}>
          <div className="flex items-center gap-4 mt-8">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-indigo-400 transition-colors"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
