import { motion } from "framer-motion";
import { ParticleSystem } from "./ParticleSystem";
import { Button } from "../../components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useWallet } from "@meshsdk/react";
import { BrowserWallet } from "@meshsdk/core";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

      {/* Particle System */}
      <div className="absolute inset-0 z-0">
        <ParticleSystem />
      </div>

      {/* Central Emblem - Triangle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
          animate={{ opacity: 1, scale: 1, rotateY: 360 }}
          transition={{
            duration: 2,
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="relative"
        >
          {/* Triangle SVG */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            className="drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <defs>
              <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="50,10 90,90 10,90"
              fill="url(#triangleGradient)"
              filter="url(#glow)"
              className="animate-pulse"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Shield className="w-6 h-6 text-blue-400" />
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
            Cardano Trust Layer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          SoulNode
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Build verifiable reputation through attestations. Earn SoulPoints for contribution,
          not just holding. Create sustainable impact and fair governance on Cardano.
        </motion.p>

        {/* Connect Wallet Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full flex justify-center"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
