export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;  
  githubUrl?: string;  
  liveUrl?: string;    
  featured?: boolean;  
}
