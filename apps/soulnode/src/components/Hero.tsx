import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-[#0f0f0f] to-gray-900 text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SoulNode: Mint Your Impact.
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Verifiable actions, socially accountable wallets. One protocol to prove you're actually building.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-xl shadow-lg transition-all duration-200">
          Connect Wallet
        </button>
        <button className="text-white border-2 border-white hover:border-purple-500 hover:text-purple-400 px-6 py-3 text-lg rounded-xl transition-all duration-200">
          Learn More
        </button>
      </motion.div>
    </section>
  );
} 