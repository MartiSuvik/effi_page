import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { UseCases } from './components/UseCases';
import { ParallaxSection } from './components/ParallaxSection';
import { Stats } from './components/Stats';
import { FormModal } from './components/FormModal';
import { Footer } from './components/Footer';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleStartFreeTrial = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20"> {/* Add padding to account for fixed header */}
        <Hero onStartFreeTrial={handleStartFreeTrial} />
        <Features />
        <WhyChooseUs />
        <ProcessTimeline />
        <UseCases />
        <ParallaxSection />
        <Stats />
        <Footer />
        <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </div>
  );
}

export default App;