import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UnlockScheduleData = [
  {
    category: 'Foundation Reserves',
    schedule: '0% TGE, linear vesting over 6 years',
    percentage: '4.40%'
  },
  {
    category: 'Ecosystem Fund',
    schedule: '0% TGE, linear vesting over 3 years',
    percentage: '4.29%'
  },
  {
    category: 'Team Fund',
    schedule: '0% TGE, 3-month cliff, linear vesting over 3 years',
    percentage: '4.18%'
  },
  {
    category: 'Liquidity (DEX/CEX)',
    schedule: 'Fully unlocked at TGE',
    percentage: '3.75%'
  },
  {
    category: 'Testnet Nodes Incentives',
    schedule: '0% TGE, 1-month cliff, 6-month linear vesting',
    percentage: '0.24%'
  },
  {
    category: 'Farming UOMI',
    schedule: '0% TGE, unlocked at mainnet, 6-month linear vesting',
    percentage: '2.38%'
  },
  {
    category: 'AI Agent Pre-Mainnet APY',
    schedule: '0% TGE, 3-month cliff, 3-month linear vesting',
    percentage: '0.57%'
  },
  {
    category: 'Fundraising (Public Sale & KOL Round)',
    schedule: 'Public Sale & KOL Round: 20% TGE, 8 months linear vesting, private: 5% TGE, average 11.2-month linear vesting',
    percentage: '3.62%'
  },
  {
    category: 'Staking Rewards (Mainnet)',
    schedule: 'Minted over 30 years with halving schedule',
    percentage: '76.57%'
  }
];

const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toFixed(2)}{suffix}
    </span>
  );
};

export default function MinimalTokenomicsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageClick = (imageSrc, altText) => {
    setSelectedImage({ src: imageSrc, alt: altText });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  if (!mounted) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#dffe00]/5 via-transparent to-white/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            UOMI <span className="text-[#dffe00]">Tokenomics</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            The Future of Autonomous AI Agents
          </h2>
          <div className="text-lg text-white/90 max-w-5xl mx-auto leading-relaxed space-y-6">
            <p>
              UOMI is the leading <strong className="text-[#dffe00]">Layer 1 blockchain built for Autonomous AI Agents</strong>, 
              entities that can own wallets, manage assets, and interact freely across blockchains and digital ecosystems.
            </p>
            <p>
              For too long, AI has been centralized and limited. UOMI changes this by enabling <strong className="text-[#dffe00]">true on-chain autonomy</strong>, 
              where agents operate independently in DeFi, NFTs, governance, gaming, digital art, and beyond.
            </p>
            <p>
              At the core of this vision is <strong className="text-white">OPoC (Optimistic Proof of Computation)</strong>, 
              a novel consensus mechanism that brings scalable and secure AI execution directly on-chain — something existing blockchains cannot achieve.
            </p>
            <p>
              <strong>$UOMI</strong> is the native token powering this ecosystem. It secures consensus, fuels AI operations, 
              incentivizes builders, and aligns the community around the growth of autonomous agents.
            </p>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 border border-white/10 rounded-lg">
              <div className="text-lg font-semibold text-[#dffe00] mb-2">Total Supply</div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter value={21} suffix=" billion" />
              </div>
              <div className="text-sm text-white/60 mt-1">UOMI</div>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-lg">
              <div className="text-lg font-semibold text-white mb-2">Pre-minted Supply</div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter value={4.92} suffix=" billion" />
              </div>
              <div className="text-sm text-white/60 mt-1">UOMI</div>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-lg">
              <div className="text-lg font-semibold text-[#dffe00] mb-2">Mainnet Supply</div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter value={16.08} suffix=" billion" />
              </div>
              <div className="text-sm text-white/60 mt-1">UOMI (minted over 30 years with halving)</div>
            </div>
          </div>
        </motion.div>

        {/* Distribution Charts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => handleImageClick("/assets/tokenomics-distribution.jpg", "Distribution Chart 1")}
            >
              <img 
                src="/assets/tokenomics-distribution.jpg" 
                alt="Distribution Chart 1" 
                className="w-full h-auto"
              />
            </div>
            <div 
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => handleImageClick("/assets/tokenomics-distribution-2.jpg", "Distribution Chart 2")}
            >
              <img 
                src="/assets/tokenomics-distribution-2.jpg" 
                alt="Distribution Chart 2" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Distribution Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-24 space-y-8"
        >
          {[
            {
              title: "Foundation Reserves – 4.40%",
              desc: "Reserved for the UOMI Foundation to sustain long-term operations, governance, marketing and research.",
              vesting: "0% TGE, no cliff, linear vesting over 6 years."
            },
            {
              title: "Ecosystem Fund – 4.29%",
              desc: "Allocated to grants, partnerships, and programs designed to accelerate adoption and onboard developers and communities.",
              vesting: "0% TGE, no cliff, linear vesting over 3 years."
            },
            {
              title: "Team Fund – 4.18%",
              desc: "Allocated to the UOMI employees, developers, and early builders of UOMI.",
              vesting: "0% TGE, 3-month cliff, linear vesting over 3 years."
            },
            {
              title: "Liquidity (DEX/CEX) – 3.75%",
              desc: "Reserved to provide stable liquidity across centralized and decentralized exchanges.",
              vesting: "Fully unlocked at TGE."
            },
            {
              title: "Testnet Nodes Incentives – 0.24%",
              desc: "Rewards for validators participating in the testnets.",
              vesting: "0% TGE, 1-month cliff, distributed over 6 months."
            },
            {
              title: "Farming UOMI – 2.38%",
              desc: "Allocated to the OVER community stakers, unlocking at mainnet launch.",
              vesting: "0% TGE, 6-month vesting from mainnet."
            },
            {
              title: "AI Agent Pre-Mainnet APY – 0.57%",
              desc: "APY offered to buyers of Agents during the Agent Sale in the pre-mainnet period.",
              vesting: "0% TGE, 3-month cliff, 3-month vesting."
            },
            {
              title: "Fundraising – 3.62%",
              desc: "Structured across multiple rounds to onboard early backers and public participants:",
              vesting: "Public Sale Vesting: (40.32%) → 20% TGE, 8-month linear vesting | Private Investors Vesting: (43.91%) → 5% TGE, average 11.2-month linear vesting | KOL Round Vesting: (15.78%) → 20% TGE, 8-month linear vesting"
            },
            {
              title: "Staking Rewards (Mainnet) – 76.57%",
              desc: "The largest share of supply is reserved for staking rewards, ensuring network security and validator incentives.",
              vesting: "Not pre-minted. Minted gradually over 30 years through halving cycles in mainnet."
            }
          ].map((item, index) => (
           <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-[#dffe00] mb-3">{item.title}</h3>
            <p className="text-white/90 mb-3 leading-relaxed">{item.desc}</p>

            {item.title === "Fundraising – 3.62%" ? (
              <ul className="list-disc pl-5 text-white/90 text-sm">
                <li>Public Sale Vesting: (40.32%) → 20% TGE, 8-month linear vesting</li>
                <li>Private Investors Vesting: (43.91%) → 5% TGE, average 11.2-month linear vesting</li>
                <li>KOL Round Vesting: (15.78%) → 20% TGE, 8-month linear vesting</li>
              </ul>
            ) : (
              <p className="text-white font-semibold text-sm">
                <strong>Vesting:</strong> <span className="font-normal text-white/90">{item.vesting}</span>
              </p>
            )}
          </motion.div>
                  ))}
        </motion.div>



        {/* Unlock Schedule Chart */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Unlock Schedule</h2>
          <div className="flex justify-center">
            <div 
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => handleImageClick("/assets/tokenomics.jpg", "Unlock Schedule Chart")}
            >
              <img 
                src="/assets/tokenomics.jpg" 
                alt="Unlock Schedule Chart" 
                className="w-auto h-auto max-w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Unlock Schedule Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white/5 border border-white/10 rounded-lg overflow-hidden mb-24"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 font-semibold">Category</th>
                  <th className="text-left py-4 px-6 font-semibold">Allocation</th>
                  <th className="text-left py-4 px-6 font-semibold">Unlock Schedule</th>
                </tr>
              </thead>
              <tbody>
                {UnlockScheduleData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">{item.category}</td>
                    <td className="py-4 px-6 text-[#dffe00] font-semibold">{item.percentage}</td>
                    <td className="py-4 px-6 text-white/80 text-sm">{item.schedule}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Security Reminder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-[#dffe00]/10 border border-[#dffe00]/20 rounded-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-[#dffe00] mb-4">⚠️ Security Reminders</h3>
          <div className="text-lg text-white/90 leading-relaxed space-y-4">
            <p>
              The <strong>$UOMI TGE is approaching</strong>. Stay vigilant: the UOMI Foundation and contributors will <strong>never DM you</strong> to ask for wallet access or personal information.
            </p>
            <p>Verify all announcements and links only through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Official X account:</strong> @UomiNetwork</li>
              <li><strong>Official website:</strong> uomi.ai</li>
            </ul>
            <p className="font-semibold text-[#dffe00]">No other domains will be used for TGE.</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Join the <span className="text-[#dffe00]">Autonomous AI Revolution</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Be part of the ecosystem that's enabling true on-chain AI autonomy and reshaping the future of blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#dffe00] text-black font-semibold py-3 px-8 rounded-lg hover:bg-[#dffe00]/90 transition-colors"
              href="https://app.uomi.ai"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              href="https://docs.uomi.ai"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
     
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}