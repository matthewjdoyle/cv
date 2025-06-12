import { Planet } from '..';

export const educationPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'education',
  title: 'Education',
  icon: '🎓',
  orbitRadius: 360,
  size: 55,
  content: [
    {
      degree: 'PhD, Physics',
      institution: 'The University of Manchester',
      period: '2020 – Present',
      grade: 'First Author Publication in Spring-Nature Journal, Quantum Fluids and Solids Conference 2023 Best Poster Award',
      specialization: 'Quantum Fluids Group',
      thesis: 'Numerical Simulation and Experimental Visualisation of Quantum Turbulence in the Zero-Temperature Limit',
      details: 'Planning experiments, development of research skills working with cryogenic liquids, laser-induced fluorescence imaging techniques, large-scale rotating platforms, gas handling systems, building and expanding numerical simulations with code, data storage management, creation of data processing and analysis pipelines, signal processing techniques, calibration and software writing for custom sensor equipment, animating physics simulations for visualisation, technical writing, preparing research for journal articles, conference talks and posters, and collaboration within the group and externally.',
    },
    {
      degree: 'MSci, Physics',
      institution: 'The University of Bristol',
      period: '2016 – 2020',
      grade: 'First-class honours, Final Year Project Commendation',
      specialization: 'Outstanding transcript grades: Cosmology (93/100), Particle Physics (95/100), The Physics of Phase Transitions (94/100)',
      thesis: 'Particle Track Reconstruction in a Proposed CERN Linear Collider',
      details: 'Evaluated efficiencies of track reconstruction algorithms for tracing particle motion immediately after high-energy electron-positron collisions within a simulated CERN detector geometry to inform on detector design.',
    },
    {
      degree: 'A-Levels & GCSEs',
      institution: 'South Nottinghamshire Academy Sixth Form',
      period: '2009 – 2016',
      grade: 'A-Levels: Maths (A*), Further Maths (A), Physics (A). GCSEs: 2 A*, 8 A',
    },
  ],
  hasRing: true,
  ringAngle: -25,
  ringSize: 140,
  moons: 2,
  moonColors: ['#660099', '#D82C2C'],
}; 