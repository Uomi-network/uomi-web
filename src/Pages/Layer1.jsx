import React from "react";
import { motion } from "framer-motion";
import BlockchainFeatures from "../components/BlockchainFeatures";
import BenefitsSection from "../components/BenefitsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Partners from "../components/Partners";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } },
};

/* ─── Hero Illustration ─── */
const NetworkSVG = () => (
  <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[700px] mx-auto mt-12">
    <defs>
      <linearGradient id="orb" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#dffe00" /><stop offset="1" stopColor="#a3c400" />
      </linearGradient>
    </defs>
    <ellipse cx="350" cy="180" rx="320" ry="120" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="2" strokeDasharray="6 8" />
    <ellipse cx="350" cy="180" rx="265" ry="98" fill="none" stroke="rgba(223,254,0,.22)" strokeWidth="1.8" strokeDasharray="5 8" />
    <ellipse cx="350" cy="180" rx="220" ry="78" fill="none" stroke="rgba(255,255,255,.34)" strokeWidth="2" strokeDasharray="6 8" />
    <g>
      <circle cx="350" cy="180" r="58" fill="url(#orb)" />
      <circle cx="350" cy="180" r="58" fill="none" stroke="rgba(255,255,255,.15)" />
      <image href="/UOMI.svg" x="306" y="168" width="88" height="24" preserveAspectRatio="xMidYMid meet" />
    </g>
    <g fontFamily="monospace" fontSize="10" fill="#888">
      <g transform="translate(80,70)"><rect width="140" height="34" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="17" r="5" fill="#dffe00" /><text x="28" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">OPoC</text></g>
      <g transform="translate(500,52)"><rect width="140" height="34" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="17" r="5" fill="#a3c400" /><text x="28" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">AI Agent</text></g>
      <g transform="translate(40,250)"><rect width="140" height="34" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="17" r="5" fill="#a3c400" /><text x="28" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">TSS</text></g>
      <g transform="translate(530,260)"><rect width="140" height="34" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="17" r="5" fill="#dffe00" /><text x="28" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">TEE Oracle</text></g>
    </g>
  </svg>
);

const Layer1Page = () => {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-[#dffe00]/10 text-[#dffe00]">
              UOMI · Blockchain
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4">
              The Blockchain<br />for{' '}
              <span className="italic text-[#dffe00]">AI Agents</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              UOMI is the first <strong className="text-white">Layer 1</strong> built for secure AI computation and unstoppable agents that think, act, trade, and evolve, without human input
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x3628d69aa2d66e9efe95ab1267d440dec24389b6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#dffe00] text-black font-semibold hover:bg-[#c8e500] transition-colors">
                Trade on Uniswap <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
              <a href="https://uomi.ai/chain/" className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                Explore the network
              </a>
            </div>
          </motion.div>
          <NetworkSVG />
        </div>
      </section>

      <BlockchainFeatures />
      <BenefitsSection />
      <HowItWorksSection />
      <Partners />
    </>
  );
};

export default Layer1Page;
