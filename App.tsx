
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  
  // Ref for scroll reveal
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
    <div className="min-h-screen selection:bg-purple-500/30 bg-[#09090b]">
      <Header />
      <main>
        <Hero />
        
        <div className="reveal-on-scroll" ref={addToRefs}>
          <Services 
            selectedServices={selectedServiceIds} 
            toggleService={toggleService} 
          />
        </div>
        
        {/* About Section - Working and Professional */}
        <section id="about" className="py-32 relative overflow-hidden bg-[#09090b] reveal-on-scroll" ref={addToRefs}>
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] group-hover:bg-purple-600/20 transition-all duration-700"></div>
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Detailing Process" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
            
            <div className="relative">
              <h2 className="text-purple-500 font-black tracking-[0.3em] uppercase mb-4 text-sm">Our Philosophy</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 font-lexend leading-tight">Mastery in Matte <br/>& Metallic</h3>
              
              <div className={`space-y-8 overflow-hidden transition-all duration-1000 ${isAboutExpanded ? 'max-h-[1000px]' : 'max-h-[380px]'}`}>
                {[
                  { 
                    title: "Advanced Surface Chemistry", 
                    desc: "We don't just wash; we decontaminate. Our process uses alkaline-balanced agents to strip grime without compromising clear coat integrity." 
                  },
                  { 
                    title: "White-Glove Artisans", 
                    desc: "Our detailing specialists undergo 500+ hours of rigorous certification. We treat every vehicle as a unique project with its own specific needs." 
                  },
                  { 
                    title: "Nano-Titanium Coatings", 
                    desc: "Our ceramic solutions aren't just silica-based; we utilize titanium-infused nanotechnology for unmatched hardness and hydrophobicity." 
                  },
                  { 
                    title: "Sustainability Focus", 
                    desc: "Elite Precision uses water reclamation systems and biodegradable chemicals, ensuring your car stays green while it shines purple." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform">
                    <div className="w-14 h-14 bg-[#0e0e11] border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-purple-500/50 transition-all shadow-lg">
                      <span className="text-purple-500 font-black font-lexend text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-purple-400 font-lexend">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="text-purple-500 font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:text-purple-400 transition-all font-lexend active:scale-95"
                >
                  {isAboutExpanded ? 'Show Less' : 'Discover Our Full Process'}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-500 ${isAboutExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Productive and Professional Replacement for Map */}
        <section id="process" className="py-32 bg-zinc-950/20 reveal-on-scroll" ref={addToRefs}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-purple-500 font-black tracking-[0.3em] uppercase mb-4 text-sm">Service Protocol</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-lexend">The Road to Perfection</h3>
              <p className="text-zinc-500 max-w-2xl mx-auto">
                A structured, disciplined approach to vehicle restoration that ensures consistency and excellence in every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", name: "Assessment", desc: "Detailed inspection under specialized lighting to identify paint defects." },
                { step: "02", name: "Purification", desc: "Multi-stage decontamination wash removing fallout and road grime." },
                { step: "03", name: "Correction", desc: "Precision machine polishing to restore depth and mirror clarity." },
                { step: "04", name: "Fortification", desc: "Application of premium ceramic or graphene protective layers." }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-[#0e0e11] rounded-[2.5rem] border border-white/5 hover:border-purple-500/40 transition-all group relative overflow-hidden hover:-translate-y-2">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black text-purple-500 group-hover:opacity-10 transition-opacity">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mb-8 text-purple-500 font-black text-xl border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 font-lexend">{item.name}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 p-12 bg-gradient-to-r from-purple-900/20 to-transparent rounded-[3rem] border border-purple-500/10 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2 font-lexend">Ready to elevate your driving experience?</h4>
                <p className="text-zinc-400">Join the elite circle of enthusiasts who trust our precision.</p>
              </div>
              <a href="#booking" className="bg-white text-[#09090b] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-purple-500 hover:text-white transition-all shadow-xl active:scale-95">
                Initialize Booking
              </a>
            </div>
          </div>
        </section>
        
        <div className="reveal-on-scroll" ref={addToRefs}>
          <BookingForm selectedServiceIds={selectedServiceIds} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
