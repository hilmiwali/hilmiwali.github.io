import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { 
      icon: 'fab fa-github', 
      url: 'https://github.com/hilmiwali',
      label: 'GitHub'
    },
    { 
      icon: 'fab fa-linkedin', 
      url: 'https://www.linkedin.com/in/hilmi-wali/',
      label: 'LinkedIn'
    },
    { 
      icon: 'fas fa-envelope', 
      url: 'mailto:hilmiwali7702@gmail.com',
      label: 'Email'
    }
  ];
}
