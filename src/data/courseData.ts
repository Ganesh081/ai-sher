import { LearnTopic, WhyJoinFeature, CurriculumModule, Testimonial, FaqItem } from '../types';

export const PAYMENT_URL = 'https://payments.cashfree.com/forms?code=ai-video-course-149';
export const COURSE_PRICE = 29;
export const ORIGINAL_PRICE = 499;
export const DISCOUNT_PERCENT = 94;

export const DEFAULT_POSTER_URL = '/assets/aistudio/AI_Video_Creation_Course_Poster_97453a0a.png';

// Core "What You Will Learn" from user specification:
// 1. Create cinematic AI videos.
// 2. Use Google Gemini.
// 3. Write effective prompts.
// 4. Create unique characters and stories.
// 5. Edit videos on mobile and PC.
// 6. Make Instagram Reels and YouTube Shorts.
// 7. Understand content monetization methods.
export const LEARN_TOPICS: LearnTopic[] = [
  {
    id: 1,
    title: 'Create Cinematic AI Videos',
    description: 'Produce high-octane 4K cinematic visuals with hyper-realistic lighting, dramatic camera angles, and depth of field.',
    iconName: 'Clapperboard',
    tag: 'Visual Direction'
  },
  {
    id: 2,
    title: 'Master Google Gemini AI',
    description: 'Harness the creative power of Google Gemini to generate scene scripts, world-building concepts, and detailed visual directives.',
    iconName: 'Sparkles',
    tag: 'Core AI Engine'
  },
  {
    id: 3,
    title: 'Write Effective Prompts',
    description: 'Learn the exact prompt formulas, camera keywords, artistic stylers, and negative prompts that produce flawless AI render outputs every time.',
    iconName: 'Terminal',
    tag: 'Prompt Engineering'
  },
  {
    id: 4,
    title: 'Unique Characters & Stories',
    description: 'Build consistent characters like the viral SHER, mythical creatures, cyberpunk beasts, and serialized story arcs that keep viewers hooked.',
    iconName: 'Drama',
    tag: 'Story & Lore'
  },
  {
    id: 5,
    title: 'Edit on Mobile and PC',
    description: 'Master fast video assembly, speed ramps, motion blur, color grading, and SFX layers using CapCut, VN Editor, and Premiere Pro.',
    iconName: 'Sliders',
    tag: 'Post-Production'
  },
  {
    id: 6,
    title: 'Make Instagram Reels & Shorts',
    description: 'Optimize aspect ratios (9:16), first 3-second visual hooks, trending audio syncing, and seamless looping algorithms that trigger viral feeds.',
    iconName: 'Smartphone',
    tag: 'Viral Growth'
  },
  {
    id: 7,
    title: 'Content Monetization Methods',
    description: 'Turn your viral AI reels into real income streams: brand deals, theme-page sales, affiliate promotions, and sponsored content channels.',
    iconName: 'TrendingUp',
    tag: 'Monetization'
  }
];

// Core "Why Join?" from user specification:
// - Beginner-friendly training.
// - Step-by-step tutorials.
// - Practical examples.
// - Learn the complete video creation workflow.
export const WHY_JOIN_FEATURES: WhyJoinFeature[] = [
  {
    id: 1,
    title: 'Beginner-Friendly Training',
    description: 'No prior video editing, coding, or animation experience required. We explain every concept in simple, accessible language from ground zero.',
    iconName: 'Users',
    stats: 'Zero Tech Skills Needed'
  },
  {
    id: 2,
    title: 'Step-by-Step Tutorials',
    description: 'Follow click-by-click video walk-throughs where we build complete AI videos on screen in real time from blank page to exported video.',
    iconName: 'CheckCircle2',
    stats: '100% Screen Recorded'
  },
  {
    id: 3,
    title: 'Practical Examples & Prompt Packs',
    description: 'Get copy-paste ready prompt templates, tested prompt modifiers, and real project files used in top-performing viral SHER videos.',
    iconName: 'FileCode2',
    stats: '50+ Ready Prompts Included'
  },
  {
    id: 4,
    title: 'Complete Video Workflow',
    description: 'From initial prompt in Google Gemini to final export on your phone or computer, you gain an end-to-end repeatable production system.',
    iconName: 'Workflow',
    stats: 'Idea to Export in 15 Min'
  }
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'm1',
    number: '01',
    title: 'Foundations & Gemini Setup',
    description: 'Kickstart your AI video laboratory with Google Gemini setup, interface navigation, and workflow configuration.',
    duration: '25 Mins',
    highlight: 'Instant Setup Guide',
    lessons: [
      'Welcome & Course Roadmap',
      'Configuring Google Gemini for Creative Visual Storytelling',
      'The 4 Pillars of Viral AI Cinematic Aesthetics'
    ]
  },
  {
    id: 'm2',
    number: '02',
    title: 'The Golden Prompt Engineering Masterclass',
    description: 'Learn the exact linguistic syntax to command high-fidelity cinematic scenes, angles, lighting, and textures.',
    duration: '35 Mins',
    highlight: '50+ Prompt Cheat Sheet',
    lessons: [
      'Anatomy of a 10/10 AI Video Prompt',
      'Camera Angles, Lens Focal Lengths & Volumetric Lighting Keywords',
      'Eliminating AI Artifacts & Hallucinations with Negative Prompting'
    ]
  },
  {
    id: 'm3',
    number: '03',
    title: 'Crafting the SHER Character & Story Consistency',
    description: 'Techniques to keep character facial features, cybernetic armor, and majestic styling consistent across multi-part reels.',
    duration: '40 Mins',
    highlight: 'SHER Character Blueprint',
    lessons: [
      'Building the Cyber Golden Lion ("SHER") Character Sheet',
      'Scene-to-Scene Visual Continuity and Lighting Match',
      'Crafting Cliffhanger Scripts with Google Gemini'
    ]
  },
  {
    id: 'm4',
    number: '04',
    title: 'Mobile & PC Video Editing (CapCut & VN)',
    description: 'Bring static clips alive with dynamic camera motion, zooms, speed ramps, sound design, and impact titles.',
    duration: '45 Mins',
    highlight: 'Editing Preset Pack',
    lessons: [
      'Mobile Editing Setup on Android & iPhone (CapCut/VN)',
      'PC Timeline Workflow: 4K 60fps Rendering & Upscaling',
      'Layering Epic Cinematic Sound FX and Sub-Bass Drops'
    ]
  },
  {
    id: 'm5',
    number: '05',
    title: 'Publishing Viral Reels & YouTube Shorts',
    description: 'The algorithm playbook: optimal posting times, high-retention audio syncing, and metadata optimization.',
    duration: '30 Mins',
    highlight: 'Algorithm Blueprint',
    lessons: [
      'The 3-Second Hook Rule for 80%+ Retention',
      'Instagram Reels vs. YouTube Shorts Feed Algorithms',
      'Cover Art, Viral Titles, and Hashtag Strategy'
    ]
  },
  {
    id: 'm6',
    number: '06',
    title: 'Monetization & Income Blueprints',
    description: 'Detailed pathways to turn your AI video creation skills into recurring digital income and sponsor opportunities.',
    duration: '35 Mins',
    highlight: 'Commercial Strategy',
    lessons: [
      'Building and Monetizing High-Engagement Theme Pages',
      'Inbound Brand Sponsorships & Client Freelance Packages',
      'Selling Digital Bundles & Video Creation Services'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aarav Mehta',
    handle: '@aarav.ai.creations',
    role: 'Digital Creator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    views: '1.2M Views on 1st Reel',
    review: 'I never made a video before. The Google Gemini prompt formula and CapCut steps in this course helped me create my first viral lion animation in 20 minutes. At ₹29, this is unbeatable value.',
    verified: true
  },
  {
    name: 'Pooja Sharma',
    handle: '@poojasharma_reels',
    role: 'Instagram Growth Specialist',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    views: '840K Views in 2 Weeks',
    review: 'The character consistency module alone is worth thousands. It showed me exactly how to make recurring episodes like the SHER series. Got 45K new followers this month!',
    verified: true
  },
  {
    name: 'Rohan Deshmukh',
    handle: '@rohan_cinema_ai',
    role: 'Freelance Video Editor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    views: '₹18,000 Earned in Client Work',
    review: 'Learned the complete PC + mobile workflow. Started pitching local gym and fitness clients with cinematic beast shorts. Closed 2 clients in my first week.',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I get access to the course after paying ₹29?',
    answer: 'Immediate instant digital access! As soon as your ₹29 payment completes securely on Cashfree, you are instantly redirected to the course learning portal with all video modules, downloadable prompts, and editing resources. You also receive an instant confirmation receipt.'
  },
  {
    question: 'Can I do this course on a mobile phone without a laptop?',
    answer: 'Yes, 100%! The entire workflow is specifically designed to work seamlessly on both Android and iOS smartphones using free mobile apps like CapCut, VN Editor, and Google Gemini via browser or app.'
  },
  {
    question: 'Do I need paid AI tools to create these videos?',
    answer: 'No. The course focuses primarily on Google Gemini and free accessible AI creation engines, free editing apps, and royalty-free cinematic music libraries.'
  },
  {
    question: 'Is this suitable for complete beginners?',
    answer: 'Absolutely. We assume zero prior experience. We guide you step-by-step from writing your first prompt to final export on your phone.'
  },
  {
    question: 'What is the payment method and is it safe?',
    answer: 'Payments are processed directly via Cashfree Payments with bank-grade 256-bit SSL encryption. All major payment options are accepted including UPI (Google Pay, PhonePe, Paytm), Credit/Debit cards, and Net Banking.'
  },
  {
    question: 'Are there any hidden recurring fees?',
    answer: 'No hidden fees whatsoever. ₹29 is a one-time payment for complete lifetime access to all lessons, templates, and future updates.'
  }
];
