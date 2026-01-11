
import React, { useState } from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  selectedServices: string[];
  toggleService: (serviceId: string) => void;
}

const CATEGORIES = ['all', 'exterior', 'interior', 'protection', 'full'] as const;

const Services: React.FC<ServicesProps> = ({ selectedServices, toggleService }) => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#02040a] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-3">Module Selection</h2>
            <h3 className="text-4xl font-bold text-white">Service Configurations</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${
                  activeCategory === category 
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' 
                    : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/30 hover:text-white'
                }`}
              >
                [{category}]
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div 
                key={service.id}
                onClick={() => toggleService(service.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-300 glass-panel hover:bg-white/5 ${
                  isSelected ? 'border-cyan-500/50 bg-cyan-950/10' : 'hover:border-white/20'
                }`}
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isSelected ? 'grayscale opacity-50' : 'grayscale group-hover:grayscale-0'}`}
                  />
                  
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-sm">
                      <div className="w-12 h-12 border border-cyan-400 flex items-center justify-center bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_#22d3ee]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-2 left-2 z-20">
                    <span className="text-[9px] font-mono bg-black/80 text-white px-2 py-1 border border-white/10 uppercase">
                      ID: {service.id.split('-')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 relative">
                   {/* Scanning Bar Animation */}
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="flex justify-between items-start mb-3">
                    <h4 className={`text-lg font-bold group-hover:text-cyan-400 transition-colors ${isSelected ? 'text-cyan-400' : 'text-white'}`}>
                      {service.name}
                    </h4>
                  </div>
                  
                  <p className="text-zinc-500 text-xs mb-6 leading-relaxed font-mono">
                    > {service.description}
                  </p>
                  
                  <div className="flex items-end justify-between border-t border-white/5 pt-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-600 text-[10px] uppercase font-mono tracking-wider">Est. Time</span>
                      <span className="text-white font-mono text-xs">{service.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-zinc-600 text-[10px] uppercase font-mono tracking-wider">Cost</span>
                      <span className={`text-xl font-bold font-mono ${isSelected ? 'text-cyan-400' : 'text-white'}`}>${service.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {selectedServices.length > 0 && (
          <div className="mt-16 text-center">
             <a 
               href="#booking" 
               className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
             >
               Proceed to Calculation
               <span className="font-mono bg-black text-white px-2 py-0.5 text-xs rounded">
                 {selectedServices.length} ITEMS
               </span>
             </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
