import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiHome,
  HiCollection,
  HiCode,
  HiLightningBolt,
  HiUserGroup,
  HiCog,
  HiChat,
  HiMail,
  HiDocumentDownload,
  HiClock,
} from 'react-icons/hi'
import { commandItems } from '../../data/navigation'
import { scrollToSection } from '../../hooks/useCommandPalette'

const iconMap: Record<string, React.ReactNode> = {
  home: <HiHome />,
  timeline: <HiClock />,
  projects: <HiCollection />,
  skills: <HiCode />,
  hire: <HiUserGroup />,
  mindset: <HiCog />,
  testimonials: <HiChat />,
  contact: <HiMail />,
  resume: <HiDocumentDownload />,
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = commandItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.keywords.some((k) => k.includes(query.toLowerCase())),
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleSelect = (item: (typeof commandItems)[0]) => {
    if (item.section === 'resume') {
      window.open('/resume.pdf', '_blank')
    } else {
      scrollToSection(item.section)
    }
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      handleSelect(filtered[selectedIndex])
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-[80]"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="glass rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-white/[0.08]">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                <HiLightningBolt className="text-indigo-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search sections, actions..."
                  className="flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-500 outline-none"
                  aria-label="Search commands"
                />
                <kbd className="text-xs text-zinc-500 glass px-1.5 py-0.5 rounded">ESC</kbd>
              </div>

              <ul className="max-h-72 overflow-y-auto py-2" role="listbox">
                {filtered.length === 0 ? (
                  <li className="px-4 py-6 text-center text-sm text-zinc-500">No results found</li>
                ) : (
                  filtered.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          index === selectedIndex
                            ? 'bg-indigo-500/15 text-white'
                            : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                        role="option"
                        aria-selected={index === selectedIndex}
                      >
                        <span className="text-zinc-500">{iconMap[item.icon]}</span>
                        {item.label}
                      </button>
                    </li>
                  ))
                )}
              </ul>

              <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-4 text-xs text-zinc-500">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>esc Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
