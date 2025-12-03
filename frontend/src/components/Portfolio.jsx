import React, { useState } from 'react';
import { portfolioItems } from '../mock';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolio" className="py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="text-center mb-20">
          <h2 className="display-large mb-6 text-white">Our Portfolio</h2>
          <p className="body-large text-white/85 max-w-2xl mx-auto">
            Explore the digital experiences we've created for businesses across industries
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div key={item.id} className="min-w-full px-4">
                  <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-400">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <div className="inline-block px-4 py-1 bg-brand-primary/20 border border-brand-primary mb-3">
                        <span className="text-brand-primary body-small">{item.category}</span>
                      </div>
                      <h3 className="heading-2 text-white mb-2">{item.title}</h3>
                      <p className="body-medium text-white/70 mb-4">{item.description}</p>
                      <button className="flex items-center gap-2 text-brand-primary hover:gap-4 transition-all duration-300">
                        <span className="body-medium">View Details</span>
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 z-10 group"
          >
            <ChevronLeft className="text-white group-hover:text-black" size={28} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 z-10 group"
          >
            <ChevronRight className="text-white group-hover:text-black" size={28} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-brand-primary' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 overflow-hidden cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-brand-primary/20 border border-brand-primary mb-3">
                  <span className="text-brand-primary text-sm">{item.category}</span>
                </div>
                <h4 className="heading-3 text-white mb-2">{item.title}</h4>
                <p className="body-small text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;