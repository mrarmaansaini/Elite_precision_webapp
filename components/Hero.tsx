
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#02040a]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm mb-6 animate-float">
              <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></span>
              <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase">System Online // v.2.4.0</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Aesthetic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 relative">
                Intelligence
                <svg className="absolute w-full h-2 bottom-2 left-0 text-purple-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed border-l-2 border-cyan-500/30 pl-6 font-light">
              Deploying advanced nanotechnology protocols to restore vehicle integrity. <br/>
              <span className="text-cyan-500/60 font-mono text-sm mt-2 block">> Analyzing clear coat structure...</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#booking" 
                className="group relative px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded overflow-hidden transition-all hover:bg-cyan-400"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  INITIATE PROTOCOL
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#services" 
                className="px-8 py-4 border border-white/10 text-white font-mono text-sm rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
              >
                [ VIEW CONFIGURATIONS ]
              </a>
            </div>

            {/* Data Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
              {[
                { label: 'Surface Gloss', val: '99.9%' },
                { label: 'Hydrophobicity', val: '110°' },
                { label: 'Protection', val: '5 YRS' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-white mb-1 font-mono">{stat.val}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - Right Side */}
          <div className="relative hidden lg:block h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] to-transparent z-20"></div>
            <img 
               src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200"
               alt="Car Scanning"
               className="w-full h-full object-cover rounded-2xl opacity-60 grayscale mix-blend-luminosity border border-white/10"
            />
            {/* HUD Overlays */}
            <div className="absolute top-10 right-10 z-30">
               <div className="w-32 h-32 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-3xl"></div>
            </div>
            <div className="absolute bottom-10 left-10 z-30">
               <div className="w-32 h-32 border-l-2 border-b-2 border-purple-500/50 rounded-bl-3xl"></div>
            </div>
            
            {/* Scanning Line */}
            <div className="absolute inset-0 z-20 overflow-hidden rounded-2xl">
               <div className="w-full h-1 bg-cyan-400/50 shadow-[0_0_30px_#22d3ee] absolute top-0 animate-[scanline_3s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-500/40 animate-bounce cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to scan</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
