
import React from 'react';
import { BUSINESS_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090b] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase font-lexend">
                Elite<span className="text-purple-500 font-light">Precision</span>
              </span>
            </div>
            <p className="text-zinc-500 mb-10 leading-relaxed text-sm">
              The benchmark in automotive aesthetics. We combine passion with chemical engineering to protect your most prized assets.
            </p>
            <div className="flex gap-5">
              {[1, 2, 3].map(i => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-[#0e0e11] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-purple-400 hover:border-purple-500/50 transition-all">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-5 text-zinc-500 font-bold text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home Studio</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#booking" className="hover:text-purple-400 transition-colors">Book Online</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.3em]">Studio Hours</h4>
            <ul className="space-y-5 text-zinc-500 font-bold text-sm">
              <li>Mon - Fri: 08:00 — 18:00</li>
              <li>Saturday: 09:00 — 16:00</li>
              <li>Sunday: Exclusive Private Hire</li>
              <li className="text-purple-500/50">Closed Public Holidays</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.3em]">Concierge</h4>
            <ul className="space-y-6 text-zinc-400 font-medium text-sm">
              <li className="flex gap-4">
                <span className="text-purple-500 font-black">LOC</span>
                {BUSINESS_CONFIG.location}
              </li>
              <li className="flex gap-4">
                <span className="text-purple-500 font-black">MAIL</span>
                {BUSINESS_CONFIG.email}
              </li>
              <li className="flex gap-4">
                <span className="text-purple-500 font-black">WA</span>
                +{BUSINESS_CONFIG.whatsappNumber}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 Elite Precision Detailing. Designed for Excellence.
          </p>
          <div className="flex gap-10 text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
