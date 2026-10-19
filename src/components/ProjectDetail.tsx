import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { profile, projects } from '../data/portfolio'
import { techIcon } from '../data/techIcons'

const pad = (n: number) => String(n).padStart(2, '0')

const TechTile = ({ name }: { name: string }) => {
  const icon = techIcon(name)
  const [failed, setFailed] = useState(false)

  let glyph
  if (icon.kind === 'image' && !failed) {
    glyph = <img src={icon.src} alt="" loading="lazy" onError={() => setFailed(true)} />
  } else if (icon.kind === 'glyph') {
    glyph = <icon.Icon size={24} strokeWidth={1.6} />
  } else {
    glyph = name.slice(0, 2)
  }

  return (
    <li className="tech-tile">
      <span className="app-icon" aria-hidden="true">
        {glyph}
      </span>
      <span>{name}</span>
    </li>
  )
}

const ProjectDetail = () => {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (project) document.title = `${project.title} — ${profile.shortName}`
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="project-page">
      <header className="project-page-bar">
        <Link to="/" className="monogram" aria-label={`MD· — ${profile.name} home`}>
          MD<span>·</span>
        </Link>
        <Link to="/#projects" className="back-pill">
          ← All projects
        </Link>
      </header>

      <main className="section project-detail">
        <div className="section-marker">
          <span>
            PROJECT {pad(index + 1)} / {pad(projects.length)}
          </span>
          <span>SELECTED WORK</span>
        </div>

        <div className="project-hero">
          <div className="project-hero-copy">
            <span className="eyebrow">{project.subtitle}</span>
            <h1>{project.title}</h1>
            <p className="project-lead">{project.heroText}</p>
            <p>{project.description}</p>
            <div className="link-pills">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View live ↗
              </a>
            </div>
          </div>
          <div className="project-hero-shot">
            <div className="browser-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <img src={project.image} width={1280} height={800} alt={`${project.title} preview`} />
          </div>
        </div>

        <div className="project-body">
          <section aria-labelledby="features-heading">
            <span className="tiny-label">WHAT IT DOES</span>
            <h2 id="features-heading">
              Key <em>features.</em>
            </h2>
            <ol className="feature-list">
              {project.features.map((feature, i) => (
                <li key={feature}>
                  <span>{pad(i + 1)}</span>
                  <p>{feature}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="stack-heading">
            <span className="tiny-label">WHAT IT’S MADE OF</span>
            <h2 id="stack-heading">
              Built <em>with.</em>
            </h2>
            <ul className="tech-grid">
              {project.techStack.map((tech) => (
                <TechTile key={tech} name={tech} />
              ))}
            </ul>
          </section>
        </div>

        <nav className="project-pager" aria-label="More projects">
          <Link to={`/projects/${prev.slug}`}>
            <span className="tiny-label">← PREVIOUS</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`}>
            <span className="tiny-label">NEXT →</span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </main>
    </div>
  )
}

export default ProjectDetail
