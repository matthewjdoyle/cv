import { Planet } from '..';

export const achievementsPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'achievements',
  title: 'Achievements',
  icon: '🏆',
  orbitRadius: 200,
  size: 40,
  content: [
    {
      title: 'First Author Publication',
      year: '2023',
      description: 'Published a first-author paper in a high-impact, peer-reviewed Spring-Nature journal based on original PhD research.',
      value: 'Spring-Nature Journal',
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