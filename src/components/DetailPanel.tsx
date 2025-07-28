'use client';

import React from 'react';
import { Planet as PlanetType } from '@/data';
import Image from 'next/image';

interface DetailPanelProps {
  section: PlanetType;
  onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ section, onClose }) => {
  const renderContent = () => {
    switch (section.id) {
      case 'profile':
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-1 leading-tight">
                {section.content.name}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-blue-300 mb-3 font-medium tracking-wide">
                {section.content.title}
              </p>
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light text-justify">
                {section.content.summary}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-3 flex items-center">
                  <span className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-2"></span>
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center group">
                    <div className="w-4 h-4 mr-2 flex-shrink-0">
                      <Image
                        src="/location_icon.png"
                        alt="Location"
                        width={16}
                        height={16}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                    <span className="text-xs sm:text-sm group-hover:text-white transition-colors duration-200">
                      {section.content.location}
                    </span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-4 h-4 mr-2 flex-shrink-0">
                      <Image
                        src="/email_icon.png"
                        alt="Email"
                        width={16}
                        height={16}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                    <span className="text-xs sm:text-sm group-hover:text-white transition-colors duration-200">
                      {section.content.email}
                    </span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-4 h-4 mr-2 flex-shrink-0">
                      <Image
                        src="/linkedin_logo.png"
                        alt="LinkedIn"
                        width={16}
                        height={16}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                    <a
                      href={`https://linkedin.com/in/${section.content.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      tabIndex={0}
                      aria-label="Visit LinkedIn profile"
                    >
                      {section.content.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-4 h-4 mr-2 flex-shrink-0">
                      <Image
                        src="/github_logo.png"
                        alt="GitHub"
                        width={16}
                        height={16}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                    <a
                      href={`https://github.com/${section.content.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      tabIndex={0}
                      aria-label="Visit GitHub profile"
                    >
                      {section.content.github}
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-4 h-4 mr-2 flex-shrink-0">
                      <Image
                        src="/favicon.svg"
                        alt="Website"
                        width={16}
                        height={16}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                    <a
                      href={`https://${section.content.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      tabIndex={0}
                      aria-label="Visit personal website"
                    >
                      {section.content.website}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-3 flex items-center">
                  <span className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mr-2"></span>
                  Research Interests
                </h3>
                <ul className="text-gray-300 space-y-1.5">
                  <li className="flex items-center text-xs sm:text-sm">
                    <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></span>
                    Quantum Turbulence
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <span className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></span>
                    High Performance Computing
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <span className="w-1 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-2"></span>
                    Fluid Dynamics
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <span className="w-1 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mr-2"></span>
                    Particle Physics
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <span className="w-1 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-2"></span>
                    Computational Physics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-4">
            {section.content.map((exp: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
                      {exp.position}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-red-300 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-400 font-light">
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0 lg:ml-3">
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 rounded-lg text-xs font-medium shadow-md">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="text-gray-300 space-y-1.5">
                  {exp.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex items-start group">
                      <span className="mr-2 text-red-400 text-xs mt-0.5 group-hover:text-red-300 transition-colors duration-200">▸</span>
                      <span className="text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-4">
            {section.content.technical && (
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mr-2"></span>
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {section.content.technical.map((skill: string, index: number) => (
                    <span key={index} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs px-2 py-1 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {section.content.software && (
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-4 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mr-2"></span>
                  Software & Tools
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {section.content.software.map((skill: string, index: number) => (
                    <span key={index} className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white text-xs px-2 py-1 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {section.content.soft && (
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-4 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mr-2"></span>
                  Soft Skills
                </h3>
                <div className="space-y-3">
                  {section.content.soft.map((skill: { title: string; description: string }, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-lg p-3 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300">
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-green-300 mb-1.5">
                        {skill.title}
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-4">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-purple-300 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-400 font-light">
                      {edu.specialization}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0 lg:ml-3 text-right">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-2 py-1 rounded-lg text-xs font-medium shadow-md block mb-1">
                      {edu.period}
                    </span>
                    <p className="text-purple-300 text-xs font-medium">
                      {edu.grade}
                    </p>
                  </div>
                </div>
                
                {edu.thesis && (
                  <div className="mt-3 p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30">
                    <h4 className="text-white font-bold mb-1.5 text-xs sm:text-sm">
                      {edu.degree.includes('PhD') ? 'Thesis' : edu.degree.includes('Master') ? 'Dissertation' : 'Final Project'}:
                    </h4>
                    <p className="text-gray-300 italic text-xs sm:text-sm leading-relaxed">
                      "{edu.thesis}"
                    </p>
                    {edu.supervisor && (
                      <p className="text-gray-400 text-xs mt-1.5 font-medium">
                        Supervisor: {edu.supervisor}
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
          <div className="space-y-4">
            {section.content.map((project: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
                    {project.name}
                  </h3>
                  <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-2 py-1 rounded-lg text-xs font-medium shadow-md lg:ml-3">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-3 leading-relaxed text-xs sm:text-sm">
                  {project.description}
                </p>
                
                <div className="mb-3">
                  <h4 className="text-white font-bold mb-1.5 text-xs sm:text-sm flex items-center">
                    <span className="w-3 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mr-1.5"></span>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white text-xs px-1.5 py-0.5 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-1.5 text-xs sm:text-sm flex items-center">
                    <span className="w-3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-1.5"></span>
                    Key Achievements:
                  </h4>
                  <ul className="text-gray-300 space-y-1.5">
                    {project.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start group">
                        <span className="mr-2 text-green-400 text-xs mt-0.5 group-hover:text-green-300 transition-colors duration-200">✓</span>
                        <span className="text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                          {highlight}
                        </span>
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
          <div className="space-y-4">
            {section.content.map((achievement: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-lg p-3 md:p-4 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-yellow-300 font-medium mb-1">
                      {achievement.year}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0 lg:ml-3 text-right">
                    {achievement.value && (
                      <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-2 py-1 rounded-lg text-xs font-medium shadow-md block mb-1">
                        {achievement.value}
                      </span>
                    )}
                    {achievement.prize && (
                      <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-2 py-1 rounded-lg text-xs font-medium shadow-md block">
                        {achievement.prize}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-2 leading-relaxed text-xs sm:text-sm">
                  {achievement.description}
                </p>
                
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                  {achievement.citation && (
                    <span className="flex items-center">
                      {achievement.citation}
                    </span>
                  )}
                  {achievement.committee && (
                    <span className="flex items-center">
                      {achievement.committee}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return <div className="text-white">Content not available</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl rounded-lg p-3 md:p-4 w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto border border-gray-700/50 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-lg sm:text-xl md:text-2xl mr-2 md:mr-3">{section.icon}</span>
            <h2 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              {section.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-110 p-1 rounded-md hover:bg-gray-800/50"
            aria-label="Close details panel"
          >
            ×
          </button>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailPanel; 