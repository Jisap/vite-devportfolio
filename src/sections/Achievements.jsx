import { SectionHeader } from "../components/SectionHeader"
import useInView from "../hooks/useInView"
import { SKILLS } from "../data/skills"
import { TOOLS } from "../data/tools"
import { ACHIEVEMENTS } from "../data/achievements"



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

          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={a.title}
                className={`
                  bg-card border border-border rounded-xl p-6 flex gap-4 transition-all duration-500 ease-out hover:border-accent
                  hover:-translate-y-1 hover:shadow-lg
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                style={{
                  transitionDelay: `${i * 0.08}s`
                }}
              >
                {/* Icon */}
                <span className="text-3xl leading-none">
                  {a.icon}
                </span>

                {/* Content */}
                <div className="w-full">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-[syne] font-bold text-[15px]">
                      {a.title}
                    </h3>

                    <span className="text-[11px] text-accent bg-bg3 px-2 py-0.5 rounded-md whitespace-nowrap">
                      {a.year}
                    </span>
                  </div>

                  <p className="text-[13px] text-text2 leading-[1.6] mt-1">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Achievements