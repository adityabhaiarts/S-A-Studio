import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Apps from '../components/Apps'
import Feature from '../components/Feature'
import Arrivals from '../components/Arrivals'
import Comments from '../components/Comments'
import Faq from '../components/Faq'



const Home = () => {
  return (
    <div>
      <Hero />
      <Apps />
      <About />
      <Feature />
      <Arrivals />
      <Comments />
      <Faq />
    </div>
  )
}

export default Home
