export interface Competition {
  id: string;
  title: string;
  organizer: string;
  year: string;
  category: 'ctf' | 'hackathon' | 'chess' | 'calligraphy' | 'other';
  badge: string;  // Badge label text
}
