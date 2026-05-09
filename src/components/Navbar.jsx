import { Menu, Moon, Sun } from "lucide-react"
import linkedin from "../assets/images/linkedin.png"
import { NAV } from "../data/nav"
import { useEffect, useState } from "react"



const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);     // Si el scroll es mayor a 50px la variable scrolled será true
    window.addEventListener("scroll", h)                  // Se escucha el evento scroll y se ejecuta la función h
    return () => window.removeEventListener("scroll", h)  // Se elimina el evento scroll al desmontar el componente
  }, []);

  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({          // Se desplaza suavemente hacia el elemento con el id especificado
      behavior: "smooth"
    })
    setOpen(false);                                       // Se cierra el menu
  }

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);


  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-1000 transition-all duration-300 px-[5%] 
          ${scrolled ? "bg-[rgba(10,10,15,0.9)] backdrop-blur-lg border-b border-(--border)" : "bg-transparent"}  
        `}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="font-[Syne] text-white font-extrabold text-[22px] grad">
            Alex.dev
          </span>

          <div className="flex items-center gap-2">
            {/* Desktop Nav */}
            <div className="hidden xl:flex gap-5">
              {NAV.map((n) => (
                <button
                  key={n}
                  onClick={() => scroll(n.toLowerCase())}
                  className="bg-none border-none text-text2 cursor-pointer px-3 py-1.5 rounded-md font-DM text-[13px] font-medium hover:text-accent transition-all duration-300"
                >
                  {n}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar