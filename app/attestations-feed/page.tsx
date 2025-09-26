export default function AttestationsFeedPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Attestations Feed</h1>
          <p className="text-lg text-gray-600">View and manage your digital attestations and verifications</p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg">
              All Attestations
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
              Social Profiles
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
              Skills & Credentials
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
              Work History
            </button>
          </div>
        </div>

        {/* Attestations List */}
        <div className="space-y-4">
          {/* Attestation Item */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GitHub Profile Verified</h3>
                  <p className="text-sm text-gray-500">Verified by GitHub OAuth • 2 hours ago</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Verified
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Your GitHub profile has been successfully verified and linked to your Soul Node identity.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Issuer: GitHub</span>
              <span>•</span>
              <span>Expires: Never</span>
              <span>•</span>
              <span>Chain: Ethereum</span>
            </div>
          </div>

          {/* Attestation Item */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Work Experience Verified</h3>
                  <p className="text-sm text-gray-500">Verified by LinkedIn • 1 day ago</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Verified
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Your work experience at TechCorp has been verified through LinkedIn integration.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Issuer: LinkedIn</span>
              <span>•</span>
              <span>Expires: 1 year</span>
              <span>•</span>
              <span>Chain: Polygon</span>
            </div>
          </div>

          {/* Attestation Item */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Skill Certification Pending</h3>
                  <p className="text-sm text-gray-500">Submitted for verification • 3 days ago</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                Pending
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Your React.js certification is currently under review by our verification team.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Issuer: CodeAcademy</span>
              <span>•</span>
              <span>Status: Under Review</span>
              <span>•</span>
              <span>Chain: Arbitrum</span>
            </div>
          </div>

          {/* Attestation Item */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Community Membership</h3>
                  <p className="text-sm text-gray-500">Verified by DAO • 1 week ago</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Verified
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              You are a verified member of the Web3 Developers DAO with voting rights and access to exclusive content.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Issuer: Web3Devs DAO</span>
              <span>•</span>
              <span>Expires: 6 months</span>
              <span>•</span>
              <span>Chain: Ethereum</span>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Load More Attestations
          </button>
        </div>
      </div>
    </main>
  );
}
