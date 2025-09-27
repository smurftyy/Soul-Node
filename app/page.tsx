'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useWallet } from '@meshsdk/react';
import { useRouter } from 'next/navigation';

interface Statement {
  title: string;
  explanation: string;
  animationType: 'trust' | 'proof' | 'identity' | 'social' | 'transparent' | 'governance';
}

const statements: Statement[] = [
  {
    title: "A Trust Layer for Cardano",
    explanation: "SoulNode introduces attestations as the foundation for reputation and accountability in decentralized ecosystems.",
    animationType: 'trust'
  },
  {
    title: "Proof Beyond Stake",
    explanation: "While Cardano validates blocks, SoulNode validates people, actions, and commitments.",
    animationType: 'proof'
  },
  {
    title: "Portable Digital Identity",
    explanation: "Verifiable trust that moves seamlessly across dApps, DAOs, and DeFi protocols.",
    animationType: 'identity'
  },
  {
    title: "Social Impact Engine",
    explanation: "Turning attestations into measurable social capital that fuels collaboration and equitable governance.",
    animationType: 'social'
  },
  {
    title: "Transparent & Interoperable",
    explanation: "Built for Cardano, designed to extend across multi-chain and real-world use cases.",
    animationType: 'transparent'
  },
  {
    title: "Future Governance Ready",
    explanation: "Enabling reputation-weighted participation that elevates trustworthy voices, not just wealthy ones.",
    animationType: 'governance'
  }
];

export default function Home() {
  const router = useRouter();
  const { connect } = useWallet();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [hoveredStatement, setHoveredStatement] = useState<number | null>(null);

  const handleConnect = async () => {
    try {
      await connect('eternl');
      setShowConnectModal(false);
      router.push('/portfolio-setup');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const renderAnimation = (type: string) => {
    switch (type) {
      case 'trust':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 border-2 border-accent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
              />
            ))}
          </div>
        );
      case 'proof':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-accent rounded-lg"
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
      case 'identity':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="w-20 h-12 bg-accent rounded-full relative"
              animate={{
                x: [-50, 50, -50],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-2 bg-highlight rounded-full" />
            </motion.div>
          </div>
        );
      case 'social':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-accent rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${30 + i * 10}%`,
                  top: `${50}%`,
                }}
              />
            ))}
          </div>
        );
      case 'transparent':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="w-24 h-24 border-4 border-accent rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
      case 'governance':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-accent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
      default:
        return <div />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="p-8 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-accent glow">SoulNode</span>
        </motion.h1>
      </header>

      {/* Statements */}
      <div className="px-8 py-16 space-y-16">
        {statements.map((statement, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center min-h-[400px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Left Side: Text */}
            <div className="md:w-1/2 p-4 text-left">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {statement.title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setHoveredStatement(index)}
                    onMouseLeave={() => setHoveredStatement(null)}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <AnimatePresence>
                {hoveredStatement === index && (
                  <motion.p
                    className="text-lg text-accent"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {statement.explanation}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Right Side: Animation */}
            <div className="md:w-1/2 p-4 flex items-center justify-center h-64">
              {renderAnimation(statement.animationType)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connect Section */}
      <section className="min-h-screen flex flex-col gap-6 items-center justify-center px-4">
        <motion.button
          className="px-8 py-4 bg-accent text-foreground rounded-lg shadow-lg hover:scale-105 transition-transform font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowConnectModal(true)}
        >
          Connect Wallet
        </motion.button>
        <p className="text-sm opacity-70">Join the decentralized future ↓</p>
      </section>

      {/* Connect Modal */}
      <AnimatePresence>
        {showConnectModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-highlight p-8 rounded-lg max-w-md w-full mx-4 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Connect Your Wallet</h2>
              <p className="text-accent mb-6">Connect to Eternl to access SoulNode features.</p>
              <div className="flex gap-4">
                <button
                  onClick={handleConnect}
                  className="flex-1 px-4 py-2 bg-accent text-foreground rounded hover:opacity-80"
                >
                  Connect Eternl
                </button>
                <button
                  onClick={() => setShowConnectModal(false)}
                  className="px-4 py-2 bg-accent/50 text-foreground rounded hover:opacity-80"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
