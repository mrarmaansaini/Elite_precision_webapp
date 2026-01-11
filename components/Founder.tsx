
import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#02040a] relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Visual Block - Clean & Minimal */}
            <div className="relative order-2 md:order-1">
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0a101f] shadow-2xl group transition-transform hover:-translate-y-1 duration-500">
                    <div className="aspect-[3/4] relative">
                         {/* User provided image - Ensure file is named 'armaan.jpg' in public folder */}
                         <img 
                            src="armaan.jpg" 
                            alt="Armaan Saini"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-80"></div>
                         
                         {/* Minimal Overlay Info */}
                         <div className="absolute bottom-0 left-0 right-0 p-8">
                             <div className="flex items-center gap-3 mb-3">
                                <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-md">
                                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                    Verified Architect
                                  </span>
                                </div>
                             </div>
                             <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">Armaan Saini</h3>
                             <p className="text-zinc-500 text-sm font-mono tracking-wide">Elite Precision Founder</p>
                         </div>
                    </div>
                </div>
                {/* Decorative clean offset border */}
                <div className="absolute top-4 -left-4 w-full h-full border border-white/5 rounded-2xl -z-10 hidden md:block"></div>
            </div>

            {/* Content Block - Productive & Structured */}
            <div className="order-1 md:order-2">
                <div className="mb-10">
                    <div className="flex items-center gap-2 text-cyan-500 mb-4">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span className="text-xs font-mono uppercase tracking-[0.2em]">About the Founder</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Visionary <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Leadership
                        </span>
                    </h2>
                </div>
                
                <div className="prose prose-invert prose-lg text-zinc-400 font-light leading-relaxed mb-10">
                    <p>
                        <strong className="text-white">Armaan Saini</strong> is a high school entrepreneur and the visionary behind Elite Precision. Founded on the core pillars of discipline and meticulous attention to detail, Armaan launched the brand to redefine the standards of automotive care.
                    </p>
                    <p>
                        By seamlessly balancing academic excellence with a hands-on passion for the craft, he has transformed a technical skill into a premium service. For Armaan, Elite Precision is more than a business—it is a commitment to preserving the beauty and value of every vehicle through professional-grade craftsmanship.
                    </p>
                </div>

                {/* "Productive" Stats / Metrics */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                    <div className="group p-4 rounded-xl bg-[#0a101f] border border-white/5 hover:border-cyan-500/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Discipline</span>
                            <span className="text-cyan-400 font-bold font-mono">100%</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-500 h-full w-full origin-left transform transition-transform duration-1000 group-hover:scale-x-100"></div>
                        </div>
                    </div>
                    <div className="group p-4 rounded-xl bg-[#0a101f] border border-white/5 hover:border-purple-500/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Precision</span>
                            <span className="text-purple-400 font-bold font-mono">MAX</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-purple-500 h-full w-full origin-left transform transition-transform duration-1000 group-hover:scale-x-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
