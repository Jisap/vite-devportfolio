import { SectionHeader } from "../components/SectionHeader"
import useInView from "../hooks/useInView"
import { SKILLS } from "../data/skills"
import { TOOLS } from "../data/tools"



const Achievements = () => {

  const { ref, inView } = useInView();

  return (
    <>
      <section id="achievements" ref={ref} className="py-25 px-[5%]">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Milestones"
            title="Achievements"
            inView={inView}
          />
        </div>
      </section>
    </>
  )
}

export default Achievements