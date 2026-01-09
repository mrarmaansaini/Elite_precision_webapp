
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-2xl py-3 border-b border-purple-500/10' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-600/20 transition-transform hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase hidden sm:block font-lexend">
            Elite<span className="text-purple-500 font-light">Precision</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#services" className="text-zinc-400 hover:text-purple-400 transition-colors">Services</a>
          <a href="#about" className="text-zinc-400 hover:text-purple-400 transition-colors">Philosophy</a>
          <a href="#process" className="text-zinc-400 hover:text-purple-400 transition-colors">Process</a>
          <a href="#booking" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-full transition-all shadow-lg shadow-purple-600/20 active:scale-95">Book Appointment</a>
        </nav>

        <a href="#booking" className="md:hidden bg-purple-600 p-2.5 rounded-full text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
