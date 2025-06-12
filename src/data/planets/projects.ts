import { Planet } from '..';

export const projectsPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'projects',
  title: 'Projects',
  icon: '🛠️',
  orbitRadius: 440,
  size: 50,
  content: [
    {
      name: 'Numerical Simulation and Experimental Visualisation of Quantum Turbulence',
      status: 'PhD Thesis Project',
      description: 'A comprehensive project involving planning experiments, development of research skills working with cryogenic liquids, laser-induced fluorescence imaging techniques, large-scale rotating platforms, gas handling systems, building and expanding numerical simulations with code, data storage management, creation of data processing and analysis pipelines, signal processing techniques, calibration and software writing for custom sensor equipment, and animating physics simulations for visualisation.',
      technologies: [ 'Python', 'NumPy', 'SciPy', 'Matplotlib', 'OpenCV', 'MATLAB', 'Signal Processing', 'Custom Hardware Control' ],
      highlights: [
        'Developed novel laser-induced fluorescence imaging techniques for quantum turbulence visualization.',
        'Created robust data processing and analysis pipelines for large experimental datasets.',
        'Resulted in a first-author publication in a Spring-Nature Journal.',
        'Awarded Best Poster Award at Quantum Fluids and Solids Conference 2023.',
        'Involved technical writing, preparing research for journal articles, conference talks and posters.',
      ],
    },
    {
      name: 'Particle Track Reconstruction in a Proposed CERN Linear Collider',
      status: 'MSci Thesis Project',
      description: 'Evaluated efficiencies of track reconstruction algorithms for tracing particle motion immediately after high-energy electron-positron collisions within a simulated CERN detector geometry to inform on detector design.',
      technologies: ['C++', 'ROOT (CERN Framework)', 'Geant4', 'Data Analysis'],
      highlights: [
        'Informed the design of a proposed future linear collider detector.',
        'Work received a Final Year Project Commendation for its quality and impact.',
        'Analyzed high-energy particle collision data with advanced reconstruction algorithms.',
      ],
    },
    {
      name: '3D Fermi Surface Visualization',
      status: 'Research Internship Project',
      description: 'Summer internship in the theoretical physics group focused on enhancing the resolution of electronic structure calculations and producing visualizations of 3D Fermi-surfaces.',
      technologies: ['FORTRAN', 'Computational Physics', '3D Visualization', 'Electronic Structure Calculations'],
      highlights: [
        'Enhanced resolution of electronic structure calculations through optimized algorithms.',
        'Produced high-quality 3D visualizations of Fermi-surfaces for research publications.',
        'Developed expertise in computational condensed matter physics.',
      ],
    },
  ],
  hasRing: true,
  ringAngle: 15,
  ringSize: 150,
}; 