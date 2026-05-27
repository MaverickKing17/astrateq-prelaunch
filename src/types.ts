export interface Bundle {
  id: string;
  name: string;
  badge?: string;
  msrp: number;
  price: number;
  savings: number;
  description: string;
  features: string[];
  isFeatured?: boolean;
  warranty: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'compatibility' | 'installation' | 'subscriptions' | 'privacy' | 'updates' | 'support' | 'general';
}

export interface CompatibilitySelection {
  year: string;
  make: string;
  model: string;
}
