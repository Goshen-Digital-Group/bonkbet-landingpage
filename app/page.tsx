"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, FileText, Lightbulb, Target, Users, Zap } from "lucide-react"
import Image from "next/image"
import { AnimatedParticles } from "@/components/animated-particles"
import { BackgroundMusic } from "@/components/background-music"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HomePage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const games = [
    {
      name: "DICE",
      description: "Roll the bones! 0-100 chaos! YOLO or go home! 🎲",
      image: "/images/dice.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "CRASH",
      description: "TO THE MOON OR CRASH & BURN! Diamond hands only! 🚀",
      image: "/images/crash.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "BLACKJACK",
      description: "21 or BUST! Beat the house like a true degen! 🃏",
      image: "/images/blackjack.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "FLIP",
      description: "Heads or tails? 50/50 PURE ADRENALINE! 🪙",
      image: "/images/flip.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "HILO",
      description: "Higher or lower? Predict like a fortune teller! 🔮",
      image: "/images/hilo.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "MINES",
      description: "Avoid the BONK bombs! Pick safe tiles and cash out! 💣",
      image: "/images/mines.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "SLOTS",
      description: "Spin the reels! Bonk, Retardio, Doge chaos! 🎰",
      image: "/images/slots.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "ROULETTE",
      description: "Red, black, or go all in on green! Spin the wheel! 🎡",
      image: "/images/roulette.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
    {
      name: "PLINKO",
      description: "Drop the chip! Pray to the Bonk gods! Watch it bounce! 🏀",
      image: "/images/plinko.png",
      status: "🔥 LIVE",
      link: "https://casino-of-bonk.vercel.app",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const handleLaunchCasino = () => {
    window.open("https://casino-of-bonk.vercel.app", "_blank")
  }

  return (
    <div className="min-h-screen scrolling-bg retro-grid relative overflow-hidden">
      <AnimatedParticles />
      <BackgroundMusic />

      {/* GOLDEN HERO SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/50 via-yellow-500/50 to-yellow-400/50"></div>

        {/* Floating elements with Framer Motion */}
        <motion.div
          className="absolute top-10 left-10 text-6xl cursor-dice"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          style={{ y: y1 }}
        >
          🎰
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-4xl cursor-money"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ y: y2 }}
        >
          💎
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-5xl cursor-rocket"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          ⭐
        </motion.div>

        <motion.div
          className="relative container mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Image
                src="/images/casino-of-bonk.png"
                alt="Casino of Bonk Logo"
                width={300}
                height={300}
                className="mx-auto mb-6 cursor-rocket"
              />
            </motion.div>
          </motion.div>

                <motion.h1
              className="text-9xl font-black text-white mb-4 neon-text glitch font-bangers cursor-dice"
              data-text="BONKBET"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            >
             BONKBET
            </motion.h1>

          <motion.div
            className="text-4xl font-black text-white mb-2 font-bangers cursor-money"
            variants={itemVariants}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
          THE FIRST-EVER BONKBET CASINO ON SOLANA
          </motion.div>

          <motion.div
            className="text-2xl font-bold text-white mb-8 font-bangers cursor-rocket"
            variants={itemVariants}
            animate={{ x: [0, -5, 5, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            🔥 DEGENS PLAY HERE. BONKBET IS THE HOUSE. 🔥
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-6 mb-12" variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Button
                onClick={handleLaunchCasino}
                size="lg"
                className="neon-button font-black text-2xl px-12 py-6 text-white font-bangers cursor-rocket"
              >
                🚀 LAUNCH BONKBET NOW! 🚀
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto" variants={containerVariants}>
            {[
              { icon: "🚀", title: "FAIR LAUNCH", desc: "0/0 TAX!" },
              { icon: "💎", title: "1B SUPPLY", desc: "FIXED FOREVER!" },
              { icon: "👥", title: "COMMUNITY", desc: "OWNED BY DEGENS!" },
              { icon: "🎲", title: "PROVABLY", desc: "FAIR GAMES!" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 neon-border transition-all duration-300 cursor-dice">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-4xl mb-2"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="font-black text-black text-lg neon-text font-bangers">{item.title}</h3>
                    <p className="text-black font-bold font-bangers">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT IS COB */}
      <motion.section
        className="py-20 bg-gradient-to-r from-yellow-500 via-yellow-400 to-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800 mb-8 glitch font-bangers cursor-dice"
              data-text="🧠 WHAT IS CASINO OF BONK? 🧠"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              🧠 WHAT IS BONKBET OF BONK? 🧠
            </motion.h2>

            <motion.div
              className="bg-black/20 neon-border rounded-3xl p-8 mb-8 cursor-money"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: [0, -0.5, 0.5, 0] }}
            >
              <p className="text-2xl text-black leading-relaxed font-bold font-bangers">
                🎰 Casino of Bonk (COB) is a <span className="text-yellow-800 neon-text">DECENTRALIZED</span>,
                <span className="text-yellow-700 neon-text"> COMMUNITY-DRIVEN</span> casino built on BONKBET —
                Solana's <span className="text-yellow-600 neon-text">MEME-POWERED</span> movement! 🚀
              </p>
              <motion.p
                className="text-xl text-yellow-800 mt-4 font-bold font-bangers"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ⚡ COMBINING DEGEN CHAOS WITH REAL UTILITY! ⚡
              </motion.p>
            </motion.div>

            <motion.div
              className="text-3xl font-black text-yellow-800 neon-text font-bangers cursor-rocket"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              animate={{ x: [0, -5, 5, 0] }}
              whileHover={{ scale: 1.1, rotate: [0, -1, 1, 0] }}
            >
              🔥 BUILT FOR PLAYERS. OWNED BY COMMUNITY. FUELED BY BONKBET. 🔥
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* WHY THIS IS UNIQUE */}
      <motion.section
        className="py-20 bg-gradient-to-r from-white via-yellow-100 to-yellow-300 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 retro-grid opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.h2
            className="text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-900 mb-12 font-bangers cursor-dice"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            💡 WHY BONKBET IS UNIQUE 💡
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "FIRST MEME CASINO",
                desc: "The world's first casino built specifically for the meme coin community on Solana!",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "COMMUNITY OWNED",
                desc: "100% community-driven with DAO governance. Players decide the future!",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "INSTANT PAYOUTS",
                desc: "Lightning-fast Solana blockchain ensures instant wins and withdrawals!",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "PROVABLY FAIR",
                desc: "Every game is cryptographically verifiable. No house tricks, pure fairness!",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-yellow-300 to-yellow-500 neon-border transition-all duration-500 cursor-dice h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="flex justify-center mb-4 text-black"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-black text-black mb-4 neon-text font-bangers">{feature.title}</h3>
                      <p className="text-black font-bold font-bangers">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CASINO GAMES ARE LIVE */}
      <motion.section
        className="py-20 bg-gradient-to-br from-yellow-200 via-yellow-100 to-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffd700 fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.h2
            className="text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 mb-6 font-bangers cursor-dice"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            🕹️ BONKBET GAMES ARE LIVE! 🕹️
          </motion.h2>

          <motion.p
            className="text-center text-yellow-800 mb-12 text-2xl font-bold neon-text font-bangers cursor-money"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            ⚡ ALL GAMES ARE LIVE! FAST PLAY! PROVABLE FAIRNESS! MEME-INSPIRED CHAOS! ⚡
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {games.map((game, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-yellow-300 to-yellow-500 neon-border transition-all duration-500 relative overflow-hidden group cursor-dice">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      <Badge className="absolute top-4 right-4 bg-black text-yellow-400 font-black font-bangers">
                        {game.status}
                      </Badge>
                    </motion.div>

                    <div className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                      >
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.name}
                          width={150}
                          height={100}
                          className="mx-auto transition-all duration-500"
                        />
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-3xl font-black text-black mb-4 neon-text font-bangers"
                      whileHover={{ scale: 1.1, rotate: [0, -1, 1, 0] }}
                    >
                      {game.name}
                    </motion.h3>

                    <p className="text-black font-bold text-lg mb-6 font-bangers">{game.description}</p>

                    <motion.div whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="neon-button font-black text-black w-full text-lg font-bangers cursor-rocket mb-2"
                        onClick={() => window.open(game.link, "_blank")}
                      >
                        🎮 PLAY BONKBET NOW! 🎮
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* DOCUMENTATION SECTION */}
      <motion.section
        className="py-20 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <motion.h2
            className="text-6xl font-black text-center text-black mb-12 font-bangers cursor-dice"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            📚 DOCUMENTATION & GUIDES 📚
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "HOW TO PLAY",
                desc: "Complete guide to all casino games, rules, and strategies for maximum wins!",
                link: "/docs/how-to-play",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "GETTING STARTED",
                desc: "Step-by-step tutorial to connect wallet, deposit, and start playing instantly!",
                link: "/docs/getting-started",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "PROVABLY FAIR",
                desc: "Learn how our cryptographic system ensures every game is 100% fair and verifiable!",
                link: "/docs/provably-fair",
              },
            ].map((doc, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-white to-yellow-200 neon-border transition-all duration-500 cursor-dice h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="flex justify-center mb-4 text-yellow-700"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      >
                        {doc.icon}
                      </motion.div>
                      <h3 className="text-xl font-black text-black mb-4 neon-text font-bangers">{doc.title}</h3>
                      <p className="text-black font-bold font-bangers mb-6">{doc.desc}</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="neon-button font-black text-black w-full font-bangers cursor-rocket"
                        onClick={() => window.open(doc.link, "_blank")}
                      >
                        📖 READ MORE
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* TOKEN SECTION */}
      <motion.section
        className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 retro-grid"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-900 mb-12 glitch font-bangers cursor-money"
              data-text="💎 $COB TOKEN - CHIP OF THE HOUSE! 💎"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            >
              💎 $COB TOKEN - CHIP OF THE HOUSE! 💎
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: [0, -0.5, 0.5, 0] }}
              >
                <Card className="bg-gradient-to-br from-yellow-500 to-yellow-700 neon-border cursor-dice">
                  <CardContent className="p-8">
                    <motion.h3
                      className="text-3xl font-black text-white mb-6 neon-text font-bangers"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🔥 TOKEN DETAILS 🔥
                    </motion.h3>

                    <div className="space-y-4 text-white font-bold font-bangers">
                      {[
                        { label: "SYMBOL:", value: "$COB", badge: "bg-white text-black" },
                        { label: "NETWORK:", value: "SOLANA ⚡", badge: "bg-yellow-300 text-black" },
                        { label: "SUPPLY:", value: "1,000,000,000 COB", badge: null },
                        { label: "TAX:", value: "0/0 FAIR! 🚀", badge: "bg-white text-black" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, x: 10 }}
                        >
                          <span>{item.label}</span>
                          {item.badge ? (
                            <Badge className={`${item.badge} font-black text-lg font-bangers`}>{item.value}</Badge>
                          ) : (
                            <span className="text-yellow-200 neon-text">{item.value}</span>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-6 p-4 bg-black/50 rounded-lg neon-border cursor-money"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-xs text-yellow-200 mb-2 font-bold font-bangers">CONTRACT ADDRESS:</p>
                      <div className="flex items-center gap-2 text-xs font-mono text-white bg-gray-900 p-2 rounded">
                        <span className="flex-1 truncate">8xBeKjLsd2ogWftM15mUzWYPp4qQrTna98CZBonkCoB7</span>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" className="neon-button p-1 cursor-rocket">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: [0, 0.5, -0.5, 0] }}
              >
                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 neon-border cursor-money">
                  <CardContent className="p-8">
                    <motion.h3
                      className="text-3xl font-black text-black mb-6 neon-text font-bangers"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      ⚡ UTILITY POWER! ⚡
                    </motion.h3>

                    <div className="space-y-4">
                      {[
                        { icon: "🪙", text: "PLAY GAMES WITH $COB!" },
                        { icon: "🎁", text: "EARN CASINO PROFITS!" },
                        { icon: "🗳️", text: "VOTE ON EVERYTHING!" },
                        { icon: "🎟️", text: "NFT PERKS ACCESS!" },
                        { icon: "💎", text: "STAKE FOR MORE $COB!" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 text-black font-bold font-bangers"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, x: 10 }}
                        >
                          <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="hover:neon-text">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="py-20 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=100 height=100 viewBox=0 0 100 100 xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=M50 5L61.8 38.2L95 38.2L69.1 61.8L80.9 95L50 71.4L19.1 95L30.9 61.8L5 38.2L38.2 38.2L50 5Z fill=%23fff700 fillOpacity=0.1/%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            className="text-8xl font-black text-black mb-8 glitch font-bangers cursor-rocket"
            data-text="🚀 READY TO JOIN THE BONK REVOLUTION?! 🚀"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            viewport={{ once: true }}
            animate={{ x: [0, -5, 5, 0] }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            🚀 READY TO JOIN THE BONK REVOLUTION?! 🚀
          </motion.h2>

          <motion.p
            className="text-3xl font-black text-black mb-12 font-bangers cursor-dice"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            animate={{ scale: [1, 1.05, 1] }}
          >
            ⚡ GET YOUR $COB TOKENS AND START PLAYING IN THE MOST DEGEN CASINO ON SOLANA! ⚡
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { text: "🎟️ JOIN NFT WHITELIST!", link: "/nfts" },
              { text: "🗳️ JOIN COMMUNITY DAO!", link: "/community" },
            ].map((button, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2 + index * 0.2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-yellow-200 font-black text-black text-xl px-8 py-6 neon-border transition-all duration-300 font-bangers cursor-rocket hover:from-yellow-100 hover:to-white"
                  onClick={() => window.open(button.link, "_blank")}
                >
                  {button.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-6xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            {["🎰", "💎", "🚀", "⭐", "🔥"].map((emoji, index) => (
              <motion.span
                key={index}
                className="inline-block mx-2 cursor-dice"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2 + index * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 2, rotate: 720 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
