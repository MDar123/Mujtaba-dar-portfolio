import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * Page-level motion: Lenis smooth scroll, scroll-reveals, the drawn timeline
 * line, count-up numbers, the pinned horizontal project rail, the scroll
 * progress bar and the hero ghost-text parallax.
 */
const MotionController = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      let lenis: Lenis | undefined
      const tick = (time: number) => lenis?.raf(time * 1000)

      if (matchMedia('(pointer:fine)').matches) {
        lenis = new Lenis({ duration: 1.05, anchors: true })
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add(tick)
      }

      document.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24 },
          {
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 94%', once: true },
          },
        )
      })

      gsap.fromTo(
        '.timeline-draw',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: true,
          },
        },
      )

      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const counter = { value: 0 }
        gsap.to(counter, {
          value: Number(el.dataset.count),
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 95%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value))
          },
        })
      })

      return () => {
        gsap.ticker.remove(tick)
        lenis?.destroy()
      }
    })

    mm.add('(min-width: 1100px) and (prefers-reduced-motion: no-preference)', () => {
      const rail = document.querySelector<HTMLElement>('.work-rail')
      const window_ = document.querySelector<HTMLElement>('.work-window')
      if (!rail || !window_) return

      window_.classList.add('is-pinned')
      const distance = () => Math.max(0, rail.scrollWidth - window_.clientWidth)

      const tween = gsap.to(rail, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          id: 'work-horizontal',
          trigger: '.work-stage',
          start: 'top 95px',
          end: () => '+=' + distance(),
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })

      // Keyboard focus on an off-screen card scrolls the page to reveal it.
      const onFocusIn = (event: FocusEvent) => {
        const card = (event.target as HTMLElement).closest<HTMLElement>('.project-card')
        const st = tween.scrollTrigger
        if (!card || !st) return
        const progress = Math.min(1, card.offsetLeft / distance())
        window.scrollTo({ top: st.start + (st.end - st.start) * progress, behavior: 'instant' })
      }
      rail.addEventListener('focusin', onFocusIn)

      return () => {
        rail.removeEventListener('focusin', onFocusIn)
        window_.classList.remove('is-pinned')
      }
    })

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      document.documentElement.style.setProperty(
        '--scroll-progress',
        String(max > 0 ? scrollY / max : 0),
      )
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    const ghost = document.querySelector('.hero-ghost')
    const home = document.querySelector('#home')
    const onPointerMove = (event: Event) => {
      const e = event as PointerEvent
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || e.pointerType !== 'mouse') return
      gsap.to(ghost, {
        x: (e.clientX / innerWidth - 0.5) * 14,
        y: (e.clientY / innerHeight - 0.5) * 8,
        duration: 0.8,
        overwrite: true,
      })
    }
    home?.addEventListener('pointermove', onPointerMove)

    // Images and fonts change section heights after first paint.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)
    ScrollTrigger.refresh()

    return () => {
      mm.revert()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('load', refresh)
      home?.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return null
}

export default MotionController
