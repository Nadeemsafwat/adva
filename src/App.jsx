import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompanyStory from './components/CompanyStory';
import Leadership from './components/Leadership';
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
      <CompanyStory />
      <Leadership />
      <Projects />
      <Vision />
      <Sustainability />
      <Footer />
    </div>
  );
}
