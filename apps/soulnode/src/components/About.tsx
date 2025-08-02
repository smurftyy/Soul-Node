import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-950 text-gray-100">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-purple-400">
          What is SoulNode?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          SoulNode is a decentralized attestation protocol that anchors on-chain actions to verifiable identities.
          Whether it's staking, governance voting, minting, or project deployment—each action is signed, time-stamped,
          and socially visible. No more digging through TX hashes. It's your wallet's résumé.
        </p>

        <p className="text-md text-gray-400">
          For builders, it's proof-of-contribution. For researchers, it's a trusted ledger. For everyone else—it's
          receipts.
        </p>
      </motion.div>
    </section>
  );
} 