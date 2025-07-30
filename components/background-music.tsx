"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.3 // Set volume to 30%
      audio.loop = true

      // Auto-play after user interaction
      const handleFirstInteraction = () => {
        if (!isPlaying) {
          audio
            .play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch(() => {
              // Auto-play failed, user needs to manually start
            })
        }
        document.removeEventListener("click", handleFirstInteraction)
        document.removeEventListener("keydown", handleFirstInteraction)
      }

      document.addEventListener("click", handleFirstInteraction)
      document.addEventListener("keydown", handleFirstInteraction)

      return () => {
        document.removeEventListener("click", handleFirstInteraction)
        document.removeEventListener("keydown", handleFirstInteraction)
      }
    }
  }, [isPlaying])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            console.log("Audio play failed")
          })
      }
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (audio) {
      audio.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jackpot%20Fever-pwq9NlElKhlpjTAaSISQSIssfkJSOd.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        className="fixed bottom-4 right-4 z-50 flex gap-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button onClick={toggleMusic} className="neon-button font-black text-black font-bangers" size="sm">
            {isPlaying ? "🎵 PAUSE" : "🎵 PLAY"}
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={toggleMute}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-black font-bangers"
            size="sm"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </motion.div>
      </motion.div>
    </>
  )
}
