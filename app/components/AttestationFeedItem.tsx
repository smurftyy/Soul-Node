import React from 'react';

interface AttestationFeedItemProps {
  id: string;
  txType: string;
  issuerDid: string;
  holderDid: string;
  claimType: string;
  commitmentPeriod: string;
  schemaId: string;
  timestamp: number;
  blockNumber: number;
  soulPoints: number;
}

const AttestationFeedItem: React.FC<AttestationFeedItemProps> = ({
  id,
  txType,
  issuerDid,
  holderDid,
  claimType,
  commitmentPeriod,
  schemaId,
  timestamp,
  blockNumber,
  soulPoints,
}) => {
  const formattedTimestamp = new Date(timestamp * 1000).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{txType}</h3>
            <p className="text-sm text-gray-500">{formattedTimestamp}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">+{soulPoints}</div>
          <div className="text-sm text-gray-500">SoulPoints</div>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Issuer:</span>
          <span className="text-gray-900 font-mono text-xs">{issuerDid.slice(0, 20)}...</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Claim Type:</span>
          <span className="text-gray-900">{claimType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Period:</span>
          <span className="text-gray-900">{commitmentPeriod}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Block:</span>
          <span className="text-gray-900">#{blockNumber}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AttestationFeedItem;
