function ContactSection() {
  return (
    <section className="contact section-shell" id="contact">
      <p className="eyebrow">Contact</p>
      <div className="contact__grid">
        <h2>
          Let&apos;s discuss software engineering opportunities.
        </h2>
        <div className="contact__copy">
          <p>
            I am open to remote roles across frontend, full-stack and software
            engineering where I can contribute enterprise application
            experience and continue growing with a strong engineering team.
          </p>
          <div className="contact__links">
            <a
              className="button button--light"
              href="mailto:anusha.r1018@gmail.com"
            >
              Email Me <span aria-hidden="true">→</span>
            </a>
            <a
              className="button button--outline-light"
              href="https://linkedin.com/in/anusha-r-462562203"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--outline-light"
              href="https://github.com/anusha-r-dev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
