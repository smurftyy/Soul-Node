import WalletStatus from '../components/WalletStatus';

export default function PortfolioSetupPage() {
  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio Setup</h1>
          <p className="text-lg text-slate-300">Create and customize your Cardano portfolio profile</p>
        </div>

        <WalletStatus />

        <div className="space-y-6">
          {/* Profile Image Upload */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Profile Image</h2>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center border-2 border-dashed border-slate-600">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Upload Image
                </button>
                <p className="text-sm text-slate-400 mt-2">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Display Name</label>
                <input
                  type="text"
                  placeholder="Enter your display name"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                <input
                  type="text"
                  placeholder="Choose a unique username"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                <textarea
                  rows={4}
                  placeholder="Tell the Cardano community about yourself..."
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Cardano Preferences */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Cardano Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Favorite Cardano Projects</label>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-slate-700 border-slate-600 rounded" />
                    <span className="text-slate-300">DeFi Protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-slate-700 border-slate-600 rounded" />
                    <span className="text-slate-300">NFT Marketplaces</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-slate-700 border-slate-600 rounded" />
                    <span className="text-slate-300">Governance DAOs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-slate-700 border-slate-600 rounded" />
                    <span className="text-slate-300">Stake Pool Operations</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Privacy Level</label>
                <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="public">Public - Show all portfolio details</option>
                  <option value="partial">Partial - Show basic info only</option>
                  <option value="private">Private - Hide portfolio details</option>
                </select>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Social Links</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Twitter/X Handle</label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">GitHub Username</label>
                <input
                  type="text"
                  placeholder="github-username"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Discord Username</label>
                <input
                  type="text"
                  placeholder="username#1234"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Save Portfolio Settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
