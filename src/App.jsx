import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { About  } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
