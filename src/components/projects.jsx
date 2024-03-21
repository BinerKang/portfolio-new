import SectionHeading from './section-heading'
import { projectsData } from '../lib/data'
import { useSectionInView } from "../lib/hooks";
import Project from "./project";

const Projects = () => {
  const { ref } = useSectionInView("项 目", 0.5);
  return (
    <section 
      ref={ref} 
      id="projects" 
      className="scroll-mt-20 mb-28">
      <SectionHeading>我的项目</SectionHeading>

      <div>
        {
          projectsData.map((p, i) => (
            <Project key={i} {...p} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects