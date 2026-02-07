export interface Education {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
  cgpa?: string;
  achievements?: string[];
  icon: string;  // Font Awesome icon class
}
