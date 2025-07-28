import { Planet } from '..';

export const experiencePlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'experience',
  title: 'Experience',
  icon: '',
  orbitRadius: 280,
  size: 60,
  content: [
    {
      position: 'Private Maths and Physics Tutor',
      company: 'Independent Contractor',
      period: 'Jan 2025 -- Now',
      location: 'Manchester, UK',
      responsibilities: [
        'Tutored UK and international students in Mathematics and Physics at various levels, for various curricula around the world, including GCSE, A-Level, SAT, IB, AP and more.',
        'Created and delivered bespoke lesson plans and learning materials to meet individual student needs.',
        'Collaborated with other tutors (Luminary Education) to provide comprehensive and high-quality services.',
        'Developed a website (React, Tailwind & TypeScript) to advertise my services, provide original learning resources and custom AI tools (via Gemini API) to assist with independent learning.',
      ],
    },
    {
      position: 'Expert AI Trainer',
      company: 'Independent Contractor',
      period: 'Jan 2025 -- Now',
      location: 'Manchester, UK',
      responsibilities: [
        'Trained AI models in the use of productivity software (G-Suite, Microsoft Office) by providing expert instruction and correction, with focus on MacOS-specific workflows and features.',
        'Created training datasets and evaluation rubrics to improve AI performance in complex physics, mathematics, programming, and critical reasoning tasks.',
        'Contributed to training of major language models including ChatGPT, Claude, and Gemini.',
      ],
    },
    {
      position: 'Graduate Teaching Assistant',
      company: 'University of Manchester',
      period: '2021 -- 2024',
      location: 'Manchester, UK',
      responsibilities: [
        'Delivered large-group tutorials in Foundations of Physics for 4 semesters',
        'Demonstrated in 2nd Year Physics Computing (Python, C++) Workshop classes for 2 semesters',
        'Lead demonstrator in 2nd Year Physics Laboratory for 3 semesters',
        'Supervised and assessed students\' experimental projects via interview and written reports',
        'GTA mentor role: provided training and support for new graduate teaching assistants',
      ],
    },
    {
      position: 'Visiting Researcher',
      company: 'Aalto University',
      period: '2023',
      location: 'Helsinki, Finland',
      responsibilities: [
        'Collaborated with researchers to perform quantum turbulence experiments using superfluid vortex probes.',
        'Performed statistical analysis of extensive existing datasets using MATLAB.',
        'Used these results to direct further experimental activity during the month-long visit.',
      ],
    },
    {
      position: 'Research Intern',
      company: 'University of Bristol',
      period: '2019',
      location: 'Bristol, UK',
      responsibilities: [
        '2-month summer internship writing FORTRAN code and documentation in the Theoretical Physics Group',
      ],
    },
  ],
  moons: 1,
}; 