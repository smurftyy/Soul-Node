
// Update the import path below to the correct relative path for your project structure
import WalletStatus from '../components/WalletStatus';

export default function SoulPointsPage() {
  // Placeholder data - will be populated from Cardano blockchain later
  const activityTypes = [
    { name: 'Staking', points: 850, color: 'bg-blue-500', icon: '🔒' },
    { name: 'Governance Voting', points: 420, color: 'bg-purple-500', icon: '🗳️' },
    { name: 'NFT Trading', points: 380, color: 'bg-green-500', icon: '🖼️' },
    { name: 'DeFi Participation', points: 320, color: 'bg-yellow-500', icon: '💱' },
    { name: 'Community Contribution', points: 280, color: 'bg-pink-500', icon: '🤝' },
    { name: 'Smart Contract Interaction', points: 200, color: 'bg-indigo-500', icon: '⚡' },
  ];

  const totalPoints = activityTypes.reduce((sum, activity) => sum + activity.points, 0);
  // const nextLevel = Math.ceil(totalPoints / 1000) * 1000;
  const progress = (totalPoints % 1000) / 10;

  return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Soul Points</h1>
          <p className="text-lg text-slate-300">Earn points through your Cardano blockchain activity</p>
        </div>

        <WalletStatus />

        {/* Total Points Overview */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Total Soul Points</h2>
            <p className="text-6xl font-bold text-green-400">{totalPoints.toLocaleString()}</p>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>Level {Math.floor(totalPoints / 1000)}</span>
              <span>Level {Math.ceil(totalPoints / 1000)}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-400 mt-2">
              {1000 - (totalPoints % 1000)} points to next level
            </p>
          </div>
        </div>

        {/* Points Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Points by Activity</h3>
            <div className="space-y-4">
              {activityTypes.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{activity.icon}</span>
                    <span className="text-white font-medium">{activity.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400 font-semibold">{activity.points}</span>
                    <div className={`w-3 h-3 rounded-full ${activity.color}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">First Governance Vote</h4>
                  <p className="text-slate-400 text-sm">+50 points • 2 days ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🌟</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Staking Milestone</h4>
                  <p className="text-slate-400 text-sm">+100 points • 1 week ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🎯</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">NFT Collector</h4>
                  <p className="text-slate-400 text-sm">+75 points • 2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits and Rewards */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Points Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">🎁</span>
              </div>
              <h4 className="text-white font-medium mb-2">Exclusive Rewards</h4>
              <p className="text-slate-400 text-sm">Unlock special NFTs and tokens</p>
            </div>
            
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="text-white font-medium mb-2">Early Access</h4>
              <p className="text-slate-400 text-sm">Be first to try new features</p>
            </div>
            
            <div className="text-center p-4 bg-slate-700 rounded-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">👑</span>
              </div>
              <h4 className="text-white font-medium mb-2">VIP Status</h4>
              <p className="text-slate-400 text-sm">Enhanced platform benefits</p>
            </div>
          </div>
        </div>

        {/* How to Earn More */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How to Earn More Points</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-3">Blockchain Activities</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Stake ADA to earn points</li>
                <li>• Participate in governance voting</li>
                <li>• Trade NFTs on marketplaces</li>
                <li>• Use DeFi protocols</li>
                <li>• Interact with smart contracts</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Community Activities</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Contribute to discussions</li>
                <li>• Help other users</li>
                <li>• Report bugs or issues</li>
                <li>• Share feedback</li>
                <li>• Invite friends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
