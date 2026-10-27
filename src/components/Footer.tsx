import { profile } from '../data/portfolio'

const Footer = () => (
  <footer className="site-footer">
    <a className="monogram" href="#home" aria-label="MD· — Back to top">
      MD<span>·</span>
    </a>
    <span>
      © {new Date().getFullYear()} {profile.shortName}
    </span>
    <a href="#home">Back to top ↑</a>
  </footer>
)

export default Footer
