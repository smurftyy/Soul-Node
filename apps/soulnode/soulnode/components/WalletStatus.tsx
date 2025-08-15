'use client';

import { useWallet } from '@meshsdk/react';

const WalletStatus = () => {
  const { connected, disconnect, wallet } = useWallet();

  if (!connected) {
    return null; // Don't show anything if wallet is not connected
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">Wallet Connected</h3>
        <button
          onClick={disconnect}
          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
        >
          Disconnect
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-300">Address:</span>
          <span className="text-white font-mono">
            {wallet ? `${(wallet as { address?: string }).address?.slice(0, 8)}...${(wallet as { address?: string }).address?.slice(-6)}` : 'Unknown'}
          </span>
        </div>
        
        {/* Placeholder for balance - will be populated with actual Cardano balance later */}
        <div className="flex justify-between">
          <span className="text-slate-300">Balance:</span>
          <span className="text-green-400 font-medium">Loading...</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-slate-300">Network:</span>
          <span className="text-blue-400">Cardano Mainnet</span>
        </div>
      </div>
    </div>
  );
};

export default WalletStatus;
