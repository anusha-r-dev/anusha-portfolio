import type {
  Experience,
  ProcessStep,
  Project,
  SkillGroup,
} from '../types/portfolio'

const assetUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}${fileName}`

export const projects: Project[] = [
  {
    title: 'CareerPilot',
    category: 'Featured Project · Full-Stack Application',
    year: '2026',
    description:
      'A production-deployed, multi-user job application platform for discovering opportunities and privately tracking each application from saved role to offer.',
    image: assetUrl('careerpilot-project.png'),
    tags: ['React', 'TypeScript', 'Ruby on Rails', 'PostgreSQL'],
    highlights: [
      'Separate member and administrator experiences with role-based access',
      'Persistent job pipeline, interviews, portal links and account management',
      'REST API, secure cookie sessions, automated tests and Render deployment',
    ],
    liveUrl: 'https://careerpilot-qdr0.onrender.com/',
    repositoryUrl:
      'https://github.com/anusha-r-dev/careerpilot-platform',
  },
  {
    title: 'Accessible Clinical Results Dashboard',
    category: 'Featured Project · Healthcare Interface',
    year: '2026',
    description:
      'A responsive clinical results experience that turns dense synthetic laboratory data into an understandable, keyboard-friendly workflow.',
    image: assetUrl('clinical-dashboard.png'),
    tags: ['React', 'TypeScript', 'Accessibility', 'Vite'],
    highlights: [
      'Search, filters, result selection and interactive history',
      'Persistent review queue with a focused custom hook',
      'Semantic tables, dialogs and color-independent statuses',
    ],
    liveUrl:
      'https://anusha-r-dev.github.io/accessible-clinical-dashboard/',
    repositoryUrl:
      'https://github.com/anusha-r-dev/accessible-clinical-dashboard',
  },
  {
    title: 'Software Developer Portfolio',
    category: 'Portfolio Website',
    year: '2026',
    description:
      'A professional, responsive portfolio designed to present my projects, technical skills and engineering approach clearly to recruiters.',
    image: assetUrl('portfolio-project.png'),
    tags: ['React', 'TypeScript', 'Responsive design', 'CSS'],
    highlights: [
      'Reusable, section-based React component architecture',
      'Recruiter-focused content structure and responsive navigation',
      'Accessible focus states, reduced motion and production validation',
    ],
    status: 'You are here',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    index: '01',
    title: 'Languages',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Ruby',
      'HTML5',
      'CSS3',
      'SQL',
    ],
  },
  {
    index: '02',
    title: 'Frameworks & Runtime',
    skills: [
      'React',
      'Redux',
      'Ruby on Rails',
      'Node.js',
    ],
  },
  {
    index: '03',
    title: 'Testing & Quality',
    skills: [
      'Jest',
      'RSpec',
      'Unit testing',
      'WCAG',
      'Accessibility',
      'Code review',
      'Internationalization',
    ],
  },
  {
    index: '04',
    title: 'Tools & Delivery',
    skills: [
      'Git',
      'Jenkins',
      'Splunk',
      'Postman',
      'Jira',
      'Agile / Scrum',
      'CI/CD',
    ],
  },
  {
    index: '05',
    title: 'APIs & Healthcare',
    skills: [
      'REST APIs',
      'FHIR',
      'Healthcare workflows',
      'Consent & privacy',
      'Data integrity',
      'Auditability',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Analyze',
    description:
      'Clarify requirements, user impact, clinical workflow and acceptance criteria.',
  },
  {
    index: '02',
    title: 'Implement',
    description:
      'Build maintainable UI, service and API changes using the appropriate stack.',
  },
  {
    index: '03',
    title: 'Validate',
    description:
      'Apply unit testing, accessibility, internationalization and code review.',
  },
  {
    index: '04',
    title: 'Deliver',
    description:
      'Track work in Jira and use Git, Jenkins CI/CD and release validation.',
  },
]

export const experience: Experience = {
  company: 'Oracle Health (formerly Cerner)',
  role: 'Application Software Engineer',
  dates: 'September 2022 – Present',
  summary:
    'Build and maintain enterprise healthcare applications with a focus on clinical data integrity, privacy, accessibility, interoperability, security and release quality.',
  highlights: [
    'Deliver frontend and full-stack enhancements using React, TypeScript, JavaScript, Ruby on Rails and REST APIs.',
    'Improve healthcare workflows involving clinical data integrity, patient context, consent, privacy and auditability.',
    'Contribute to accessibility, internationalization, security remediation, testing, code review and release validation.',
    'Investigate production issues, analyze application behavior and improve reliability across complex clinical experiences.',
  ],
  technologies: [
    'React',
    'TypeScript',
    'Redux',
    'Ruby on Rails',
    'REST APIs',
    'Jest',
    'RSpec',
    'Jenkins',
    'Jira',
  ],
}
