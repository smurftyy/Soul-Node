import * as React from 'react';
import WalletStatus from '../components/WalletStatus';

export default function AttestationsPage() {
  // Placeholder data - will be populated from Cardano blockchain later
  const activities = [
    {
      id: 1,
      type: 'nft_mint',
      title: 'Minted "Cardano NFT #4"',
      description: 'Successfully minted a new NFT on the Cardano blockchain',
      timestamp: '2 hours ago',
      status: 'completed',
      icon: '🖼️',
      color: 'bg-green-500',
      details: {
        policyId: 'policy1abc...',
        assetName: 'Cardano NFT #4',
        transactionHash: 'tx_hash_123...',
        blockHeight: '12,345,678',
      },
    },
    {
      id: 2,
      type: 'governance_vote',
      title: 'Voted in CIP-1694 Governance',
      description: 'Participated in Cardano governance voting for CIP-1694',
      timestamp: '1 day ago',
      status: 'completed',
      icon: '🗳️',
      color: 'bg-blue-500',
      details: {
        proposal: 'CIP-1694: Constitutional Committee',
        vote: 'YES',
        stakeAmount: '₳ 5,000',
        epoch: '450',
      },
    },
    {
      id: 3,
      type: 'staking',
      title: 'Staked 500 ADA to TICKER Pool',
      description: 'Delegated ADA to stake pool TICKER for staking rewards',
      timestamp: '2 days ago',
      status: 'completed',
      icon: '🔒',
      color: 'bg-purple-500',
      details: {
        stakePool: 'TICKER',
        amount: '₳ 500',
        poolSaturation: '65%',
        expectedAPY: '4.5%',
      },
    },
    {
      id: 4,
      type: 'defi_interaction',
      title: 'Provided Liquidity to Minswap',
      description: 'Added liquidity to ADA/USDC pool on Minswap DEX',
      timestamp: '3 days ago',
      status: 'completed',
      icon: '💱',
      color: 'bg-yellow-500',
      details: {
        protocol: 'Minswap',
        pool: 'ADA/USDC',
        liquidity: '₳ 1,000 + $500 USDC',
        feesEarned: '₳ 2.45',
      },
    },
    {
      id: 5,
      type: 'smart_contract',
      title: 'Interacted with Plutus Contract',
      description: 'Executed smart contract function on Cardano blockchain',
      timestamp: '1 week ago',
      status: 'completed',
      icon: '⚡',
      color: 'bg-indigo-500',
      details: {
        contract: 'DeFi Protocol v2',
        function: 'swapTokens',
        gasUsed: '₳ 0.15',
        success: true,
      },
    },
    {
      id: 6,
      type: 'nft_trade',
      title: 'Traded NFT on JPG Store',
      description: 'Successfully traded NFT on JPG Store marketplace',
      timestamp: '1 week ago',
      status: 'completed',
      icon: '🔄',
      color: 'bg-pink-500',
      details: {
        marketplace: 'JPG Store',
        nft: 'Cardano NFT #2',
        price: '₳ 150',
        transactionType: 'Sale',
      },
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">On-chain Activity Feed</h1>
          <p className="text-lg text-slate-300">Track your Cardano blockchain activities and attestations</p>
        </div>

        <WalletStatus />

        {/* Filter Controls */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg">
              All Activities
            </button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-600">
              NFT Activities
            </button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-600">
              Governance
            </button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-600">
              Staking
            </button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-600">
              DeFi
            </button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-600">
              Smart Contracts
            </button>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xl">{activity.icon}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{activity.title}</h3>
                      <p className="text-slate-400 text-sm">{activity.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                        {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                      </span>
                      <span className="text-slate-400 text-sm">{activity.timestamp}</span>
                    </div>
                  </div>
                  
                  {/* Activity Details */}
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-3">Transaction Details</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {Object.entries(activity.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-white font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 mt-4">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      View on Explorer
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors">
                      Share Activity
                    </button>
                    <button className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors">
                      Get Attestation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors">
            Load More Activities
          </button>
        </div>

        {/* Activity Summary */}
        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Activity Summary</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Total Activities</h4>
              <p className="text-2xl font-bold text-white">{activities.length}</p>
            </div>
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <h4 className="text-sm font-medium text-slate-400 mb-2">This Month</h4>
              <p className="text-2xl font-bold text-blue-400">12</p>
            </div>
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Success Rate</h4>
              <p className="text-2xl font-bold text-green-400">100%</p>
            </div>
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Total Value</h4>
              <p className="text-2xl font-bold text-purple-400">₳ 2,450</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
