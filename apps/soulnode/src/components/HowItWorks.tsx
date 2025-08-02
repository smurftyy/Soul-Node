
import React from 'react';

const steps = [
  {
    step: "1",
    title: "Connect Wallet",
    desc: "No passwords. Just sign in with your wallet to prove identity.",
  },
  {
    step: "2",
    title: "Submit Contributions",
    desc: "Drop links, records, or data — we verify and pin it.",
  },
  {
    step: "3",
    title: "Get Attested",
    desc: "Once approved, your wallet gets soulbound proof of your impact.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">How It Works</h2>
        <p className="mb-12 text-gray-500 dark:text-gray-400">
          We simplified contribution recognition to three steps.
        </p>

        <div className="space-y-12">
          {steps.map(({ step, title, desc }) => (
            <div
              key={step}
              className="relative flex flex-col items-center md:flex-row md:items-start"
            >
              <div className="text-white bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full font-bold mb-4 md:mb-0 md:mr-6">
                {step}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 