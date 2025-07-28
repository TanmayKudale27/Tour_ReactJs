import React from 'react'
import Hero from './Hero'
import WhyUs from './WhyUs'
import FeaturedDestinations from './FeaturedDestinations'
import FeaturedTours from './FeaturedTours'
import Testimonials from './TestimonialsHome'
import CallToAction from './CallToAction'

function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <FeaturedDestinations />
      <FeaturedTours />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default Home