'use client';

import React from 'react';

interface AttestationCardProps {
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
  onClose?: () => void;
}

const AttestationCard: React.FC<AttestationCardProps> = ({
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
  onClose,
}) => {
  const formattedTimestamp = new Date(timestamp * 1000).toLocaleString();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg max-w-md w-full p-6 relative text-cyan-400 font-sans border border-cyan-600">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-cyan-400 hover:text-cyan-200"
            aria-label="Close attestation popup"
          >
            &#10005;
          </button>
        )}

        {/* Emblem */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-2">
            <svg
              className="w-10 h-10 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-cyan-300">SoulNode</h2>
          <p className="text-sm text-cyan-400">SoulNode Veritable Credential</p>
        </div>

        {/* SoulPoints */}
        <div className="text-center mb-4">
          <p className="text-5xl font-extrabold text-cyan-400">+{soulPoints}</p>
          <p className="text-sm font-semibold">SoulPoints</p>
        </div>

        {/* DID Info */}
        <div className="mb-4 space-y-1 text-xs font-mono">
          <p>
            ISSUER DID: <span className="text-cyan-300">{issuerDid}</span>
          </p>
          <p>
            HOLDER DID: <span className="text-cyan-300">{holderDid}</span>
          </p>
        </div>

        {/* Verify Button */}
        <div className="mb-4 text-center">
          <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold py-2 px-4 rounded-full"
            onClick={() => {
              // TODO: Implement verification link action
              alert('Verify on Cardano Blockchain clicked');
            }}
          >
            Verify on Cardano Blockchain
          </button>
        </div>

        {/* Claim Details */}
        <div className="bg-cyan-900 bg-opacity-30 rounded-lg p-3 text-xs space-y-1 mb-4">
          <p>CLAIM TYPE: {txType}</p>
          <p>COMMITMENT PERIOD: {commitmentPeriod}</p>
          <p>SCHEMA ID: HASH: {schemaId}</p>
        </div>

        {/* Footer */}
        <p className="italic text-xs text-cyan-400 text-center">
          Cryptographically Signed on-chain. Timestamp: {formattedTimestamp} (Block #{blockNumber})
        </p>
      </div>
    </div>
  );
};

export default AttestationCard;
