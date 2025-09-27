'use client';

import { useWallet } from '@meshsdk/react';
import {useState, useEffect} from 'react';
import WalletStatus from '../components/WalletStatus';
import {  useNetwork } from '@meshsdk/react';
import { BrowserWallet, Wallet } from '@meshsdk/core';

export default function WalletConnectPage() {
  const { connected, connecting, connect, disconnect, wallet: connectedWallet } = useWallet();
  const [address, setAddress] = useState ('');
  const [balance, setBalance] = useState ('');
  const [walletName, setWalletName] = useState('');
  const network = useNetwork();

useEffect(() => {
  const fetchWalletinfo = async () => {
    if (!connectedWallet) return;

    try {
      setWalletName('Eternl'); // Hardcoded since only Eternl is supported

      const changeAddress = await connectedWallet.getChangeAddress();
      setAddress(changeAddress);

      const balanceObj = await connectedWallet.getBalance();

      const lovelace = balanceObj.find((asset: any) => asset.unit === "lovelace");
      if (lovelace) {
        const ada = (parseInt(lovelace.quantity) / 1_000_000).toFixed(2);
        setBalance(ada);
      }
    } catch (error) {
      console.error('Failed to fetch wallet info:', error);
    }
  };

  if (connected) {
    fetchWalletinfo();
  }
}, [connectedWallet, connected]);
const handleConnect = async () => {
  const walletName = 'eternl'; // i only have eternl for now
  const installedWallets = await BrowserWallet.getInstalledWallets();
  if (!installedWallets.some(w => w.name === 'eternl')) {
    alert("Eternl wallet is not installed!");
    return;
  }
  try {
    await connect('eternl');
  } catch (error) {
    console.error('Failed to connect wallet:', error);
  }
};

 return (
    <main className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Connect Cardano Wallet</h1>
          <p className="text-lg text-slate-300">Connect your Cardano wallet to access Soul Node features</p>
        </div>

        {connected ? (
          <div className="space-y-6">
            <WalletStatus />
            
            {/* Connected Wallet Info */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Wallet Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Wallet Name</h3>
                  <p className="text-white font-medium">{walletName || 'Not Available'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Network</h3>
                  <p className="text-blue-400 font-medium">{network === 1 ? 'Cardano Mainnet' : 'Cardano Testnet'}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Wallet Address</h3>
                  <p className="text-white font-mono text-sm break-all">{address || 'Not available'}</p>
                </div>
              </div>
            </div>

            {/* Balance Section - Only visible to connected user */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Account Balance</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">ADA Balance</h3>
                  <p className="text-2xl font-bold text-green-400">{balance ? `${balance} ADA` : 'Loading...'}</p>
                  <p className="text-xs text-slate-400">≈ $0.00 USD</p>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Total NFTs</h3>
                  <p className="text-2xl font-bold text-purple-400">0</p>
                  <p className="text-xs text-slate-400">Digital Assets</p>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Staking Status</h3>
                  <p className="text-2xl font-bold text-blue-400">Active</p>
                  <p className="text-xs text-slate-400">Pool: Ticker</p>
                </div>
              </div>
            </div>

            {/* Disconnect Button */}
            <div className="text-center">
              <button
                onClick={disconnect}
                className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Disconnect Wallet
              </button>
            </div>
          </div>
        ) : (
          /* Wallet Connection Prompt */
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Connect Your Cardano Wallet</h2>
              <p className="text-slate-300 mb-8">
                To access Soul Node features, you need to connect a Cardano wallet. 
                We support popular wallets like Eternl, Nami, and Flint.
              </p>
              
              <button
                onClick={handleConnect}
                disabled={connecting}
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {connecting ? 'Connecting...' : 'Connect Wallet'}
              </button>
              
              <div className="mt-6 text-sm text-slate-400">
                <p>Don&apos;t have a Cardano wallet?</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                  Learn how to create one
                </a>
              </div>
            </div>

            {/* Supported Wallets */}
            <div className="mt-8 bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Supported Wallets</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Eternl</h4>
                  <p className="text-xs text-slate-400">Browser Extension</p>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Nami</h4>
                  <p className="text-xs text-slate-400">Browser Extension</p>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Flint</h4>
                  <p className="text-xs text-slate-400">Browser Extension</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
