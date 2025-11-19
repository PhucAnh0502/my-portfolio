import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Project, Tech } from './components'
import StarCanvas from './components/3D/StarCanvas'


function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary text-white'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Project />
        <div className='relative z-0'>
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App