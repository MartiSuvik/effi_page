import { Search, Lightbulb, Code, RefreshCw } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';

const steps = [
  {
    number: 1,
    icon: <Search className="w-6 h-6" />,
    title: 'Map Your Processes',
    description: 'Visual mapping of all systems, tasks, and applications'
  },
  {
    number: 2,
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Identify Opportunities',
    description: 'Audit workflows to find areas for AI and automation'
  },
  {
    number: 3,
    icon: <Code className="w-6 h-6" />,
    title: 'Build and Test',
    description: 'Use AI tools, custom code, Airtable, Make.com, and your tech stack'
  },
  {
    number: 4,
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Manage and Iterate',
    description: 'Ongoing management to refine workflows as you grow'
  }
];

export const ProcessTimeline = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Our Process"
            className="text-4xl font-bold mb-4"
          />
        </div>

        <div 
          ref={ref} 
          className="max-w-6xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step number with icon */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-indigo-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </span>
                      <div className="text-indigo-600">
                        {step.icon}
                      </div>
                    </div>
                    {/* Connecting line for mobile */}
                    {index < steps.length -1 && (
                      <div className="absolute h-12 w-0.5 bg-gray-200 left-1/2 -bottom-12 md:hidden" />
                    )}
                  </div>
                </div>

                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};