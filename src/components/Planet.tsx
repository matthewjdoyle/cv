'use client';

import React from 'react';
import { Planet as PlanetType } from '@/data';

interface PlanetProps {
  section: PlanetType;
  isActive: boolean;
  onClick: () => void;
}

const Planet: React.FC<PlanetProps> = ({ section, isActive, onClick }) => {
  return (
    <div
      className={`planet ${isActive ? 'animate-glow-pulse' : ''} ${
        section.hasRing ? 'has-ring' : ''
      }`}
      style={{
        '--planet-light': section.planetColors.light,
        '--planet-mid': section.planetColors.mid,
        '--planet-dark': section.planetColors.dark,
        '--planet-glow': section.planetColors.glow,
        '--planet-glow-rgb': section.planetColors.glowRgb,
        '--planet-atmosphere': section.planetColors.atmosphere,
        '--ring-angle': `${section.ringAngle || 0}deg`,
        '--ring-size': `${section.ringSize || 0}%`,
        width: `${section.size}px`,
        height: `${section.size}px`,
      } as React.CSSProperties}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View ${section.title} section`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {section.moons &&
        Array.from({ length: section.moons }, (_, i) => (
          <div key={i} className={`moon-orbit ${i > 0 ? `moon-${i + 1}` : ''}`}>
            <div 
              className="moon" 
              style={{
                backgroundColor: section.moonColors?.[i] || '#b0b0b0'
              } as React.CSSProperties}
            />
          </div>
        ))}

      {/* Planet Label */}
      <div className="planet-label">
        {section.title}
      </div>
    </div>
  );
};

export default Planet; 