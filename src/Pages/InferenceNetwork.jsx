import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Hero Illustration ─── */
const NetworkSVG = () => (
  <svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[700px] mx-auto mt-12">
    <defs>
      <linearGradient id="orb" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#dffe00" /><stop offset="1" stopColor="#a3c400" />
      </linearGradient>
    </defs>
    <ellipse cx="350" cy="180" rx="320" ry="120" fill="none" stroke="rgba(255,255,255,.08)" strokeDasharray="3 6" />
    <ellipse cx="350" cy="180" rx="220" ry="78" fill="none" stroke="rgba(255,255,255,.12)" strokeDasharray="3 6" />
    <g>
      <circle cx="350" cy="180" r="58" fill="url(#orb)" />
      <circle cx="350" cy="180" r="58" fill="none" stroke="rgba(255,255,255,.15)" />
      <text x="350" y="178" textAnchor="middle" fontFamily="serif" fontSize="22" fill="#000">UOMI</text>
      <text x="350" y="198" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,.65)" letterSpacing="2">NETWORK</text>
    </g>
    <g fontFamily="monospace" fontSize="10" fill="#888">
      <g transform="translate(80,70)"><rect width="140" height="44" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="22" r="5" fill="#dffe00" /><text x="28" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">RTX 4090</text><text x="28" y="34" fill="#888">paris-07</text></g>
      <g transform="translate(500,52)"><rect width="140" height="44" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="22" r="5" fill="#a3c400" /><text x="28" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">RTX PRO 6000</text><text x="28" y="34" fill="#888">tokyo-12</text></g>
      <g transform="translate(40,250)"><rect width="140" height="44" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="22" r="5" fill="#a3c400" /><text x="28" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">RTX 5090</text><text x="28" y="34" fill="#888">berlin-21</text></g>
      <g transform="translate(530,260)"><rect width="140" height="44" rx="10" fill="#111" stroke="rgba(255,255,255,.1)" /><circle cx="14" cy="22" r="5" fill="#dffe00" /><text x="28" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">2× RTX 4090</text><text x="28" y="34" fill="#888">austin-03</text></g>
    </g>
  </svg>
);

/* ─── Main Page ─── */
export default function InferenceNetworkPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* subtle bg gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#dffe00]/5 via-transparent to-white/5 pointer-events-none" />

      <div className="relative z-10">
        {/* ═══ HERO ═══ */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-[#dffe00]/10 text-[#dffe00]">
                UOMI · Inference Network
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4">
                Open AI inference on the{' '}
                <span className="italic text-[#dffe00]">GPUs you already own.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                A distributed inference network running frontier open-source models on consumer GPUs.{' '}
                <strong className="text-white">Permissionless, verifiable, paid per token.</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="https://app.uomi.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-[#dffe00] text-black font-semibold hover:bg-[#c8e500] transition-colors">
                  Get an API key
                </a>
                <a href="/participate" className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                  Earn from your GPU
                </a>
              </div>
            </motion.div>
            <NetworkSVG />
          </div>
        </section>

        {/* ═══ ECONOMY / FLYWHEEL ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">The flywheel</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                100% buy pressure. <span className="italic text-[#dffe00]">Then split.</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-3xl mx-auto text-lg">
                Every dollar of inference revenue market-buys $UOMI on-chain. The bought tokens then split: 80% to the GPU that served the request, 20% to the burn address. No treasury cut. No emissions. No vesting cliffs.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01 · Buy-back', pct: '100%', copy: 'Of every dollar paid by OpenRouter (or any UOMI customer) is used to market-buy $UOMI on-chain. No cut to a treasury — all revenue becomes buy pressure on the token.' },
                { step: '02 · To GPU provider', pct: '80%', copy: 'Of the $UOMI just bought lands directly in the wallet of the GPU that served the request. Paid in $UOMI, on-chain, instantly.' },
                { step: '03 · To burn', pct: '20%', copy: 'Of the $UOMI just bought is sent to the burn address. Permanent supply reduction, every burn tx is publicly verifiable on-chain.' },
              ].map((c, i) => (
                <motion.div key={i} variants={item} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-[#dffe00]/30 transition-colors">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#dffe00]">→ Step {c.step}</span>
                  <div className="text-5xl font-bold mt-3 mb-4">{c.pct}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{c.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">How it works</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                A request walks <span className="italic text-[#dffe00]">through the network.</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">Three steps from API call to settlement. Verifiable end-to-end.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
              {[
                { n: '01 · DEMAND', title: 'An app hits the API.', desc: 'Apps query UOMI directly or via aggregators — Llama, Qwen, DeepSeek, Mixtral — whatever the open-weights frontier looks like today. OpenAI-compatible. Drop-in.' },
                { n: '02 · COMPUTE', title: 'A consumer GPU answers.', desc: 'The job lands on the fastest free GPU in the mesh. Output is verified by Optimistic Proof of Computation and Deterministic Indeterminism before payment clears.' },
                { n: '03 · SETTLE', title: 'The buy-back and split happen on-chain.', desc: 'Revenue market-buys $UOMI on-chain, 100% of it. 80% to the provider\'s wallet, 20% to the burn address. Same block, every block, publicly auditable.' },
              ].map((s, i) => (
                <motion.div key={i} variants={item} className="relative">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#dffe00]/70">{s.n}</span>
                  <h4 className="text-xl font-bold mt-2 mb-3">{s.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ METRICS ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: '200B+', lbl: 'Daily tokens served by Hermes alone', sub: 'via OpenRouter' },
                { val: '$100M+', lbl: 'Annualized aggregated inference spend', sub: 'doubling every few months' },
                { val: '3', lbl: 'Live testnets battle-testing OPoC', sub: 'Babbage · Finney · Turing' },
                { val: '1 yr+', lbl: 'Continuous testnet operation', sub: 'since 2024' },
              ].map((m, i) => (
                <motion.div key={i} variants={item} className="text-center p-6 border border-white/10 rounded-xl">
                  <div className="text-3xl md:text-4xl font-bold italic text-[#dffe00]">{m.val}</div>
                  <div className="mt-2 text-sm text-white/80">{m.lbl}</div>
                  <div className="mt-1 text-xs text-white/40">{m.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ INFERENCE INTEGRITY ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">Inference integrity</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3">
                  Trust the cluster, <span className="italic text-[#dffe00]">not the GPU.</span>
                </h2>
                <p className="mt-4 text-white/60 max-w-3xl mx-auto text-base leading-relaxed">
                  Pay-for-work only works if the work is verifiable. The integrity guarantees are inherited from <strong className="text-white">Optimistic Proof of Computation</strong> and <strong className="text-white">Deterministic Indeterminism</strong>, peer-reviewed algorithms published in 2025 and running unmodified across three UOMI testnets for over a year.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { n: '01', title: 'The worker commits to an output.', desc: 'When a node serves a request, it returns the generated tokens with the top-k log-probabilities the model assigned to those tokens. This is the inference\'s fingerprint.' },
                  { n: '02', title: 'Validators re-score against the same model.', desc: 'A second node runs the worker\'s claimed input and output through the same model architecture and recomputes the log-probabilities. Re-scoring an existing answer is reproducible.' },
                  { n: '03', title: 'The check is tolerant by design.', desc: 'Two honest GPUs produce log-probs that differ by a tiny floating-point delta. The protocol accepts that delta. A worker running a smaller model or no model at all diverges far beyond it, and is rejected.' },
                  { n: '04', title: 'Optimistic sampling keeps verification cheap.', desc: 'The network doesn\'t re-validate every inference. Validators are sampled randomly, so cheaters never know which call gets checked. Combined with slashing, the expected cost of cheating exceeds any gain.' },
                ].map((p, i) => (
                  <motion.div key={i} variants={item} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#dffe00]/10 text-[#dffe00] text-sm font-bold flex items-center justify-center mb-3">{p.n}</span>
                    <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Encrypted binaries sub-section */}
              <div className="border-t border-white/10 pt-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8">
                  <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">Privacy & node integrity</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-3">
                    Encrypted binaries: <span className="italic text-[#dffe00]">the second lock.</span>
                  </h3>
                  <p className="mt-3 text-white/60 max-w-2xl mx-auto text-sm">
                    Deterministic Indeterminism catches a node that lies about its output. Encrypted binaries make sure the node can't lie about its execution either, and can't quietly read what passes through.
                  </p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Continuous integrity attestation.', desc: 'The node proves it\'s running the official build on every cycle, not just at launch.' },
                    { title: 'No prompt sniffing.', desc: 'Operators can\'t enable logs, can\'t read request payloads in cleartext, and can\'t exfiltrate user data.' },
                    { title: 'Defense in depth.', desc: 'Output-level checks and execution-level checks catch different attacker capabilities. Both have to fail for fraud to land.' },
                  ].map((l, i) => (
                    <motion.div key={i} variants={item} className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                      <h5 className="font-semibold text-sm mb-2">{l.title}</h5>
                      <p className="text-white/50 text-sm">{l.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3 PERSONAS ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">Who it's for</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                One network. <span className="italic text-[#dffe00]">Three doors.</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">Pick the side of the market that fits — UOMI rewards all three.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { tag: 'For developers', title: 'Frontier OSS, OpenAI-compatible.', desc: 'Swap one base URL and you\'re done. Stream, function-call, JSON mode. Pay per token, in dollars or $UOMI.' },
                { tag: 'For GPU providers', title: 'Turn idle silicon into yield.', desc: 'RTX 4090 or better. One-line installer. The moment a request hits your node, 80% lands in your wallet.' },
                { tag: 'For $UOMI holders', title: 'Usage funds the buyback.', desc: 'No emissions Ponzi. Every served token converts external revenue into $UOMI buy pressure, visible on-chain, hourly.' },
              ].map((c, i) => (
                <motion.div key={i} variants={item} className="border border-white/10 rounded-xl p-6 hover:border-[#dffe00]/30 transition-colors">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-[#dffe00] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#dffe00]" />
                    {c.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ MODELS ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">Models</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                Frontier OSS, <span className="italic text-[#dffe00]">permanently warm.</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">No cold starts, no model-loading tax. The biggest open-source models stay hot across the GPU mesh.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { vendor: 'meta', name: 'Llama 3.3 70B', price: '$0.34', ctx: '128k ctx' },
                { vendor: 'deepseek', name: 'DeepSeek V3', price: '$0.28', ctx: '64k ctx' },
                { vendor: 'qwen', name: 'Qwen 2.5 Coder 32B', price: '$0.18', ctx: '128k ctx' },
                { vendor: 'mistral', name: 'Mixtral 8×22B', price: '$0.41', ctx: '64k ctx' },
                { vendor: 'google', name: 'Gemma 2 27B', price: '$0.16', ctx: '8k ctx' },
                { vendor: 'nous', name: 'Hermes 3 405B', price: '$1.12', ctx: '128k ctx' },
              ].map((m, i) => (
                <motion.div key={i} variants={item} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-wider text-white/40 font-mono">{m.vendor}</span>
                  <span className="text-lg font-bold">{m.name}</span>
                  <div className="flex items-center gap-3 mt-auto text-sm text-white/60">
                    <span><strong className="text-white">{m.price}</strong> / M tok</span>
                    <span>{m.ctx}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ DEVELOPER SECTION ═══ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="text-xs font-medium tracking-widest uppercase text-[#dffe00]">For developers</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                  If you can call OpenAI, <span className="italic text-[#dffe00]">you can call UOMI.</span>
                </h2>
                <p className="mt-4 text-white/60 text-lg">A single base-URL swap. Keep your SDK. Keep your prompts. Lose the closed-API tax.</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="https://app.uomi.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-[#dffe00] text-black font-semibold hover:bg-[#c8e500] transition-colors">
                    Get an API key
                  </a>
                  <a href="https://docs.uomi.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                    Read the docs →
                  </a>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-xs text-white/40 font-mono">inference.py</span>
                  </div>
                  <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto text-white/80">
{`from openai import OpenAI

client = OpenAI(
  base_url="https://api.uomi.ai/v1",
  api_key="sk-uomi-...",
)

resp = client.chat.completions.create(
  model="llama-3.3-70b",
  messages=[{"role": "user",
              "content": "Hello, GPU mesh."}],
  stream=True,
)

# 80% of this call paid the GPU that served it.
# 20% just bought back $UOMI on-chain.`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold">
                Open models. Open hardware. <span className="italic text-[#dffe00]">Open books.</span>
              </h2>
              <p className="mt-4 text-white/60 text-lg">Pick a side of the market. Inference today, paid today.</p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="/participate" className="px-6 py-3 rounded-lg bg-[#dffe00] text-black font-semibold hover:bg-[#c8e500] transition-colors">
                  Start inferencing
                </a>
                <a href="/participate" className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                  Run a GPU node
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
