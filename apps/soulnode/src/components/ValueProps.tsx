import React from 'react';
import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "On-Chain Proof",
    desc: "Every action you complete is stamped immutably. Zero fluff, full cred.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Trustless Attestations",
    desc: "Verified through decentralized logic, not vibes or spreadsheets.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: "Wallet-Based Identity",
    desc: "Your record lives on-chain — no login, no middlemen.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why SoulNode?</h2>
        <p className="mb-12 text-gray-400">Built for the future of decentralized reputation.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-xl transition-all"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 