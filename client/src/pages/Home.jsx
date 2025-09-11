import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Apps from '../components/Apps'
import Feature from '../components/Feature'
import Arrivals from '../components/Arrivals'
import Faq from '../components/Faq'



const Home = () => {
  return (
    <div>
      <Hero />
      <Apps />
      <About />
      <Feature />
      <Arrivals />
      <Faq />
    </div>
  )
}

export default Home
