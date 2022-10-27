import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { About  } from './components/About'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  )
}

export default App
