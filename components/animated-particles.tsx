"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([])

  useEffect(() => {
    const emojis = ["🎰", "💎", "🚀", "🎲", "🪙", "⭐", "🔥", "⚡", "🎯", "🎪"]
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-2xl"
          initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
          animate={{
            x: [`${particle.x}vw`, `${(particle.x + 20) % 100}vw`],
            y: [`${particle.y}vh`, `${(particle.y + 30) % 100}vh`],
            opacity: [0, 1, 0],
            rotate: [0, 360],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  )
}
