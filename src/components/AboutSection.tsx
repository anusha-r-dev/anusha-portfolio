import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section className="about section-shell" id="about">
      <SectionHeading
        eyebrow="Professional Summary"
        title="Full-stack engineering across frontend, APIs and enterprise healthcare workflows."
        description="I combine user-focused frontend development, secure backend delivery and domain-aware problem solving."
      />

      <div className="about__grid">
        <div className="about__body">
          <p>
            At Oracle Health, I build and maintain enterprise healthcare
            applications across five clinical portfolios involving patient
            context, consent, privacy and interoperability. My work spans React
            interfaces, REST and FHIR services, Ruby on Rails and PostgreSQL.
          </p>
          <p>
            I contribute throughout the development lifecycle: requirements
            analysis, implementation, automated testing, accessibility,
            authentication, security remediation, CI/CD, release validation and
            production issue investigation.
          </p>
        </div>
        <aside className="about__strengths">
          <h3>What I bring</h3>
          <ul>
            <li>End-to-end ownership across React UI, APIs and data</li>
            <li>Healthcare data integrity, privacy and FHIR interoperability</li>
            <li>Accessibility, authentication and web security</li>
            <li>Automated testing, code review and CI/CD delivery</li>
          </ul>
        </aside>
      </div>

      <dl className="about__facts">
        <div>
          <dt>Frontend</dt>
          <dd>React, Next.js, JavaScript, HTML5, CSS3</dd>
        </div>
        <div>
          <dt>Quality</dt>
          <dd>Jest, RSpec, Minitest, WCAG</dd>
        </div>
        <div>
          <dt>Workflow</dt>
          <dd>GitHub Actions, Jenkins, Docker, Agile</dd>
        </div>
      </dl>
    </section>
  )
}

export default AboutSection
