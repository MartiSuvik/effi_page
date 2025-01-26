import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { useRevealEffect } from '../hooks/useRevealEffect';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

interface HeroProps {
  onStartFreeTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartFreeTrial }) => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect('right');
  const [contentRef, contentTransform] = useRevealEffect('left');

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10 gradient-animate" />
      <video 
        className="absolute inset-0 -z-10 w-full h-full object-cover"
        src="https://keklbemtoccmveisaxio.supabase.co/storage/v1/object/sign/media/Video/home.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9WaWRlby9ob21lLm1wNCIsImlhdCI6MTczNzkyMjY4NywiZXhwIjoxNzY5NDU4Njg3fQ.YnJz1B8gkN85tH4gRwJq8ycZ5xasi_1Qymad9aS1K9I&t=2025-01-26T20%3A18%3A07.436Z"
        autoPlay
        loop
        muted
      />
      
      <div className="container mx-auto px-6 py-24">
        <ParallaxCard className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div 
            ref={titleRef} 
            className="section-transition"
            style={{ 
              transform: titleTransform(),
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-8 animate-float">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-600 font-medium">
                Revolutionizing Workflow Management
              </span>
            </div>
            
            <AnimatedTitle 
              text="Transform Your Team's Productivity"
              className="text-6xl font-bold mb-8 reveal-text"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="section-transition"
            style={{ 
              transform: contentTransform(),
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Streamline collaboration, automate workflows, and boost efficiency with our 
              next-generation project management platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStartFreeTrial}
                className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 hover:gap-4"
              >
                Book a Meeting
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium border border-indigo-200 hover:bg-indigo-50 transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
};