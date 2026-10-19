import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MotionController from './components/MotionController'
import ProjectDetail from './components/ProjectDetail'

const Home = () => {
  const { hash } = useLocation()

  // Coming back from a project page lands on "/#projects"; jump to that section
  // once the page (and its pinned scroll triggers) has laid out.
  useEffect(() => {
    document.title = 'Mujtaba Dar Portfolio'
    if (!hash) return
    const frame = requestAnimationFrame(() =>
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' }),
    )
    return () => cancelAnimationFrame(frame)
  }, [hash])

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <div className="scroll-progress" aria-hidden="true" />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
      <MotionController />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
