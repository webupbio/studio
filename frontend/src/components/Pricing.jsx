import React, { useState } from 'react';
import { pricingPlans } from '../mock';
import { Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Pro plan (recommended)

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % pricingPlans.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length);
  };

  return (
    <section id="pricing" className="py-32 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="text-center mb-20">
          <h2 className="display-large mb-6 text-white">Plans & Pricing</h2>
          <p className="body-large text-white/85 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our commitment to excellence and your success.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mb-16">
          <div className="relative max-w-md mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {pricingPlans.map((plan) => (
                  <div key={plan.id} className="min-w-full px-4">
                    <div 
                      className={`bg-white/5 border-2 p-8 relative ${
                        plan.recommended 
                          ? 'border-brand-primary bg-brand-primary/5 shadow-[0_0_30px_rgba(0,255,209,0.2)]' 
                          : 'border-white/10'
                      }`}
                    >
                      {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                          <div className="bg-brand-primary px-6 py-2 flex items-center gap-2">
                            <Sparkles size={16} className="text-white" />
                            <span className="text-white font-black text-sm uppercase tracking-wide">Recommended</span>
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-8 mt-4">
                        <h3 className="heading-1 text-white mb-4">{plan.name}</h3>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="display-large text-brand-primary">${plan.price}</span>
                        </div>
                        <p className="body-small text-white/60">One-time payment</p>
                      </div>

                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                            <span className="body-medium text-white/85">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a 
                        href="https://ig.me/m/upbio.pro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`w-full block text-center py-4 font-semibold transition-all duration-400 ${
                          plan.recommended
                            ? 'bg-brand-primary text-black hover:bg-white'
                            : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevPlan}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/80 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 z-10 group"
            >
              <ChevronLeft className="text-white group-hover:text-black" size={24} />
            </button>
            <button 
              onClick={nextPlan}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/80 hover:bg-brand-primary border border-white/20 hover:border-brand-primary p-3 transition-all duration-300 z-10 group"
            >
              <ChevronRight className="text-white group-hover:text-black" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {pricingPlans.map((_, index) => (
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
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white/5 border-2 p-8 transition-all duration-400 hover:transform hover:scale-105 relative overflow-visible ${
                plan.recommended 
                  ? 'border-brand-primary bg-brand-primary/5 shadow-[0_0_30px_rgba(0,255,209,0.2)]' 
                  : 'border-white/10 hover:border-brand-primary/50'
              }`}
            >
              {plan.recommended && (
                <div className="mb-4 -mx-8 -mt-8 pt-3 pb-3 bg-brand-primary flex items-center justify-center gap-2">
                  <Sparkles size={18} className="text-white" />
                  <span className="text-white font-black text-base uppercase tracking-wider">Recommended</span>
                </div>
              )}

              <div className={`text-center mb-8 ${plan.recommended ? 'mt-0' : 'mt-2'}`}>
                <h3 className="heading-1 text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="display-large text-brand-primary">${plan.price}</span>
                </div>
                <p className="body-small text-white/60">One-time payment</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                    <span className="body-medium text-white/85">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://ig.me/m/upbio.pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full block text-center py-4 font-semibold transition-all duration-400 ${
                  plan.recommended
                    ? 'bg-brand-primary text-black hover:bg-white'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="body-large text-white/70 max-w-3xl mx-auto">
            All plans include responsive design, cross-browser compatibility, and initial setup support. 
            Need a custom solution? <a href="https://instagram.com/upbio.pro" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;