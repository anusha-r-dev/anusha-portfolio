export interface Project {
  title: string
  category: string
  year: string
  description: string
  image?: string
  tags: string[]
  highlights: string[]
  liveUrl?: string
  repositoryUrl?: string
  status?: string
}

export interface SkillGroup {
  title: string
  index: string
  skills: string[]
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export interface Experience {
  company: string
  role: string
  dates: string
  summary: string
  highlights: string[]
  technologies: string[]
}
