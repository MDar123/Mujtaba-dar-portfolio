import { Link } from 'react-router-dom'
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
        Open any project for the full story.
      </p>
    </div>

    <div className="work-stage">
      <div className="work-window">
        <div className="work-rail">
          {projects.map((project, index) => {
            const featured = index === 0
            return (
              <article
                key={project.slug}
                className={`project-card project-${index}${featured ? ' featured' : ''}`}
              >
                <div className="project-top">
                  <span className="tiny-label">
                    {pad(index + 1)} / {pad(projects.length)}
                  </span>
                  <span className="project-open" aria-hidden="true">
                    ↗
                  </span>
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
                      src={project.thumb}
                      width={640}
                      height={400}
                      loading="lazy"
                      alt={`${project.title} preview`}
                    />
                  </div>
                  {featured && (
                    <div className="project-stamp">
                      BUILT FOR
                      <br />
                      <em>the web.</em>
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <h3>
                    <Link className="project-link" to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.description}</p>
                  <span className="project-more" aria-hidden="true">
                    View project details →
                  </span>
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
