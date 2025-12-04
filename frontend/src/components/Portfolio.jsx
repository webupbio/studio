import React from 'react';
import { portfolioItems } from '../mock';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
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

        {/* Grid View Only */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400"></div>
                
                {/* Content overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="inline-block px-3 py-1 bg-brand-primary/20 border border-brand-primary mb-2">
                    <span className="text-brand-primary text-sm font-medium">{item.category}</span>
                  </div>
                  <h4 className="heading-3 text-white mb-2">{item.title}</h4>
                  <p className="body-small text-white/70 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">{item.description}</p>
                  <button className="flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <span className="body-small">View Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;