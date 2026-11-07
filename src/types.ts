export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: string[];
  duration: string;
  highlight: string;
}

export interface LearnTopic {
  id: number;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface WhyJoinFeature {
  id: number;
  title: string;
  description: string;
  iconName: string;
  stats: string;
}

export interface Testimonial {
  name: string;
  handle: string;
  role: string;
  avatar: string;
  views: string;
  review: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
