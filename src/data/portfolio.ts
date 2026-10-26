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
    title: 'Ramwell Store',
    category: 'Featured Project · Full-Stack E-Commerce',
    year: '2026',
    description:
      'A performance-focused e-commerce experience with a large typed catalog, optimized product discovery and a complete client-side shopping journey.',
    image: assetUrl('ramwell-store-project.png'),
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    highlights: [
      'Virtualized catalog with debounced search, filtering and sorting',
      'Dynamic product pages, responsive images and code-split content',
      'Saved items, bag management, checkout and order confirmation flow',
    ],
    liveUrl: 'https://ramwell-store.vercel.app/',
    repositoryUrl: 'https://github.com/anusha-r-dev/ramwell-store',
  },
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
      'JavaScript (Advanced)',
      'TypeScript',
      'Ruby',
      'HTML5 (Advanced)',
      'CSS3 (Advanced)',
      'Tailwind CSS',
      'SQL',
    ],
  },
  {
    index: '02',
    title: 'Frameworks & Runtime',
    skills: [
      'React',
      'Next.js',
      'Redux Toolkit',
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
      'Minitest',
      'Unit testing',
      'Integration testing',
      'WCAG',
      'ESLint',
      'SonarQube',
    ],
  },
  {
    index: '04',
    title: 'Tools & Delivery',
    skills: [
      'Git',
      'Jenkins',
      'GitHub Actions',
      'Docker',
      'Splunk',
      'Postman',
      'Render',
      'Vercel',
      'Jira',
      'CI/CD',
    ],
  },
  {
    index: '05',
    title: 'APIs & Healthcare',
    skills: [
      'REST APIs',
      'FHIR',
      'PostgreSQL',
      'Authentication',
      'Role-based access control',
      'Healthcare workflows',
      'Web security',
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
  company: 'Oracle Cerner',
  role: 'Application Software Engineer II',
  dates: 'September 2022 – Present',
  summary:
    'Build React and TypeScript frontends with Ruby on Rails, FHIR and PostgreSQL services for hospital clinical products, supporting feature delivery across complex workflows.',
  highlights: [
    'Owned end-to-end delivery across 5 clinical portfolios, translating requirements into maintainable React UI, REST API and PostgreSQL solutions.',
    'Resolved 67 high/critical-priority issues across frontend, backend and third-party FHIR integrations.',
    'Modernized 5 Ruby services to Ruby 3.4 and Rails 8 while remediating 50+ tracked security vulnerabilities.',
    'Rebuilt allergy data flows across 3 clinical applications and improved precision, provenance, duplicate detection and audit metadata.',
  ],
  technologies: [
    'React',
    'TypeScript',
    'Ruby on Rails',
    'REST APIs',
    'FHIR',
    'PostgreSQL',
    'Jest',
    'RSpec',
    'Jenkins',
  ],
}
