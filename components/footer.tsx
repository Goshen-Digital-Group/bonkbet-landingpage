import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-yellow-900 to-black border-t-4 border-yellow-400 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/BONKBET.png"
                alt="BONKBET"
                width={50}
                height={50}
                className="spin-slow hover:scale-110"
              />

            </div>
            <p className="text-white text-base font-bold font-bangers">
              🎰 The first-ever Bonkbet Casino on Solana. Built for players. Owned by the community. Fueled by BONKBET.
              🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-3xl mb-6 text-white font-bangers">🔗 QUICK LINKS</h3>
            <div className="space-y-3">
              {[
                { name: "🎰 BONKBET Games", href: "/casino" },
                { name: "💎 $KOB   Token", href: "/token" },
                { name: "🖼️ NFT Collection", href: "/nfts" },
                { name: "📚 Documentation", href: "/docs" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white hover:text-yellow-200 transition-all duration-300 font-bold font-bangers text-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-black text-3xl mb-6 text-white font-bangers">👥 COMMUNITY</h3>
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
                  className="flex items-center gap-3 text-white hover:text-yellow-200 transition-all duration-300 font-bold font-bangers text-lg"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div>
            <h3 className="font-black text-3xl mb-6 text-white font-bangers">🚀 GET STARTED</h3>
            <div className="space-y-4">
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 font-black text-white hover:scale-105 font-bangers text-lg">
                🎰 LAUNCH BONKBET!
              </Button>
              <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-white font-black border-2 border-yellow-400 font-bangers text-lg">
                💰 BUY
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-yellow-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-base font-bold font-bangers">
            © 2025 Casino of BONKBET. All rights reserved. 🎰
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-white text-base font-bold font-bangers">
              ⚡ BONKBET⚡
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
