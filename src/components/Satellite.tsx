'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Satellite: React.FC = () => {
  const router = useRouter();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameId = useRef<number>();

  const handleClick = () => {
    router.push('/cv');
  };

  useEffect(() => {
    const screenMargin = 150;
    const initialX = window.innerWidth / 2 + (window.innerWidth / 2 - screenMargin);
    const initialY = window.innerHeight / 2;
    setPosition({ x: initialX, y: initialY });
    
    const updatePosition = () => {
      const time = Date.now() * 0.00004;
      const orbitRadiusX = (window.innerWidth / 2) - screenMargin;
      const orbitRadiusY = (window.innerHeight / 2) - screenMargin;
      
      const x = window.innerWidth / 2 + Math.cos(time) * orbitRadiusX;
      const y = window.innerHeight / 2 + Math.sin(time) * orbitRadiusY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newAngle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
      
      setAngle(newAngle);
      setPosition({ x, y });

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    animationFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="absolute z-40 cursor-pointer will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label="View Full CV"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative flex flex-col items-center group">
        {/* Glow effect behind satellite */}
        <div 
          className="absolute inset-0 rounded-full blur-xl transition-all duration-500"
          style={{
            background: isHovered 
              ? 'radial-gradient(circle, rgba(74, 144, 226, 0.5) 0%, rgba(74, 144, 226, 0.2) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(74, 144, 226, 0.3) 0%, rgba(74, 144, 226, 0.1) 40%, transparent 70%)',
            transform: 'scale(2.5)',
          }}
        />
        
        {/* Satellite SVG */}
        <div 
          className="relative animate-satellite-glow"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 120 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Definitions for gradients and filters */}
            <defs>
              {/* Solar panel gradient */}
              <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              
              {/* Solar panel highlight */}
              <linearGradient id="solarHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              
              {/* Body gradient */}
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              
              {/* Gold accent gradient */}
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              
              {/* Document gradient */}
              <linearGradient id="docGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Left Solar Panel */}
            <g className="animate-solar-panel-shimmer">
              {/* Panel frame */}
              <rect x="4" y="46" width="38" height="28" rx="2" fill="#1e293b" />
              {/* Panel cells */}
              <rect x="6" y="48" width="34" height="24" rx="1" fill="url(#solarGradient)" />
              {/* Panel grid lines */}
              <line x1="6" y1="54" x2="40" y2="54" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="6" y1="60" x2="40" y2="60" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="6" y1="66" x2="40" y2="66" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="14" y1="48" x2="14" y2="72" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="23" y1="48" x2="23" y2="72" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="32" y1="48" x2="32" y2="72" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              {/* Panel highlight */}
              <rect x="6" y="48" width="34" height="12" fill="url(#solarHighlight)" />
              {/* Connection arm */}
              <rect x="40" y="56" width="8" height="8" fill="#475569" />
              <rect x="42" y="57" width="4" height="6" fill="#64748b" />
            </g>
            
            {/* Right Solar Panel */}
            <g className="animate-solar-panel-shimmer" style={{ animationDelay: '0.5s' }}>
              {/* Panel frame */}
              <rect x="78" y="46" width="38" height="28" rx="2" fill="#1e293b" />
              {/* Panel cells */}
              <rect x="80" y="48" width="34" height="24" rx="1" fill="url(#solarGradient)" />
              {/* Panel grid lines */}
              <line x1="80" y1="54" x2="114" y2="54" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="80" y1="60" x2="114" y2="60" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="80" y1="66" x2="114" y2="66" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="88" y1="48" x2="88" y2="72" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="97" y1="48" x2="97" y2="72" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              <line x1="106" y1="48" x2="106" y2="72" stroke="#0f172a" strokeWidth="0.5" opacity="0.5" />
              {/* Panel highlight */}
              <rect x="80" y="48" width="34" height="12" fill="url(#solarHighlight)" />
              {/* Connection arm */}
              <rect x="72" y="56" width="8" height="8" fill="#475569" />
              <rect x="74" y="57" width="4" height="6" fill="#64748b" />
            </g>
            
            {/* Main Body */}
            <g>
              {/* Body shadow */}
              <rect x="49" y="41" width="22" height="38" rx="3" fill="#64748b" opacity="0.3" />
              {/* Main body */}
              <rect x="48" y="40" width="24" height="40" rx="4" fill="url(#bodyGradient)" />
              {/* Body accent lines */}
              <rect x="48" y="52" width="24" height="2" fill="#94a3b8" opacity="0.5" />
              <rect x="48" y="66" width="24" height="2" fill="#94a3b8" opacity="0.5" />
              
              {/* Document icon on body */}
              <rect x="52" y="55" width="16" height="20" rx="1" fill="url(#docGradient)" />
              <rect x="54" y="58" width="8" height="1.5" rx="0.5" fill="#3b82f6" />
              <rect x="54" y="61" width="10" height="1" rx="0.5" fill="#94a3b8" />
              <rect x="54" y="63.5" width="10" height="1" rx="0.5" fill="#94a3b8" />
              <rect x="54" y="66" width="6" height="1" rx="0.5" fill="#94a3b8" />
              <rect x="54" y="68.5" width="8" height="1" rx="0.5" fill="#94a3b8" />
              <rect x="54" y="71" width="10" height="1" rx="0.5" fill="#94a3b8" />
              
              {/* Gold accent band */}
              <rect x="48" y="44" width="24" height="4" rx="0" fill="url(#goldGradient)" />
            </g>
            
            {/* Antenna dish */}
            <g filter="url(#glow)">
              <ellipse cx="60" cy="32" rx="10" ry="4" fill="#e2e8f0" />
              <ellipse cx="60" cy="32" rx="7" ry="2.5" fill="#f1f5f9" />
              <rect x="58" y="32" width="4" height="8" fill="#94a3b8" />
              <circle cx="60" cy="30" r="2" fill="#fbbf24" />
            </g>
            
            {/* Status light */}
            <circle cx="60" cy="85" r="3" fill="#22c55e" filter="url(#glow)">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            
            {/* Small thrusters */}
            <rect x="50" y="80" width="4" height="6" rx="1" fill="#475569" />
            <rect x="66" y="80" width="4" height="6" rx="1" fill="#475569" />
          </svg>
        </div>
        
        {/* Label */}
        <div 
          className="mt-2 px-3 py-1.5 rounded-full text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300"
          style={{
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)'
              : 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            border: isHovered 
              ? '1px solid rgba(96, 165, 250, 0.5)'
              : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: isHovered 
              ? '0 4px 20px rgba(59, 130, 246, 0.4)'
              : '0 2px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Full CV
        </div>
        
        {/* Tooltip on hover */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs text-slate-300 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 whitespace-nowrap"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
          transition={{ duration: 0.2 }}
        >
          Click to view printable CV
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Satellite;
