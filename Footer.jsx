import React from 'react';
import { Instagram, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">UpBio</h3>
            <p className="body-medium text-white/70 max-w-md mb-6">
              Transforming businesses through professional digital identities. We create stunning websites that drive real results.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://ig.me/m/upbio.pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 group"
              >
                <Instagram className="text-white group-hover:text-black" size={24} />
              </a>
              <a 
                href="https://ig.me/m/upbio.pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 group"
              >
                <Mail className="text-white group-hover:text-black" size={24} />
              </a>
              <a 
                href="https://ig.me/m/upbio.pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 group"
              >
                <Globe className="text-white group-hover:text-black" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="body-medium text-white/70 hover:text-brand-primary transition-colors duration-300">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="body-medium text-white/70 hover:text-brand-primary transition-colors duration-300">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="body-medium text-white/70 hover:text-brand-primary transition-colors duration-300">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="body-medium text-white/70 hover:text-brand-primary transition-colors duration-300">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3 text-white mb-6">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://ig.me/m/upbio.pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="body-medium text-white/70 hover:text-brand-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Instagram size={18} />
                  Message Us
                </a>
              </li>
              <li className="body-medium text-white/70">
                Available 24/7 for consultations
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-white/60">
            © {new Date().getFullYear()} UpBio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="body-small text-white/60 hover:text-brand-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="body-small text-white/60 hover:text-brand-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;