"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, Flame, UserCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trustless Verification",
    desc: "Every submission is cryptographically signed and permanently recorded. No gatekeepers.",
  },
  {
    icon: FileCheck2,
    title: "Proof of Submission",
    desc: "Immutable timestamps ensure your work was submitted, even if the server ghosted.",
  },
  {
    icon: UserCheck,
    title: "Decentralized Identity",
    desc: "No more central logins. Your wallet is your academic passport.",
  },
  {
    icon: Flame,
    title: "On-Chain Portfolio",
    desc: "Build a trackable public record of academic achievements verified by the blockchain.",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Built for Students. Backed by Chain.
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Gradify bridges academia and blockchain with a system that makes every submission matter.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <feature.icon className="text-sky-400 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 