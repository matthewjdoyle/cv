import { Planet } from '..';

export const educationPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'education',
  title: 'Education',
  icon: '',
  orbitRadius: 360,
  size: 55,
  content: [
    {
      degree: 'PhD',
      institution: 'University of Manchester',
      period: '2020 -- 2024',
      grade: 'Quantum Fluid Physics',
      specialization: 'Quantum Fluid Physics',
      thesis: 'Numerical Simulation and Experimental Visualisation of Quantum Turbulence in the Zero-Temperature Limit',
      details: 'Research focused on quantum turbulence in superfluid helium, including numerical simulations, experimental design, and data analysis.',
    },
    {
      degree: 'MSci',
      institution: 'University of Bristol',
      period: '2016 -- 2020',
      grade: 'First-class honours',
      specialization: 'Physics',
      thesis: 'Particle Track Reconstruction in a Proposed CERN Linear Collider',
      details: 'First-class honours degree in Physics with focus on particle physics and detector design.',
    },
    {
      degree: 'A-Level',
      institution: 'South Nottinghamshire Academy Sixth Form',
      period: '2014 -- 2016',
      grade: 'A*AA in Maths, Further Maths, and Physics',
    },
  ],
  hasRing: true,
  ringAngle: -25,
  ringSize: 140,
  moons: 2,
  moonColors: ['#660099', '#D82C2C'],
}; 