import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/25' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-[7.6923%] h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/upbio-logo.png" 
            alt="UpBio" 
            className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
          <a 
            href="https://instagram.com/upbio.pro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/25 animate-in slide-in-from-top">
          <nav className="flex flex-col p-6 gap-4">
            <button onClick={() => scrollToSection('about')} className="nav-link text-left py-2">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link text-left py-2">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link text-left py-2">Testimonials</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link text-left py-2">Pricing</button>
            <a 
              href="https://instagram.com/upbio.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;