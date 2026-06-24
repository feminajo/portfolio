import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navItems, sectionIds } from '../../data/navigation'
import { scrollToSection } from '../../hooks/useCommandPalette'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useActiveSection } from '../../hooks/useActiveSection'

function navLinkClass(isActive: boolean) {
  return `px-3 py-2 text-sm transition-colors rounded-md ${
    isActive
      ? 'text-indigo-300 bg-indigo-500/10 font-medium'
      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
  }`
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = useScrollProgress()
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between h-16 gap-4">
          <button
            type="button"
            onClick={() => handleNav('hero')}
            className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity shrink-0"
            aria-label="Go to home"
          >
            <span className="text-gradient">JF</span>
            <span className="text-indigo-400">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.slice(1, -1).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={navLinkClass(activeSection === item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className={`hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'bg-indigo-400 text-white'
                  : 'bg-indigo-500 hover:bg-indigo-400 text-white'
              }`}
            >
              Contact
            </button>
            <button
              type="button"
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/[0.06]"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`px-3 py-3 text-left text-sm rounded-lg transition-colors ${navLinkClass(activeSection === item.id)}`}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
