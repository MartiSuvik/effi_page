import React from 'react';
import { Clock, Settings, HeartHandshake } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const benefits = [
  {
    icon: <Clock className="w-12 h-12" />,
    stat: '50,000+',
    text: 'hours of manual work replaced for clients'
  },
  {
    icon: <Settings className="w-12 h-12" />,
    stat: '100%',
    text: 'Fully customized solutions designed to fit your unique needs'
  },
  {
    icon: <HeartHandshake className="w-12 h-12" />,
    stat: '24/7',
    text: 'Ongoing support to ensure automation evolves with your business'
  }
];

export const WhyChooseUs = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-white relative">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Why Choose Us?"
            className="text-4xl font-bold mb-4"
          />
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <ParallaxCard
              key={index}
              className={`p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-6 text-indigo-600 flex justify-center">
                {benefit.icon}
              </div>
              <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {benefit.stat}
              </div>
              <p className="text-gray-600">
                {benefit.text}
              </p>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
};