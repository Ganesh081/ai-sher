export interface BundleConfig {
  productTitle: string;
  reelCount: number;
  bonusCount: number;
  price: number;
  originalPrice: number;
  currency: string;
  paymentLink: string;
  downloadLink: string;
  whatsappNumber: string;
  whatsappMessage: string;
  supportEmail: string;
  productImageUrl?: string;
  headerImageUrl?: string;
}

export interface ReelSample {
  id: string;
  title: string;
  category: 'Hulk Viral' | 'Cyber Rage' | 'Bonus Story' | 'Ultra Smash';
  views: string;
  likes: string;
  audioName: string;
  description: string;
  gradient: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  followersGain: string;
  timeframe: string;
  comment: string;
  rating: number;
  verified: boolean;
  avatarBg: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LiveSale {
  name: string;
  location: string;
  timeAgo: string;
  item: string;
}
