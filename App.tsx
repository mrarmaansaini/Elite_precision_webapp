
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  
  const revealRefs = useRef<HTMLElement[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Add a staggered delay to children if needed, or handle via CSS classes
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-white overflow-hidden selection:bg-cyan-500/30">
      <Header />
      <main>
        <Hero />
        
        {/* Founder Section - "The Architect" */}
        <div ref={addToRefs} className="reveal-on-scroll">
            <Founder />
        </div>

        {/* Services Section - "Protocols" */}
        <div ref={addToRefs} className="reveal-on-scroll">
          <Services 
            selectedServices={selectedServiceIds} 
            toggleService={toggleService} 
          />
        </div>

        {/* Process Section - "Workflow" */}
        <section id="process" className="py-32 relative bg-[#02040a] border-y border-white/5">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

           <div className="container mx-auto px-6 relative z-10">
             <div className="text-center mb-20">
               <span className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase border border-cyan-500/30 px-3 py-1 rounded bg-cyan-950/20">Execution Logic</span>
               <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">Operational Workflow</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { id: '01', title: 'Scan & Analyze', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                  { id: '02', title: 'Decontaminate', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                  { id: '03', title: 'Correct', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { id: '04', title: 'Shield', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                ].map((step, idx) => (
                  <div key={idx} className="group relative p-8 glass-panel hover:bg-cyan-900/10 transition-colors duration-500">
                     <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors font-mono">{step.id}</div>
                     <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                       </svg>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                     <div className="h-1 w-12 bg-zinc-700 group-hover:bg-cyan-400 transition-colors duration-500 rounded-full"></div>
                  </div>
                ))}
             </div>
           </div>
        </section>
        
        {/* Booking Section - "Input Terminal" */}
        <div ref={addToRefs} className="reveal-on-scroll">
          <BookingForm selectedServiceIds={selectedServiceIds} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
