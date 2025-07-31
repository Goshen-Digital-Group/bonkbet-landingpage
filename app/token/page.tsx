import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, TrendingUp, Users, Coins } from "lucide-react"

export default function TokenPage() {
  const tokenomics = [
    { label: "Total Supply", value: "1,000,000,000 COB", icon: <Coins className="w-5 h-5" /> },
    { label: "Circulating Supply", value: "1,000,000,000 COB", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Market Cap", value: "$2.4M", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Holders", value: "3,247", icon: <Users className="w-5 h-5" /> },
  ]

  const utilities = [
    {
      icon: "🪙",
      title: "Play Games",
      description: "Use $COB to play all casino games with lower house edge",
    },
    {
      icon: "🎁",
      title: "Profit Sharing",
      description: "Earn a percentage of casino profits based on your holdings",
    },
    {
      icon: "🗳️",
      title: "Governance",
      description: "Vote on future game releases, fees, and platform features",
    },
    {
      icon: "🎟️",
      title: "NFT Access",
      description: "Use tokens for exclusive NFT perks and benefits",
    },
    {
      icon: "💎",
      title: "Staking Rewards",
      description: "Stake your $COB to earn more tokens and exclusive benefits",
    },
    {
      icon: "🎰",
      title: "VIP Benefits",
      description: "Higher holdings unlock VIP tables and exclusive games",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">💎 $COB Token</h1>
          <p className="text-xl opacity-90 mb-8">The Chip of the House</p>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm opacity-80">Contract Address:</span>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="font-mono text-sm bg-black/20 rounded p-3 break-all">
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <p className="text-xs opacity-70 mt-2">Always verify the contract address before trading</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Buy on Raydium
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Buy on Jupiter
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              View Chart
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Token Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Token Statistics</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {tokenomics.map((stat, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-orange-600">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Token Details */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Token Details</CardTitle>
                <CardDescription>Core information about $COB token</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Symbol:</span>
                  <Badge variant="secondary">$COB</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Full Name:</span>
                  <span>Casino of Bonk Token</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Network:</span>
                  <Badge className="bg-purple-600">Solana</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Supply:</span>
                  <span>1,000,000,000 COB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Tax:</span>
                  <Badge className="bg-green-600">0/0 (Fair launch)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Decimals:</span>
                  <span>9</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Price Information</CardTitle>
                <CardDescription>Current market data for $COB</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Current Price:</span>
                  <span className="text-green-600 font-bold">$0.0024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">24h Change:</span>
                  <span className="text-green-600">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">24h Volume:</span>
                  <span>$156,789</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Market Cap:</span>
                  <span>$2,400,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Liquidity:</span>
                  <span>$89,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">FDV:</span>
                  <span>$2,400,000</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Utility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Token Utility</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            $COB isn't just a meme token - it's the backbone of the Casino of Bonk ecosystem with real utility and
            benefits.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {utilities.map((utility, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{utility.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{utility.title}</h3>
                  <p className="text-gray-600">{utility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How to Buy $COB</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get SOL</h3>
                  <p className="text-gray-600">
                    Purchase SOL from any major exchange and transfer to your Solana wallet
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Wallet</h3>
                  <p className="text-gray-600">Connect your wallet to Raydium or Jupiter DEX</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Swap for $COB</h3>
                  <p className="text-gray-600">Paste the contract address and swap your SOL for $COB tokens</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Buy on Raydium
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Buy on Jupiter
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
