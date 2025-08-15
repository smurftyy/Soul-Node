'use client';

import { useState } from 'react';
import WalletStatus from '../../components/WalletStatus';

export default function SearchDiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mockResults>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Placeholder search results - will be populated from Cardano blockchain later
  const mockResults = [
    {
      id: 1,
      displayName: 'Alice Chen',
      username: 'CardanoDev',
      walletAddress: 'addr1qx...abc123',
      bio: 'Full-stack developer building on Cardano. Love DeFi and NFTs.',
      profileImage: '/api/placeholder/60/60',
      isConnected: false,
      soulPoints: 1850,
      memberSince: '2023',
    },
    {
      id: 2,
      displayName: 'Bob Rodriguez',
      username: 'ADA_Staker',
      walletAddress: 'addr1qx...def456',
      bio: 'Cardano stake pool operator and DeFi enthusiast.',
      profileImage: '/api/placeholder/60/60',
      isConnected: true,
      soulPoints: 3200,
      memberSince: '2022',
    },
    {
      id: 3,
      displayName: 'Carol Johnson',
      username: 'NFT_Collector',
      walletAddress: 'addr1qx...ghi789',
      bio: 'Digital artist and NFT collector on Cardano blockchain.',
      profileImage: '/api/placeholder/60/60',
      isConnected: false,
      soulPoints: 950,
      memberSince: '2024',
    },
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Filter mock results based on search query
      const filtered = mockResults.filter(user => 
        user.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.walletAddress.includes(searchQuery)
      );
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Search & Discover</h1>
          <p className="text-lg text-slate-300">Find and connect with other Cardano community members</p>
        </div>

        <WalletStatus />

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by display name, username, or wallet address..."
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !searchQuery.trim()}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </form>
          
          <p className="text-sm text-slate-400 mt-3 text-center">
            Search for users by their display name, username, or Cardano wallet address
          </p>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Search Results ({searchResults.length})
            </h2>
            
            {searchResults.map((user) => (
              <div key={user.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-slate-300 text-lg font-semibold">
                      {user.displayName.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{user.displayName}</h3>
                      <span className="text-slate-400">@{user.username}</span>
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        {user.soulPoints} SP
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-3">{user.bio}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-slate-400 mb-4">
                      <span>Member since {user.memberSince}</span>
                      <span>•</span>
                      <span className="text-blue-400 font-mono">{user.walletAddress}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          user.isConnected
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {user.isConnected ? 'Connected' : 'Connect'}
                      </button>
                      
                      <button className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors">
                        View Profile
                      </button>
                      
                      <button className="p-2 text-slate-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
            <p className="text-slate-400">
              No users found matching &quot;{searchQuery}&quot;. Try a different search term.
            </p>
          </div>
        )}

        {/* Popular Users */}
        {!searchQuery && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Popular Community Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockResults.map((user) => (
                <div key={user.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-slate-300 text-lg font-semibold">
                        {user.displayName.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{user.displayName}</h3>
                    <p className="text-slate-400 text-sm">@{user.username}</p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mt-2">
                      {user.soulPoints} SP
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-sm text-center mb-4">{user.bio}</p>
                  
                  <div className="flex justify-center">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
