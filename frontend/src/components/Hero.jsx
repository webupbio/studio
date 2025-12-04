import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Netflix-style background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
          backgroundSize: '100% 100%'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-[7.6923%] py-32 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="display-huge mb-6 text-white">
            Transform Your Business<br />With A Professional<br />
            <span className="text-brand-primary">Digital Identity</span>
          </h1>
          
          <p className="body-large text-white/85 max-w-3xl mx-auto mb-12">
            We create stunning, high-performance websites that elevate your brand and drive real results. From concept to launch, we transform businesses into digital powerhouses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://instagram.com/upbio.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Start Your Project
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
            
            <a 
              href="https://instagram.com/upbio.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <Instagram size={20} />
              Follow @upbio.pro
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="display-large text-brand-primary mb-2">25+</div>
              <div className="body-medium text-white/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="display-large text-brand-primary mb-2">98%</div>
              <div className="body-medium text-white/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="display-large text-brand-primary mb-2">24/7</div>
              <div className="body-medium text-white/70">Priority Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;