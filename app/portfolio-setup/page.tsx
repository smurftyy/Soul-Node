'use client';

import { useState } from 'react';
import WalletStatus from '../components/WalletStatus';

export default function PortfolioSetupPage() {
  const [formData, setFormData] = useState({
    displayName: '',
    username: '',
    bio: '',
    favoriteProjects: [] as string[],
    privacyLevel: 'public',
    twitterHandle: '',
    githubUsername: '',
    discordUsername: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (project: string) => {
    setFormData(prev => ({
      ...prev,
      favoriteProjects: prev.favoriteProjects.includes(project)
        ? prev.favoriteProjects.filter(p => p !== project)
        : [...prev.favoriteProjects, project]
    }));
  };

  const handleImageUpload = () => {
    // TODO: Implement image upload functionality
    alert('Image upload functionality not implemented yet');
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving portfolio settings:', formData);
    alert('Portfolio settings saved successfully!');
  };

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
                <button
                  onClick={handleImageUpload}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
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
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  placeholder="Enter your display name"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a unique username"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                <textarea
                  rows={4}
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
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
                  {['DeFi Protocols', 'NFT Marketplaces', 'Governance DAOs', 'Stake Pool Operations'].map(project => (
                    <div key={project} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.favoriteProjects.includes(project)}
                        onChange={() => handleCheckboxChange(project)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-slate-700 border-slate-600 rounded"
                      />
                      <span className="text-slate-300">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Privacy Level</label>
                <select
                  name="privacyLevel"
                  value={formData.privacyLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
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
                  name="twitterHandle"
                  value={formData.twitterHandle}
                  onChange={handleInputChange}
                  placeholder="@username"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">GitHub Username</label>
                <input
                  type="text"
                  name="githubUsername"
                  value={formData.githubUsername}
                  onChange={handleInputChange}
                  placeholder="github-username"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Discord Username</label>
                <input
                  type="text"
                  name="discordUsername"
                  value={formData.discordUsername}
                  onChange={handleInputChange}
                  placeholder="username#1234"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Portfolio Settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
