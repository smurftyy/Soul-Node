import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Users, TrendingUp, Award, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verifiable Attestations",
    description: "Build trust through on-chain attestations that prove your contributions and reputation.",
  },
  {
    icon: Award,
    title: "SoulPoints Rewards",
    description: "Earn points for active participation and meaningful contributions, not just token holding.",
  },
  {
    icon: Users,
    title: "Fair Governance",
    description: "Shift power from pure wealth to demonstrated value and community contribution.",
  },
  {
    icon: TrendingUp,
    title: "Social Impact Tracking",
    description: "Measure and showcase your real-world impact with transparent, verifiable metrics.",
  },
  {
    icon: Lock,
    title: "Cardano Security",
    description: "Built on Cardano's proven blockchain infrastructure for maximum security and reliability.",
  },
  {
    icon: Zap,
    title: "Sustainable Traction",
    description: "Create lasting engagement through merit-based incentives and community value.",
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why SoulNode?
          </h2>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto">
            A new paradigm for trust, reputation, and governance in the Web3 ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-blue-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
