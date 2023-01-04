import { useState } from 'react';
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { About  } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './App.css'
import { JellyBall } from './components/Ball';

function App() {


  return (
    <div>
      <JellyBall />
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
