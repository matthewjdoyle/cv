'use client';

import React from 'react';
import { Planet as PlanetType } from '@/data';

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
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{section.content.name}</h1>
              <p className="text-md md:text-lg text-blue-300 mb-3">{section.content.title}</p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">{section.content.summary}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <h3 className="text-md font-semibold text-white mb-2">Contact Information</h3>
                <div className="space-y-1 text-gray-300 text-xs md:text-sm">
                  <p className="flex items-center"><span className="mr-2">📍</span> {section.content.location}</p>
                  <p className="flex items-center"><span className="mr-2">📧</span> {section.content.email}</p>
                  <p className="flex items-center">
                    <span className="mr-2">💼</span>
                    <a
                      href={`https://linkedin.com/in/${section.content.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200"
                      tabIndex={0}
                      aria-label="Visit LinkedIn profile"
                    >
                      {section.content.linkedin}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🔗</span>
                    <a
                      href={`https://github.com/${section.content.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200"
                      tabIndex={0}
                      aria-label="Visit GitHub profile"
                    >
                      {section.content.github}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🌐</span>
                    <a
                      href={`https://${section.content.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200"
                      tabIndex={0}
                      aria-label="Visit personal website"
                    >
                      {section.content.website}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <h3 className="text-md font-semibold text-white mb-2">Research Interests</h3>
                <ul className="text-gray-300 space-y-1 text-xs md:text-sm">
                  <li>• Machine Learning & Optimization</li>
                  <li>• Industrial IoT & Smart Manufacturing</li>
                  <li>• Predictive Analytics</li>
                  <li>• Computational Engineering</li>
                  <li>• Statistical Modeling</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-4">
            {section.content.map((exp: any, index: number) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                    <p className="text-md text-red-300">{exp.company}</p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                  <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs shrink-0 ml-2">{exp.period}</span>
                </div>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {exp.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-red-400">▸</span>
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
          <div className="space-y-4">
            {section.content.technical && (
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {section.content.technical.map((skill: string, index: number) => (
                    <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {section.content.software && (
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Software & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {section.content.software.map((skill: string, index: number) => (
                    <span key={index} className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {section.content.soft && (
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Soft Skills</h3>
                <div className="space-y-3">
                  {section.content.soft.map((skill: { title: string; description: string }, index: number) => (
                    <div key={index} className="bg-gray-900 bg-opacity-70 rounded-lg p-3">
                      <h4 className="text-md font-semibold text-green-300 mb-1">{skill.title}</h4>
                      <p className="text-gray-300 text-sm">{skill.description}</p>
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
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-md sm:text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-sm sm:text-md text-purple-300">{edu.institution}</p>
                    <p className="text-xs text-gray-400">{edu.specialization}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:text-right shrink-0 sm:ml-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">{edu.period}</span>
                    <p className="text-purple-300 text-xs mt-1">{edu.grade}</p>
                  </div>
                </div>
                
                {edu.thesis && (
                  <div className="mt-3 p-3 bg-gray-700 bg-opacity-50 rounded">
                    <h4 className="text-white font-semibold mb-1 text-sm">
                      {edu.degree.includes('PhD') ? 'Thesis' : edu.degree.includes('Master') ? 'Dissertation' : 'Final Project'}:
                    </h4>
                    <p className="text-gray-300 italic text-sm">"{edu.thesis}"</p>
                    {edu.supervisor && (
                      <p className="text-gray-400 text-xs mt-1">Supervisor: {edu.supervisor}</p>
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
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs shrink-0 ml-2">{project.status}</span>
                </div>
                
                <p className="text-gray-300 mb-3 leading-relaxed text-sm">{project.description}</p>
                
                <div className="mb-3">
                  <h4 className="text-white font-semibold mb-1 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Key Achievements:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    {project.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-green-400">✓</span>
                        <span>{highlight}</span>
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
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 md:p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                    <p className="text-yellow-300 text-xs">{achievement.year}</p>
                  </div>
                  <div className="shrink-0 ml-2 text-right">
                    {achievement.value && (
                      <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs block">
                        {achievement.value}
                      </span>
                    )}
                    {achievement.prize && (
                      <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs block mt-1">
                        {achievement.prize}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-2 text-sm">{achievement.description}</p>
                
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  {achievement.citation && (
                    <span>📊 {achievement.citation}</span>
                  )}
                  {achievement.committee && (
                    <span>👥 {achievement.committee}</span>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-70">
      <div className="detail-panel rounded-xl p-4 md:p-6 w-full max-w-5xl max-h-[95vh] md:max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl mr-2 md:mr-3">{section.icon}</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl transition-colors"
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