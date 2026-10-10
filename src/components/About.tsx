import Badge from './Badge'
import { experiences, profile } from '../data/portfolio'

const About = () => {
  const current = experiences[0]

  return (
    <section id="about" className="section about">
      <div className="section-marker">
        <span>01 — THE PERSON</span>
        <span>A LITTLE CONTEXT</span>
      </div>
      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <h2>
            Hi, I’m
            <br />
            <em>{profile.firstName}.</em>
          </h2>
          <p>{profile.about}</p>
          <div className="link-pills">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              Résumé ↓
            </a>
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <Badge />

        <div className="quick-facts" data-reveal>
          <span className="eyebrow">A FEW QUICK FACTS</span>
          <dl>
            <div>
              <dt>Currently</dt>
              <dd>
                {current.title} · {current.company}
              </dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Web apps, real-time chat &amp; AI integrations.</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>
                React, Angular, Next.js,
                <br />
                TypeScript &amp; MongoDB
              </dd>
            </div>
            <div>
              <dt>Reach me</dt>
              <dd>
                {profile.email} <span aria-hidden="true">↗</span>
              </dd>
            </div>
          </dl>
          <blockquote>
            “Code and build
            <br />
            something every day.”
          </blockquote>
          <span className="tiny-label">ONE DEVELOPER. EVERY DAY, BUILDING.</span>
        </div>
      </div>
    </section>
  )
}

export default About
