import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './pages/Hero';
import WhyUs from './pages/WhyUs';
import FeaturedDestinations from './pages/FeaturedDestinations';
import FeaturedTours from './pages/FeaturedTours';
import Testimonials from './pages/TestimonialsHome';
import CallToAction from './pages/CallToAction';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <FeaturedDestinations />
      <FeaturedTours />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
