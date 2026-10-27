import { useEffect, useRef, useState } from 'react'
import { experiences, profile, projects } from '../data/portfolio'
import { skills } from '../utils/Constants'

interface DragController {
  start: (x: number, y: number) => void
  move: (x: number, y: number) => void
  end: () => void
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Hanging ID badge: swings on a cord (Matter.js), drags and flips on click. */
const Badge = () => {
  const sceneRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const cordRef = useRef<SVGLineElement>(null)
  const dragRef = useRef<DragController | null>(null)
  const dragged = useRef(false)
  const origin = useRef({ x: 0, y: 0 })
  const [flipped, setFlipped] = useState(false)

  const current = experiences[0]

  useEffect(() => {
    const scene = sceneRef.current
    const body = bodyRef.current
    if (!scene || !body) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let cleanup = () => {}
    let disposed = false

    async function start() {
      if (reduced.matches || !scene || !body) return
      const { Engine, Bodies, Body, Constraint, Composite } = await import('matter-js')
      if (disposed) return

      const engine = Engine.create()
      engine.gravity.y = 0.75
      const card = Bodies.rectangle(0, 190, 220, 285, { frictionAir: 0.07, restitution: 0.2 })
      const tether = Constraint.create({
        pointA: { x: 0, y: 0 },
        bodyB: card,
        pointB: { x: 0, y: -142 },
        length: 48,
        stiffness: 0.1,
        damping: 0.1,
      })
      Composite.add(engine.world, [card, tether])
      Body.setAngle(card, -0.075)

      let pull: ReturnType<typeof Constraint.create> | null = null
      let frame = 0
      let visible = false
      let frames = 0
      let holding = false

      const stop = () => {
        cancelAnimationFrame(frame)
        frame = 0
      }

      const step = () => {
        frame = 0
        if (!visible || document.hidden) return
        Engine.update(engine, 1000 / 60)
        body.style.transform = `translate(${card.position.x}px,${card.position.y - 190}px) rotate(${card.angle}rad)`
        const cord = cordRef.current
        if (cord) {
          cord.setAttribute('x2', String(160 + card.position.x + 142 * Math.sin(card.angle)))
          cord.setAttribute('y2', String(card.position.y - 142 * Math.cos(card.angle)))
        }
        frames++
        if (holding || frames < 180 || Math.abs(card.angularVelocity) > 1e-4 || card.speed > 0.01) {
          frame = requestAnimationFrame(step)
        }
      }

      const wake = () => {
        if (frame || !visible || document.hidden) return
        frames = 0
        frame = requestAnimationFrame(step)
      }

      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        if (visible) wake()
        else stop()
      })
      observer.observe(scene)

      const onVisibility = () => (document.hidden ? stop() : wake())
      document.addEventListener('visibilitychange', onVisibility)

      dragRef.current = {
        start: (x, y) => {
          const r = scene.getBoundingClientRect()
          pull = Constraint.create({
            pointA: { x: x - r.left - r.width / 2, y: y - r.top },
            bodyB: card,
            stiffness: 0.08,
            damping: 0.2,
            length: 0,
          })
          Composite.add(engine.world, pull)
          holding = true
          wake()
        },
        move: (x, y) => {
          if (!pull) return
          const r = scene.getBoundingClientRect()
          pull.pointA = { x: x - r.left - r.width / 2, y: y - r.top }
        },
        end: () => {
          if (pull) Composite.remove(engine.world, pull)
          pull = null
          holding = false
          wake()
        },
      }

      cleanup = () => {
        stop()
        observer.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        Composite.clear(engine.world, false)
        Engine.clear(engine)
        dragRef.current = null
        body.style.transform = ''
      }
    }

    // Only boot the physics once the badge is near the viewport.
    const lazy = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          lazy.disconnect()
        }
      },
      { rootMargin: '100px' },
    )
    lazy.observe(scene)

    const onMotionChange = () => {
      cleanup()
      if (!reduced.matches) start()
    }
    reduced.addEventListener('change', onMotionChange)

    return () => {
      disposed = true
      lazy.disconnect()
      cleanup()
      reduced.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <div className="badge-column">
      <div className="badge-scene" ref={sceneRef}>
        <div className="lanyard" aria-hidden="true">
          {profile.shortName.toUpperCase()} · {profile.role.toUpperCase()}
        </div>
        <svg className="badge-cord" viewBox="0 0 320 390" aria-hidden="true">
          <line ref={cordRef} x1="160" y1="0" x2="160" y2="48" stroke="currentColor" strokeWidth="3" />
        </svg>
        <div
          ref={bodyRef}
          className="badge-body"
          onClick={() => {
            if (!dragged.current) setFlipped((f) => !f)
          }}
          onPointerDown={(e) => {
            if (e.button !== 0) return
            origin.current = { x: e.clientX, y: e.clientY }
            dragged.current = false
            e.currentTarget.setPointerCapture(e.pointerId)
            dragRef.current?.start(e.clientX, e.clientY)
          }}
          onPointerMove={(e) => {
            if (!e.currentTarget.hasPointerCapture(e.pointerId)) return
            if (Math.hypot(e.clientX - origin.current.x, e.clientY - origin.current.y) > 6) {
              dragged.current = true
            }
            dragRef.current?.move(e.clientX, e.clientY)
          }}
          onPointerUp={(e) => {
            dragRef.current?.end()
            e.currentTarget.releasePointerCapture(e.pointerId)
          }}
          onPointerCancel={() => dragRef.current?.end()}
        >
          <button
            className={'badge-flip ' + (flipped ? 'is-flipped' : '')}
            aria-pressed={flipped}
            onKeyDown={() => {
              dragged.current = false
            }}
          >
            <span className="sr-only">{flipped ? 'Flip to badge front' : 'Flip to career stats'}</span>
            <span className="badge-face badge-front" aria-hidden={flipped}>
              <span className="badge-top">
                <b>FULL STACK</b>
                <small>DEVELOPER</small>
              </span>
              <span className="badge-photo">
                <img src={profile.photo} alt="" width={170} height={150} loading="lazy" draggable={false} />
              </span>
              <strong>{profile.shortName}</strong>
              <span>{current.title.toUpperCase()}</span>
              <span className="badge-footer">
                <i className="barcode" />
                <small>MD · PORTFOLIO ID</small>
              </span>
            </span>
            <span className="badge-face badge-back" aria-hidden={!flipped}>
              <span className="eyebrow">THE SHORT VERSION</span>
              <strong>
                Made of
                <br />
                experience.
              </strong>
              <span className="badge-stats">
                <b>
                  {pad(skills.length)}
                  <small>TECHNOLOGIES</small>
                </b>
                <b>
                  {pad(projects.length)}
                  <small>PROJECTS</small>
                </b>
              </span>
              <span>{experiences.length} ROLES · SINCE 2022</span>
              <small>Code and build something every day.</small>
            </span>
          </button>
        </div>
      </div>
      <p className="badge-hint">
        <span aria-hidden="true">↔</span> Drag a little. Click to flip.
      </p>
    </div>
  )
}

export default Badge
