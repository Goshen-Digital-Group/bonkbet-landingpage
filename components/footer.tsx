import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-yellow-900 to-black border-t-4 border-yellow-400 neon-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/casino-of-bonk.png"
                alt="Casino of Bonk"
                width={50}
                height={50}
                className="spin-slow hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="font-black text-xl text-yellow-400 neon-text font-bangers">CASINO</span>
                <span className="font-black text-sm text-yellow-300 neon-text font-bangers">OF BONK</span>
              </div>
            </div>
            <p className="text-yellow-200 text-sm font-bold font-bangers">
              🎰 The first-ever Bonkbet Casino on Solana. Built for players. Owned by the community. Fueled by BONKBET.
              🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-2xl mb-6 text-yellow-400 neon-text font-bangers">🔗 QUICK LINKS</h3>
            <div className="space-y-3">
              {[
                { name: "🎰 BONKBET Games", href: "/casino" },
                { name: "💎 $COB Token", href: "/token" },
                { name: "🖼️ NFT Collection", href: "/nfts" },
                { name: "📚 Documentation", href: "/docs" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-yellow-200 hover:text-yellow-100 hover:neon-text transition-all duration-300 font-bold font-bangers"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-black text-2xl mb-6 text-yellow-400 neon-text font-bangers">👥 COMMUNITY</h3>
            <div className="space-y-3">
              {[
                { icon: <Twitter className="w-5 h-5" />, name: "Twitter/X", href: "#" },
                { icon: <MessageCircle className="w-5 h-5" />, name: "Telegram", href: "#" },
                { icon: <MessageCircle className="w-5 h-5" />, name: "Discord", href: "#" },
                { icon: <Github className="w-5 h-5" />, name: "GitHub", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-3 text-yellow-200 hover:text-yellow-100 hover:neon-text transition-all duration-300 font-bold hover:shake font-bangers"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div>
            <h3 className="font-black text-2xl mb-6 text-yellow-400/10 neon-text font-bangers">🚀 GET STARTED</h3>
            <div className="space-y-4">
              <Button className="w-full neon-button font-black text-white hover:scale-105 font-bangers">
                🎰 LAUNCH BONKBET!
              </Button>
              <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-white font-black neon-border hover:shake font-bangers">
                💰 BUY
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-yellow-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-yellow-200 text-sm font-bold font-bangers">
            © 2025 Casino of BONKBET. All rights reserved. 🎰
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-yellow-200 text-sm font-bold font-bangers">
              ⚡ Managed by @Debsoopump and team ⚡
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
