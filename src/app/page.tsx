import React from 'react'
import Hero6 from './components/Hero6'
import Hero from './components/Hero'

import Hero2 from './components/Hero2'
import Footer from './components/Footer'
import Testimonial from './components/Reviews'
import OurTeam from './components/ourTeam'
import StatsBanner from './components/StarBanner'
import AIReplacementCTA from './components/Banner'
import Services from './components/ServicesCard'

export default function page() {
  return (
    <div>
      <Hero />  
      <StatsBanner />
      <Hero2 />
      <Services />
      <Testimonial />
      <AIReplacementCTA />
      <OurTeam />
      <Hero6 />
    </div>
  )
}
