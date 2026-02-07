
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  icon: string;  
  description?: string;
  responsibilities?: string[];
  phases?: ExperiencePhase[]; 
}

export interface ExperiencePhase {
  title: string;
  icon: string;
  responsibilities: string[];
}
