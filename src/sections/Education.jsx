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

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {EDUCATION.map((e, i) => (
              <div
                key={e.cat}
                className="bg-card border border-border rounded-2xl p-7"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.6s ${i * 0.1}s ease`
                }}
              >
                <h3 className="font-syne font-bold text-[17px] mb-1.5">
                  {e.deg}
                </h3>

                <div className="text-accent text-[14px] mb-1">
                  {e.inst}
                </div>

                <div className="text-text2 text-[13px]">
                  {e.period} • {e.gpa}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Education