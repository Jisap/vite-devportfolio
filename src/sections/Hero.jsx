import React from 'react'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className='min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden'
      >
        {/* Abient orbs */}

        {/* grid bg */}
        <div className='absolute inset-0 bg-[linear-gradient(border)_1px,,linear-gradient(90deg,var(border)_1px,transparent_1px)] bg-size-[60px_60px] opacity-40 pointer-events-none' />

        <div className='max-w-225 text-center relative z-1'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-bg3 border boder-border rounded-full px-3 py-1.5 mb-7 text-[13px] text-text2'>
            <span className='w-2 h-2 rounded-full bg-[#43e8d8] shadow-[0_0_8px_#43e8d8]'></span>
            Available for new oportunities
          </div>

          {/* Title */}
          <h1 className='text-[clamp(44px,8vw,90px)] font-extrabold leading-[1.05] mb-5 animate-[fadeUp_0.8s_ease_forwards]'>
            Hi, I'm<span className='grad'>Alex Chen</span>
          </h1>
        </div>
      </section>
    </>
  )
}

export default Hero