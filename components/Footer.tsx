
import React from 'react';
import { BUSINESS_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010205] border-t border-white/5 pt-16 pb-8 font-mono text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tighter uppercase">Elite.ai</h3>
            <p className="text-zinc-500 max-w-sm mb-6">
              Automated precision. Nanotechnology application. The future of vehicle aesthetics, deployed today.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-500 text-xs tracking-widest">SYSTEM STATUS: OPERATIONAL</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-2 inline-block">COORDINATES</h4>
            <ul className="space-y-4 text-zinc-500">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">[STUDIO_HOME]</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">[SERVICES_LOG]</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">[BOOKING_TERMINAL]</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-2 inline-block">DATA_LINKS</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>{BUSINESS_CONFIG.email}</li>
              <li>+{BUSINESS_CONFIG.whatsappNumber}</li>
              <li className="text-[10px] text-zinc-700 mt-4">{BUSINESS_CONFIG.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2026 ELITE PRECISION SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>PRIVACY_PROTOCOL</span>
            <span>TERMS_OF_USE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
