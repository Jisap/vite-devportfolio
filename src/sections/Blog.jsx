import { SectionHeader } from "../components/SectionHeader"
import useInView from "../hooks/useInView"
import { BLOGS } from "../data/blog"
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";



const Blog = () => {
  const { ref, inView } = useInView();
  const [idx, setIdx] = useState(0);

  const visible = 3;
  const max = BLOGS.length - visible;

  return (
    <>
      <section ref={ref} id="blog" className="py-25 px-[5%] bg-bg2">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Writing"
            title="Blog Articles"
            inView={inView}
          >

            <div className="flex gap-2">
              <button
                onClick={() => setIdx(Math.max(0, idx - 1))}
                className={`
                w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-bg3 transition-all duration-300
                ${idx === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]"}
              `}
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={() => setIdx(Math.min(max, idx + 1))}
                className={`
                w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-bg3 transition-all duration-300
                ${idx === max ? "opacity-30 cursor-not-allowed" : "hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]"}
              `}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </SectionHeader>

          {/* slider */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${idx * (320 + 24)}px)` }}
            >
              {BLOGS.map((b, i) => (
                <div
                  key={b.title}
                  className={`
                    min-w-[320px] shrink-0 bg-card border border-border rounded-2xl overflow-hidden cursor-pointer
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Top Gradient Bar */}
                  <div
                    className="h-1.25"
                    style={{ background: `linear-gradient(90deg, ${b.color},${b.color}66)` }}
                  />

                  {/* Icon Area */}
                  <div
                    className="h-32.5 flex items-center justify-center text-4xl"
                    style={{ background: `linear-gradient(135deg, ${b.color}22, ${b.color}08)` }}
                  >
                    {["💬", "📋", "🛒", "📊", "🔐", "📌"][i]}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex gap-2 mb-3 items-center">
                      <span
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                        style={{ background: b.color + "15", color: b.color, border: `1px solid ${b.color}30` }}
                      >
                        {b.tag}
                      </span>

                      <span className="text-[12px] text-text2 flex items-center gap-1">
                        ⏱ {b.bad}
                      </span>
                    </div>

                    <h3 className="text-[syne] font-bold text-[16px] leading-[1.4] mb-2">
                      {b.title}
                    </h3>

                    <p className="text-[12px] text-text2 ">
                      {b.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              {Array.from({ length: BLOGS.length - visible + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="group relative py-4 focus:outline-none"
                >
                  <div className={`
                    h-1.5 rounded-full transition-all duration-500 ease-out
                    ${i === idx ? "w-10 bg-accent shadow-[0_0_12px_rgba(var(--accent-rgb),0.4)]" : "w-3 bg-border group-hover:bg-text2/40"}
                  `} />
                  
                  {/* Subtle active indicator circle */}
                  {i === idx && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[11px] font-bold text-text2/40 uppercase tracking-[0.2em]">
              <span className={idx === 0 ? "text-text1/20" : "text-text1"}>0{idx + 1}</span>
              <div className="w-8 h-px bg-border" />
              <span>0{BLOGS.length - visible + 1}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog