
import { Service } from './types';

export const BUSINESS_CONFIG = {
  name: 'Elite Precision Detailing',
  whatsappNumber: '919779780895', // Format: CountryCode + Number (no plus or spaces)
  location: '123 Luxury Lane, Automotive District, CA 90210',
  coordinates: { lat: 34.0736, lng: -118.4004 }, // Example: Beverly Hills area
  email: 'bookings@eliteprecision.com',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
};

export const SERVICES: Service[] = [
  {
    id: 'exterior-wash',
    name: 'Showroom Shine Exterior',
    description: 'Decontamination wash, clay bar treatment, and high-gloss wax sealant.',
    price: 65,
    duration: '1.5 Hours',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'interior-deep',
    name: 'Executive Interior Revival',
    description: 'Steam cleaning, leather conditioning, and deep extraction for all carpets.',
    price: 145,
    duration: '3 Hours',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Shield Pro',
    description: '9H hardness ceramic coating providing 3+ years of paint protection.',
    price: 599,
    duration: '8 Hours',
    category: 'protection',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'full-detailing',
    name: 'The Ultimate Reset',
    description: 'Complete interior and exterior overhaul. Engine bay detailing included.',
    price: 285,
    duration: '5 Hours',
    category: 'full',
    image: 'https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paint-correction',
    name: 'Stage 1 Paint Correction',
    description: 'Removal of light swirl marks and scratches to restore optical clarity.',
    price: 350,
    duration: '6 Hours',
    category: 'protection',
    image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'headlight-resto',
    name: 'Crystal Vision Headlight',
    description: 'Multi-stage sanding and UV coating to restore yellowed or foggy headlights.',
    price: 85,
    duration: '1 Hour',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1615412704911-55d589229864?auto=format&fit=crop&q=80&w=800'
  }
];
