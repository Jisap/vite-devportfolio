import { MoveRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [typed, setTyped] = useState("");
  const titles = ["Full Stack Developer", "React Specialist", "Node.js Engineer", "Open Source Contributor"];
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
        <div className='absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.12),transparent_70%)] pointer-events-none'></div>
        <div className='absolute bottom-[20%] right-[5%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,101,132,0.1),transparent_70%)] pointer-events-none'></div>
        <div className='absolute top-[50%] right-[20%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(67,232,216,0.08),transparent_70%)] pointer-events-none'></div>

        {/* grid bg */}
        <div className='absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none' />

        <div className='max-w-[900px] text-center relative z-1'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-bg3 border border-border rounded-full px-3 py-1.5 mb-7 text-[13px] text-text2'>
            <span className='w-2 h-2 rounded-full bg-[#43e8d8] shadow-[0_0_8px_#43e8d8]'></span>
            Available for new opportunities
          </div>

          {/* Title */}
          <h1 className='text-[clamp(44px,8vw,90px)] font-extrabold leading-[1.05] mb-5 animate-[fadeUp_0.8s_ease_forwards]'>
            Hi, I'm<span className='grad'>Alex Chen</span>
          </h1>

          <h2 className='text-[clamp(20px,3.5vw,36px)] font-semibold text-text2 mb-6 min-h-[50px] animate-[fadeUp_0.8s_0.15s_ease_both]'>
            {typed}<span className='cursor'></span>
          </h2>

          <p className='text-[17px] text-text2 max-w-[600px] mx-auto mb-10 leading-[1.8] animate-[fadeUp_0.8s_0.3s_ease_both]'>
            I craft high-performance digital products with clean code and obsessive attention to detail. 6+ years turning complex problems into elegant solutions.
          </p>

          {/* Buttons */}
          <div className='flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_0.45s_ease_both]'>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({})}
              className='flex items-center bg-linear-to-br from-accent to-[#a865f7] text-white px-8 py-3.5 rounded-[10px] text-[15px] font-semibold 
              font-syne transition-all duration-300 shadow-[0_4px_24px_rgba(108,99,255,0.3)] hover:translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.5)]
              cursor-pointer'
            >
              View my work <MoveRight className='ms-3' />
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({})}
              className='bg-transparent border border-border text-text px-8 py-3.5 rounded-[10px] text-[15px] font-medium font-DM transition-all 
              hover:border-accent hover:text-accent cursor-pointer'
            >
              Contact me
            </button>
          </div>

          {/* Stats */}
          <div className='flex gap-8 justify-center mt-16 flex-wrap animate-[fadeUp_0.8s_0.6s_ease_both]'>
            {[["6+", "years Exp"], ["50+", "Projects"], ["5k+", "Github Stars"], ["80k", "Blog Readers"]].map(([n, label]) => (
              <div key={label} className='text-center'>
                <div className='text-[28px] font-extrabold font-syne grad'>{n}</div>
                <div className='text-[12px] text-text2 mt-0.5'>{label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero