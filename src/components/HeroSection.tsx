function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__availability">
          <span aria-hidden="true"></span>
          Open to Remote Software Engineering Roles
        </div>

        <p className="hero__intro">Anusha R · Full-Stack Engineer</p>
        <h1 id="hero-title">
          Building reliable full-stack applications for complex workflows.
        </h1>
        <p className="hero__summary">
          Full-stack engineer with 4 years of experience building clinical web
          applications using React, TypeScript, advanced JavaScript, HTML and
          CSS, Ruby on Rails, PostgreSQL and REST APIs.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#work">
            View Projects <span aria-hidden="true">→</span>
          </a>
          <a
            className="button button--secondary"
            href="https://github.com/anusha-r-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button--secondary"
            href={`${import.meta.env.BASE_URL}Anusha_R_Resume_Public.pdf`}
            download
          >
            Download Resume <span aria-hidden="true">↓</span>
          </a>
        </div>

        <ul className="hero__highlights" aria-label="Professional highlights">
          <li>4 years of experience</li>
          <li>392 delivered work items</li>
          <li>Promoted to Engineer II</li>
        </ul>
      </div>

      <aside className="profile-card" aria-label="Professional profile">
        <p className="profile-card__eyebrow">Professional Profile</p>
        <div className="profile-card__identity">
          <span aria-hidden="true">AR</span>
          <div>
            <h2>Anusha R</h2>
            <p>Application Software Engineer II</p>
          </div>
        </div>
        <dl>
          <div>
            <dt>Experience</dt>
            <dd>4 years</dd>
          </div>
          <div>
            <dt>Core technologies</dt>
            <dd>React · TypeScript · Rails · PostgreSQL</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>Enterprise healthcare applications</dd>
          </div>
        </dl>
        <div className="profile-card__status">
          <span aria-hidden="true"></span>
          Open to remote opportunities
        </div>
      </aside>
    </section>
  )
}

export default HeroSection
