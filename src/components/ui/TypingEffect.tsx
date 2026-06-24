import { useState, useEffect } from 'react'

interface TypingEffectProps {
  phrases: string[]
  className?: string
}

export function TypingEffect({ phrases, className = '' }: TypingEffectProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentPhrase = phrases[phraseIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentPhrase.length) {
            setCharIndex((prev) => prev + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 30 : 60,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentPhrase, phrases.length])

  return (
    <span className={className} aria-live="polite">
      {currentPhrase.slice(0, charIndex)}
      <span className="inline-block w-[2px] h-[1em] bg-indigo-400 ml-0.5 animate-pulse align-middle" />
    </span>
  )
}
