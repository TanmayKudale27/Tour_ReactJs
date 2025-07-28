import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './pages/Hero';
import WhyUs from './pages/WhyUs';
import FeaturedDestinations from './pages/FeaturedDestinations';
import FeaturedTours from './pages/FeaturedTours';
import Testimonials from './pages/TestimonialsHome';
import CallToAction from './pages/CallToAction';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/destinations" element={<FeaturedDestinations />} />
        <Route path="/tours" element={<FeaturedTours />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/call-to-action" element={<CallToAction />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
