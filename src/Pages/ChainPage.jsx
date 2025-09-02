import React, { useState, useEffect, useRef } from 'react';
import { Search, Book, Code, Cpu, Users, ArrowRight, X, Terminal, Shield, Rocket, Palette, Zap, Globe, Activity, Database, FileCheck } from 'lucide-react';
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

// Utility function to format numbers
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Header component
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
      TESTNET STATUS
    </motion.div>
    
    <motion.h1
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-bold mb-4 text-white"
    >
      UOMI Testnet
    </motion.h1>
    
    <motion.p
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="max-w-xl mx-auto text-zinc-400 text-lg mb-8"
    >
      Explore the current and historical UOMI testnet environments for development and testing.
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

// Status badge component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    current: {
      label: 'CURRENT',
      bgColor: 'rgba(34, 197, 94, 0.1)',
      textColor: '#22c55e',
      borderColor: 'rgba(34, 197, 94, 0.3)',
    },
    deprecated: {
      label: 'DEPRECATED',
      bgColor: 'rgba(251, 146, 60, 0.1)',
      textColor: '#fb923c',
      borderColor: 'rgba(251, 146, 60, 0.3)',
    },
    deactivated: {
      label: 'DEACTIVATED',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      textColor: '#ef4444',
      borderColor: 'rgba(239, 68, 68, 0.3)',
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
        borderColor: config.borderColor,
      }}
    >
      <div
        className="w-2 h-2 rounded-full mr-2"
        style={{ backgroundColor: config.textColor }}
      />
      {config.label}
    </div>
  );
};

// Statistics component
const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg">
    <div className="p-2 rounded-lg bg-[#dffe00]/10">
      <Icon className="h-4 w-4 text-[#dffe00]" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-zinc-400">{label}</div>
    </div>
  </div>
);

// Testnet card component
const TestnetCard = ({ testnet, isCurrent = false }) => {
  const { name, status, explorerUrl, stats, statsApiUrl } = testnet;
  const [apiStats, setApiStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch stats from API if statsApiUrl is provided
  useEffect(() => {
    if (statsApiUrl) {
      setIsLoading(true);
      fetch(statsApiUrl)
        .then(response => response.json())
        .then(data => {
          setApiStats({
            addresses: parseInt(data.total_addresses) || 0,
            transactions: parseInt(data.total_transactions) || 0,
            blocks: parseInt(data.total_blocks) || 0,
          });
        })
        .catch(error => {
          console.error(`Error fetching stats for ${name}:`, error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [statsApiUrl, name]);

  // Use API stats if available, otherwise fallback to hardcoded stats
  const displayStats = apiStats || stats;

  return (
    <motion.div
      variants={gridItemVariants}
      className={`relative ${isCurrent ? 'mb-12' : 'mb-8'}`}
    >
      {isCurrent && (
        <div className="absolute -inset-4 bg-gradient-to-r from-[#dffe00]/10 via-transparent to-[#dffe00]/10 rounded-2xl"></div>
      )}
      
      <div
        className={`relative bg-zinc-900/50 border border-zinc-800 rounded-xl backdrop-blur-sm overflow-hidden ${
          isCurrent ? 'border-[#dffe00]/30 shadow-[0_0_30px_rgba(223,254,0,0.1)] p-8' : 'p-6'
        }`}
      >
        {isCurrent && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dffe00] to-transparent"></div>
        )}

        <div className="flex items-start justify-between mb-6">
          <div className='w-full'>
            <div className="flex items-center justify-between mb-2">
              <h2 className={`font-bold text-white ${isCurrent ? 'text-3xl' : 'text-2xl'}`}>
                {name}
              </h2>
              <StatusBadge status={status} />
            </div>
            {isCurrent && (
              <p className="text-zinc-400 text-lg">
                The current active testnet for UOMI development and testing
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatCard
            icon={Users}
            label="Addresses"
            value={isLoading ? "..." : formatNumber(displayStats.addresses)}
          />
          <StatCard
            icon={Activity}
            label="Transactions"
            value={isLoading ? "..." : formatNumber(displayStats.transactions)}
          />
          <StatCard
            icon={Database}
            label="Blocks"
            value={isLoading ? "..." : formatNumber(displayStats.blocks)}
          />
        </div>

        <div className="flex gap-4">          
          {status !== 'deactivated' && explorerUrl && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-zinc-700 text-white hover:border-zinc-600"
              onClick={() => window.open(explorerUrl, '_blank')}
            >
              <Globe size={16} />
              Block Explorer
            </motion.button>
          )}

          {isCurrent && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-[#dffe00] text-black hover:bg-[#c8e500]"
              onClick={() => window.open('https://app.uomi.ai', '_blank')}
            >
              <Zap size={16} />
              Explore Network
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main component
const ChainPage = () => {
  const testnets = [
    // {
    //   name: 'UOMI Turing',
    //   status: 'current',
    //   explorerUrl: 'https://explorer.uomi.ai/',
    //   statsApiUrl: 'https://explorer-finney.uomi.ai/api/v2/stats',
    //   stats: {
    //     addresses: 45623,
    //     transactions: 1234567,
    //     blocks: 456789,
    //   },
    // },
    {
      name: 'UOMI Finney',
      status: 'current', // 'deprecated',
      explorerUrl: 'https://explorer-finney.uomi.ai/',
      statsApiUrl: 'https://explorer-finney.uomi.ai/api/v2/stats',
      stats: {
        addresses: 283600, // snapshot from explorer 02/09/25
        transactions: 10000000, // snapshot from explorer 02/09/25
        blocks: 6000000, // snapshot from explorer 02/09/25
      },
    },
    {
      name: 'UOMI Babbage',
      status: 'deactivated',
      explorerUrl: null,
      stats: {
        addresses: 1,
        transactions: 1,
        blocks: 1,
      },
    },
  ];

  const currentTestnet = testnets.find(t => t.status === 'current');
  const otherTestnets = testnets.filter(t => t.status !== 'current');

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        <Header />
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Current testnet */}
          {currentTestnet && (
            <TestnetCard testnet={currentTestnet} isCurrent={true} />
          )}
          
          {/* Other testnets */}
          {otherTestnets.map((testnet, index) => (
            <TestnetCard key={index} testnet={testnet} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-zinc-800/50 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#c8e500" }}
              whileTap={{ scale: 0.98 }}
              className="text-black rounded-lg px-6 py-3 inline-flex items-center space-x-2 font-medium hover:cursor-pointer"
              style={{
                backgroundColor: "#dffe00",
                boxShadow: "0 4px 10px -1px rgba(223, 254, 0, 0.2)",
              }}
              onClick={() => window.location.href = '/roadmap'}
            >
              <span>Discover the roadmap</span>
              <ArrowRight size={16} className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChainPage;