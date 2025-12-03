import React, { useState } from 'react';
import { testimonials } from '../mock';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="text-center mb-20">
          <h2 className="display-large mb-6 text-white">What Our Clients Say</h2>
          <p className="body-large text-white/85 max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've transformed
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="bg-white/5 border border-white/10 p-12 relative overflow-hidden group hover:border-brand-primary/50 transition-all duration-400">
            <Quote className="absolute top-8 right-8 text-brand-primary/20 transform group-hover:scale-110 transition-transform duration-400" size={80} />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-brand-primary fill-brand-primary" size={24} />
                ))}
              </div>
              
              <p className="heading-2 text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="heading-3 text-white">{testimonials[currentIndex].name}</div>
                  <div className="body-medium text-brand-primary">{testimonials[currentIndex].role}</div>
                  <div className="body-small text-white/60">{testimonials[currentIndex].company}</div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-white/10 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 group"
                  >
                    <ChevronLeft className="text-white group-hover:text-black" size={24} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-white/10 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 group"
                  >
                    <ChevronRight className="text-white group-hover:text-black" size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-brand-primary fill-brand-primary" size={16} />
                ))}
              </div>
              
              <p className="body-medium text-white/85 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <div className="heading-3 text-white text-sm">{testimonial.name}</div>
                <div className="body-small text-brand-primary">{testimonial.role}</div>
                <div className="body-small text-white/60">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;