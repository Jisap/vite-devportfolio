import { MoveRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [typed, setTyped] = useState("");
  const titles = ["Full Stack Developer", "React Specialist", "Node.js Enginner", "Open Source Contributor"];
  const [ti, setTi] = useState(0); // indice del titulo actual

  // Ciclo de vida: Escribir → Pausar → Borrar → Siguiente Título.

  useEffect(() => {
    let i = 0, t = titles[ti], timeout;       // i = indice del caracter, t = titulo actual, timeout = tiempo del setTimeout

    const type = () => {
      if (i <= t.length) {                    // i va de 0 hasta t.length
        setTyped(t.slice(0, i));              // t.slice(0, i) va cortando el string de izquierda a derecha "F", "Fu", "Ful"...
        i++;
        timeout = setTimeout(type, 80);       // cada 80ms una letra
      } else {
        setTimeout(erase, 2000)               // espera 2s antes de borrar  
      }
    }

    const erase = () => {                     // borra de derecha a izquierda
      if (i >= 0) {
        setTyped(t.slice(0, i));
        i--;
        timeout = setTimeout(erase, 40);      // más rápido: 40ms
      } else {
        setTi(p => (p + 1) % titles.length)   // cambia al siguiente título
      }
    }

    timeout = setTimeout(type, 300);
    return () => clearTimeout(timeout);
  }, [ti]);

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

          <h2 className='text-[clamp(20px,3.5vw,36px)] font-semibold text-text2 mb-6 min-h-12.5 animate-[fadeUp_0.8s_0.15s_ease_both]'>
            {typed}<span className='cursor'></span>
          </h2>

          <p className='text-[17px] text-text2 max-w-150 mx-auto mb-10 leading-[1.8] animate-[fadeUp_0.8_0.3s_ease_both]'>
            I craft high-performace digital products with clean code and obsessive attention to detail. 6 + years turnbing complex problems into elegant solutions.
          </p>

          {/* Buttons */}
          <div className='flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_0.45s_ease_both]'>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({})}
              className='flex items-center bg-linear-to-br from-accent to-[#a865f7] text-white px-8 py-3.5 rounded-[10px] text-[15px] font-semibold font-syne transition-all duration-300 shadow-[0_4px_24px_rgba(108,99,255,0.3)] hover:translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.5)]'
            >
              View my work <MoveRight className='ms-3' />
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({})}
              className='bg-transparent border border-border text-text px-8 py-3.5 rounded-[10px] text-[15px] font-medium font-DM transition-all hover:border-accent hover:text-accent'
            >
              Contact me
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero