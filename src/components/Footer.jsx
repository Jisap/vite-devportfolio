import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer className='py-8 px-[5%] bg-bg2 border-t border-border'>
        <div className='max-w-275 mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Logo */}
          <span className='font-syne font-bold text-lg grad'>
            {"<Alex.dev />"}
          </span>

          {/* Copyright */}
          <p className='text-sm text-text2 text-center'>
            © {year} Alex Chen • All rights reserved
          </p>

          {/* Socials Links */}
          <div className='flex gap-4'>
            {["Github", "Linkedin", "X", "Instagram"].map((s) => (
              <a
                key={s}
                herf="#"
                className='text-sm text-text2 hover:text-accent transition'
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer