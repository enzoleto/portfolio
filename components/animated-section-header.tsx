"use client"

import { motion } from "framer-motion"

interface AnimatedSectionHeaderProps {
  title: string
  highlight: string
}

export function AnimatedSectionHeader({ title, highlight }: AnimatedSectionHeaderProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {title} <span className="text-green-500">{highlight}</span>
      </motion.h2>
      <motion.div
        className="mt-2 h-1 w-20 bg-green-500 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  )
}

