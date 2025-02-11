import React from 'react'
import Services from './components/Services'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'
import Hero6 from './components/Hero6'
import Hero from './components/Hero'
import Header from './components/Header'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Footer from './components/Footer'
import Burger from './components/Burger'
import Reviews from './components/Reviews'
import OurTeam from './components/ourTeam'

export default function page() {
  return (
    <div>
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Services />
      <Reviews />
      <OurTeam />
      <Hero6 />
      <Footer />
    </div>
  )
}
