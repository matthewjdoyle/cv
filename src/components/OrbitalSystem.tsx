'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Planet from './Planet';
import DetailPanel from './DetailPanel';
import Satellite from './Satellite';
import { cvPlanets, starProfileData, type Planet as PlanetType } from '@/data';
import { getAnimationClass, getAnimationDuration, orbitalAnimations } from '@/data/animations/orbitalAnimations';

const centerStar = {
  name: 'Matthew Doyle\nPhD',
};

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  brightness: number;
}

const OrbitalSystem: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [backgroundStars, setBackgroundStars] = useState<Star[]>([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [responsiveRadii, setResponsiveRadii] = useState<Record<string, number>>({});
  
  const handleSectionClick = (sectionId: string) => {
    const newActiveSection = activeSection === sectionId ? null : sectionId;
    setActiveSection(newActiveSection);
  };

  const handleStarClick = () => {
    const newActiveSection = activeSection === 'profile' ? null : 'profile';
    setActiveSection(newActiveSection);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.planet-container') || target.closest('.star-center') || target.closest('.satellite-orbit')) {
      return;
    }
    
    setIsPanning(true);
    setPanStart({
      x: e.touches[0].clientX - offset.x,
      y: e.touches[0].clientY - offset.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPanning) return;
    
    e.preventDefault();
    setOffset({
      x: e.touches[0].clientX - panStart.x,
      y: e.touches[0].clientY - panStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  // Calculate responsive orbital radii based on window size
  const calculateResponsiveRadii = useCallback(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Base orbital radii from the original design
    const baseRadii = {
      achievements: 200,
      profile: 240,
      experience: 280,
      education: 360,
      projects: 440,
      skills: 520,
    };
    
    // Calculate the maximum radius that would fit in the viewport
    // Use the smaller dimension but be more aggressive - account for planet size and small margin
    const planetMaxSize = 65; // Largest planet size (skills planet)
    const margin = 5; // Small margin from screen edge
    const maxAllowableRadius = (Math.min(windowWidth, windowHeight) / 2) - planetMaxSize - margin;
    const maxBaseRadius = Math.max(...Object.values(baseRadii));
    
    // Define minimum orbital radius to keep planets away from the central star
    const starSize = 128; // Central star is 128px (w-32 h-32)
    const minOrbitRadius = starSize / 2 + 80; // Star radius + buffer space
    
    // Calculate scaling factor to ensure all planets fit, but allow scaling up too
    const scaleFactor = maxAllowableRadius / maxBaseRadius;
    
    // Apply scaling to all radii with both minimum and maximum constraints
    const newRadii: Record<string, number> = {};
    
    // First pass: calculate scaled radii and check if any hit the minimum
    const scaledRadii: Record<string, number> = {};
    let needsRedistribution = false;
    
    Object.entries(baseRadii).forEach(([planetId, baseRadius]) => {
      const scaledRadius = baseRadius * scaleFactor;
      scaledRadii[planetId] = scaledRadius;
      if (scaledRadius < minOrbitRadius) {
        needsRedistribution = true;
      }
    });
    
    if (needsRedistribution) {
      // If some planets would be too close to the star, redistribute all planets
      // to maintain proportional spacing while respecting minimum distance
      const sortedPlanets = Object.entries(baseRadii).sort(([,a], [,b]) => a - b);
      const availableSpace = maxAllowableRadius - minOrbitRadius;
      const totalPlanets = sortedPlanets.length;
      
      sortedPlanets.forEach(([planetId, baseRadius], index) => {
        // Distribute planets evenly in the available space, maintaining relative order
        const spacing = availableSpace / (totalPlanets - 1);
        newRadii[planetId] = minOrbitRadius + (spacing * index);
      });
    } else {
      // No redistribution needed, use scaled values
      Object.entries(scaledRadii).forEach(([planetId, scaledRadius]) => {
        newRadii[planetId] = scaledRadius;
      });
    }
    
    setResponsiveRadii(newRadii);
  }, []);

  useEffect(() => {
    setIsAnimationPaused(!!activeSection);
  }, [activeSection]);

  useEffect(() => {
    const generateStars = (): Star[] => {
      const stars: Star[] = [];
      for (let i = 0; i < 300; i++) {
        stars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          delay: Math.random() * 6,
          brightness: Math.random() * 0.8 + 0.2,
        });
      }
      return stars;
    };
    setBackgroundStars(generateStars());
    
    const updateScale = () => {
      if (window.innerWidth <= 480) {
        setScale(0.5);
      } else if (window.innerWidth <= 768) {
        setScale(0.7);
      } else {
        setScale(1);
      }
    };

    const handleResize = () => {
      updateScale();
      calculateResponsiveRadii();
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateResponsiveRadii]);

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Stars */}
      <div className="stars">
        {backgroundStars.map((star) => (
          <div
            key={star.id}
            className="star animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: star.brightness,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.brightness * 0.5})`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Orbital System Container */}
      <div className="orbit-container">
        <div 
          className="orbit-system"
          style={{
            transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: isPanning ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {/* Central Star */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
            onClick={handleStarClick}
            tabIndex={0}
            role="button"
            aria-label="Return to center view"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleStarClick();
              }
            }}
          >
            <div className="star-center w-32 h-32 animate-pulse-star cursor-pointer flex flex-col items-center justify-center text-center">
              <h1 className="font-bold text-lg leading-tight">
                Matthew Doyle
              </h1>
              <span className="font-medium text-sm mt-1 tracking-wide">
                PhD
              </span>
            </div>
          </div>

          {/* Orbiting Planets & Trails */}
          {cvPlanets.map((planet, index) => {
            const orbitAnimationClass = getAnimationClass(planet.id);
            const orbitAnimationDuration = getAnimationDuration(planet.id);
            const orbitAnimationDurationSeconds = parseFloat(orbitAnimationDuration);
            const totalPlanets = cvPlanets.length;
            const startOffsetFraction = index / totalPlanets;
            const animationDelaySeconds = -(orbitAnimationDurationSeconds * startOffsetFraction);
            const animationDelay = `${animationDelaySeconds}s`;
            
            const direction = orbitalAnimations[planet.id]?.direction || 'normal';
            
            // Use responsive radius if available, fallback to original
            const currentRadius = responsiveRadii[planet.id] || planet.orbitRadius;

            return (
              <div
                key={planet.id}
                className={`orbiting-section ${orbitAnimationClass}`}
                style={{
                  '--orbit-radius': `${currentRadius}px`,
                  animationDuration: orbitAnimationDuration,
                  animationDelay: animationDelay,
                  animationPlayState: isAnimationPaused ? 'paused' : 'running',
                } as React.CSSProperties}
              >
                <div
                  className={`planet-container ${direction === 'reverse' 
                      ? 'animate-counter-rotate-reverse' 
                      : 'animate-counter-rotate'
                  }`}
                  style={{
                    animationDuration: orbitAnimationDuration,
                    animationDelay: animationDelay,
                    animationPlayState: isAnimationPaused ? 'paused' : 'running',
                  } as React.CSSProperties}
                >
                  <Planet
                    section={planet}
                    isActive={activeSection === planet.id}
                    onClick={() => handleSectionClick(planet.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Panel for Active Section */}
      {activeSection && (
        <DetailPanel
          section={
            activeSection === 'profile'
              ? starProfileData
              : cvPlanets.find((s) => s.id === activeSection)!
          }
          onClose={() => {
            setActiveSection(null);
          }}
        />
      )}

      <Satellite />
    </div>
  );
};

export default OrbitalSystem; 