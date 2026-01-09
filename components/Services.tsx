
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

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
    <section id="services" className="py-24 bg-zinc-950/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-purple-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Services Catalogue</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-lexend">Bespoke Protection Plans</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-12">
            Select one or more specialized treatments. Our interactive booking will calculate your estimated investment instantly.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all border active:scale-95 ${
                  activeCategory === category 
                    ? 'bg-purple-600 border-purple-600 text-white shadow-xl shadow-purple-600/20' 
                    : 'bg-transparent border-white/5 text-zinc-500 hover:text-purple-400 hover:border-purple-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service, index) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div 
                key={service.id}
                onClick={() => toggleService(service.id)}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 border-2 active:scale-[0.98] animate-fade-up opacity-0 ${
                  isSelected ? 'border-purple-500 bg-purple-500/5 shadow-2xl shadow-purple-500/10' : 'border-white/5 bg-[#0e0e11] hover:border-purple-500/30 hover:-translate-y-2'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${isSelected ? 'opacity-40 grayscale-[0.5]' : 'opacity-80 grayscale-[0.2]'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent"></div>
                  
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-fade-scale">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-10 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors font-lexend">{service.name}</h4>
                  </div>
                  
                  <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex flex-col">
                      <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Duration</span>
                      <span className="text-zinc-300 font-bold text-sm uppercase">{service.duration}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Investment</span>
                      <span className="text-purple-500 font-black text-2xl">${service.price}</span>
                    </div>
                  </div>
                </div>

                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all ${
                  isSelected ? 'bg-purple-600 text-white shadow-lg' : 'bg-white/5 text-zinc-500'
                }`}>
                  {isSelected ? 'Service Selected' : service.category}
                </div>
              </div>
            );
          })}
        </div>
        
        {selectedServices.length > 0 && (
          <div className="mt-20 flex flex-col items-center animate-fade-scale">
             <a href="#booking" className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-purple-600/40 active:scale-95 hover:-translate-y-1">
               Continue to Booking ({selectedServices.length} Selected)
             </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
