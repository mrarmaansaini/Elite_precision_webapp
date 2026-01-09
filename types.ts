
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'exterior' | 'interior' | 'protection' | 'full';
  image: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  carBrandModel: string;
  vehicleType: 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury/Sports';
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export enum VehicleType {
  HATCHBACK = 'Hatchback',
  SEDAN = 'Sedan',
  SUV = 'SUV',
  LUXURY = 'Luxury/Sports'
}
