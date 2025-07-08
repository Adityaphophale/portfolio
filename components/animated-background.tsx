"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              theme === "dark" ? "rgba(56, 189, 248, 0.3)" : "rgba(14, 165, 233, 0.2)"
            } 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-sky-500/30 rotate-45"
        animate={{
          y: [0, -100, 0],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-sky-400/40 rounded-full"
        animate={{
          y: [0, -80, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-3/4 w-3 h-3 bg-sky-600/40"
        animate={{
          x: [0, -120, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-5 h-5 border-2 border-sky-300/30"
        animate={{
          y: [0, 60, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Pulsing Dots */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-sky-500/50 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-3 h-3 bg-sky-400/40 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-40 left-1/2 w-1 h-1 bg-sky-600/60 rounded-full"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
