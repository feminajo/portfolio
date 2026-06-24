import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { CommandPalette } from './components/layout/CommandPalette'
import { FloatingBackground } from './components/ui/FloatingBackground'
import { Hero } from './components/sections/Hero'
import { CareerTimeline } from './components/sections/CareerTimeline'
import { Projects } from './components/sections/Projects'
import { SkillGalaxy } from './components/sections/SkillGalaxy'
import { WhyHireMe } from './components/sections/WhyHireMe'
import { EngineeringMindset } from './components/sections/EngineeringMindset'
import { Contact } from './components/sections/Contact'
import { StructuredData } from './components/seo/StructuredData'
import { useCommandPalette } from './hooks/useCommandPalette'

function App() {
  const { isOpen, close } = useCommandPalette()

  return (
    <>
      <StructuredData />
      <FloatingBackground />
      <Navbar />
      <main>
        <Hero />
        <CareerTimeline />
        <SkillGalaxy />
        <WhyHireMe />
        <Projects />
        <EngineeringMindset />
        <Contact />
      </main>
      <Footer />
      <CommandPalette isOpen={isOpen} onClose={close} />
    </>
  )
}

export default App
