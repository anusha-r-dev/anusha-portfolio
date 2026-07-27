import { processSteps } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function ProcessSection() {
  return (
    <section className="process section-shell" id="process">
      <SectionHeading
        eyebrow="Delivery Workflow"
        title="From requirements to validated release."
        description="A practical Agile workflow supported by testing, code review, CI/CD and release validation."
      />

      <ol className="process__list">
        {processSteps.map((step) => (
          <li key={step.index}>
            <span className="process__index">{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProcessSection
