import React from 'react'
import useInView from '../hooks/useInView';
import aboutImg from '../assets/images/about-boy.png';

const About = () => {

  const { ref, inView } = useInView();

  return (
    <>
      <section
        id="about"
        ref={ref}
        className='py-25 px-[5%] bg-b2'
      >
        <div className='max-w-275 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          {/* Avatar side */}
          <div className={`
            flex justify-center transition-all duration-700
            ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
          >
            <div className='relative'>
              <div className='w-[320px] h-80 rounded-3xl bg-[linear-gradient(135deg,var(--accent),var(--acent2),var(--accent3))] p-0.75 animate-[pulse-glow_3s_ease_in_out_infinite]'>
                <div className='w-full h-full rounded-[22px] bg-bg3 flex items-center justify-center overflow-hidden'>
                  <img
                    src={aboutImg}
                    alt=""
                    className='w-full h-full object-cover rounded-[22px]'
                  />
                </div>
              </div>

              {/* floating badges */}
              {[
                { icon: "⚛️", text: "React Expert", top: "-16px", right: "-16px", bg: "#6c63ff" },
                { icon: "🚀", text: "6+ Years", bottom: "-16px", left: "-16px", bg: "#ff6584" },
              ].map((b) => (
                <div key={b.text} className="absolute flex items-center gap-2 text-[13px] font-semibold text-white rounded-xl px-3.5 py-2
                shadow-[0_4px_20px_rgba(0,0,0,0.3)] animate-[float_4s_ease-in-out_infinite]"
                  style={{
                    top: b.top,
                    bottom: b.bottom,
                    right: b.right,
                    left: b.left,
                    backgroundColor: b.bg,
                  }}
                >
                  {b.icon} {b.text}
                </div>
              ))
              }
            </div>
          </div>

          {/* Test side */}
          <div className={`
            transition-all duration-800 delay-200 
            ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
          >
            <div className='text-[13px] text-accent font-semibold tracking-[3px] uppercase mb-3'>
              About me
            </div>

            <h2 className='text-[clamp(28px,4vw,48px)] font-extrabold mb-5 leading-[1.15]'>
              Passionate about <br />
              <span className="grad">building things</span>
            </h2>

            <p className='text-text2 mb-4 leading-[1.9] text-[15px]'>
              I'm a Full Stack Developer based in Bangalore, India with 6+ years of
              experience designing and building scalable web applications. I specialize
              in React ecosystems and Node.js backends.
            </p>

            <p className='text-text2 mb-4 leading-[1.9] text-[15px]'>
              When I'm not coding, I contribute to open source, write technical articles,
              and speak at developer conferences. I believe great software is a blend of
              engineering rigor and thoughtful design.
            </p>

            <div className='grid grid-cols-2 gap-3 mb-7'>
              {
                [
                  ["📍", "Bangalore, India"],
                  ["🎓", "BITS Pilani, 2019"],
                  ["💼", "Open to Remote"],
                  ["📧", "alex@dev.io"],
                ].map((i, t) => (
                  <div
                    key={t}
                    className='flex items-center gap-2 text-[14px] text-text2'
                  >
                    <span>{i}</span>
                    <span>{t}</span>
                  </div>
                ))
              }
            </div>

            <a
              href="#"
              className='inline-flex items-center gap-2 bg-[linear-gradient(135deg,var(--accent),#a885f7)] text-white no-underline px-6 py-3 rounded-[10px] text-[14px] font-semibold font-syne'
            >
              ↓ Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About