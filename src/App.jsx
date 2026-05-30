import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Hero />
      <About />
      <Projects />
      <Vision />
      <Sustainability />
      <Footer />
    </div>
  );
}
