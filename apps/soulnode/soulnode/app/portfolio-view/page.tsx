import WalletStatus from '../../components/WalletStatus';

export default function PortfolioViewPage() {
  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Portfolio View</h1>
          <p className="text-lg text-slate-300">Your personal Cardano portfolio dashboard</p>
        </div>

        <WalletStatus />

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Total Portfolio Value */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">Total Portfolio Value</h3>
            <p className="text-3xl font-bold text-white">₳ 12,450.75</p>
            <div className="flex items-center mt-2">
              <span className="text-green-400 text-sm font-medium">+8.2%</span>
              <span className="text-slate-400 text-sm ml-2">vs last month</span>
            </div>
          </div>

          {/* ADA Balance */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">ADA Balance</h3>
            <p className="text-3xl font-bold text-green-400">₳ 8,250.50</p>
            <div className="flex items-center mt-2">
              <span className="text-green-400 text-sm font-medium">+5.3%</span>
              <span className="text-slate-400 text-sm ml-2">vs yesterday</span>
            </div>
          </div>

          {/* Staking Rewards */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-2">Staking Rewards</h3>
            <p className="text-3xl font-bold text-blue-400">₳ 125.25</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-400 text-sm font-medium">This epoch</span>
              <span className="text-slate-400 text-sm ml-2">• 4.5% APY</span>
            </div>
          </div>
        </div>

        {/* Profile Section - Private to user */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center">
              <span className="text-slate-300 text-2xl font-semibold">J</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">John Doe</h2>
              <p className="text-slate-400">@cardano_enthusiast</p>
              <p className="text-slate-300 mt-2">Passionate Cardano developer and DeFi enthusiast. Building the future of decentralized finance.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Personal Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Member Since:</span>
                  <span className="text-white">January 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Transactions:</span>
                  <span className="text-white">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Governance Votes:</span>
                  <span className="text-white">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Soul Points:</span>
                  <span className="text-green-400 font-medium">2,450</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Staking Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Stake Pool:</span>
                  <span className="text-white">TICKER</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delegated ADA:</span>
                  <span className="text-white">₳ 7,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Pool Saturation:</span>
                  <span className="text-white">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Next Reward:</span>
                  <span className="text-green-400">₳ 45.20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Collection */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg mb-8">
          <div className="px-6 py-4 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white">NFT Collection</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Placeholder NFTs */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-700 rounded-lg p-4 text-center">
                  <div className="w-full h-32 bg-slate-600 rounded mb-3 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">NFT #{i}</span>
                  </div>
                  <h3 className="text-white font-medium text-sm">Cardano NFT #{i}</h3>
                  <p className="text-slate-400 text-xs mt-1">Collection Name</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="px-6 py-2 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors">
                View All NFTs
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg">
          <div className="px-6 py-4 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Staked 500 ADA to TICKER pool</span>
                <span className="text-slate-400">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Minted &quot;Cardano NFT #4&quot;</span>
                <span className="text-slate-400">1 day ago</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Voted in CIP-1694 governance</span>
                <span className="text-slate-400">3 days ago</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Received 25.50 ADA staking reward</span>
                <span className="text-slate-400">1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
