import { Planet } from '..';

export const projectsPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'projects',
  title: 'Projects',
  icon: '',
  orbitRadius: 440,
  size: 50,
  content: [
    {
      name: 'PhD Research: Simulating Quantum Turbulence',
      status: '2020 -- 2024',
      description: 'Developed and analysed novel simulations (FORTRAN, Python) of quantum vortex dynamics. Optimised solver algorithms, reducing simulation runtime from months to days for large mesh sizes. Presented research as award winning posters at numerous UK and international conferences. Utilised HPC clusters and remote connection to several unused laboratory computers (revived with Linux), connected to a single data storage system.',
      technologies: ['FORTRAN', 'Python', 'HPC Clusters', 'Linux', 'Data Storage Management'],
      highlights: [
        'Developed novel simulations of quantum vortex dynamics',
        'Optimised solver algorithms, reducing simulation runtime from months to days',
        'Presented award-winning research at UK and international conferences',
        'Utilised HPC clusters and remote laboratory computer connections',
      ],
    },
    {
      name: 'PhD Research: Visualising Quantum Turbulence',
      status: '2022 -- 2024',
      description: 'Conducted risk assessments, operated rotating cryostat (< 1 K) and collected data from experiments. Developed video processing pipelines (Python, OpenCV) to detect and track tracer particles. Performed batch data analysis (Python, pandas) to extract vortex dynamics from observed particle motions. Collaborated in creation of a machine learning-based (TensorFlow) particle tracking system.',
      technologies: ['Python', 'OpenCV', 'pandas', 'TensorFlow', 'Cryogenic Apparatus', 'Video Processing'],
      highlights: [
        'Operated rotating cryostat at temperatures below 1K',
        'Developed video processing pipelines for particle tracking',
        'Performed batch data analysis to extract vortex dynamics',
        'Collaborated on machine learning-based particle tracking system',
      ],
    },
    {
      name: 'PhD Research: Designing Superfluid 4He Flow Experiments',
      status: '2020 -- 2022',
      description: 'Designed (CAD) and collaborated with technicians to construct a novel experimental apparatus. Built real-time data visualisation and remote experimental control software (Python, LabVIEW). Performed calibration measurements using classical (normal) fluids.',
      technologies: ['CAD', 'Python', 'LabVIEW', 'Real-time Data Visualisation', 'Experimental Control'],
      highlights: [
        'Designed and constructed novel experimental apparatus',
        'Built real-time data visualisation and remote control software',
        'Performed calibration measurements with classical fluids',
      ],
    },
    {
      name: 'MSci Thesis: Particle Tracking in a Compact Linear Lepton Collider',
      status: '2019 -- 2020',
      description: 'Evaluated track reconstruction algorithm efficiencies for CERN detector geometry. Simulated particle collisions using Geant4 on HPC clusters and generated analytics in Python. Thesis awarded commendation for outstanding research quality.',
      technologies: ['C++', 'Geant4', 'HPC Clusters', 'Python', 'Particle Physics', 'CERN'],
      highlights: [
        'Evaluated track reconstruction algorithms for CERN detector geometry',
        'Simulated particle collisions using Geant4 on HPC clusters',
        'Thesis awarded commendation for outstanding research quality',
      ],
    },
    {
      name: 'Marching Cubes for Fermi-Surface Calculations',
      status: '2019',
      description: 'Implemented a marching cubes algorithm to improve precision for electronic structure calculations by 1,000. Developed for a FORTRAN codebase, optimised using an OpenMP parallel computing approach. Visualised the Fermi surfaces of various materials using ggplot and matplotlib scripts.',
      technologies: ['FORTRAN', 'OpenMP', 'ggplot', 'matplotlib', 'Electronic Structure Calculations'],
      highlights: [
        'Implemented marching cubes algorithm improving precision by 1,000x',
        'Optimised using OpenMP parallel computing approach',
        'Visualised Fermi surfaces of various materials',
      ],
    },
    {
      name: 'Banner Generator Web App',
      status: '2025',
      description: 'Developed an image editing app (Vue, Tailwind & TypeScript) for users to generate banners for social profiles. Created a user-friendly interface for creating banners with custom text, icons, images and backgrounds. Provides templates, layout sizes, image downloads, and a randomiser.',
      technologies: ['Vue', 'Tailwind', 'TypeScript', 'Image Processing', 'Web Development'],
      highlights: [
        'User-friendly interface for creating custom banners',
        'Provides templates, layout sizes, and image downloads',
        'Includes randomiser functionality',
      ],
    },
    {
      name: 'QFS2023 Conference Organisation',
      status: '2023',
      description: 'Member of organising committee for the 23rd International Conference on Quantum Fluids and Solids. Prepared conference information booklets, conducted photography and organised banquet music. Coordinated speaker invitations and delegate reception.',
      technologies: ['Event Management', 'Conference Organisation', 'Photography', 'Coordination'],
      highlights: [
        'Member of organising committee for international conference',
        'Prepared conference materials and conducted photography',
        'Coordinated speaker invitations and delegate reception',
      ],
    },
  ],
  hasRing: true,
  ringAngle: 15,
  ringSize: 150,
}; 