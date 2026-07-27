function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__availability">
          <span aria-hidden="true"></span>
          Open to Remote Software Engineering Roles
        </div>

        <p className="hero__intro">Anusha R · Software Engineer</p>
        <h1 id="hero-title">
          Building reliable enterprise and healthcare applications.
        </h1>
        <p className="hero__summary">
          Software engineer with 4 years of experience across frontend and
          full-stack development using React, TypeScript, Ruby on Rails and
          REST APIs.
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
        </div>

        <ul className="hero__highlights" aria-label="Professional highlights">
          <li>4 years of experience</li>
          <li>React + TypeScript + Ruby</li>
          <li>Healthcare domain</li>
        </ul>
      </div>

      <aside className="profile-card" aria-label="Professional profile">
        <p className="profile-card__eyebrow">Professional Profile</p>
        <div className="profile-card__identity">
          <span aria-hidden="true">AR</span>
          <div>
            <h2>Anusha R</h2>
            <p>Application Software Engineer</p>
          </div>
        </div>
        <dl>
          <div>
            <dt>Experience</dt>
            <dd>4 years</dd>
          </div>
          <div>
            <dt>Core technologies</dt>
            <dd>React · TypeScript · Ruby on Rails</dd>
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
