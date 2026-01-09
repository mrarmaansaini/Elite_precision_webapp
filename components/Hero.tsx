
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
        
        {/* Subtle Purple Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <h2 className="text-purple-500 font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in text-sm">Matte Detailing Specialist</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-lexend">
            Excellence In <span className="text-purple-500">Every</span> Pixel
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Uncompromising quality for those who demand perfection. Our purple-tier detailing resets your vehicle to showroom standards using premium nanotechnology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#booking" 
              className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-purple-600/30 active:scale-95"
            >
              Secure a Slot
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.12l-.794 2.353 2.456-.757c.85.508 1.835.845 3.081.846 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.585-5.766-5.768-5.766zM15.42 14.5c-.21.59-.83 1.03-1.46 1.15-.54.1-1.24.18-2.6-.37-1.89-.77-3.11-2.7-3.21-2.83-.09-.13-.81-1.07-.81-2.04 0-.97.51-1.44.69-1.64.18-.2.4-.25.53-.25h.38c.12 0 .28-.05.44.33.17.39.57 1.39.62 1.49.05.1.08.22 0 .38-.08.16-.12.25-.25.39-.13.14-.28.32-.4.43-.13.13-.27.27-.12.53.15.26.67 1.1 1.44 1.79.98.88 1.81 1.15 2.07 1.28.26.13.41.11.57-.07.16-.18.69-.8 0-.87-.19.44-.07-.35-.16-.27-.05h.33c.17 0 .43.06.67.58.24.52.83 2.02.83 2.12z"/>
              </svg>
            </a>
            <a 
              href="#services" 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all text-center backdrop-blur-md active:scale-95"
            >
              Our Services
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?u=car${i}`} 
                  alt="Client" 
                  className="w-11 h-11 rounded-full border-2 border-[#09090b] shadow-xl"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-purple-400 mb-0.5">
                {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
              </div>
              <p className="text-zinc-500 uppercase tracking-tighter text-[11px] font-bold">Trusted by <span className="text-white">800+ Enthusiasts</span></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Explore</span>
        <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
