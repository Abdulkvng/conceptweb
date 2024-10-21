import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="text-center glass-effect p-8 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800 animate-fade-in">
          Hi, I'm <span className="text-gray-600">YourName</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
          Web Developer & Designer
        </p>
        <a
          href="#about"
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 animate-fade-in-delay-2"
        >
          Learn More <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;