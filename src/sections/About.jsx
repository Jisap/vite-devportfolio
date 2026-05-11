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


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About