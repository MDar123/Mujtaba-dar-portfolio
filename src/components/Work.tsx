import { projects } from '../data/portfolio'

const pad = (n: number) => String(n).padStart(2, '0')

const Work = () => (
  <section id="projects" className="section work">
    <div className="section-marker">
      <span>03 — SELECTED WORK</span>
      <span>IDEAS, OUT IN THE WORLD</span>
    </div>
    <div className="section-heading" data-reveal>
      <h2>
        Things I’ve <em>built.</em>
      </h2>
      <p>
        Responsive products. Everyday experiences.
        <br />
        Made for the people on the other side of the screen.
      </p>
    </div>

    <div className="work-stage">
      <div className="work-window">
        <div className="work-rail">
          {projects.map((project, index) => {
            const featured = index === 0
            return (
              <article
                key={project.title}
                className={`project-card project-${index}${featured ? ' featured' : ''}`}
              >
                <div className="project-top">
                  <span className="tiny-label">
                    {pad(index + 1)} / {project.subtitle.toUpperCase()}
                  </span>
                  <a
                    className="project-open"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} in a new tab`}
                  >
                    ↗
                  </a>
                </div>
                <div className="project-visual">
                  <div className="project-orbit" />
                  <div className="mini-browser">
                    <div className="browser-bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </div>
                    <img
                      src={project.image}
                      width={640}
                      height={400}
                      loading="lazy"
                      alt={`${project.title} preview`}
                    />
                  </div>
                  <span className="interface-label">LIVE PREVIEW</span>
                  {featured && (
                    <div className="project-stamp">
                      BUILT FOR
                      <br />
                      <em>the web.</em>
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <div className="project-title">
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-sub">{project.subtitle}</p>
                  <p>{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {project.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="store-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      View Live ↗
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <p className="work-scroll-note">
        KEEP SCROLLING TO EXPLORE <span aria-hidden="true">⟶</span>{' '}
        <span>
          {pad(projects.length)} PROJECTS / ONE CONSIDERED EXPERIENCE
        </span>
      </p>
    </div>
  </section>
)

export default Work
