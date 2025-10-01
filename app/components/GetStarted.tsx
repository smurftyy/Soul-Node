import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { useWallet } from "@meshsdk/react";
import { BrowserWallet } from "@meshsdk/core";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function GetStarted() {
  const { connected, connecting, connect } = useWallet();
  const router = useRouter();
  const [connectingState, setConnectingState] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleConnect = async () => {
    const installedWallets = await BrowserWallet.getInstalledWallets();
    if (!installedWallets.some((w) => w.name === 'eternl')) {
      alert('Eternl wallet is not installed!');
      return;
    }
    try {
      setConnectingState(true);
      await connect('eternl');
      setShouldRedirect(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    } finally {
      setConnectingState(false);
    }
  };

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/wallet-connect');
    }
  }, [shouldRedirect, router]);

  if (connected) {
    // Redirect handled by useEffect to avoid setState during render
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-700 to-blue-800 text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Get Started
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg max-w-xl mx-auto"
        >
          Connect your wallet to begin building your SoulNode reputation and participate in fair governance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={handleConnect}
            disabled={connecting || connectingState}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {connecting || connectingState ? 'Connecting...' : 'Connect Wallet'}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
