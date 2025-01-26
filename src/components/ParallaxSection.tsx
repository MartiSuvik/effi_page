import { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';

export const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-indigo-900 text-white">
      <div 
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://keklbemtoccmveisaxio.supabase.co/storage/v1/object/sign/media/Images/Footer.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9JbWFnZXMvRm9vdGVyLnN2ZyIsImlhdCI6MTczNzkxODcwMCwiZXhwIjoxNzM4MDA1MTAwfQ.3w1z8f5M6pzWI0KjExY73qXKF4SeX3Lam7PQ64XbzpA&t=2025-01-26T19%3A11%3A41.014Z')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <h2 className="text-5xl font-bold mb-6 gradient-animate bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            The Future of Work is Here
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Join thousands of teams already using our platform to transform their workflow
            and achieve unprecedented productivity.
          </p>
          <button className="group px-8 py-4 bg-white text-indigo-900 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};