import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import ProjectsSection from './components/ProjectsSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
