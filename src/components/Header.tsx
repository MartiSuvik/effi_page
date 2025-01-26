import React from 'react';
import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/effi-logo.png"
              alt="Effi"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#process" className="text-gray-600 hover:text-indigo-600 transition-colors">Process</a>
            <a href="#use-cases" className="text-gray-600 hover:text-indigo-600 transition-colors">Use Cases</a>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};