import React, { useState, useEffect, useRef } from 'react';
import { Search, Users, Twitter, MessageCircle, Coins, ArrowRight, X, Zap, Globe, Gift, Star, Activity, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

// Header component with hero section
const Header = () => (
  <motion.div className="text-center mb-16">
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium"
      style={{ 
        backgroundColor: "rgba(223, 254, 0, 0.1)",
        color: "#dffe00"
      }}
    >
      TESTNET AIRDROP
    </motion.div>
    
    <motion.h1
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-bold mb-4 text-white"
    >
      Join the UOMI Revolution.
    </motion.h1>
    
    <motion.p
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="max-w-2xl mx-auto text-zinc-400 text-lg mb-8"
    >
      Participate in our testnet activities and earn your spot in the upcoming airdrop. Complete tasks, engage with the community, and help us build the future of decentralized AI agents.
    </motion.p>
  </motion.div>
);

// Background animation component
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw diagonal grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      const gridSize = 40;
      const angle = Math.PI / 6; // 30 degrees
      
      for (let i = -canvas.height; i < canvas.width + canvas.height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i - canvas.height * Math.tan(angle), canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i - canvas.width * Math.tan(angle));
        ctx.stroke();
      }

      // Draw animated orbs with purple gradient
      for (let i = 0; i < 3; i++) {
        const radius = 100 + i * 50;
        const x = canvas.width * (0.3 + i * 0.2);
        const y = canvas.height * 0.7 + Math.sin(time + i) * 50;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

// Task card component
const TaskCard = ({ icon: Icon, title, description, action, actionUrl, typology = 'default', category, isActive = true }) => (
  <motion.div
    variants={gridItemVariants}
    className={`group relative ${!isActive ? 'opacity-60' : ''}`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-[#dffe00]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    
    <div className={`relative p-6 border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm rounded-xl h-full flex flex-col ${typology == 'priority' ? 'ring-2 ring-[#dffe00]/30' : ''} ${!isActive ? 'border-zinc-800/30' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-3 rounded-lg w-12 h-12 flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: typology == 'priority' ? "rgba(223, 254, 0, 0.2)" : "rgba(223, 254, 0, 0.1)",
          }}
        >
          <Icon className="h-5 w-5" style={{ color: "#dffe00" }} />
        </div>
        
        {typology == 'priority' && (
          <div className="px-2 py-1 bg-[#dffe00]/20 text-[#dffe00] text-xs rounded-full font-medium">
            Priority
          </div>
        )}
        {typology == 'partner' && (
          <div className="px-2 py-1 bg-[#ffffff]/20 text-[#ffffff] text-xs rounded-full font-medium">
            Partner
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white group-hover:text-[#dffe00]' : 'text-zinc-500'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {description}
        </p>
        
        <div className={`text-xs mb-4 font-medium uppercase tracking-wider ${isActive ? 'text-[#dffe00]' : 'text-zinc-600'}`}>
          {category}
        </div>
      </div>
      
      {isActive ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-zinc-800/50 hover:bg-[#dffe00]/10 border border-zinc-700 hover:border-[#dffe00]/30 
            rounded-lg px-4 py-3 text-white hover:text-[#dffe00] transition-all duration-300 
            flex items-center justify-center gap-2 font-medium"
          onClick={() => actionUrl && window.open(actionUrl, '_blank')}
        >
          <span>{action}</span>
          <ArrowRight size={16} />
        </motion.button>
      ) : (
        <div className="w-full bg-zinc-800/30 border border-zinc-800/50 rounded-lg px-4 py-3 
          text-zinc-500 flex items-center justify-center gap-2 font-medium cursor-not-allowed">
          <Clock size={16} />
          <span>Soon</span>
        </div>
      )}
    </div>
  </motion.div>
);

// Overview section
const OverviewSection = () => (
  <motion.div
    variants={staggerContainerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mb-24"
  >
    <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-8 backdrop-blur-sm">
      <motion.h2 variants={gridItemVariants} className="text-3xl font-bold text-white mb-4">
        Airdrop Overview
      </motion.h2>
      <motion.p variants={gridItemVariants} className="text-zinc-400 mb-8 max-w-3xl">
        The UOMI testnet airdrop rewards early adopters and active community members who help us test and improve our ecosystem. 
        Complete the tasks below to maximize your chances of receiving tokens when we launch on mainnet.
      </motion.p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div variants={gridItemVariants} className="text-center p-6 bg-black/30 rounded-lg">
          <div className="text-2xl font-bold text-[#dffe00] mb-2">4</div>
          <div className="text-zinc-400">Available Tasks</div>
        </motion.div>
        
        <motion.div variants={gridItemVariants} className="text-center p-6 bg-black/30 rounded-lg">
          <div className="text-2xl font-bold text-[#dffe00] mb-2">∞</div>
          <div className="text-zinc-400">Daily Interactions</div>
        </motion.div>
        
        <motion.div variants={gridItemVariants} className="text-center p-6 bg-black/30 rounded-lg">
          <div className="text-2xl font-bold text-[#dffe00] mb-2">TBA</div>
          <div className="text-zinc-400">Airdrop Amount</div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// Main component
const JoinPage = () => {
  const tasks = [
    {
      icon: Twitter,
      title: "Post About UOMI on X",
      description: "Share your thoughts about UOMI on X (formerly Twitter). Tag @UOMINetwork and use #UOMI to help spread awareness about our revolutionary AI agent platform.",
      action: "Post on X",
      actionUrl: "https://twitter.com/intent/tweet?text=Excited%20to%20join%20the%20%40UOMINetwork%20testnet!%20Building%20the%20future%20of%20AI%20agents%20on%20blockchain.%20%23UOMI%20%23AI%20%23Blockchain",
      typology: 'priority',
      category: "Social",
      isActive: true
    },
    {
      icon: Coins,
      title: "Get UOMI Tokens from Faucet",
      description: "Claim your testnet UOMI tokens from our faucet. These tokens are essential for interacting with the network and testing our features.",
      action: "Get Faucet Tokens",
      actionUrl: "https://app.uomi.ai/faucet",
      typology: 'priority',
      category: "Essential",
      isActive: true
    },
    {
      icon: MessageCircle,
      title: "Actively Engage in Discord",
      description: "Join our Discord community and actively participate in discussions. Earn the 'Inner Circle' role by being helpful and contributing meaningful conversations.",
      action: "Join Discord",
      actionUrl: "https://discord.com/invite/RV5DUpjsdY",
      typology: 'priority',
      category: "Community",
      isActive: true
    },
    {
      icon: Star,
      title: "Engage on UOMI Twitter Posts",
      description: "Like, retweet, and comment on UOMI's official Twitter posts. Consistent engagement helps you earn the 'Twitter Supporter' role.",
      action: "Follow & Engage",
      actionUrl: "https://x.com/uomiNetwork",
      category: "Social",
      isActive: true
    },
    {
      icon: Activity,
      title: "Interact with UOMI Agents Daily",
      description: "Use our AI agents on a daily basis. Experiment with different features and provide feedback to help us improve the agent experience.",
      action: "Try Agents",
      actionUrl: "https://app.uomi.ai/agents",
      category: "Testing",
      isActive: false
    },
    {
      icon: Users,
      title: "Engage with Ecosystem Partners",
      description: "Interact with all UOMI ecosystem partners and their platforms. This includes testing integrations and providing valuable feedback across our network.",
      action: "Explore Partners",
      actionUrl: "https://uomi.ai/ecosystem/",
      category: "Ecosystem",
      isActive: false
    },
    {
      icon: TrendingUp,
      title: "Swap Testnet Tokens on Synthra",
      description: "Test DEX integration by swapping tokens on synthra.org.",
      action: "Visit Synthra",
      actionUrl: "https://synthra.org",
      typology: 'partner',
      category: "DeFi",
      isActive: false
    },
    {
      icon: Zap,
      title: "Participate in Bets on Simulacra",
      description: "Engage with prediction market by placing bets on simulacra.bet.",
      action: "Visit Simulacra",
      actionUrl: "https://simulacra.bet",
      typology: 'partner',
      category: "Gaming",
      isActive: false
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <Header />
        
        <OverviewSection />
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            variants={gridItemVariants}
            className="text-3xl font-bold text-white mb-4"
          >
            Airdrop Tasks
          </motion.h2>
          <motion.p 
            variants={gridItemVariants}
            className="text-zinc-400 mb-8 max-w-3xl"
          >
            Complete these tasks to qualify for the UOMI airdrop. Priority tasks are essential, while others help increase your allocation.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {tasks.map((task, index) => (
            <TaskCard 
              key={index} 
              {...task}
            />
          ))}

          
        </motion.div>
        

        
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-8 backdrop-blur-sm mb-16"
        >
          
          <motion.h3 variants={gridItemVariants} className="text-2xl font-bold text-white mb-4">
            Important Notes
          </motion.h3>
          <motion.div variants={gridItemVariants} className="space-y-4 text-zinc-400">
            <p>• <strong className="text-white">Consistency matters:</strong> Daily interactions and ongoing engagement are valued more than one-time actions.</p>
            <p>• <strong className="text-white">Quality over quantity:</strong> Meaningful contributions to the community will be rewarded more than spam.</p>
            <p>• <strong className="text-white">Stay active:</strong> The airdrop snapshot can happen at any time, so maintain consistent activity.</p>
            <p>• <strong className="text-white">No guarantees:</strong> Task completion doesn't guarantee airdrop eligibility. Final decisions are at UOMI's discretion.</p>
            <p>• <strong className="text-white">Testnet only:</strong> All activities should be performed on testnet until mainnet launch.</p>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-white rounded-lg px-6 py-3 flex items-center space-x-2 font-medium"
        style={{
          backgroundColor: "#dffe00",
          color: "#000",
          boxShadow: "0 4px 10px -1px rgba(223, 254, 0, 0.2)",
        }}
        onClick={() => window.open('https://app.uomi.ai', '_blank')}
      >
        <Gift size={16} />
        <span>Dashboard</span>
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="border border-zinc-700 rounded-lg px-6 py-3 flex items-center space-x-2 text-white"
        onClick={() => window.open('https://discord.com/invite/RV5DUpjsdY', '_blank')}
      >
        <MessageCircle size={16} />
        <span>Join Discord</span>
      </motion.button>
    </motion.div>
          
          <p className="text-zinc-400 mt-4 text-sm">
            Stay updated with the latest news and connect with other testnet participants
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinPage;