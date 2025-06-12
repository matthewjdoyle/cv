export interface OrbitAnimationConfig {
  duration: string;
  direction: 'normal' | 'reverse';
  type: 'circular' | 'elliptical';
  delay?: string;
}

export const orbitalAnimations: Record<string, OrbitAnimationConfig> = {
  profile: {
    duration: '550s',
    direction: 'normal',
    type: 'elliptical'
  },
  experience: {
    duration: '580s',
    direction: 'normal',
    type: 'elliptical'
  },
  skills: {
    duration: '620s',
    direction: 'normal',
    type: 'elliptical'
  },
  education: {
    duration: '640s',
    direction: 'normal',
    type: 'elliptical'
  },
  projects: {
    duration: '600s',
    direction: 'normal',
    type: 'elliptical'
  },
  achievements: {
    duration: '660s',
    direction: 'normal',
    type: 'elliptical'
  }
};

export const getAnimationClass = (planetId: string): string => {
  const config = orbitalAnimations[planetId];
  if (!config) return 'animate-orbit-elliptical';
  
  switch (config.type) {
    case 'elliptical':
      return config.direction === 'reverse' ? 'animate-orbit-ellipse-reverse' : 'animate-orbit-elliptical';
    case 'circular':
    default:
      return config.direction === 'reverse' ? 'animate-orbit-reverse' : 'animate-orbit';
  }
};

export const getAnimationDuration = (planetId: string): string => {
  return orbitalAnimations[planetId]?.duration || '20s';
}; 