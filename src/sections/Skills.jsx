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

          <div className="grid gap-6 mb-12 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
            {SKILLS.map((s, si) => (
              <div
                key={s.cat}
                className="bg-card border border-border rounded-2xl p-6"
                style={{
                  opacity: inView ? 1 : 0,
                  tranform: inView ? "none" : "translateY(30px)",
                  transition: `all 0.6s ${si * 0.1}s ease`
                }}
              >
                <h3 className="font-syne font-bold mb-5 text-accent text-[15px] uppercase tracking-[2px]">
                  {s.cat}
                </h3>

                {s.items.map((items) => (
                  <div key={items.n} className="mb-4">
                    <div className="flex justify-between mb-1.5 text-[14px]">
                      <span className="font-medium">
                        {items.n}
                      </span>

                      <span className="text-tex2">
                        {items.l}%
                      </span>
                    </div>

                    <div className="h-1.25 bg-bg rounded overflow-hidden">
                      <div className="h-full rounded"
                        style={{
                          with: inView ? `${items.l}%` : "0%",
                          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                          transition: `width 1.2s ${si * 0.15 + 0.3}s cubic-bezier(0.4,0.2,1)`,
                          transformOrigin: "left"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* TOOLS */}
          <div className="bg-bg2 border border-border rounded-2xl p-7">
            <div className="text-13px text-text2 mb-4 font-medium">
              Tools & Platforms
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills