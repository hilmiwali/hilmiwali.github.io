import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';
import { Competitions } from './components/competitions/competitions';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'skills', component: Skills },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'certifications', component: Certifications },
  { path: 'competitions', component: Competitions },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
