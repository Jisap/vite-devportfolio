import { SectionHeader } from "../components/SectionHeader"
import useInView from "../hooks/useInView"
import { SKILLS } from "../data/skills"
import { TOOLS } from "../data/tools"

const Skills = () => {

  const { ref, inView } = useInView()

  return (
    <>
      <section ref={ref}>
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Tech Stack"
            title="Skills & Technologies"
            inView={inView}
          />
        </div>
      </section>
    </>
  )
}

export default Skills