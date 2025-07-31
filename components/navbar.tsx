"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CASINO", href: "/casino" },
    { name: "DOCS", href: "https://pump.fun" },
  ]

  const handleLaunchCasino = () => {
    window.open("https://casino-of-bonk.vercel.app", "_blank")
  }

  return (
    <motion.nav
      className=" scale-95 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 border-b-4 border-yellow-300 sticky top-0 z-50 neon-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-3 group cursor-rocket">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Image
                  src="/images/casino-of-bonk.png"
                  alt="Bonklet"
                  width={90}
                  height={90}
                  className="group-hover:scale-110"
                />
                <motion.div
                  className="absolute -top-1 -right-1 pointer-events-none"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
              <div className="flex flex-col">
                <motion.span
                  className="font-black text-4xl text-white neon-text font-bangers"
                  whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 1, 0] }}
                >
                  BONKLET
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-yellow-200 font-black text-3xl transition-all duration-300 hover:neon-text font-bangers cursor-dice"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Button
                onClick={handleLaunchCasino}
                className="neon-button font-black text-white text-3xl font-bangers cursor-rocket"
              >
                🚀 LAUNCH CASINO!
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white hover:text-yellow-200"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-6 border-t-2 border-yellow-300"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-yellow-200 font-black text-lg hover:neon-text font-bangers"
                      onClick={() => setIsOpen(false)}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={handleLaunchCasino} className="neon-button font-black text-1xl  text-black font-bangers">
                    🚀 LAUNCH CASINO!
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
