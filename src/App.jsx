import Intro from "./components/Intro"
import SectionDivider from "./components/section-divider"
import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Contact from "./components/contact"

function App() {

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> 
    </main>
  )
}

export default App
