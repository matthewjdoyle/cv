export interface PlanetStyle {
  light: string;
  mid: string;
  dark: string;
  glow: string;
  glowRgb: string;
  atmosphere: string;
}

export const planetStyles: Record<string, PlanetStyle> = {
  profile: {
    light: '#9B5DE5',
    mid: '#4B0082',
    dark: '#3A0CA3',
    glow: '#9B5DE5',
    glowRgb: '155, 93, 229',
    atmosphere: '#C7A2F5',
  },
  experience: {
    light: '#4361EE',
    mid: '#3A0CA3',
    dark: '#3F37C9',
    glow: '#4361EE',
    glowRgb: '67, 97, 238',
    atmosphere: '#A6B5F7',
  },
  skills: {
    light: '#4895EF',
    mid: '#4361EE',
    dark: '#3A0CA3',
    glow: '#4895EF',
    glowRgb: '72, 149, 239',
    atmosphere: '#AECFF7',
  },
  education: {
    light: '#56CFE1',
    mid: '#4895EF',
    dark: '#4361EE',
    glow: '#56CFE1',
    glowRgb: '86, 207, 225',
    atmosphere: '#B7E7EF',
  },
  projects: {
    light: '#72EFDD',
    mid: '#56CFE1',
    dark: '#4895EF',
    glow: '#72EFDD',
    glowRgb: '114, 239, 221',
    atmosphere: '#C3F7F0',
  },
  achievements: {
    light: '#F9C74F',
    mid: '#F8961E',
    dark: '#F3722C',
    glow: '#F9C74F',
    glowRgb: '249, 199, 79',
    atmosphere: '#FBDF97',
  },
}; 