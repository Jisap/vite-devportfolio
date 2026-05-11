import React from 'react'

export const SectionHeader = ({ label, title, inView, children }) => {
  return (
    <>
      <div className='flex flex-start space-between mb-48 flex-wrap gap-16'>
        <div>
          <div className='text-[12px] text-accent font-semibold tracking-wide uppercase mb-8'>
            {label}
          </div>

          <h2 className={`
            text-[clamp(26px,4vw,48px)] font-extrabold transition-all duration-600 ease-out 
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`
          }
          >
            <span className='grad'>
              {title.split(" ")[0]}
            </span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>
        </div>

        {children}
      </div>
    </>
  )
}
