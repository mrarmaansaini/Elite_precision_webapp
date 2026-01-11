
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-panel border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Block */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-md border border-white/10 group-hover:border-cyan-500/50 transition-colors bg-[#0f172a]">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white uppercase leading-none">
              Elite<span className="text-cyan-500"> Precision</span>
            </span>
            <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">System Online</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Process'].map((item, idx) => (
            <a 
              key={idx}
              href={`#${item.toLowerCase()}`} 
              className="relative text-xs font-mono text-zinc-400 hover:text-white transition-colors group py-2 uppercase tracking-wider"
            >
              <span className="text-cyan-500/50 mr-1">[{idx + 1}]</span>
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          <a href="#booking" className="relative px-6 py-2 overflow-hidden group">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-sm opacity-30 bg-gradient-to-r from-transparent via-transparent to-cyan-400/20 block transform skew-x-12 animate-scan"></span>
            <span className="relative flex items-center gap-2 text-cyan-400 font-mono text-xs border border-cyan-500/30 px-4 py-2 rounded bg-cyan-950/20 hover:bg-cyan-500/10 transition-all uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Booking Uplink
            </span>
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <a href="#booking" className="md:hidden p-2 text-cyan-400 border border-cyan-500/30 rounded bg-cyan-950/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
