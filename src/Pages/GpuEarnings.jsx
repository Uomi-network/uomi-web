import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } },
};

/* ─── Earnings data ─── */
const gpuConfigs = [
  { letter: 'A', spec: '2×4090' },
  { letter: 'B', spec: '4×4090' },
  { letter: 'C', spec: '2×5090' },
  { letter: 'D', spec: '4×5090' },
  { letter: 'E', spec: '2×L40s' },
  { letter: 'F', spec: '4×L40s' },
  { letter: 'G', spec: '1×Pro6K' },
  { letter: 'H', spec: '2×Pro6K' },
];

const rows = [
  { model: 'Qwen3.6 27B', values: [49.7, 74.5, 74.5, 149, 49.7, 74.5, 74.5, 149], best: [3, 7] },
  { model: 'Gemma 4 31B', values: [15.2, 22.8, 25.8, 36.9, 13.6, 22.8, 25.8, 45.5], best: [3] },
  { model: 'GLM 5', values: [null, null, null, null, null, null, null, 39.7], best: [7] },
  { model: 'MiniMax M2.5', values: [null, null, null, null, null, 21.4, null, 37.5], best: [7] },
  { model: 'Gemma 4 31B', values: [17.6, 29.3, 29.3, 44.0, 17.6, 29.3, 29.3, 44.0], best: [3] },
  { model: 'Gemma 4 26B A4B', values: [34.0, 34.0, 34.0, 34.0, 34.0, 34.0, 34.0, 34.0], best: [0] },
  { model: 'DeepSeek V4 Flash', values: [null, null, null, null, null, 10.7, null, 21.3], best: [7] },
  { model: 'Qwen3.5-9B', values: [10.5, 21.0, 21.0, 21.0, 10.5, 21.0, 21.0, 21.0], best: [1] },
  { model: 'Qwen3.6 35B A3B', values: [90.3, 136, 136, 136, 67.8, 136, 136, 271], best: [7] },
  { model: 'Qwen3.5-35B-A3B', values: [79.0, 119, 119, 237, 79.0, 119, 119, 237], best: [3] },
  { model: 'MiniMax M2.5', values: [null, null, null, null, null, 21.3, null, 35.5], best: [7] },
  { model: 'Llama 3.3 70B', values: [2.36, 13.7, 3.97, 21.6, 8.39, 13.7, 15.1, 25.2], best: [7] },
  { model: 'DeepSeek V4 Flash', values: [null, null, null, null, null, 8.86, null, 17.7], best: [7] },
  { model: 'Gemma 4 26B A4B', values: [48.0, 48.0, 96.0, 96.0, 48.0, 48.0, 96.0, 96.0], best: [2] },
  { model: 'gpt-oss-120b', values: [4.75, 9.50, 6.33, 9.50, 9.50, 19.0, 9.50, 19.0], best: [5] },
];

/* Color tier based on value */
function getTier(val) {
  if (val === null) return 'empty';
  if (val < 5) return 't1';
  if (val < 10) return 't2';
  if (val < 20) return 't3';
  if (val < 40) return 't4';
  if (val < 60) return 't5';
  if (val < 100) return 't6';
  if (val < 150) return 't7';
  return 't8';
}

const tierColors = {
  empty: 'bg-white/[0.02] border-white/5',
  t1: 'bg-amber-900/20 border-amber-800/30',
  t2: 'bg-amber-800/25 border-amber-700/30',
  t3: 'bg-amber-700/30 border-amber-600/30',
  t4: 'bg-orange-700/30 border-orange-600/30',
  t5: 'bg-orange-600/35 border-orange-500/30',
  t6: 'bg-red-700/30 border-red-600/30',
  t7: 'bg-red-600/35 border-red-500/30',
  t8: 'bg-emerald-700/35 border-emerald-500/30',
};

export default function GpuEarningsPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="fixed inset-0 bg-gradient-to-br from-[#dffe00]/5 via-transparent to-white/5 pointer-events-none" />

      <div className="relative z-10">
        {/* ═══ HERO ═══ */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">Contributors · GPU Earnings</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4">
                What your <span className="italic text-[#dffe00]">GPU could earn.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-4xl leading-relaxed">
                Every row is a model deployment. Every column is a GPU cluster configuration. The number inside is the upper bound of what one cluster of that shape can earn per day serving that model on UOMI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ MATRIX ═══ */}
        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="mb-6">
                <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">The full $/cluster/day matrix</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                  Pick a model. <span className="italic text-[#dffe00]">Pick a GPU.</span>
                </h2>
              </div>

              <p className="text-white/60 text-sm leading-relaxed max-w-4xl mb-6">
                <strong className="text-white">How to read.</strong> Each cell shows the maximum daily revenue one cluster of that GPU configuration can earn serving the model on UOMI. Background color encodes the value on a log scale: pale gold = low, deep red = high, green = exceptional. The <strong className="text-[#dffe00]">★</strong> marks each row's best configuration.
              </p>

              <div className="flex items-center gap-6 mb-8 text-xs text-white/50">
                <span className="flex items-center gap-2">
                  $0
                  <span className="inline-block w-32 h-2 rounded-full bg-gradient-to-r from-amber-900/60 via-red-600/60 to-emerald-500/60" />
                  $280+
                </span>
                <span><strong className="text-[#dffe00]">★</strong> best config for that model</span>
              </div>

              {/* Scrollable table */}
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
                <table className="w-full min-w-[900px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-white/40 font-medium sticky left-0 bg-black/90 backdrop-blur-sm z-10 min-w-[140px]">Model</th>
                      {gpuConfigs.map((g) => (
                        <th key={g.letter} className="px-3 py-3 text-center">
                          <div className="text-[#dffe00] font-bold text-base">{g.letter}</div>
                          <div className="text-white/50 text-xs font-mono mt-0.5">{g.spec}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-3 font-medium text-white/90 sticky left-0 bg-black/90 backdrop-blur-sm z-10">
                          {row.model}
                        </td>
                        {row.values.map((val, ci) => {
                          const tier = getTier(val);
                          const isBest = row.best.includes(ci);
                          return (
                            <td key={ci} className="px-2 py-2 text-center">
                              {val !== null ? (
                                <div className={`rounded-lg border px-2 py-2 ${tierColors[tier]} ${isBest ? 'ring-1 ring-[#dffe00]/50' : ''}`}>
                                  <span className="text-[10px] text-white/40 block">up to</span>
                                  <span className="font-bold text-white text-sm">${val}</span>
                                  {isBest && <span className="text-[#dffe00] ml-1 text-xs">★</span>}
                                </div>
                              ) : (
                                <div className={`rounded-lg border px-2 py-2 ${tierColors.empty}`}>
                                  <span className="text-white/20 text-xs">—</span>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-white/50 text-sm leading-relaxed max-w-4xl space-y-4">
                <p>
                  <strong className="text-white">Why 2× RTX Pro 6000 dominates.</strong> With 96 GB on a single GPU, a 1T-parameter MoE that needed 28 clusters per instance on 2× 4090 only needs 1, and the interconnect penalty stops compounding. The bigger the model, the more bigger GPUs pay off.
                </p>
                <p>
                  <strong className="text-white">Caveats.</strong> Throughput estimates are batched-aggregate at FP8 with sublinear scaling for multi-cluster sharding (<code className="text-xs bg-white/5 px-1.5 py-0.5 rounded font-mono">interconnect_factor = 1/√(1 + 3.0·(N−1))</code>) calibrated for public-internet latency (~50 ms RTT, ~500 Mbps effective). A provider running entirely within one cloud region with private peering would see closer to K=0.5; the K=3.0 used here is for cross-region operator distribution. Single-cluster numbers (where N=1) are unaffected and most reliable.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold">
                Plug in. <span className="italic text-[#dffe00]">Get paid.</span>
              </h2>
              <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
                80% of every dollar earned lands directly in the wallet of the GPU that served the request. The other 20% buys back $UOMI on the open market.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="/gpu-providers/" className="px-6 py-3 rounded-lg bg-[#dffe00] text-black font-semibold hover:bg-[#c8e500] transition-colors">
                  Run a node →
                </a>
                <a href="/tokenomics" className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                  How the split works
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
