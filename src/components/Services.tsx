import { experiences, projects, services } from '../data/portfolio'
import { skills } from '../utils/Constants'

const pad = (n: number) => String(n).padStart(2, '0')

const stats = [
  { value: skills.length, label: 'Technologies' },
  { value: projects.length, label: 'Projects built' },
  { value: experiences.length, label: 'Roles held' },
  { value: services.length, label: 'Services offered' },
]

const Services = () => (
  <section id="services" className="section moments">
    <div className="section-marker">
      <span>05 — WHAT I DO</span>
      <span>BUILT AROUND YOUR GOALS</span>
    </div>
    <h2 data-reveal>
      Services,
      <br />
      <em>made to measure.</em>
    </h2>

    <div className="stats">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>
            <span data-count={stat.value}>{stat.value}</span>
          </strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>

    <div className="moment-cards">
      {services.map((service, index) => (
        <article key={service.title} data-reveal>
          <span className="moment-symbol" aria-hidden="true">
            {pad(index + 1)}
          </span>
          <span className="eyebrow">SERVICE {pad(index + 1)}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  </section>
)

export default Services
