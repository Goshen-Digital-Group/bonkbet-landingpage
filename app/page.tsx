"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, FileText, Lightbulb, Target, Users, Zap } from "lucide-react";
import Image from "next/image";
import { AnimatedParticles } from "@/components/animated-particles";
import { BackgroundMusic } from "@/components/background-music";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const games = [
    {
      name: "DICE",
      description: "Roll the bones! 0-100 chaos! YOLO or go home!",
      image: "/Games/dice.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/dice",
    },
    {
      name: "CRASH",
      description: "TO THE MOON OR CRASH & BURN! Diamond hands only!",
      image: "/Games/crash.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/crash",
    },
    {
      name: "BLACKJACK",
      description: "21 or BUST! Beat the house like a true degen!",
      image: "/Games/blackjack.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/blackjack",
    },
    {
      name: "FLIP",
      description: "Heads or tails? 50/50 PURE ADRENALINE! 🪙",
      image: "/Games/flip.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/flip",
    },
    {
      name: "HILO",
      description: "Higher or lower? Predict like a fortune teller!",
      image: "/Games/hilo.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/hilo",
    },
    {
      name: "MINES",
      description: "Avoid the BONK bombs! Pick safe tiles and cash out!",
      image: "/Games/mines.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/mines",
    },
    {
      name: "SLOTS",
      description: "Spin the reels! Bonk, Retardio, Doge chaos!",
      image: "/Games/slots.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/slots",
    },
    {
      name: "ROULETTE",
      description: "Red, black, or go all in on green! Spin the wheel!",
      image: "/Games/roulette.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/roulette",
    },
    {
      name: "PLINKO",
      description: "Drop the chip! Pray to the Bonk gods! Watch it bounce!",
      image: "/Games/plinko.png",
      status: "🔥 LIVE",
      link: "https://play.bonkbet.live/plinko",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const handleLaunchCasino = () => {
    window.open("https://play.bonkbet.live", "_blank");
  };

  // Add state for copy notification
  const [copied, setCopied] = useState(false);
  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Replace with your real address

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen scrolling-bg retro-grid relative overflow-hidden">
      <AnimatedParticles />
      <BackgroundMusic />

      {/* GOLDEN HERO SECTION */}
      <section
        className="relative py-16 overflow-hidden min-h-[1000px]"
        style={{
          backgroundImage: "url('/images/BONKBET-bg-herosection.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay from bottom (dark yellow) to top (transparent) */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/90 via-yellow-500/60 to-yellow-200/0 pointer-events-none"></div>

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
                src="/images/BONKBET.png"
                alt="Bonkbet"
                width={300}
                height={300}
                className="mx-auto mb-6 cursor-rocket"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-4xl font-black text-white mb-2 tracking-wide font-bangers cursor-money leading-snug"
            style={{ textShadow: "0 2px 16px #facc15, 0 1px 8px #000" }}
            variants={itemVariants}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            THE FIRST-EVER COMMUNITY OWNED CASINO ON BONK
          </motion.div>

          <motion.div
            className="text-2xl font-bold text-white mb-8 tracking-wide font-bangers cursor-rocket"
            style={{ textShadow: "0 2px 16px #facc15, 0 1px 4px #000" }}
            variants={itemVariants}
            animate={{ x: [0, -5, 5, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            🔥 DEGENS PLAY HERE 🔥
          </motion.div>

          <div className="mt-4 sm:mt-6 relative">
            <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-white font-bold font-bangers mb-3 tracking-wider text-center mx-auto max-w-fit px-4 py-1.5 bg-black/30 rounded-full shadow-inner backdrop-blur-sm whitespace-nowrap">
              CONTRACT ADDRESS
            </p>

            {/* Flex container for address + button */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-yellow-900 font-mono text-white p-2 sm:p-3 rounded-full w-full max-w-lg mx-auto">
              {/* Truncated Contract Address */}
              <span className="flex-1 text-center text-xs sm:text-base md:text-xl lg:text-2xl px-2 sm:px-4 truncate">
                {contractAddress
                  ? `${contractAddress.slice(0, 6)}...${contractAddress.slice(
                      -6
                    )}`
                  : "Loading..."}
              </span>

              {/* Copy Button - Position-Friendly */}
              <Button
                size="sm"
                className="
       
            p-2 sm:p-3 
            py-2 sm:py-3 md:py-4 
            bg-yellow-500 
            hover:bg-yellow-400 
            text-white 
            cursor-rocket 
            transition-transform 
            hover:scale-110 
            active:scale-95

     
            rounded-full 
            shadow-md 
            z-10

            shrink-0
          "
                onClick={handleCopy}
                aria-label="Copy contract address"
              >
                <Copy className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </Button>
            </div>

            {/* Copy Confirmation Tooltip */}
            {copied && (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -mt-12 bg-yellow-500 text-white font-bold px-4 py-2 rounded-xl shadow-lg z-50 text-sm sm:text-base md:text-xl animate-fade-in-out whitespace-nowrap">
                BONKBET CA COPIED!
              </div>
            )}
          </div>

          <br />

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={containerVariants}
          >
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
                className="neon-button font-black text-2xl px-12 py-6 text-white tracking-wide font-bangers cursor-rocket"
              >
                🚀LAUNCH APP🚀
              </Button>
            </motion.div>
          </motion.div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <motion.div
            className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
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
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="font-black text-white text-4xl font-bangers">
                      {item.title}
                    </h3>
                    <p className="text-white font-bold font-bangers">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT IS BONKBET */}
    <motion.section
  className="py-20 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url('/images/whatisbonk-bg-02.svg')`, // ✅ Correct!
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-6xl font-black text-white mb-8 font-bangers cursor-dice"
              data-text="WHAT IS BONKBET OF BONK? "
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "tween", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              WHAT IS BONKBET OF BONK?
            </motion.h2>

            <motion.div
              className="bg-black/80 neon-border rounded-3xl p-8 mb-8 cursor-money"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "tween", stiffness: 80 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: [0, -0.5, 0.5, 0] }}
            >
              <p className="text-3xl text-white leading-relaxed font-bold font-bangers tracking-wider">
                🎰 BonkBet (BB) is a{" "}
                <span className="text-white font-extrabold">DECENTRALIZED</span>
                ,<span className="text-white "> COMMUNITY-DRIVEN</span> casino
                built on BONKBET — Solana's{" "}
                <span className="text-white">MEME-POWERED</span> movement!
              </p>
              <motion.p
                className="text-5xl text-white mt-4 font-bold font-bangers"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ⚡ COMBINING DEGEN CHAOS WITH REAL UTILITY! ⚡
              </motion.p>
            </motion.div>

            <motion.div
              className="text-3xl font-black text-white neon-text font-bangers cursor-rocket"
              initial={{ x: -200, opacity: 0 }}
              style={{ textShadow: "0 2px 16px #facc15, 0 1px 8px #000" }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "tween", stiffness: 100 }}
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
        className="py-20 bg-gradient-to-r from-yellow-800 via-yellow-100 to-yellow-300 relative"
        style={{
          backgroundImage: "url('/images/bonkbet-bg-unique-02.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 retro-grid opacity-20"></div>
        <div className="relative container mx-auto px-4 text-white">
          <motion.h2
            className="text-6xl font-black tracking-wider text-center mb-12 font-bangers cursor-dice"
            style={{ textShadow: "0 2px 16px #facc15, 0 1px 8px #000" }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            WHY BONKBET IS UNIQUE
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl py-10 mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-white " />,
                title: "FIRST MEME CASINO",
                desc: "The world's first casino built specifically for the meme coin community on Solana!",
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "COMMUNITY OWNED",
                desc: "100% community-driven with DAO governance. Players decide the future!",
              },
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                title: "INSTANT PAYOUTS",
                desc: "Lightning-fast Solana blockchain ensures instant wins and withdrawals!",
              },
              {
                icon: <Target className="w-8 h-8 text-white" />,
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
                  <CardContent className="p-6 text-center h-full flex flex-col pt-20 ">
                    <div>
                      <motion.div
                        className="flex justify-center mb-4 text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        style={{
                          textShadow: "0 2px 16px #facc15, 0 1px 8px #000",
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.2,
                        }}
                      >
                        {feature.icon}
                      </motion.div>

                      <h3
                        className="text-4xl font-black text-white mb-4 tracking-wider font-bangers"
                        style={{
                          textShadow: "0 2px 12px #facc15, 0 1px 4px #000",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-white text-2xl tracking-wider p-10 font-bold font-bangers"
                        style={{
                          textShadow: "0 2px 8px #facc15, 0 1px 2px #000",
                        }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* BONK GAMES ARE LIVE */}
      <motion.section
        className="py-20 bg-gradient-to-br from-yellow-200 via-yellow-100 to-white relative"
        initial={{ opacity: 0 }}
               style={{
              backgroundImage: `url('images/BONKBETLIVE-Section-bg-02.svg')`, // ✅ Correct!
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              textShadow: "0 2px 16px #facc15, 0 1px 8px #000",
            }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffd700 fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.h2
            className="text-7xl font-black text-center text-white mb-6 font-bangers tracking-wide cursor-dice"
            style={{ textShadow: "0 2px 16px #facc15, 0 1px 8px #000" }}
            initial={{ y: -100, opacity: 0 }}
            
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            BONKBET GAMES ARE LIVE!
          </motion.h2>

          <motion.p
            className="text-center text-white mb-12 text-4xl font-bold tracking-wider  font-bangers cursor-money"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
            viewport={{ once: true }}
          >
            ⚡ ALL GAMES ARE LIVE! FAST PLAY! PROVABLE FAIRNESS! MEME-INSPIRED
            CHAOS! ⚡
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
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    >
                      <Badge className="absolute top-2 right-2 bg-yellow-900 text-yellow-400 text-1xl font-black font-bangers">
                        {game.status}
                      </Badge>
                    </motion.div>

                    <div className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3,
                        }}
                      >
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.name}
                          width={300}
                          height={200}
                          className="mx-auto transition-all duration-500"
                        />
                      </motion.div>
                    </div>

                    <p className="text-white font-bold text-2xl mb-6 tracking-widest font-bangers">
                      {game.description}
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="neon-button font-black text-2xl text-white px-6 py-6 font-bangers cursor-rocket mb-2 rounded-xl mx-auto"
                        onClick={() => window.open(game.link, "_blank")}
                      >
                        🎮 PLAY BONKBET 🎮
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
            className="text-6xl font-black text-center tracking-wider text-white mb-12 font-bangers cursor-dice"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "tween", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            📚 BONKBET DOCUMENTATION 📚
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2   lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FileText className="w-8 h-8 w text-white text-1xl" />,
                title: "HOW TO PLAY",
                desc: "Complete guide to all casino games, rules, and strategies for maximum wins!",
                link: "/docs/how-to-play",
              },
              {
                icon: <Zap className="w-8 h-8 text-white text-1xl" />,
                title: "GETTING STARTED",
                desc: "Step-by-step tutorial to connect wallet, deposit, and start playing instantly!",
                link: "/docs/getting-started",
              },
              {
                icon: <Target className="w-8 h-8 text-white text-1xl" />,
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
                <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 neon-border transition-all duration-500 cursor-dice h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="flex justify-center mb-4 text-yellow-700"
                        style={{
                          fontSize: "4rem",
                          textShadow: "0 2px 16px #facc15, 0 1px 8px #000",
                        }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.2,
                        }}
                      >
                        {doc.icon}
                      </motion.div>
                      <h3 className="text-4xl font-black text-white tracking-wider mb-6 font-bangers">
                        {doc.title}
                      </h3>
                      <p className="text-2xl text-white font-bold tracking-wider font-bangers mb-6">
                        {doc.desc}
                      </p>
                    </div>
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

        <div className="relative container mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center tracking-wider text-transparent bg-clip-text mb-8 sm:mb-12 text-white font-bangers cursor-money"
              data-text="💎 TOKENOMICS DETAILS💎"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "tween", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            >
              💎 TOKENOMICS DETAILS💎
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* TOKEN DETAILS CARD */}
              <motion.div
                className="flex-1"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 80, damping: 15 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-yellow-500 to-yellow-700 neon-border cursor-dice h-full">
                  <CardContent className="p-4 sm:p-8 flex flex-col h-full">
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-black tracking-wider text-white mb-4 sm:mb-6 font-bangers"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      🔥 TOKEN DETAILS 🔥
                    </motion.h3>

                    <div className="space-y-3 sm:space-y-4 text-white text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold font-bangers">
                      {[
                        {
                          label: "SYMBOL:",
                          value: "$BB",
                          badge:
                            "text-base sm:text-xl md:text-2xl lg:text-3xl text-white",
                        },
                        {
                          label: "NETWORK:",
                          value: "SOLANA ",
                          badge: "text-white",
                        },
                        {
                          label: "SUPPLY:",
                          value: "1,000,000,000 $BB",
                          badge:
                            "text-base sm:text-xl md:text-2xl lg:text-3xl text-white",
                        },
                        {
                          label: "TAX:",
                          value: "0/0 FAIR! 🚀",
                          badge: "text-white",
                        },
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
                          <span className="text-sm sm:text-base md:text-xl">
                            {item.label}
                          </span>
                          {item.badge ? (
                            <Badge
                              className={`${item.badge} font-black font-bangers`}
                            >
                              {item.value}
                            </Badge>
                          ) : (
                            <span className="text-yellow-200 neon-text">
                              {item.value}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-black/50 rounded-lg neon-border cursor-money relative">
                      <p className="text-base sm:text-xl md:text-2xl text-center text-yellow-200 mb-2 font-bold tracking-wider font-bangers">
                        CONTRACT ADDRESS:
                      </p>
                      <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-mono text-white bg-yellow-900 p-2 rounded-full">
                        <span className="flex-1 text-center px-2 sm:px-8 truncate text-base sm:text-xl md:text-2xl">
                          {contractAddress}
                        </span>
                        <Button
                          size="sm"
                          className="p-3 sm:p-5 py-2 sm:py-4 cursor-rocket"
                          onClick={handleCopy}
                        >
                          <Copy className="w-8 h-8 sm:w-10 sm:h-10" />
                        </Button>
                      </div>
                      {copied && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 mt-2 bg-yellow-500 text-white font-bold px-4 sm:px-6 py-2 rounded-xl shadow-lg z-50 text-base sm:text-xl md:text-2xl animate-fade-in-out">
                          BONKBET CA COPIED!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* UTILITY POWER CARD */}
              <motion.div
                className="flex-1"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 80, damping: 15 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 neon-border cursor-money h-full">
                  <CardContent className="p-4 sm:p-8 flex flex-col h-full">
                    <motion.h3
                      className="text-2xl sm:text-5xl font-black text-white mb-4 sm:mb-6 text-center font-bangers"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      ⚡ UTILITY POWER! ⚡
                    </motion.h3>

                    <div className="space-y-3 sm:space-y-4 text-white text-xl sm:text-3xl mb-6 sm:mb-10 font-bold font-bangers text-center">
                      {[
                        { icon: "🎮", text: "PLAY GAMES WITH $BB!" },
                        { icon: "🗳️", text: "VOTE ON EVERYTHING!" },
                        { icon: "🎟️", text: "NFT PERKS ACCESS!" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center gap-2 sm:gap-3 tracking-wider text-white font-bold font-bangers"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="text-3xl sm:text-5xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.2,
                            }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="hover:neon-text text-center">
                            {item.text}
                          </span>
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
            className="text-8xl font-black text-white mb-8 tracking-wider  font-bangers cursor-rocket"
            data-text="READY TO JOIN THE BONKBET REVOLUTION?!"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "tween", stiffness: 60, damping: 15 }}
            viewport={{ once: true }}
            animate={{ x: [0, -5, 5, 0] }}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          >
            READY TO JOIN THE BONKBET REVOLUTION?!
          </motion.h2>

          <motion.p
            className="text-3xl font-black text-white mb-12 tracking-wider font-bangers cursor-dice"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "tween", stiffness: 80 }}
            viewport={{ once: true }}
            animate={{ scale: [1, 1.05, 1] }}
          >
            ⚡ GET YOUR $BB TOKENS AND START PLAYING IN THE MOST DEGEN BONKBET
            ON SOLANA! ⚡
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                text: "🎟️ JOIN NFT WHITELIST!",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSeTHa7OtZbaAhaVYQ8-028J0-4Sj5RU53xIUoz7Cf33xDOHcQ/viewform?usp=header",
              },
              {
                text: "🗳️ JOIN COMMUNITY!",
                link: "https://x.com/i/communities/1949296345229181382",
              },
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
                transition={{
                  duration: 2 + index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-yellow-200 font-black text-yellow-800 text-3xl px-8 py-6 neon-border transition-all duration-300 font-bangers cursor-rocket hover:from-yellow-100 hover:to-white"
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
            transition={{ delay: 0.8, type: "tween", stiffness: 100 }}
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
  );
}

// Add this to your global CSS or Tailwind config for fade animation if you want:
{
  /* 
@keyframes fade-in-out {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}
.animate-fade-in-out {
  animation: fade-in-out 1.5s both;
}
*/
}
