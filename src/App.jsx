import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';

function App() {

  const [theme, setTheme] = useState('dark');

  const toggle = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar
        theme={theme}
        toggle={toggle}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </>
  )
}

export default App