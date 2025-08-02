import React from 'react';
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Earn Your Proof?</h2>
        <p className="mb-8 text-blue-100">
          Join the contributors already building real on-chain rep.
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center mx-auto">
          Launch App <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </section>
  );
} 