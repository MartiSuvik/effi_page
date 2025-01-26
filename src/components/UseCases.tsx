import { 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Users, 
  ClipboardList, 
  Clock,
  Database
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const useCases = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Sales and Marketing Automation',
    description: 'From content creation to CRM and payments'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Image, Voice, and Text Analysis',
    description: 'Automate document parsing and sentiment analysis'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Predictive Analytics',
    description: 'Forecast risks, demand, and trends'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Conversational AI',
    description: 'Chatbots and AI-driven customer communications'
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Project Management Automation',
    description: 'Streamline onboarding, invoicing, and task completion'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Staff Augmentation',
    description: 'Automate tedious tasks, saving employees hours daily'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Integration',
    description: 'Eliminate silos with automated reporting and data entry'
  }
];

export const UseCases = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Use Cases of AI and Automation"
            className="text-4xl font-bold mb-4"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our AI and automation solutions can transform your business operations
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {useCases.map((useCase, index) => (
            <ParallaxCard
              key={index}
              className={`group p-8 bg-white rounded-xl border border-gray-100 transform transition-all duration-500 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 text-indigo-600 transform transition-transform duration-300 group-hover:scale-110">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {useCase.title}
              </h3>
              <p className="text-gray-600">
                {useCase.description}
              </p>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
};