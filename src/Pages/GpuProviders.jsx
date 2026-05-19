import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } },
};

const targetDate = new Date('2026-05-21T18:00:00+02:00').getTime();

function getTimeLeft() {
  const delta = Math.max(0, targetDate - Date.now());

  return {
    days: Math.floor(delta / (1000 * 60 * 60 * 24)),
    hours: Math.floor((delta / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((delta / (1000 * 60)) % 60),
    seconds: Math.floor((delta / 1000) % 60),
  };
}

const CountdownUnit = ({ value, label }) => (
  <div className="border border-white/10 bg-white/[0.03] rounded-xl p-5 text-center">
    <div className="font-mono text-4xl md:text-5xl font-bold text-[#dffe00] tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
      {label}
    </div>
  </div>
);

export default function GpuProvidersPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const isLive = useMemo(
    () => Object.values(timeLeft).every((value) => value === 0),
    [timeLeft]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="fixed inset-0 bg-gradient-to-br from-[#dffe00]/5 via-transparent to-white/5 pointer-events-none" />

      <div className="relative z-10">
        <section className="min-h-screen flex items-center py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-[#dffe00]/10 text-[#dffe00]">
                UOMI · GPU Providers
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4">
                GPU provider setup is{' '}
                <span className="italic text-[#dffe00]">coming soon.</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                The onboarding page for running GPUs on the UOMI Distributed Inference Network launches on 21 May 2026 at 16:00 UTC.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <CountdownUnit value={timeLeft.days} label="Days" />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10"
            >
              <span className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70">
                {isLive ? 'Launching now' : 'Counting down to launch'}
              </span>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
