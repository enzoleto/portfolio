"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
}

export function FloatingElement({ children, delay = 0, duration = 4, y = 10 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, y, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

