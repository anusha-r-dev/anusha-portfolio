import { projects } from '../data/portfolio'
import type { Project } from '../types/portfolio'
import SectionHeading from './SectionHeading'

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repositoryUrl) {
    return (
      <span className="project-card__status">
        {project.status ?? 'In progress'}
      </span>
    )
  }

  return (
    <div className="project-card__links">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          View Live Project <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {project.repositoryUrl ? (
        <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
          View Source Code <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  )
}

function ProjectsSection() {
  return (
    <section className="projects section-shell" id="work">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Practical work that demonstrates technical ability."
        description="Each project is designed, implemented and validated as a complete software development exercise."
      />

      <div className="projects__list">
        {projects.map((project, index) => (
          <article
            className={
              index === 0
                ? 'project-card project-card--featured'
                : 'project-card project-card--editorial'
            }
            key={project.title}
          >
            <div className="project-card__visual">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project interface`}
                />
              ) : (
                <div className="project-card__monogram" aria-hidden="true">
                  <span>AR</span>
                  <small>Software Developer Portfolio</small>
                </div>
              )}
              <span className="project-card__number">Project 0{index + 1}</span>
            </div>

            <div className="project-card__content">
              <div className="project-card__meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-card__footer">
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
