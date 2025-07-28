import { Planet } from '..';

export const achievementsPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'achievements',
  title: 'Achievements',
  icon: '',
  orbitRadius: 200,
  size: 40,
  content: [
    {
      title: 'The Motion of Tracer Particles in Turbulent Superfluid 4He Down to the Zero-Temperature Limit',
      year: '2025',
      description: 'C. O. Goodwin, M. J. Doyle, J. A. Hay, I. Skachko, W. Guo, P. M. Walmsley & A. I. Golov',
      value: 'Journal of Low Temperature Physics',
    },
    {
      title: 'Modelling Turbulent Flow of Superfluid 4He Past a Rough Solid Wall in the T=0 Limit',
      year: '2024',
      description: 'M. J. Doyle, A. I. Golov, P. M. Walmsley & A. W. Baggaley',
      value: 'Journal of Low Temperature Physics',
      doi: '10.1007/s10909-024-03073-6',
    },
    {
      title: 'Best Poster Award',
      year: '2023',
      description: 'Awarded the prize for the best poster at the International Conference on Quantum Fluids and Solids (QFS 2023).',
      committee: 'QFS 2023 Committee',
    },
    {
      title: 'Final Year Project Commendation',
      year: '2020',
      description: 'Received a special commendation for the MSci thesis project on particle track reconstruction at the University of Bristol.',
      committee: 'University of Bristol, Physics Dept.',
    },
  ],
}; 