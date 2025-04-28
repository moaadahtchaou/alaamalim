export interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  location: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  images: string[];
  features: string[];
  status: 'sale' | 'rent' | 'vacation';
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

export interface PropertySearchFilters {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
}
