import { useEffect, useRef, useState } from 'react'
import { avatarCaptions, profile, type AvatarSection } from '../data/portfolio'

const sectionByElement: Record<string, AvatarSection> = {
  skills: 'skills',
  projects: 'work',
  contact: 'contact',
}

/**
 * Fixed-position guide that starts in the hero and docks into the bottom-right
 * corner as the page scrolls, then offers a short caption for each section.
 */
const AvatarGuide = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const guideRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useRef(false)

  const [section, setSection] = useState<AvatarSection>('hero')
  const [interacted, setInteracted] = useState(false)
  const [docked, setDocked] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [open, setOpen] = useState(false)

  // Any first interaction allows the guide to speak on its own.
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.current = mq.matches
    const onChange = () => {
      reducedMotion.current = mq.matches
    }
    mq.addEventListener('change', onChange)

    const onFirst = (event: Event) => {
      if (event instanceof KeyboardEvent && !['Enter', ' ', 'ArrowDown', 'PageDown', 'Tab'].includes(event.key)) {
        return
      }
      if (!mq.matches) setInteracted(true)
    }
    window.addEventListener('pointerdown', onFirst, { once: true })
    window.addEventListener('keydown', onFirst)

    return () => {
      mq.removeEventListener('change', onChange)
      window.removeEventListener('pointerdown', onFirst)
      window.removeEventListener('keydown', onFirst)
    }
  }, [])

  // Scroll-driven docking: interpolate between the hero slot and the corner.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const home = homeRef.current
      const guide = guideRef.current
      const hero = document.getElementById('home')
      if (!home || !guide || !hero) return

      const rect = home.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, scrollY / (0.72 * hero.offsetHeight)))
      const small = innerWidth < 768
      const dockW = small ? 106 : 132
      const dockH = small ? 154 : 188
      const t = reducedMotion.current ? Number(progress > 0.95) : progress
      const lerp = (from: number, to: number) => from + (to - from) * t

      guide.style.position = 'fixed'
      guide.style.left = lerp(rect.left, innerWidth - dockW - 24) + 'px'
      guide.style.top = lerp(rect.top, innerHeight - dockH - 24) + 'px'
      guide.style.width = lerp(rect.width, dockW) + 'px'
      guide.style.height = lerp(rect.height, dockH) + 'px'
      guide.style.setProperty('--dock-progress', String(progress))
      setDocked(progress > 0.92)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  // Announce each section the first time it scrolls into view.
  useEffect(() => {
    if (!interacted || dismissed || reducedMotion.current) return
    const seen = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id)
            setSection(sectionByElement[id])
            setOpen(true)
          }
        }
      },
      { rootMargin: '-15% 0px -45% 0px', threshold: 0 },
    )
    Object.keys(sectionByElement).forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [interacted, dismissed])

  // Once docked, let the caption fade away so it never sits over page content.
  useEffect(() => {
    if (!open || !docked) return
    const timer = setTimeout(() => setOpen(false), 7000)
    return () => clearTimeout(timer)
  }, [open, docked, section])

  const className = ['avatar-guide', docked && 'is-docked', dismissed && docked && 'is-dismissed']
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={homeRef} className="avatar-home">
      <div ref={guideRef} className={className} aria-label={`${profile.firstName}’s guide`}>
        <div className="avatar-figure">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={768}
            height={1152}
            draggable={false}
          />
        </div>
        {docked && (
          <button className="avatar-close" aria-label="Close guide" onClick={() => setDismissed(true)}>
            ×
          </button>
        )}
        <div className="avatar-controls">
          <button
            aria-expanded={open}
            onClick={() => {
              setOpen(!open)
              setInteracted(true)
            }}
          >
            A quick hello <span aria-hidden="true">↗</span>
          </button>
        </div>
        {open && <p className="avatar-caption">{avatarCaptions[section]}</p>}
      </div>
    </div>
  )
}

export default AvatarGuide
