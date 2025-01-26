import React from 'react';
import { Bot, Database, Users, Cog, Share2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { AnimatedTitle } from './AnimatedTitle';

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'AI and Automation Solutions',
    description: 'Tailored workflows that eliminate manual tasks and enhance operations.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Airtable Specialists',
    description: 'Custom solutions to automate and organize your data with Airtable.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'CRM Systems',
    description: 'Streamline communication and grow your business.'
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Robotic Process Automation',
    description: 'Automate repetitive tasks to improve accuracy.'
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Make.com Consulting',
    description: 'Create scalable workflows to connect your favorite apps and platforms.'
  }
];

export const Features = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const sectionRef = useSmoothTransition();

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="What We Offer"
            className="text-4xl font-bold mb-4"
          />
        </div>
        
        <div 
          ref={ref}
          className="max-w-6xl mx-auto grid gap-8"
          data-visible={isVisible}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 items-start gap-6 p-8 bg-white rounded-lg shadow-sm border border-gray-100 transform transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {feature.icon}
                </div>
              </div>
              <div className="md:col-span-11 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>
  );
};