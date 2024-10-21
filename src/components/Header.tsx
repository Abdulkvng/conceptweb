import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">YourName</a>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{item}</a>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden glass-effect">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-gray-700 hover:bg-white hover:bg-opacity-20 transition-colors duration-300">{item}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;