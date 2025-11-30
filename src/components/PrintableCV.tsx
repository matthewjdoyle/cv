'use client';

import React from 'react';
import { starProfileData, cvPlanets } from '@/data';
import {
  Profile,
  Experience,
  Skills,
  Education,
  Project,
  Achievement,
} from '@/data/types';
import { getAssetPath } from '@/utils/basePath';

const PrintableCV: React.FC = () => {
  const profile = starProfileData.content as Profile;
  const experience = cvPlanets.find(p => p.id === 'experience')?.content as Experience[];
  const education = cvPlanets.find(p => p.id === 'education')?.content as Education[];
  const skills = cvPlanets.find(p => p.id === 'skills')?.content as Skills;
  const projects = cvPlanets.find(p => p.id === 'projects')?.content as Project[];
  const achievements = cvPlanets.find(p => p.id === 'achievements')?.content as Achievement[];

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-700 pb-1 mb-4" style={{ borderBottomWidth: '2px', borderBottomColor: '#7c3aed' }}>
      {children}
    </h2>
  );

  return (
    <div className="bg-white text-black font-sans p-8 max-w-4xl mx-auto printable-cv" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2" style={{ color: '#7c3aed' }}>
          {profile.name}
        </h1>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 text-sm text-gray-700">
          <span className="flex items-center">
            <img src={getAssetPath('/favicon.svg')} alt="Website" className="w-4 h-4 mr-1" />
            {profile.website}
          </span>
          <span className="flex items-center">
            <img src={getAssetPath('/email_icon.png')} alt="Email" className="w-4 h-4 mr-1" />
            {profile.email}
          </span>
          <span className="flex items-center">
            <img src={getAssetPath('/github_logo.png')} alt="GitHub" className="w-4 h-4 mr-1" />
            {profile.github}
          </span>
          <span className="flex items-center">
            <img src={getAssetPath('/linkedin_logo.png')} alt="LinkedIn" className="w-4 h-4 mr-1" />
            {profile.linkedin}
          </span>
          <span className="flex items-center">
            <img src={getAssetPath('/location_icon.png')} alt="Location" className="w-4 h-4 mr-1" />
            {profile.location}
          </span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <p className="text-sm leading-relaxed text-gray-800">
          {profile.summary}
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <SectionTitle>Education</SectionTitle>
        {education?.map((edu, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black">{edu.degree}</h3>
                <p className="text-sm text-gray-800">
                  {edu.institution}
                  {edu.specialization && `, ${edu.specialization}`}
                  {edu.grade && edu.grade !== edu.specialization && (
                    <span className="italic">, {edu.grade}</span>
                  )}
                </p>
              </div>
              <p className="text-sm text-gray-600 font-mono ml-4">{edu.period}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="mb-6">
        <SectionTitle>Experience</SectionTitle>
        {experience?.map((exp, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-bold text-black">{exp.position}, {exp.company}</h3>
              <div className="text-right">
                <p className="text-sm text-gray-700">{exp.location}</p>
                <p className="text-sm text-gray-600 font-mono">{exp.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-4">
              {exp.responsibilities.map((res, j) => (
                <li key={j} className="text-sm">{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Research Projects Section */}
      <section className="mb-6">
        <SectionTitle>Research Projects</SectionTitle>
        {projects?.filter(proj => 
          proj.name.includes('PhD Research') || 
          proj.name.includes('MSci Thesis') || 
          proj.name.includes('Marching Cubes')
        ).map((proj, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-bold text-black">{proj.name}</h3>
              <p className="text-sm text-gray-600 font-mono">{proj.status}</p>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-4">
              {proj.highlights.map((highlight, j) => (
                <li key={j} className="text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Other Projects Section */}
      <section className="mb-6">
        <SectionTitle>Other Projects</SectionTitle>
        {projects?.filter(proj => 
          proj.name.includes('Banner Generator') || 
          proj.name.includes('Conference Organisation')
        ).map((proj, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-bold text-black">{proj.name}</h3>
              <p className="text-sm text-gray-600 font-mono">{proj.status}</p>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 ml-4">
              {proj.highlights.map((highlight, j) => (
                <li key={j} className="text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Publications Section */}
      <section className="mb-6">
        <SectionTitle>Publications</SectionTitle>
        {achievements?.filter(ach => ach.doi || ach.value?.includes('Journal')).map((ach, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="flex items-start">
              <span className="text-sm text-gray-700 font-mono mr-4 min-w-[60px]">
                {ach.year}{i === 0 ? '*' : ''}
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-black mb-1">{ach.title}</p>
                <p className="text-sm text-gray-700 ml-4 mb-1">
                  {ach.description.split(', ').map((author, index) => {
                    const isBold = author.includes('M. J. Doyle') || author.includes('M. Doyle');
                    return (
                      <span key={index}>
                        {isBold ? <strong>{author}</strong> : author}
                        {index < ach.description.split(', ').length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>
                <div className="flex items-center ml-4">
                  <p className="text-sm text-gray-600 italic">{ach.value}</p>
                  {ach.doi && (
                    <span className="ml-2 text-sm text-purple-600">
                      DOI: {ach.doi}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Achievements Section */}
      <section className="mb-6">
        <SectionTitle>Achievements</SectionTitle>
        {achievements?.filter(ach => !ach.doi && !ach.value?.includes('Journal')).map((ach, i) => (
          <div key={i} className="mb-3 break-inside-avoid">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-sm font-bold text-black">{ach.title}</p>
                <p className="text-sm text-gray-700">{ach.description}</p>
                {ach.committee && <p className="text-sm text-gray-600 italic">{ach.committee}</p>}
              </div>
              <p className="text-sm text-gray-600 font-mono ml-4">{ach.year}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <SectionTitle>Technologies</SectionTitle>
        <div className="space-y-2">
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Simulation:</span>
            <span className="text-sm text-gray-700">FORTRAN, Python, C++, OpenFOAM, OpenMP, CUDA, MPI.</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Data Analysis:</span>
            <span className="text-sm text-gray-700">Python, matplotlib, seaborn, pandas, numpy, scipy, TensorFlow, OpenCV, ggplot, C++, ROOT, OriginLab.</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Data Structures:</span>
            <span className="text-sm text-gray-700">CSV, XML, JSON, YAML, SQL.</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Automation:</span>
            <span className="text-sm text-gray-700">Git, Linux, Bash & PowerShell scripts, Python, Selenium, LabVIEW.</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Web Development:</span>
            <span className="text-sm text-gray-700">HTML, CSS, JavaScript, React, Vue, Tailwind, TypeScript, MySQL.</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Other Software:</span>
            <span className="text-sm text-gray-700">GitHub, Teams, Slack, LaTeX, Notion, Powerpoint, Excel, G-Suite, Inkscape.</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 min-w-[140px]">Laboratory Equipment:</span>
            <span className="text-sm text-gray-700">Lasers, cryogenic apparatus, vacuum technology, intensified cameras, optical fibres.</span>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="mt-8 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-600 italic">
          * Paper has not yet been published
        </p>
      </footer>
    </div>
  );
};

export default PrintableCV; 