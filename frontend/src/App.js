import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Technologies />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;