export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  highlights: string[];
  keyBenefits: string[];
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  focusAreas: string[];
  caseStudyHighlight: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  companyCategory: string;
  quote: string;
  rating: number;
  location: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
}
