import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { bangers } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "BonkBet - The First-Ever Let'sBonk Casino on Solana",
  description:
    "Degens play here. Bonk is the house. A decentralized, community-driven casino built on Solana with meme coin energy and provably fair games.",
  generator: 'BonkBet'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bangers.variable}>
      <body className={bangers.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
