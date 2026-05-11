import { SectionHeader } from "../components/SectionHeader"
import { EXPERIENCE } from "../data/experience"
import useInView from "../hooks/useInView"



const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <section ref={ref} id="experience" className="py-25 px-[5%] bg-bg2">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="My Journey"
            title="Work Experience"
            inView={inView}
          />

          <div className="flex flex-col gap-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={exp.role + exp.co}
                className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* DOT */}
                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] z-1" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className="text-[13px] text-accent font-bold mb-1">{exp.period}</div>
                  <h3 className="text-[19px] font-black font-syne mb-1">{exp.role}</h3>
                  <div className="text-[14px] text-text2 font-medium mb-3">{exp.co}</div>
                </div>

                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <p className="text-text2 text-[14px] leading-relaxed mb-4 max-w-[500px] i % 2 === 0 ? '' : 'ml-auto'">
                    {exp.desc}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? '' : 'justify-end'}`}>
                    {exp.tags.map(t => (
                      <span key={t} className="text-[11px] font-bold bg-bg3 border border-border px-2 py-1 rounded text-text3 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience