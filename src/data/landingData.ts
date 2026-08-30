import { BundleConfig, ReelSample, Testimonial, FaqItem, LiveSale } from '../types';

export const DEFAULT_CONFIG: BundleConfig = {
  productTitle: '300+ AI HULK REELS BUNDLE',
  reelCount: 300,
  bonusCount: 1000,
  price: 29,
  originalPrice: 999,
  currency: '₹',
  paymentLink: 'https://payments.cashfree.com/forms?code=unlockeverything',
  downloadLink: 'https://drive.google.com/drive/folders/ai-hulk-bundle-sample-access',
  whatsappNumber: '+91 6394927894',
  whatsappMessage: 'Hi! I purchased the 300+ AI Hulk Reels Bundle and need instant access support.',
  supportEmail: 'support@viralaibundles.in',
  productImageUrl: '/hulk_poster.png'
};

export const REEL_SAMPLES: ReelSample[] = [
  {
    id: '1',
    title: 'CYBER HULK RAGE 4K',
    category: 'Hulk Viral',
    views: '3.8M',
    likes: '412K',
    audioName: 'Trending Phonk & Bass (Viral Mix)',
    description: 'Electric cybernetic veins pulsing in 4K resolution, ultra-cinematic camera sweep.',
    gradient: 'from-emerald-950 via-green-900 to-black',
    badge: '🔥 VIRAL HIT'
  },
  {
    id: '2',
    title: 'TITAN GROUND SMASH',
    category: 'Ultra Smash',
    views: '5.2M',
    likes: '680K',
    audioName: 'Dramatic Epic Cinematic Drop',
    description: 'Holographic floor shatter with emerald shockwaves and particle explosions.',
    gradient: 'from-green-950 via-emerald-800 to-zinc-950',
    badge: '⚡ MOST SHARED'
  },
  {
    id: '3',
    title: 'AI HULK VS CYBER ROBOT',
    category: 'Hulk Viral',
    views: '2.4M',
    likes: '295K',
    audioName: 'Aggressive Cyberpunk Beat',
    description: 'Futuristic brawl in neon sci-fi metropolis with dynamic slow-motion cuts.',
    gradient: 'from-lime-950 via-green-950 to-black',
    badge: '🚀 10X ALGORITHM HOOK'
  },
  {
    id: '4',
    title: 'MYSTICAL STORY REELS #44',
    category: 'Bonus Story',
    views: '1.9M',
    likes: '210K',
    audioName: 'Emotional Mystery Sound',
    description: 'Epic storytelling reel format designed for 90%+ average watch time retention.',
    gradient: 'from-teal-950 via-emerald-900 to-neutral-950',
    badge: '🎁 BONUS INCLUDED'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aman Sharma',
    handle: '@cyber_mindset_ai',
    followersGain: '+42,500 Followers',
    timeframe: 'in 18 days',
    comment: 'Bhai ₹29 me 1300+ reels mil rahi hai! Maine pehle 3 reels post kiye aur 2 reels explore feed me 1.4M views cross kar gayi. Best investment for page growth.',
    rating: 5,
    verified: true,
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 't2',
    name: 'Rohan Deshmukh',
    handle: '@viral_titan_shorts',
    followersGain: '₹38,000+ Brand Deals',
    timeframe: 'in 1 month',
    comment: 'Creating 3D AI videos takes 2 hours per reel in Midjourney & Runway. Here I got ready-to-post HD videos instantly. Drive link opened immediately after payment!',
    rating: 5,
    verified: true,
    avatarBg: 'bg-green-700'
  },
  {
    id: 't3',
    name: 'Vikram Singh',
    handle: '@motivation_hulk_official',
    followersGain: '+78,000 Followers',
    timeframe: 'in 24 days',
    comment: 'No watermark, crystal clear 1080x1920 60fps quality. Even the 1000+ story reels bonus is insane quality. Worth 1000x more than ₹29!',
    rating: 5,
    verified: true,
    avatarBg: 'bg-yellow-600'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'How do I receive the reels after paying ₹29?',
    answer: 'Instantly! As soon as your payment is completed via UPI / GPay / PhonePe / Card, you will be redirected to the direct Google Drive access page. You also get an instant download link to save to your phone or PC with lifetime access.'
  },
  {
    id: 'f2',
    question: 'Are there any watermarks or logos on the videos?',
    answer: 'Zero watermarks! All 300+ AI Hulk Reels and 1000+ Bonus Story Reels come 100% clean and unbranded so you can add your own logo, handle, text hooks, and trending audio.'
  },
  {
    id: 'f3',
    question: 'Can I monetize these reels on Instagram & YouTube?',
    answer: 'Yes! Thousands of creators use these high-retention AI videos to grow viral theme pages, generate millions of views, and monetize through Instagram Gifts, Brand Deals, and Affiliate Marketing.'
  },
  {
    id: 'f4',
    question: 'What video format and quality are these reels?',
    answer: 'All videos are in standard 9:16 vertical MP4 format (1080x1920 Full HD / 60 FPS), perfectly sized and optimized for Instagram Reels, YouTube Shorts, and Facebook Reels.'
  },
  {
    id: 'f5',
    question: 'Is it a one-time payment or monthly subscription?',
    answer: 'Strictly a ONE-TIME payment of only ₹29. No hidden charges, no recurring fees, and you get lifetime access with free folder updates.'
  }
];

export const LIVE_SALES: LiveSale[] = [
  { name: 'Sameer K.', location: 'Mumbai', timeAgo: 'just now', item: 'AI Hulk Bundle' },
  { name: 'Karthik V.', location: 'Bengaluru', timeAgo: '1 min ago', item: '1300+ Reels Bundle' },
  { name: 'Aakash P.', location: 'Delhi NCR', timeAgo: '3 mins ago', item: 'AI Hulk Bundle' },
  { name: 'Ankit R.', location: 'Jaipur', timeAgo: '4 mins ago', item: '1300+ Reels Bundle' },
  { name: 'Devendra S.', location: 'Pune', timeAgo: '6 mins ago', item: 'AI Hulk Bundle' },
  { name: 'Pooja M.', location: 'Hyderabad', timeAgo: '8 mins ago', item: '1300+ Reels Bundle' }
];
