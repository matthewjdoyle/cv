'use client';

import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Planet as PlanetType } from '@/data';
import { planetStyles } from '@/data/planetStyles';
import { getAssetPath } from '@/utils/basePath';

interface DetailPanelProps {
  section: PlanetType;
  onClose: () => void;
}

// Single smooth animation - no staggering, no flashing
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
  }
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.35, 
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.97,
    transition: { 
      duration: 0.2, 
      ease: [0.4, 0, 1, 1]
    }
  }
};

// Get accent colors based on section
const getAccentColors = (sectionId: string) => {
  const style = planetStyles[sectionId];
  if (!style) {
    return {
      primary: '#4895EF',
      secondary: '#4361EE',
      glow: 'rgba(72, 149, 239, 0.25)',
      gradient: 'from-blue-500 to-blue-600',
      border: 'border-blue-500/30',
      text: 'text-blue-300',
      badge: 'from-blue-600 to-blue-700',
      badgeHover: 'hover:from-blue-500 hover:to-blue-600',
      shadow: 'shadow-blue-500/20',
    };
  }
  
  // Map planet colors to Tailwind-compatible styles
  const colorMaps: Record<string, {
    primary: string;
    secondary: string;
    glow: string;
    gradient: string;
    border: string;
    text: string;
    badge: string;
    badgeHover: string;
    shadow: string;
  }> = {
    profile: {
      primary: '#9B5DE5',
      secondary: '#4B0082',
      glow: 'rgba(155, 93, 229, 0.25)',
      gradient: 'from-purple-500 to-indigo-600',
      border: 'border-purple-500/40',
      text: 'text-purple-300',
      badge: 'from-purple-600 to-indigo-700',
      badgeHover: 'hover:from-purple-500 hover:to-indigo-600',
      shadow: 'shadow-purple-500/25',
    },
    experience: {
      primary: '#4361EE',
      secondary: '#3A0CA3',
      glow: 'rgba(67, 97, 238, 0.25)',
      gradient: 'from-indigo-500 to-violet-600',
      border: 'border-indigo-500/40',
      text: 'text-indigo-300',
      badge: 'from-indigo-600 to-violet-700',
      badgeHover: 'hover:from-indigo-500 hover:to-violet-600',
      shadow: 'shadow-indigo-500/25',
    },
    skills: {
      primary: '#4895EF',
      secondary: '#4361EE',
      glow: 'rgba(72, 149, 239, 0.25)',
      gradient: 'from-blue-500 to-indigo-600',
      border: 'border-blue-500/40',
      text: 'text-blue-300',
      badge: 'from-blue-600 to-indigo-700',
      badgeHover: 'hover:from-blue-500 hover:to-indigo-600',
      shadow: 'shadow-blue-500/25',
    },
    education: {
      primary: '#56CFE1',
      secondary: '#4895EF',
      glow: 'rgba(86, 207, 225, 0.25)',
      gradient: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/40',
      text: 'text-cyan-300',
      badge: 'from-cyan-600 to-blue-700',
      badgeHover: 'hover:from-cyan-500 hover:to-blue-600',
      shadow: 'shadow-cyan-500/25',
    },
    projects: {
      primary: '#72EFDD',
      secondary: '#56CFE1',
      glow: 'rgba(114, 239, 221, 0.25)',
      gradient: 'from-teal-400 to-cyan-600',
      border: 'border-teal-500/40',
      text: 'text-teal-300',
      badge: 'from-teal-500 to-cyan-600',
      badgeHover: 'hover:from-teal-400 hover:to-cyan-500',
      shadow: 'shadow-teal-500/25',
    },
    achievements: {
      primary: '#F9C74F',
      secondary: '#F8961E',
      glow: 'rgba(249, 199, 79, 0.25)',
      gradient: 'from-amber-400 to-orange-500',
      border: 'border-amber-500/40',
      text: 'text-amber-300',
      badge: 'from-amber-500 to-orange-600',
      badgeHover: 'hover:from-amber-400 hover:to-orange-500',
      shadow: 'shadow-amber-500/25',
    },
  };
  
  return colorMaps[sectionId] || colorMaps.skills;
};

const DetailPanel: React.FC<DetailPanelProps> = ({ section, onClose }) => {
  const colors = useMemo(() => getAccentColors(section.id), [section.id]);
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const renderContent = () => {
    switch (section.id) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-2 leading-tight tracking-tight">
                {section.content.name}
              </h1>
              <p className={`text-sm sm:text-base md:text-lg ${colors.text} mb-4 font-medium tracking-wide`}>
                {section.content.title}
              </p>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light text-justify">
                {section.content.summary}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl`}>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-4 flex items-center">
                  <span 
                    className={`w-6 h-1 bg-gradient-to-r ${colors.gradient} mr-3 rounded-full`}
                  ></span>
                  Contact Information
                </h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-5 h-5 mr-3 flex-shrink-0">
                      <img src={getAssetPath('/location_icon.png')} alt="Location" width={20} height={20} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <span className="text-sm sm:text-base group-hover:text-white transition-colors duration-200">{section.content.location}</span>
                  </div>
                  <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-5 h-5 mr-3 flex-shrink-0">
                      <img src={getAssetPath('/email_icon.png')} alt="Email" width={20} height={20} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <span className="text-sm sm:text-base group-hover:text-white transition-colors duration-200">{section.content.email}</span>
                  </div>
                  <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-5 h-5 mr-3 flex-shrink-0">
                      <img src={getAssetPath('/linkedin_logo.png')} alt="LinkedIn" width={20} height={20} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <a
                      href={`https://linkedin.com/in/${section.content.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center bg-gradient-to-r ${colors.badge} ${colors.badgeHover} text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${colors.shadow}`}
                      tabIndex={0}
                      aria-label="Visit LinkedIn profile"
                    >
                      {section.content.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-5 h-5 mr-3 flex-shrink-0">
                      <img src={getAssetPath('/github_logo.png')} alt="GitHub" width={20} height={20} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <a
                      href={`https://github.com/${section.content.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-500/25"
                      tabIndex={0}
                      aria-label="Visit GitHub profile"
                    >
                      {section.content.github}
                    </a>
                  </div>
                  <div className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-5 h-5 mr-3 flex-shrink-0">
                      <img src={getAssetPath('/favicon.svg')} alt="Website" width={20} height={20} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <a
                      href={`https://${section.content.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                      tabIndex={0}
                      aria-label="Visit personal website"
                    >
                      {section.content.website}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl`}>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-4 flex items-center">
                  <span className={`w-6 h-1 bg-gradient-to-r ${colors.gradient} mr-3 rounded-full`}></span>
                  Research Interests
                </h3>
                <ul className="text-gray-200 space-y-2.5">
                  {['Quantum Turbulence', 'High Performance Computing', 'Fluid Dynamics', 'Particle Physics', 'Computational Physics'].map((interest, i) => (
                    <li key={i} className="flex items-center text-sm sm:text-base hover:bg-white/5 p-2 rounded-lg transition-colors duration-200">
                      <span 
                        className="w-2 h-2 rounded-full mr-3" 
                        style={{ backgroundColor: colors.primary }}
                      ></span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-5">
            {section.content.map((exp: any, index: number) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                      {exp.position}
                    </h3>
                    <p className={`text-sm sm:text-base md:text-lg ${colors.text} font-semibold mb-1`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400 font-light">{exp.location}</p>
                  </div>
                  <div className="mt-3 lg:mt-0 lg:ml-4">
                    <span className={`bg-gradient-to-r ${colors.badge} text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg ${colors.shadow}`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="text-gray-200 space-y-2.5">
                  {exp.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex items-start group">
                      <span className={`mr-3 ${colors.text} text-sm mt-1 group-hover:opacity-80 transition-opacity duration-200`}>▸</span>
                      <span className="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-200">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-5">
            {section.content.technical && (
              <div className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl`}>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <span className={`w-6 h-1 bg-gradient-to-r ${colors.gradient} mr-3 rounded-full`}></span>
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.content.technical.map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className={`bg-gradient-to-r ${colors.badge} ${colors.badgeHover} text-white text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${colors.shadow}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {section.content.software && (
              <div className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl`}>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <span className={`w-6 h-1 bg-gradient-to-r ${colors.gradient} mr-3 rounded-full`}></span>
                  Software & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.content.software.map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-500/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {section.content.soft && (
              <div className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl`}>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <span className={`w-6 h-1 bg-gradient-to-r ${colors.gradient} mr-3 rounded-full`}></span>
                  Soft Skills
                </h3>
                <div className="space-y-4">
                  {section.content.soft.map((skill: { title: string; description: string }, index: number) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl p-4 border border-slate-600/30 hover:${colors.border} transition-all duration-300`}
                    >
                      <h4 className={`text-sm sm:text-base md:text-lg font-bold ${colors.text} mb-2`}>{skill.title}</h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-5">
            {section.content.map((edu: any, index: number) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                    <p className={`text-sm sm:text-base md:text-lg ${colors.text} font-semibold mb-1`}>{edu.institution}</p>
                    <p className="text-sm text-gray-400 font-light">{edu.specialization}</p>
                  </div>
                  <div className="mt-3 lg:mt-0 lg:ml-4 text-right">
                    <span className={`bg-gradient-to-r ${colors.badge} text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg ${colors.shadow} block mb-2`}>
                      {edu.period}
                    </span>
                    <p className={`${colors.text} text-sm font-semibold`}>{edu.grade}</p>
                  </div>
                </div>
                
                {edu.thesis && (
                  <div 
                    className="mt-4 p-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl border"
                    style={{ borderColor: `${colors.primary}33` }}
                  >
                    <h4 className="text-white font-bold mb-2 text-sm sm:text-base flex items-center">
                      <span className={`w-4 h-0.5 bg-gradient-to-r ${colors.gradient} mr-2 rounded-full`}></span>
                      {edu.degree.includes('PhD') ? 'Thesis' : edu.degree.includes('Master') ? 'Dissertation' : 'Final Project'}:
                    </h4>
                    <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">"{edu.thesis}"</p>
                    {edu.supervisor && (
                      <p className="text-gray-400 text-sm mt-2 font-medium">
                        Supervisor: <span className={colors.text}>{edu.supervisor}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-5">
            {section.content.map((project: any, index: number) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight">{project.name}</h3>
                  <span className={`bg-gradient-to-r ${colors.badge} text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg ${colors.shadow} lg:ml-4`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-bold mb-3 text-sm sm:text-base flex items-center">
                    <span className={`w-4 h-0.5 bg-gradient-to-r ${colors.gradient} mr-2 rounded-full`}></span>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white text-sm px-2.5 py-1 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-3 text-sm sm:text-base flex items-center">
                    <span className={`w-4 h-0.5 bg-gradient-to-r ${colors.gradient} mr-2 rounded-full`}></span>
                    Key Achievements:
                  </h4>
                  <ul className="text-gray-200 space-y-2">
                    {project.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start group">
                        <span className={`mr-3 ${colors.text} text-sm mt-1 group-hover:opacity-80 transition-opacity duration-200`}>✓</span>
                        <span className="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-200">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'achievements':
        return (
          <div className="space-y-5">
            {section.content.map((achievement: any, index: number) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl p-5 md:p-6 border ${colors.border} shadow-2xl hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight">{achievement.title}</h3>
                    <p className={`text-sm sm:text-base md:text-lg ${colors.text} font-semibold mb-1`}>{achievement.year}</p>
                  </div>
                  <div className="mt-3 lg:mt-0 lg:ml-4 text-right space-y-2">
                    {achievement.value && (
                      <span className={`bg-gradient-to-r ${colors.badge} text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg ${colors.shadow} block`}>
                        {achievement.value}
                      </span>
                    )}
                    {achievement.prize && (
                      <span className={`bg-gradient-to-r ${colors.badge} text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg ${colors.shadow} block`}>
                        {achievement.prize}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-200 mb-3 leading-relaxed text-sm sm:text-base">{achievement.description}</p>
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  {achievement.citation && (
                    <span className="flex items-center bg-slate-800/50 px-3 py-1.5 rounded-lg">{achievement.citation}</span>
                  )}
                  {achievement.committee && (
                    <span className="flex items-center bg-slate-800/50 px-3 py-1.5 rounded-lg">{achievement.committee}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return <div className="text-white text-lg">Content not available</div>;
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <motion.div 
        className="modal-content relative bg-gradient-to-br from-slate-900/98 to-black/98 backdrop-blur-2xl rounded-2xl p-5 md:p-6 lg:p-8 w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-2xl"
        style={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: `${colors.primary}40`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${colors.glow}`
        }}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div 
          className="flex justify-between items-center mb-6 pb-4"
          style={{ borderBottom: `1px solid ${colors.primary}30` }}
        >
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl mr-3 md:mr-4">{section.icon}</span>
            <h2 
              id="modal-title"
              className="text-lg sm:text-xl md:text-2xl font-bold"
              style={{
                background: `linear-gradient(to right, white, ${colors.primary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {section.title}
            </h2>
          </div>
          <motion.button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl sm:text-3xl transition-all duration-300 p-2 rounded-xl hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-slate-500"
            aria-label="Close details panel"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ×
          </motion.button>
        </div>
        
        {/* Content - renders immediately, no additional animations */}
        {renderContent()}
        
        {/* Footer hint */}
        <div 
          className="mt-6 pt-4 text-center"
          style={{ borderTop: `1px solid ${colors.primary}20` }}
        >
          <p className="text-slate-500 text-xs sm:text-sm">
            Press <kbd className="px-2 py-0.5 bg-slate-800 rounded text-slate-400 font-mono text-xs">Esc</kbd> or click outside to close
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailPanel;
