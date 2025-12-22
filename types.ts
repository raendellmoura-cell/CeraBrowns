export interface ModuleItem {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  title: string;
  description: string;
  icon: 'Book' | 'Users' | 'Ruler' | 'Palette';
}