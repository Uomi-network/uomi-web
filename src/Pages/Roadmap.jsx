import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } },
};

const milestones = [
  {
    status: 'done',
    statusLabel: 'Testnet 01 · Completed',
    when: 'Q3 2024',
    title: 'Babbage',
    subtitle: null,
    description: 'Testing ground for deterministic parallel inference. Establishes the foundation of OPoC. Supports LLAMA 3.1 7B quantized and Flux.1. Multi-VM framework with WASM + EVM, Solidity smart contracts live.',
    tags: ['Parallel inference', 'WASM + EVM', 'Flux.1 + Llama'],
  },
  {
    status: 'done',
    statusLabel: 'Testnet 02 · Completed',
    when: 'Q4 2024',
    title: 'Finney',
    subtitle: null,
    description: 'OPoC consensus implemented. Third-party node operators join. Slashing and inactivity leak deployed but not enforced with real tokens. WASM-defined AI Agents with IPFS-based memory and configuration storage.',
    tags: ['OPoC consensus', 'Third-party nodes', 'AI Agents (WASM)', 'IPFS storage'],
  },
  {
    status: 'done',
    statusLabel: 'Testnet 03 · Completed',
    when: 'Q2 2025',
    title: 'Turing α',
    subtitle: null,
    description: 'Threshold Signature Scheme (TSS) enables nodes to sign transactions on behalf of AI Agents on any blockchain. Inference batching for parallel execution. Slashing and inactivity leak activated with testnet tokens. Agents can now control real crypto assets.',
    tags: ['TSS + distributed keys', 'Cross-chain signing', 'Inference batching', 'Slashing active'],
  },
  {
    status: 'live',
    statusLabel: 'Phase 01 · Live',
    when: 'Now · Live',
    title: 'Shannon',
    subtitle: 'Bootstrap',
    description: 'Single-cluster nodes, no staking required. Serves efficient open-weights LLMs and image diffusion. Eight GPU configurations supported, minimum two GPUs (Pro6K is the single-card exception). Buy-back-and-burn active from day one. This phase runs the external revenue engine that bootstraps the token\'s economic floor before mainnet.',
    tags: ['Live', 'No staking', '2× 4090 baseline', '2/4× 5090', '2/4× L40s', '1/2× Pro6K', 'OPoC verification', 'Encrypted binaries'],
  },
  {
    status: 'soon',
    statusLabel: 'Phase 02 · Coming next',
    when: 'Soon',
    title: 'Hopfield',
    subtitle: 'Sharded inference',
    description: 'Multiple machines joined into a single logical serving unit. Model weights split across the cluster, unlocks frontier-class models the market pays premium rates to access. Single GPU entry point opens the network to consumer users and gamers for the first time. OPoC verification extends cleanly into the sharded regime.',
    tags: ['Multi-machine clusters', 'Frontier models', 'Single GPU entry', 'Consumer market opens'],
  },
  {
    status: 'future',
    statusLabel: 'Phase 03 · Mainnet',
    when: 'Soon',
    title: 'UOMI Mainnet',
    subtitle: 'Full OPoC + Staking',
    description: 'All Phase 01 and 02 configurations continue operating. Full OPoC consensus activates at L1 level. TEE Web2 Oracles let AI Agents access Web2 data and subscriptions with minimized trust assumptions and latency. A TSS-enabled bridge with relayers enables trustless bridging of blockchain assets between UOMI and other chains. A Finite State Automata system gives agents autonomous transaction triggering. Node operators gain the option to stake $UOMI to secure the blockchain, staking rewards layer on top of inference earnings. The UOMI DAO launches, and the autonomous AI Agent layer built during the testnet era goes live on the production chain.',
    tags: ['All previous configs', 'Full OPoC at L1', 'TEE Web2 Oracles', 'TSS-enabled bridge', 'Finite State Automata', 'Stake-backed OPoC', 'Slashing engaged', 'UOMI DAO', 'AI Agents on mainnet'],
  },
];

const statusColors = {
  done: { dot: 'bg-white/50', border: 'border-white/10', label: 'text-white/50' },
  live: { dot: 'bg-[#dffe00]', border: 'border-[#dffe00]/30', label: 'text-[#dffe00]' },
  soon: { dot: 'bg-amber-400', border: 'border-amber-400/20', label: 'text-amber-400' },
  future: { dot: 'bg-white/30', border: 'border-white/10', label: 'text-white/40' },
};

const OpocRoadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans py-12 px-6">
      <div className="fixed inset-0 bg-gradient-to-br from-[#dffe00]/5 via-transparent to-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pt-12 md:pt-20 mb-20">
          <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">Full timeline</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4">
            Six milestones. <span className="italic text-[#dffe00]">One direction.</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 w-px h-full bg-white/10" />
          <motion.div className="absolute left-6 top-0 w-px bg-[#dffe00]/40" style={{ height: progressHeight }} />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => {
              const colors = statusColors[m.status];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  {/* Node dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className={`absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full z-10 ${colors.dot} ${m.status === 'live' ? 'ring-4 ring-[#dffe00]/20' : ''}`}
                  />

                  {/* Content */}
                  <div className={`ml-16 border ${colors.border} rounded-xl p-6 md:p-8 bg-white/[0.02]`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-white/40">{m.when}</span>
                      <span className={`text-xs font-medium ${colors.label}`}>{m.statusLabel}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {m.title}
                      {m.subtitle && <span className="ml-3 text-lg md:text-xl font-normal text-white/50">{m.subtitle}</span>}
                    </h2>

                    <p className="mt-4 text-white/60 text-base leading-relaxed max-w-3xl">
                      {m.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {m.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className={`text-xs px-2.5 py-1 rounded-full border ${
                            tag === 'Live'
                              ? 'bg-[#dffe00]/10 border-[#dffe00]/30 text-[#dffe00]'
                              : 'bg-white/[0.03] border-white/10 text-white/60'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Build alongside us.</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="/gpu-providers/" className="px-6 py-3 rounded-lg bg-[#dffe00] text-black font-semibold hover:bg-[#c8e500] transition-colors">
              Join testnet
            </a>
            <a href="/grants" className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
              Apply for a grant
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpocRoadmap;
