import React from 'react'
import ScrollComponent from './pages/ScrollComponent'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollComponent />
      <About/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
