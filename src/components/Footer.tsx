import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-effect py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-gray-700">&copy; 2024 Abdulrahman. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;