import { profile } from '../../data/profile'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-6">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 text-center sm:text-left">
          © {year} {profile.name}. Crafted with React & TypeScript.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
