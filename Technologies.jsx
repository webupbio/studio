import React from 'react';
import { Code2, Palette, Rocket, Shield, Zap, Globe } from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      icon: Code2,
      title: "Modern Development",
      description: "Cutting-edge frameworks and technologies for robust, scalable solutions"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Award-winning design tools that bring your brand vision to life"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and seamless user experiences"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security measures to protect your business"
    },
    {
      icon: Globe,
      title: "SEO Excellence",
      description: "Advanced SEO strategies that put you ahead of the competition"
    },
    {
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Cloud-based solutions that grow with your business needs"
    }
  ];

  return (
    <section className="py-32 bg-[#121212] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%), repeating-linear-gradient(-90deg, #00FFD1, #00FFD1 1px, transparent 1px, transparent 7.6923%)',
          backgroundSize: '100% 100%'
        }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-[7.6923%] relative z-10">
        <div className="text-center mb-20">
          <h2 className="display-large mb-6 text-white">We Use The Best Tools</h2>
          <p className="body-large text-white/85 max-w-3xl mx-auto">
            We leverage the most advanced technologies and industry-leading tools to deliver exceptional results. Our expertise spans across modern frameworks, design systems, and cloud infrastructure—ensuring your website is built with the best of the best.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-400 group"
              >
                <Icon className="text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-400" size={40} />
                <h3 className="heading-3 text-white mb-3">{tech.title}</h3>
                <p className="body-medium text-white/70">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 border-2 border-brand-primary/30 p-12 text-center">
          <h3 className="heading-1 text-white mb-6">
            Trusted Technology Stack
          </h3>
          <p className="body-large text-white/85 max-w-3xl mx-auto mb-8">
            We don't just follow trends—we set them. Our team continuously evaluates and adopts the latest technologies to ensure your website is built with tools that are reliable, powerful, and future-proof. From development to deployment, we use only the best to deliver the best.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-black/40 backdrop-blur-sm px-8 py-4 border border-brand-primary/50 hover:bg-black/60 transition-all duration-300">
              <span className="body-medium text-white font-semibold">Latest Frameworks</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm px-8 py-4 border border-brand-primary/50 hover:bg-black/60 transition-all duration-300">
              <span className="body-medium text-white font-semibold">Cloud Infrastructure</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm px-8 py-4 border border-brand-primary/50 hover:bg-black/60 transition-all duration-300">
              <span className="body-medium text-white font-semibold">Advanced Security</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm px-8 py-4 border border-brand-primary/50 hover:bg-black/60 transition-all duration-300">
              <span className="body-medium text-white font-semibold">Premium Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;