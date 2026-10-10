import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const links: [string, string][] = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Work'],
  ['experience', 'Experience'],
  ['services', 'Services'],
  ['contact', 'Contact'],
]

const Header = () => {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      for (const [id] of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 0.42 * innerHeight) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-header">
      <a href="#home" className="monogram" aria-label={`MD· — ${profile.name} home`}>
        MD<span>·</span>
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? 'Menu: close navigation' : 'Menu: open navigation'}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        Menu <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <nav
        id="navigation"
        className={open ? 'pill-nav is-open' : 'pill-nav'}
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setOpen(false)
            document.querySelector<HTMLElement>('.menu-toggle')?.focus()
          }
        }}
      >
        {links.map(([id, label]) => (
          <a
            key={id}
            href={'#' + id}
            aria-current={active === id ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="header-note">
        <span /> Let’s make it happen ↗
      </a>
    </header>
  )
}

export default Header
