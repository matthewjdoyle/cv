import { profilePlanet } from './planets/profile';
import { experiencePlanet } from './planets/experience';
import { skillsPlanet } from './planets/skills';
import { educationPlanet } from './planets/education';
import { projectsPlanet } from './planets/projects';
import { achievementsPlanet } from './planets/achievements';
import { planetStyles, type PlanetStyle } from './planetStyles';

export interface Planet {
  id: string;
  title: string;
  icon: string;
  planetColors: PlanetStyle;
  orbitRadius: number;
  size: number;
  content: any;
  color?: string; // Derived from glow color for trails
  hasRing?: boolean;
  ringAngle?: number;
  ringSize?: number;
  moons?: number;
  moonColors?: string[];
}

const allPlanetData = [
  profilePlanet,
  experiencePlanet,
  skillsPlanet,
  educationPlanet,
  projectsPlanet,
  achievementsPlanet,
];

const applyStyles = (planet: Omit<Planet, 'planetColors' | 'color'>): Planet => {
  const style = planetStyles[planet.id];
  if (!style) {
    throw new Error(`No style found for planet with id: ${planet.id}`);
  }
  return {
    ...planet,
    planetColors: style,
    color: style.glow,
  };
};

export const starProfileData: Planet = applyStyles(profilePlanet);

export const cvPlanets: Planet[] = allPlanetData
  .filter((p) => p.id !== 'profile')
  .map(applyStyles); 