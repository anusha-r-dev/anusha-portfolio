const impactMetrics = [
  {
    value: '392',
    label: 'Enhancements, defects and security fixes delivered',
  },
  {
    value: '67',
    label: 'High and critical-priority issues resolved',
  },
  {
    value: '50+',
    label: 'Tracked security vulnerabilities remediated',
  },
  {
    value: '5',
    label: 'Enterprise clinical portfolios supported',
  },
]

function ImpactSection() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <div className="impact__heading">
        <p className="eyebrow">Career Impact</p>
        <h2 id="impact-title">Delivery measured in outcomes.</h2>
        <p>
          Selected results from four years of enterprise healthcare engineering.
        </p>
      </div>

      <dl className="impact__metrics">
        {impactMetrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default ImpactSection
