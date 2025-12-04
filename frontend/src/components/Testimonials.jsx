import React from 'react';
import { testimonials } from '../mock';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

        {/* Testimonials Grid - No Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 group relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors duration-400" size={40} />
              
              <div className="relative z-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;