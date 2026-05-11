import { PROJECTS } from "../data/projects";
import useInView from "../hooks/useInView";
import { SectionHeader } from "../components/SectionHeader";

const Projects = () => {

  const { ref, inView } = useInView()

  return (
    <>
      <section ref={ref} id="projects" className="py-25 px-[5%] bg-bg2">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            inView={inView}
          />

          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col cursor-pointer relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(30px)",
                  transition: `all 0.6s ${i * 0.1}s ease`
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = p.color + "66";
                }}

                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {/* Top bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg,${p.color},${p.color}88)`
                  }}
                />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{
                        background: p.color + "22",
                        border: `1px solid ${p.color}44`
                      }}
                    >
                      {["💬", "📋", "🛒", "📊", "🔐", "📌"][i]}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={p.gh}
                        target="_blank"
                        className="bg-bg3 border border-border rounded-md w-8 h-8 flex items-center justify-center text-[14px] text-text2 hover:text-accent transition-colors no-underline"
                      >
                        ⬡
                      </a>

                      <a
                        href={p.live}
                        target="_blank"
                        className="bg-bg3 border border-border rounded-md w-8 h-8 flex items-center justify-center text-[14px] text-text2 hover:text-accent transition-colors no-underline"
                      >
                        ↗
                      </a>
                    </div>
                  </div>

                  <h3 className="font-syne font-black text-[18px] mb-2">
                    {p.title}
                  </h3>

                  <p className="text-text2 text-[14px] leading-relaxed mb-4 line-clamp-2">
                    {p.desc}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-wider text-text3 bg-bg2 px-2 py-1 rounded"
                        style={{
                          background: p.color + "15",
                          color: p.color,
                          border: `1px solid ${p.color}33`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Linkedin CTA */}
                <div className="px-6 py-3 border-t border-border">
                  <a
                    href="https://linkeding.com"
                    target="_blank"
                    className="flex items-center gap-1.5 text-[12px] text-text2 no-underline"
                  >
                    <span className="w-4 h-4 bg-[#0077b5] rounded-[3px] flex items-center justify-center text-[9px] font-bold text-white">in</span>
                    View on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects