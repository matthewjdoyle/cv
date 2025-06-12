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

const PrintableCV: React.FC = () => {
  const profile = starProfileData.content as Profile;
  const experience = cvPlanets.find(p => p.id === 'experience')?.content as Experience[];
  const education = cvPlanets.find(p => p.id === 'education')?.content as Education[];
  const skills = cvPlanets.find(p => p.id === 'skills')?.content as Skills;
  const projects = cvPlanets.find(p => p.id === 'projects')?.content as Project[];
  const achievements = cvPlanets.find(p => p.id === 'achievements')?.content as Achievement[];

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
      {children}
    </h2>
  );

  return (
    <div className="bg-white text-gray-800 font-sans p-6 max-w-4xl mx-auto printable-cv my-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{profile.name}</h1>
        <p className="text-lg text-gray-600 mt-1">{profile.title}</p>
        <div className="flex justify-center flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
          <span>{profile.location}</span>
          <span className="text-gray-300">&bull;</span>
          <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">{profile.email}</a>
        </div>
        <div className="flex justify-center flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
          <span className="text-gray-300">&bull;</span>
          <span className="flex items-center">
            💼
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200 no-print-link ml-1"
            >
              {profile.linkedin}
            </a>
          </span>
          <span className="text-gray-300">&bull;</span>
          <span className="flex items-center">
            🔗
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200 no-print-link ml-1"
            >
              {profile.github}
            </a>
          </span>
          <span className="text-gray-300">&bull;</span>
          <span className="flex items-center">
            🌐
            <a
              href={`https://${profile.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200 no-print-link ml-1"
            >
              {profile.website}
            </a>
          </span>
        </div>
      </header>

      <section className="mb-4">
        <SectionTitle>Professional Summary</SectionTitle>
        <p className="text-sm leading-relaxed text-gray-700">{profile.summary}</p>
      </section>

      <section className="mb-4">
        <SectionTitle>Professional Experience</SectionTitle>
        {experience?.map((exp, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
            <div className="flex justify-between items-baseline mb-0.5">
              <p className="font-medium text-gray-700 text-sm">{exp.company}, {exp.location}</p>
              <p className="text-xs text-gray-500 font-mono">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1 pl-2">
              {exp.responsibilities.map((res, j) => <li key={j}>{res}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <SectionTitle>Education</SectionTitle>
        {education?.map((edu, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
            <p className="font-medium text-gray-700 text-sm">{edu.institution}</p>
            <p className="text-xs text-gray-500 font-mono">{edu.period} | Grade: {edu.grade}</p>
            {edu.specialization && <p className="text-sm text-gray-600 mt-1">Specialization: {edu.specialization}</p>}
            {edu.thesis && <p className="text-sm text-gray-600 italic mt-1">Thesis: {edu.thesis}</p>}
          </div>
        ))}
      </section>

      <section className="mb-4">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 break-inside-avoid">
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-1">Technical Skills</h3>
            <div className="flex flex-wrap gap-1">
                {skills?.technical.map((skill, i) => <span key={i} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">{skill}</span>)}
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-1">Software & Tools</h3>
            <div className="flex flex-wrap gap-1">
                {skills?.software.map((skill, i) => <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">{skill}</span>)}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-md font-semibold text-gray-700 mb-1">Soft Skills</h3>
            <ul className="list-none space-y-1 text-sm">
              {skills?.soft.map((s, i) => (
                <li key={i}><strong className="font-medium">{s.title}:</strong> <span className="text-gray-600">{s.description}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <SectionTitle>Projects</SectionTitle>
        {projects?.map((proj, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <h3 className="text-lg font-semibold text-gray-800">{proj.name} - <span className="text-sm font-normal text-gray-600">{proj.status}</span></h3>
            <p className="text-xs text-gray-500 italic mb-1">{proj.technologies.join(' · ')}</p>
            <p className="text-sm text-gray-700 mb-1">{proj.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-2">
              {proj.highlights.map((h, j) => <li key={j}>{h}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <SectionTitle>Achievements & Awards</SectionTitle>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-2">
          {achievements?.map((ach, i) => (
            <li key={i}>
              <strong className="font-semibold">{ach.title}</strong> ({ach.year})
              {ach.prize && <span className="font-medium text-green-700 ml-2">[{ach.prize}]</span>}
              <p className="pl-4 text-gray-600 text-xs">{ach.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PrintableCV; 