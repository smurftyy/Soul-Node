import React from 'react';
import { BadgeCheck, Star } from "lucide-react";

export default function MockPortfolio() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Sample Attestation View
        </h2>
        <p className="mb-12 text-gray-500 dark:text-gray-400">
          What your wallet might look like once attested.
        </p>

        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 text-left max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              S
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                0xA3...29B <BadgeCheck className="inline w-5 h-5 text-green-500 ml-1" />
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Reputation Score: 92</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Hackathon Badge</span>
              <Star className="text-yellow-400 w-5 h-5" />
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">DAO Contributor</span>
              <BadgeCheck className="text-green-500 w-5 h-5" />
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Top 5% Reputation</span>
              <Star className="text-yellow-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 