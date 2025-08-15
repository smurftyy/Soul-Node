import WalletStatus from '../../components/WalletStatus';

export default function SocialConnectPage() {
  // Placeholder data - will be populated from Cardano blockchain later
  const profiles = [
    {
      id: 1,
      username: 'CardanoDev',
      displayName: 'Alice Chen',
      bio: 'Full-stack developer building on Cardano. Love DeFi and NFTs.',
      profileImage: '/api/placeholder/60/60',
      walletAddress: 'addr1qx...abc123',
      isConnected: false,
    },
    {
      id: 2,
      username: 'ADA_Staker',
      displayName: 'Bob Rodriguez',
      bio: 'Cardano stake pool operator and DeFi enthusiast.',
      profileImage: '/api/placeholder/60/60',
      walletAddress: 'addr1qx...def456',
      isConnected: true,
    },
    {
      id: 3,
      username: 'NFT_Collector',
      displayName: 'Carol Johnson',
      bio: 'Digital artist and NFT collector on Cardano blockchain.',
      profileImage: '/api/placeholder/60/60',
      walletAddress: 'addr1qx...ghi789',
      isConnected: false,
    },
    {
      id: 4,
      username: 'DeFi_Trader',
      displayName: 'David Kim',
      bio: 'Active DeFi trader and liquidity provider on Cardano.',
      profileImage: '/api/placeholder/60/60',
      walletAddress: 'addr1qx...jkl012',
      isConnected: false,
    },
    {
      id: 5,
      username: 'Governance_Voter',
      displayName: 'Eva Martinez',
      bio: 'Cardano governance participant and community contributor.',
      profileImage: '/api/placeholder/60/60',
      walletAddress: 'addr1qx...mno345',
      isConnected: true,
    },
    {
      id: 6,
      username: 'Smart_Contract_Dev',
      displayName: 'Frank Wilson',
      bio: 'Plutus developer creating smart contracts on Cardano.',
      profileImage: '/api/placeholder/60/60',
      walletAddress: 'addr1qx...pqr678',
      isConnected: false,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Social Connect</h1>
          <p className="text-lg text-slate-300">Discover and connect with other Cardano community members</p>
        </div>

        <WalletStatus />

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-slate-300 text-lg font-semibold">
                    {profile.displayName.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{profile.displayName}</h3>
                  <p className="text-slate-400 text-sm">@{profile.username}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">{profile.bio}</p>
              
              {/* Wallet address - only show for connected profiles */}
              {profile.isConnected && (
                <div className="mb-4 p-3 bg-slate-700 rounded">
                  <p className="text-xs text-slate-400 mb-1">Wallet Address</p>
                  <p className="text-xs text-blue-400 font-mono">{profile.walletAddress}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    profile.isConnected
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {profile.isConnected ? 'Connected' : 'Connect'}
                </button>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors">
            Load More Profiles
          </button>
        </div>
      </div>
    </main>
  );
}
