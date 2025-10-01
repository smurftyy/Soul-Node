import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed"
        >
          SoulNode leverages blockchain attestations to build verifiable reputation. Users earn SoulPoints for meaningful contributions, enabling fair governance and sustainable impact on Cardano.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">1. Connect Wallet</h3>
            <p>Securely connect your Cardano wallet to start building your SoulNode identity.</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">2. Earn Attestations</h3>
            <p>Receive attestations for your contributions, skills, and social profiles verified on-chain.</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">3. Gain SoulPoints</h3>
            <p>Accumulate SoulPoints to unlock governance rights and demonstrate your impact.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
