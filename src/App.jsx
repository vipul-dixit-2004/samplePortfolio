import { useState } from 'react'
import HeroSection from './components/HeroSection'
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <HeroSection/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
