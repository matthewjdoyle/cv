'use client';

import React from 'react';
import { Planet as CVSection } from '@/data';

interface SectionCardProps {
  section: CVSection;
  isActive: boolean;
  onClick: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, isActive, onClick }) => {
  const renderContent = () => {
    switch (section.id) {
      case 'profile':
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">{section.content.name}</h3>
            <p className="text-sm text-gray-300">{section.content.title}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{section.content.summary}</p>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📍 {section.content.location}</p>
              <p>📧 {section.content.email}</p>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-4">
            {section.content.slice(0, 2).map((exp: any, index: number) => (
              <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
                <h4 className="text-sm font-semibold text-white">{exp.position}</h4>
                <p className="text-xs text-gray-300">{exp.company}</p>
                <p className="text-xs text-gray-400">{exp.period}</p>
                <ul className="text-xs text-gray-400 mt-2 space-y-1">
                  {exp.responsibilities.slice(0, 2).map((resp: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-1">
                {section.content.technical.slice(0, 8).map((skill: string, index: number) => (
                  <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-1">
                {section.content.soft.slice(0, 6).map((skill: string, index: number) => (
                  <span key={index} className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-3">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
                <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                <p className="text-xs text-gray-300">{edu.institution}</p>
                <p className="text-xs text-gray-400">{edu.period} • {edu.grade}</p>
                <p className="text-xs text-gray-400 mt-1">{edu.specialization}</p>
              </div>
            ))}
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-3">
            {section.content.slice(0, 2).map((project: any, index: number) => (
              <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
                <h4 className="text-sm font-semibold text-white">{project.name}</h4>
                <p className="text-xs text-gray-400 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
                    <span key={idx} className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-xs text-gray-400 space-y-1">
                  {project.highlights.slice(0, 2).map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'achievements':
        return (
          <div className="space-y-3">
            {section.content.slice(0, 3).map((achievement: any, index: number) => (
              <div key={index} className="border-b border-gray-600 pb-2 last:border-b-0">
                <h4 className="text-sm font-semibold text-white">{achievement.title}</h4>
                <p className="text-xs text-gray-300">{achievement.year}</p>
                <p className="text-xs text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return <div className="text-white">Content not available</div>;
    }
  };

  return (
    <div
      className={`section-card rounded-lg p-4 cursor-pointer transition-all duration-300 w-80 ${
        isActive ? 'ring-2 ring-star-gold shadow-lg' : ''
      }`}
      style={{ borderColor: section.color }}
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
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-3">{section.icon}</span>
        <h2 className="text-lg font-bold text-white">{section.title}</h2>
      </div>
      
      <div className="max-h-64 overflow-y-auto">
        {renderContent()}
      </div>
      
      {!isActive && (
        <div className="mt-3 text-xs text-gray-500 text-center">
          Click to expand
        </div>
      )}
    </div>
  );
};

export default SectionCard; 