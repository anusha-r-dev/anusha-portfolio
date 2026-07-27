import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function SkillsSection() {
  return (
    <section className="skills section-shell" id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="A full-stack toolkit shaped by enterprise delivery."
        description="Languages, frameworks, testing practices and delivery tools used across frontend and healthcare application development."
      />

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group__heading">
              <span>{group.index}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
