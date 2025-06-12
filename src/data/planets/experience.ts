import { Planet } from '..';

export const experiencePlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'experience',
  title: 'Experience',
  icon: '💼',
  orbitRadius: 280,
  size: 60,
  content: [
    {
      position: 'Expert AI Trainer',
      company: 'Pareto AI (Independent Contractor)',
      period: '2025 – Now',
      location: 'Remote',
      responsibilities: [
        'Prompting LLMs to complete spreadsheet and general computing tasks within a MacOS environment.',
        'Correcting and providing detailed feedback for the model when it attempts incorrect actions to improve performance.',
      ],
    },
    {
      position: 'Private Maths, Physics, and Coding Tutor',
      company: 'Luminary (Independent Contractor)',
      period: '2024 – Now',
      location: 'Remote',
      responsibilities: [
        'Designs personalised lesson plans tailored to each student\'s strengths and weaknesses.',
        'Ensuring targeted support in challenging areas with a strong focus on exam technique and problem-solving strategies.',
        'Use of educational software such as Google Classroom and Kami to enhance learning.',
      ],
    },
    {
      position: 'Graduate Teaching Assistant',
      company: 'The University of Manchester',
      period: '2021 – 2024',
      location: 'Manchester, UK',
      responsibilities: [
        'Foundations of Physics: Delivered tutorials to foundation level physics students in class-sizes of around 20.',
        'Foundations of ICT: Assessment of student EXCEL assignments.',
        'Programming in Python: Demonstrated Python workshops to assist 2nd year students in learning to code and develop their projects. Assessment and feedback on coding assignments.',
        'Laboratory Physics: Demonstrated physics experiments to 2nd year students and assisted them with their own experiments. Assessment of students via interview and observation with detailed feedback.',
        'Graduate Teaching Assistant Mentor for the Physics Labs: assisted in organisation, training and development of colleagues.',
      ],
    },
    {
      position: 'Visiting Researcher',
      company: 'Aalto University',
      period: '2023',
      location: 'Helsinki, Finland',
      responsibilities: [
        'Performed statistical analysis of extensive prior data sets, using MATLAB, to gain insights for guiding experimental activity over a month-long visiting researcher placement.',
        'This work was funded by the European MicroKelvin Platform and should result in several future publications.',
      ],
    },
    {
      position: 'Research Intern',
      company: 'University of Bristol',
      period: '2019',
      location: 'Bristol, UK',
      responsibilities: [
        'Summer internship in the theoretical physics group.',
        'FORTRAN-based programming project which enhanced the resolution of electronic structure calculations and produced visualisations of 3D Fermi-surfaces.',
      ],
    },
  ],
  moons: 1,
}; 