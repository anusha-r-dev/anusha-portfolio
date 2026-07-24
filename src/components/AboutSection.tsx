import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section className="about section-shell" id="about">
      <SectionHeading
        eyebrow="Professional Summary"
        title="Software engineering experience across frontend, APIs and enterprise healthcare workflows."
        description="I combine user-focused frontend development with practical full-stack delivery and domain-aware problem solving."
      />

      <div className="about__grid">
        <div className="about__body">
          <p>
            At Oracle Health, I build and maintain enterprise healthcare
            applications across clinical data, patient context, consent,
            privacy and interoperability workflows. My experience includes
            frontend development, REST API integration and Ruby on Rails service
            work.
          </p>
          <p>
            I contribute throughout the development lifecycle: requirements
            analysis, implementation, unit testing, accessibility,
            internationalization, code review, security remediation, CI/CD,
            release validation and production issue investigation.
          </p>
        </div>
        <aside className="about__strengths">
          <h3>What I bring</h3>
          <ul>
            <li>Clear, maintainable component architecture</li>
            <li>Healthcare data integrity, privacy and auditability</li>
            <li>Accessibility, WCAG and internationalization awareness</li>
            <li>Structured Agile, Git, code review and CI/CD practices</li>
          </ul>
        </aside>
      </div>

      <dl className="about__facts">
        <div>
          <dt>Frontend</dt>
          <dd>React, Redux, TypeScript, JavaScript</dd>
        </div>
        <div>
          <dt>Quality</dt>
          <dd>Jest, RSpec, WCAG, code review</dd>
        </div>
        <div>
          <dt>Workflow</dt>
          <dd>Jira, Git, Jenkins, Agile/Scrum</dd>
        </div>
      </dl>
    </section>
  )
}

export default AboutSection
