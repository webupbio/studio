import React from 'react';
import { Sparkles, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="text-center mb-20">
          <h2 className="display-large mb-6 text-white">Who We Are</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="heading-1 text-white mb-6">
              We Transform Businesses Through
              <span className="text-brand-primary"> Powerful Digital Experiences</span>
            </h3>
            <p className="body-large text-white/85 mb-6">
              At UpBio, we don't just build websites—we craft digital identities that propel businesses forward. Our mission is to help companies establish a commanding online presence that captures attention, builds trust, and converts visitors into loyal customers.
            </p>
            <p className="body-medium text-white/70">
              Every business deserves a website that reflects its excellence. We combine cutting-edge technology, stunning design, and strategic thinking to deliver websites that don't just look amazing—they perform exceptionally.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 group">
              <Sparkles className="text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-400" size={40} />
              <h4 className="heading-3 text-white mb-3">Design Excellence</h4>
              <p className="body-medium text-white/70">
                We create visually stunning websites that capture your brand's essence and leave lasting impressions on your visitors.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 group">
              <Target className="text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-400" size={40} />
              <h4 className="heading-3 text-white mb-3">Strategic Approach</h4>
              <p className="body-medium text-white/70">
                Every element is purposefully designed to achieve your business goals—from user engagement to conversion optimization.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 group">
              <Rocket className="text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-400" size={40} />
              <h4 className="heading-3 text-white mb-3">Growth Focused</h4>
              <p className="body-medium text-white/70">
                We build scalable solutions that grow with your business, ensuring your digital presence evolves with your success.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 border border-brand-primary/30 p-12 text-center">
          <h3 className="heading-1 text-white mb-6">Why Businesses Choose UpBio</h3>
          <p className="body-large text-white/85 max-w-3xl mx-auto mb-8">
            We understand that your website is often the first interaction potential customers have with your brand. That's why we obsess over every detail, ensuring your digital presence not only meets expectations—it exceeds them.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-black/30 px-6 py-3 border border-brand-primary/50">
              <span className="body-medium text-white">Fast Delivery</span>
            </div>
            <div className="bg-black/30 px-6 py-3 border border-brand-primary/50">
              <span className="body-medium text-white">Premium Quality</span>
            </div>
            <div className="bg-black/30 px-6 py-3 border border-brand-primary/50">
              <span className="body-medium text-white">Ongoing Support</span>
            </div>
            <div className="bg-black/30 px-6 py-3 border border-brand-primary/50">
              <span className="body-medium text-white">Results Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;