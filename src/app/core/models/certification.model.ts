export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  category: 'professional' | 'udemy' | 'other';
}
