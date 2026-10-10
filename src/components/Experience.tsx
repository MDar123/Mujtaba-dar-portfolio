import { experiences } from '../data/portfolio'

const yearOf = (period: string) => period.match(/\d{4}/)?.[0] ?? ''

const Experience = () => (
  <section id="experience" className="section experience">
    <div className="section-marker">
      <span>04 — THE JOURNEY</span>
      <span>ALWAYS MOVING FORWARD</span>
    </div>
    <div className="section-heading" data-reveal>
      <h2>
        Experience that
        <br />
        <em>moves things forward.</em>
      </h2>
      <p>
        From my first Angular internship
        <br />
        to building full stack products.
      </p>
    </div>

    <div className="timeline">
      <div className="timeline-track" aria-hidden="true">
        <i className="timeline-draw" />
      </div>
      {experiences.map((exp) => {
        const present = /present/i.test(exp.period)
        return (
          <article className="timeline-item" data-reveal key={exp.period + exp.title}>
            <div className="timeline-date">
              <span>{exp.period}</span>
              <strong>{yearOf(exp.period)}</strong>
            </div>
            <div className="role-card">
              <span className="eyebrow">{present ? 'CURRENT' : 'PREVIOUS'}</span>
              <h3>{exp.title}</h3>
              {exp.company && <h4>{exp.company}</h4>}
              {exp.description && <p>{exp.description}</p>}
            </div>
          </article>
        )
      })}
    </div>
  </section>
)

export default Experience
