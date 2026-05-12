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
                <div className="text-[36px] mb-4">
                  {e.icon}
                </div>

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

          {/* Certifications Title */}
          <h3 className="font-syne font-bold text-[17px] mb-1.5">
            Certifications
          </h3>

          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {CERTS.map((c, i) => (
              <div
                key={c.name}
                className="bg-card border border-border rounded-xl p-5"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.6s ${0.4 + i * 0.1}s ease`,
                  borderLeft: `3px solid ${c.color}`
                }}
              >
                <div className="font-semibold text-[14px] mb-1 leading-[1.4]">
                  {c.name}
                </div>

                <div className="text-text2 text-[12px]">
                  {c.org}
                </div>

                <div
                  className="text-[12px] mt-1 font-semibold"
                  style={{ color: c.color }}
                >
                  {c.year}
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