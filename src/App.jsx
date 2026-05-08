import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

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
    </>
  )
}

export default App