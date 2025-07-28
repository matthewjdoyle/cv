import { Planet } from '..';

export const skillsPlanet: Omit<Planet, 'planetColors' | 'color'> = {
  id: 'skills',
  title: 'Skills',
  icon: '',
  orbitRadius: 520,
  size: 65,
  hasRing: true,
  ringAngle: 15,
  ringSize: 130,
  content: {
    technical: [
      'FORTRAN', 'Python', 'C++', 'OpenFOAM', 'OpenMP', 'CUDA', 'MPI',
      'matplotlib', 'seaborn', 'pandas', 'numpy', 'scipy', 'TensorFlow', 'OpenCV', 'ggplot',
      'ROOT', 'OriginLab', 'CSV', 'XML', 'JSON', 'YAML', 'SQL',
      'Git', 'Linux', 'Bash', 'PowerShell', 'Selenium', 'LabVIEW',
      'HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Tailwind', 'TypeScript', 'MySQL'
    ],
    software: [
      'GitHub', 'Teams', 'Slack', 'LaTeX', 'Notion', 'Powerpoint', 'Excel', 'G-Suite', 'Inkscape'
    ],
    laboratory: [
      'Lasers', 'cryogenic apparatus', 'vacuum technology', 'intensified cameras', 'optical fibres'
    ],
    soft: [
      {
        title: 'Problem Solving',
        description: 'Comfortable adapting approaches and methodology as challenges are encountered, which has been a pivotal part of my PhD. Self-teaching guitar has further developed my creative thinking skills in completion of projects.',
      },
      {
        title: 'Communication',
        description: 'Confident in speaking and presenting to audiences, both with and without technical backgrounds. Attendance and participation at both national and international conferences has involved the presentation of my research via poster presentations, providing invaluable experience in tailoring presentation content to the technical level and interests of an audience. Additionally, organisation of an international conference on Quantum Fluids and Solids involved liaising with several international speakers and University staff, greeting delegates and preparation of conference information booklets.',
      },
      {
        title: 'Teamwork',
        description: 'Successful collaborations, internal and external to my research group has resulted in several publications, including a first author paper in a highly acclaimed journal. Work has additionally been well-received during conference presentations and a series of publications are in review at current time. A member of the physics 7-a side football team throughout my postgraduate studies. House captain responsibilities during 6th form.',
      },
    ],
  },
}; 