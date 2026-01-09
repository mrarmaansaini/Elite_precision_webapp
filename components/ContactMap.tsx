
import React from 'react';
import { BUSINESS_CONFIG } from '../constants';

const ContactMap: React.FC = () => {
  const encodedAddress = encodeURIComponent(BUSINESS_CONFIG.location);
  const fallbackUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 bg-zinc-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-purple-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Studio Location</h2>
            <h3 className="text-4xl font-bold text-white mb-8 font-lexend">Exclusive Care Environment</h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Experience the pinnacle of automotive care at our dedicated studio. We provide a temperature-controlled, dust-free sanctuary where we perform our finest work.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-[#0e0e11] rounded-[2rem] border border-white/5 group hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-3 font-lexend">Studio Address</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{BUSINESS_CONFIG.location}</p>
              </div>
              
              <div className="p-8 bg-[#0e0e11] rounded-[2rem] border border-white/5 group hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-3 font-lexend">Availability</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{BUSINESS_CONFIG.workingHours}</p>
              </div>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-purple-500 font-black uppercase tracking-widest text-sm hover:text-purple-400 transition-all"
            >
              Open in Navigation
              <div className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
          
          <div className="lg:w-1/2 w-full h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5 relative bg-[#0e0e11] group">
            <div className="absolute inset-0 pointer-events-none border-[20px] border-[#0e0e11] rounded-[3.5rem] z-10"></div>
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src={fallbackUrl}
              className="grayscale opacity-60 invert contrast-[120%] saturate-0 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
