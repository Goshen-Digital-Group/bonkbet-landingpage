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
  generator: 'BonkBet',
  openGraph: {
    title: "BonkBet - The First-Ever Let'sBonk Casino on Solana",
    description:
      "Degens play here. Bonk is the house. A decentralized, community-driven casino built on Solana with meme coin energy and provably fair games.",
    url: "https://bonkbet.live",
    siteName: "BonkBet",
    images: [
      {
        url: "/images/Bonkbet-banner.png",
        width: 1200,
        height: 630,
        alt: "BonkBet Casino Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BonkBet - The First-Ever Let'sBonk Casino on Solana",
    description:
      "Degens play here. Bonk is the house. A decentralized, community-driven casino built on Solana with meme coin energy and provably fair games.",
    images: ["/images/Bonkbet-banner.png"],
    creator: "@bonkbetcasino",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bangers.variable}>
      <head>
        <link rel="icon" href="/images/BONKBET.png" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/images/BONKBET.png" />
        <link rel="apple-touch-icon" href="/images/BONKBET.png" />
      </head>
      <body className={bangers.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
