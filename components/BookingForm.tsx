
import React, { useState } from 'react';
import { SERVICES, BUSINESS_CONFIG } from '../constants';
import { BookingFormData } from '../types';

interface BookingFormProps {
  selectedServiceIds: string[];
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedServiceIds }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    carBrandModel: '',
    vehicleType: 'Sedan',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const selectedServices = SERVICES.filter(s => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServiceIds.length === 0) {
      alert("ERROR: No modules selected. Aborting.");
      return;
    }

    setIsSubmitting(true);
    const serviceNames = selectedServices.map(s => s.name).join(', ');
    const message = `[NEW BOOKING REQUEST]\n\nCLIENT: ${formData.fullName}\nCONTACT: ${formData.phoneNumber}\nVEHICLE: ${formData.carBrandModel} (${formData.vehicleType})\n\n[CONFIG]\n${serviceNames}\nEST. COST: $${totalPrice}\n\n[TIMING]\nDATE: ${formData.preferredDate}\nTIME: ${formData.preferredTime}\n\n[METADATA]\nNOTES: ${formData.notes || 'N/A'}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-[#02040a]">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-none border border-white/10 overflow-hidden max-w-6xl mx-auto relative">
          
          {/* Decorative Header Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>

          {isSubmitting && (
            <div className="absolute inset-0 z-50 bg-[#02040a]/95 backdrop-blur flex flex-col items-center justify-center text-center p-10">
              <div className="font-mono text-cyan-500 text-xl animate-pulse mb-4">> ESTABLISHING UPLINK...</div>
              <div className="w-64 h-1 bg-white/10 rounded overflow-hidden">
                <div className="h-full bg-cyan-500 animate-[reveal-text_1.5s_ease-in-out]"></div>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row">
            
            {/* Terminal Sidebar (Summary) */}
            <div className="lg:w-[35%] bg-[#050a14] border-r border-white/5 p-10 font-mono">
              <h3 className="text-zinc-500 text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                System Summary
              </h3>
              
              <div className="mb-10 space-y-4">
                {selectedServices.length > 0 ? (
                  selectedServices.map(service => (
                    <div key={service.id} className="flex justify-between items-center text-sm border-b border-dashed border-white/10 pb-2">
                      <span className="text-white truncate pr-4">{service.name}</span>
                      <span className="text-cyan-400">${service.price}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-red-500/50 text-sm border border-red-500/20 p-4 bg-red-500/5">
                    [!] NO MODULES MOUNTED
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-zinc-500 text-xs">TOTAL_COMPUTED</span>
                  <span className="text-3xl text-white font-bold tracking-tighter">${totalPrice}</span>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <p className="text-[10px] text-zinc-600 mt-2">*Final calibration onsite required.</p>
              </div>
            </div>

            {/* Input Console */}
            <div className="lg:w-[65%] p-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl text-white font-bold tracking-tight">INPUT DATA</h4>
                <div className="text-[10px] font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1">SECURE CONNECTION</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Custom Input Field */}
                  <div className="group">
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">CLIENT_ID (NAME)</label>
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all placeholder:text-white/10"
                      placeholder="ENTER FULL NAME"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">COMM_LINK (PHONE)</label>
                    <input 
                      required
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all placeholder:text-white/10"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">UNIT_MODEL</label>
                    <input 
                      required
                      type="text" 
                      name="carBrandModel"
                      value={formData.carBrandModel}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all placeholder:text-white/10"
                      placeholder="MODEL IDENTIFIER"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">CHASSIS_CLASS</label>
                    <select 
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Hatchback">CLASS: HATCHBACK</option>
                      <option value="Sedan">CLASS: SEDAN</option>
                      <option value="SUV">CLASS: SUV/TRUCK</option>
                      <option value="Luxury/Sports">CLASS: EXOTIC</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">T-MINUS (DATE)</label>
                    <input 
                      required
                      type="date" 
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all invert-0"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">SYNC_TIME</label>
                    <input 
                      required
                      type="time" 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1 ml-1 group-focus-within:text-cyan-400">ADDITIONAL_PARAMS</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-[#0a101f] border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/10 transition-all placeholder:text-white/10"
                    placeholder="ENTER METADATA..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-border bg-cyan-950/30 text-white font-bold py-5 hover:bg-cyan-500 hover:text-black transition-all text-sm tracking-[0.2em] font-mono flex items-center justify-center gap-4 group"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'EXECUTE BOOKING'}
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-black group-hover:animate-ping"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
