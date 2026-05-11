import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';

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
    </>
  )
}

export default App