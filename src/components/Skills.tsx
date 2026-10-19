import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { skills } from '../utils/Constants'
import {
  experiences,
  projects,
  skillAliases,
  skillCategories,
  skillCategoryByName,
  type SkillCategory,
} from '../data/portfolio'

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

const categoryBlurb: Record<SkillCategory, string> = {
  Frontend: 'Part of my frontend toolkit for building responsive, polished interfaces.',
  Frameworks: 'A framework I reach for when building structured, maintainable web applications.',
  Backend: 'Backend tooling that keeps the apps I build connected, secure and data-driven.',
  AI: 'AI-assisted development tooling I use to build and ship faster.',
  Tools: 'Developer and automation tooling that keeps my workflow and delivery moving smoothly.',
}

const categoryOf = (name: string): SkillCategory => skillCategoryByName[name] ?? 'Tools'

const inPractice = (name: string) => {
  const aliases = skillAliases[name] ?? [normalize(name)]
  const used = projects.filter((p) => p.techStack.some((t) => aliases.includes(normalize(t))))
  if (used.length) return { label: used.map((p) => p.title).join(' · '), href: '#projects' }

  const role = experiences.find((e) => normalize(e.title).includes(normalize(name)))
  if (role) return { label: `${role.title}${role.company ? ' · ' + role.company : ''}`, href: '#experience' }

  return { label: 'Everyday development toolkit', href: '#experience' }
}

const SkillIcon = ({ name, icon }: { name: string; icon: string }) => {
  const [failed, setFailed] = useState(false)
  if (failed || !icon) return <>{name.slice(0, 2)}</>
  return <img src={icon} alt="" loading="lazy" onError={() => setFailed(true)} draggable={false} />
}

const additional = [
  'Responsive web design',
  'REST APIs',
  'Third-party API integration',
  'LLM & RAG integrations',
  'Supabase Edge Functions',
  'Cron jobs',
  'Stripe subscription billing',
  'White-label systems',
  'Chrome DevTools',
  'UI/UX principles',
  'CI/CD fundamentals',
]

const Skills = () => {
  const [filter, setFilter] = useState<(typeof skillCategories)[number]>('All')
  const [selected, setSelected] = useState<number | null>(null)
  const reduce = useReducedMotion()

  const close = () => {
    const index = selected
    setSelected(null)
    requestAnimationFrame(() => document.getElementById('skill-' + index)?.focus())
  }

  const current = selected !== null ? skills[selected] : null
  const detail = current ? inPractice(current.name) : null

  return (
    <section id="skills" className="section skills">
      <div className="section-marker">
        <span>02 — THE TOOLKIT</span>
        <span>MADE TO WORK TOGETHER</span>
      </div>
      <div className="skills-layout">
        <div className="skills-copy" data-reveal>
          <span className="eyebrow">CLEAN CODE. MODERN FRAMEWORKS.</span>
          <h2>
            The stack,
            <br />
            <em>in your pocket.</em>
          </h2>
          <p>
            The tools change. The intention doesn’t: make something useful, dependable, and a
            pleasure to use.
          </p>
          <div className="skill-note">
            <span aria-hidden="true">↗</span>
            <p>
              Every icon has a story.
              <br />
              <strong>Open one to see the work behind it.</strong>
            </p>
          </div>
          <div className="additional-skills">
            <span className="tiny-label">ALSO IN THE TOOLKIT</span>
            <ul>
              {additional.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skill-experience">
          <div className="filter-chips" aria-label="Filter technologies">
            {skillCategories.map((category) => (
              <button
                key={category}
                aria-pressed={filter === category}
                onClick={() => {
                  setFilter(category)
                  setSelected(null)
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skill-phone">
            <div className="phone-status">
              <span>9:41</span>
              <i aria-hidden="true" />
              <span aria-hidden="true">▮▮▮ ▰</span>
            </div>
            <div className="phone-home" data-lenis-prevent>
              <div className="phone-greeting">
                <span>BUILT FOR THE EVERYDAY.</span>
                <strong>
                  A pocketful
                  <br />
                  of possibilities.
                </strong>
                <small>{filter === 'All' ? 'My engineering toolkit' : `${filter} toolkit`}</small>
              </div>
              <div className="app-grid">
                {skills.map((skill, index) => {
                  const category = categoryOf(skill.name)
                  const dimmed = filter !== 'All' && filter !== category
                  return (
                    <button
                      key={skill.name}
                      id={'skill-' + index}
                      className={dimmed ? 'tech-app dimmed' : 'tech-app'}
                      onClick={() => setSelected(index)}
                    >
                      <span className={'app-icon family-' + category.toLowerCase()} aria-hidden="true">
                        <SkillIcon name={skill.name} icon={skill.icon} />
                      </span>
                      <span>{skill.name}</span>
                    </button>
                  )
                })}
              </div>
              <div className="phone-dock">
                <span aria-hidden="true">⌘</span>
                <p>
                  Tap a technology.
                  <br />
                  <strong>See what’s behind the icon.</strong>
                </p>
                <span aria-hidden="true">↗</span>
              </div>
            </div>

            <AnimatePresence>
              {current && detail && selected !== null && (
                <motion.div
                  key={selected}
                  className="skill-detail"
                  role="region"
                  aria-label={current.name + ' details'}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.2 }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') close()
                  }}
                >
                  <button autoFocus onClick={close} className="app-back">
                    ← Home screen
                  </button>
                  <span
                    className={'app-icon family-' + categoryOf(current.name).toLowerCase()}
                    aria-hidden="true"
                  >
                    <SkillIcon name={current.name} icon={current.icon} />
                  </span>
                  <span className="eyebrow">{categoryOf(current.name)}</span>
                  <h3>{current.name}</h3>
                  <p>{categoryBlurb[categoryOf(current.name)]}</p>
                  <div className="skill-project">
                    <span>IN PRACTICE</span>
                    <strong>{detail.label}</strong>
                    <a href={detail.href} onClick={() => setSelected(null)}>
                      Explore the work ↗
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="home-indicator" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
