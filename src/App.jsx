import { useState } from 'react'
import HeroSection from './components/HeroSection'
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import BlogSection from './components/BlogSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <HeroSection/>
      <About/>
      <Experience/>
      <BlogSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
