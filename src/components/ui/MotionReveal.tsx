import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const directionOffset = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
}

export function MotionReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  ...props
}: MotionRevealProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
