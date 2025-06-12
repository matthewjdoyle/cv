'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Satellite: React.FC = () => {
  const router = useRouter();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const animationFrameId = useRef<number>();

  const handleClick = () => {
    router.push('/cv');
  };

  useEffect(() => {
    // Set initial position
    const screenMargin = 150;
    const initialX = window.innerWidth / 2 + (window.innerWidth / 2 - screenMargin);
    const initialY = window.innerHeight / 2;
    setPosition({ x: initialX, y: initialY });
    
    const updatePosition = () => {
      const time = Date.now() * 0.00004; // Control speed
      const orbitRadiusX = (window.innerWidth / 2) - screenMargin;
      const orbitRadiusY = (window.innerHeight / 2) - screenMargin;
      
      const x = window.innerWidth / 2 + Math.cos(time) * orbitRadiusX;
      const y = window.innerHeight / 2 + Math.sin(time) * orbitRadiusY;

      // Angle calculation for rotation to make it seem like it's orbiting the center
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
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      className="absolute z-40 cursor-pointer will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      role="button"
      tabIndex={0}
      aria-label="View Full CV"
    >
      <div className="relative flex flex-col items-center">
        <div style={{ transform: `rotate(${angle}deg)` }}>
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="20" height="20" rx="3" fill="#BCC3CF"/>
            <rect x="42" y="42" width="16" height="16" rx="2" fill="#E5E7EB"/>
            <path d="M50 30 C 40 32, 40 38, 50 40 C 60 38, 60 32, 50 30 Z" fill="#F3F4F6"/>
            <circle cx="50" cy="35" r="2" fill="#4B5563"/>
            <rect x="5" y="42.5" width="30" height="15" rx="2" fill="#4A90E2"/>
            <rect x="65" y="42.5" width="30" height="15" rx="2" fill="#4A90E2"/>
            <line x1="10" y1="45" x2="30" y2="45" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="10" y1="50" x2="30" y2="50" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="10" y1="55" x2="30" y2="55" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="70" y1="45" x2="90" y2="45" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="70" y1="50" x2="90" y2="50" stroke="#D1D5DB" strokeWidth="1"/>
            <line x1="70" y1="55" x2="90" y2="55" stroke="#D1D5DB" strokeWidth="1"/>
          </svg>
        </div>
        <div className="planet-label">
          Full CV
        </div>
      </div>
    </div>
  );
};

export default Satellite; 