import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const domainStrengths = [
  'Clinical data integrity and interoperability',
  'Consent, privacy and access control',
  'Accessibility and internationalization',
  'Security remediation and release quality',
]

function ExperienceSection() {
  return (
    <section className="experience section-shell" id="experience">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Enterprise healthcare engineering with measurable responsibility."
        description="Four years of experience contributing to complex, privacy-sensitive applications and multidisciplinary delivery workflows."
      />

      <article className="experience-card">
        <div className="experience-card__header">
          <div>
            <p>{experience.company}</p>
            <h3>{experience.role}</h3>
          </div>
          <span>{experience.dates}</span>
        </div>

        <p className="experience-card__summary">{experience.summary}</p>

        <div className="experience-card__grid">
          <div>
            <h4>Selected responsibilities</h4>
            <ul className="experience-card__highlights">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <aside className="experience-card__domains">
            <h4>Domain strengths</h4>
            <ul>
              {domainStrengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="experience-card__stack">
          <h4>Core technology stack</h4>
          <ul
            className="tag-list experience-card__technologies"
            aria-label="Technologies used at Oracle Health"
          >
            {experience.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </article>

      <article className="education-card">
        <div>
          <p className="eyebrow">Education</p>
          <h3>B.Tech, Computer Science and Engineering</h3>
          <p>Dayananda Sagar University, Bengaluru</p>
        </div>
        <dl>
          <div>
            <dt>Duration</dt>
            <dd>2018 – 2022</dd>
          </div>
          <div>
            <dt>CGPA</dt>
            <dd>8.27 / 10.0</dd>
          </div>
        </dl>
      </article>
    </section>
  )
}

export default ExperienceSection
