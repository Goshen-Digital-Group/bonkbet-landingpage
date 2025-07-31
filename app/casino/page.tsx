import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CasinoPage() {
  const games = [
    {
      name: "Dice",
      description: "Bet on a roll from 0 to 100. Choose your odds. High risk, high reward.",
      image: "/images/dice.png",
      status: "Live",
      players: "1,234",
    },
    {
      name: "Mines",
      description: "Avoid the BONK bombs. Pick safe tiles and cash out before you explode!",
      image: "/images/dice.png", // Using dice as placeholder
      status: "Alpha",
      players: "567",
    },
    {
      name: "Crash",
      description: "Watch the multiplier rise. Cash out before it crashes. Timing is everything.",
      image: "/images/crash.png",
      status: "Alpha",
      players: "890",
    },
    {
      name: "Blackjack",
      description: "Classic 21 — beat the dealer and double your Bonk.",
      image: "/images/blackjack.png",
      status: "Coming Soon",
      players: "0",
    },
    {
      name: "Slots",
      description: "Spin the reels of Bonk, Retardio, Doge, and more. Meme chaos guaranteed.",
      image: "/images/dice.png", // Using dice as placeholder
      status: "Coming Soon",
      players: "0",
    },
    {
      name: "Coin Flip",
      description: "Heads or tails? Only real degens survive the 50/50.",
      image: "/images/flip.png",
      status: "Coming Soon",
      players: "0",
    },
    {
      name: "HiLo",
      description: "Predict higher or lower. Bonk your way through the deck.",
      image: "/images/hilo.png",
      status: "Coming Soon",
      players: "0",
    },
    {
      name: "Roulette",
      description: "Red, black, or go all in on green. Spin the wheel of fate.",
      image: "/images/dice.png", // Using dice as placeholder
      status: "Coming Soon",
      players: "0",
    },
    {
      name: "Plinko",
      description: "Drop the chip. Pray to the Bonk gods. Watch it bounce.",
      image: "/images/dice.png", // Using dice as placeholder
      status: "Coming Soon",
      players: "0",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">🎰 Bonkbet Games</h1>
          <p className="text-xl opacity-90 mb-8">
            All games are designed for fun, fast play, and provable fairness — with meme-inspired UI.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">2,691</div>
              <div className="text-sm opacity-80">Active Players</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">$1.2M</div>
              <div className="text-sm opacity-80">Total Volume</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">99.1%</div>
              <div className="text-sm opacity-80">RTP Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {games.map((game, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mb-4 relative">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      width={120}
                      height={80}
                      className="mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-0 right-4 ${
                        game.status === "Live"
                          ? "bg-green-600"
                          : game.status === "Alpha"
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                      }`}
                    >
                      {game.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{game.name}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-sm text-white">{game.players} players online</div>
                  </div>
                  <Button
                    className={`w-full ${
                      game.status === "Coming Soon"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-orange-600 hover:bg-orange-700"
                    }`}
                    disabled={game.status === "Coming Soon"}
                  >
                    {game.status === "Coming Soon" ? "Coming Soon" : "Play Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fairness Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">🔐 Provably Fair Gaming</h2>
            <p className="text-lg text-gray-700 mb-8">
              All games run on-chain logic or provably fair RNG (off-chain verifiable). Every bet can be verified for
              fairness using cryptographic proofs.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🔗</div>
                  <h3 className="font-bold text-white mb-2">On-Chain Logic</h3>
                  <p className="text-sm text-white">Game outcomes determined by blockchain</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🎲</div>
                  <h3 className="font-bold text-white mb-2">Verifiable RNG</h3>
                  <p className="text-sm text-white">Cryptographically secure randomness</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="font-bold text-white mb-2">Transparent</h3>
                  <p className="text-sm text-white">All bets publicly verifiable</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
