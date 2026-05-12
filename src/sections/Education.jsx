import { SectionHeader } from "../components/SectionHeader"
import useInView from "../hooks/useInView"
import { SKILLS } from "../data/skills"
import { TOOLS } from "../data/tools"
import { EDUCATION } from "../data/education"
import { CERTS } from "../data/certs"


const Education = () => {

  const { ref, inView } = useInView();


  return (
    <>
      <section id="education" ref={ref} className="py-25 px-[5%]">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Academic"
            title="Education & Certifications"
            inView={inView}
          />
        </div>
      </section>
    </>
  )
}

export default Education