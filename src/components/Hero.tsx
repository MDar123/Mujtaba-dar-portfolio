import AvatarGuide from './AvatarGuide'
import { profile } from '../data/portfolio'

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-ghost" aria-hidden="true" />
    <div className="hero-topnote">
      <span className="status-dot" /> OPEN TO NEW PROJECTS.
    </div>

    <AvatarGuide />

    <div className="hero-copy">
      <p className="eyebrow">{profile.name.toUpperCase()} · {profile.role.toUpperCase()}</p>
      <h1>
        <span className="sr-only">{profile.name} — </span>
        Senior Full
        <br />
        Stack Web
        <br />
        <em>Developer.</em>
      </h1>
      <p className="hero-tagline">
        Clean code. Responsive interfaces.
        <br /> <strong>Great web experiences.</strong>
      </p>
      <div className="hero-actions">
        <a className="button primary" href="#projects">
          Explore work <span>→</span>
        </a>
        <a className="text-link" href="#contact">
          Let’s talk ↗
        </a>
        <a
          className="text-link"
          href={profile.resume}
          download="Mujtaba_Dar_Frontend_Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé ↓
        </a>
      </div>
    </div>

    <div className="hero-aside">
      <span className="tiny-label">
        FROM FIGMA DESIGN
        <br />
        TO PRODUCTION CODE.
      </span>
      <p>
        Thoughtful on the outside.
        <br />
        Powerful underneath.
      </p>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        ↓
      </a>
    </div>

    <div className="hero-bottom">
      <span>REACT / ANGULAR / NEXT.JS</span>
      <span>BUILDING FOR THE WEB. ONE PROJECT AT A TIME.</span>
      <span>SCROLL TO MEET ME ↓</span>
    </div>
  </section>
)

export default Hero
