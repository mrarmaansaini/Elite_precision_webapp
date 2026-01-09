
import React, { useState } from 'react';
import { SERVICES, BUSINESS_CONFIG } from '../constants';
import { BookingFormData, VehicleType } from '../types';

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
      alert("Please select at least one service from the list above.");
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const serviceNames = selectedServices.map(s => s.name).join(', ');
    
    // Format message for WhatsApp
    const message = `Hello Elite Precision Detailing team!

I would like to book an appointment for my vehicle.

*Customer Details:*
👤 Name: ${formData.fullName}
📞 Phone: ${formData.phoneNumber}
🚗 Car: ${formData.carBrandModel} (${formData.vehicleType})

*Services Selected:*
✨ ${serviceNames}
💰 Total Est: $${totalPrice}

*Schedule:*
📅 Date: ${formData.preferredDate}
⏰ Time: ${formData.preferredTime}

*Notes:* 
${formData.notes || 'None provided.'}

Looking forward to your confirmation!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-[#09090b]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-0 bg-[#0e0e11] rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/5 relative">
          
          {isSubmitting && (
            <div className="absolute inset-0 z-50 bg-[#09090b]/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-10 animate-fade-in">
              <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-8 shadow-2xl shadow-purple-500/20"></div>
              <h3 className="text-3xl font-bold text-white mb-4 font-lexend">Confirming Booking</h3>
              <p className="text-zinc-400 text-lg">Handoff to our WhatsApp concierge in progress...</p>
            </div>
          )}

          {/* Left Side: Summary */}
          <div className="lg:w-[40%] p-12 lg:p-16 bg-gradient-to-br from-purple-900/20 to-transparent flex flex-col justify-between border-r border-white/5">
            <div>
              <div className="w-16 h-1 bg-purple-600 mb-8 rounded-full"></div>
              <h3 className="text-4xl font-bold text-white mb-6 font-lexend">Your Selections</h3>
              <p className="text-zinc-500 mb-12 leading-relaxed text-lg">
                Review your premium detailing package. Final pricing is tailored to vehicle condition upon arrival.
              </p>

              <div className="space-y-8">
                {selectedServices.length > 0 ? (
                  selectedServices.map(service => (
                    <div key={service.id} className="flex justify-between items-start group">
                      <div className="flex gap-5">
                        <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                           <p className="text-zinc-200 font-bold font-lexend">{service.name}</p>
                           <p className="text-zinc-600 text-xs uppercase tracking-widest">{service.duration}</p>
                        </div>
                      </div>
                      <span className="text-purple-400 font-black">${service.price}</span>
                    </div>
                  ))
                ) : (
                  <div 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="p-12 border-2 border-dashed border-zinc-800 rounded-[2rem] text-center cursor-pointer hover:border-purple-500/50 transition-all group"
                  >
                    <p className="text-zinc-500 text-sm group-hover:text-purple-400 transition-colors uppercase font-bold tracking-widest leading-loose">
                      No services chosen<br/>
                      <span className="text-xs text-zinc-600">Select at least one service to book</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] font-black mb-2">Total Investment</p>
                  <p className="text-5xl font-black text-white font-lexend">${totalPrice}</p>
                </div>
                <div className="text-right">
                   <div className="bg-purple-600/10 text-purple-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-500/20">Elite Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-[60%] p-12 lg:p-20">
            <h4 className="text-2xl font-bold text-white mb-10 font-lexend">Owner Details</h4>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">Client Name</label>
                  <input 
                    required
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name" 
                    className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">WhatsApp Number</label>
                  <input 
                    required
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+0 (000) 000-0000" 
                    className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">Car Model & Year</label>
                  <input 
                    required
                    type="text" 
                    name="carBrandModel"
                    value={formData.carBrandModel}
                    onChange={handleInputChange}
                    placeholder="e.g. Porsche 911 GT3 RS" 
                    className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">Vehicle Class</label>
                  <div className="relative">
                    <select 
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Hatchback">Hatchback / Compact</option>
                      <option value="Sedan">Sedan / Saloon</option>
                      <option value="SUV">SUV / 4x4</option>
                      <option value="Luxury/Sports">Exotic / Supercar</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all invert brightness-90 md:invert-0 md:brightness-100"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">Arrival Window</label>
                  <input 
                    required
                    type="time" 
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1">Special Requirements</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about specific focus areas or paint concerns..." 
                  className="w-full bg-[#09090b] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all placeholder:text-zinc-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-zinc-800 disabled:cursor-not-allowed text-white font-black py-6 rounded-[2rem] transition-all shadow-2xl shadow-purple-600/40 text-xl flex items-center justify-center gap-4 active:scale-95 group font-lexend"
              >
                {isSubmitting ? 'Finalizing Details...' : 'Request Appointment'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.12l-.794 2.353 2.456-.757c.85.508 1.835.845 3.081.846 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.585-5.766-5.768-5.766zM15.42 14.5c-.21.59-.83 1.03-1.46 1.15-.54.1-1.24.18-2.6-.37-1.89-.77-3.11-2.7-3.21-2.83-.09-.13-.81-1.07-.81-2.04 0-.97.51-1.44.69-1.64.18-.2.4-.25.53-.25h.38c.12 0 .28-.05.44.33.17.39.57 1.39.62 1.49.05.1.08.22 0 .38-.08.16-.12.25-.25.39-.13.14-.28.32-.4.43-.13.13-.27.27-.12.53.15.26.67 1.1 1.44 1.79.98.88 1.81 1.15 2.07 1.28.26.13.41.11.57-.07.16-.18.69-.8 0-.87-.19.44-.07-.35-.16-.27-.05h.33c.17 0 .43.06.67.58.24.52.83 2.02.83 2.12z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
