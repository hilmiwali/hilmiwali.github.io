import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '@core/models';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      id: 'web-tech',
      title: 'Web Tech',
      icon: 'fab fa-html5',
      skills: ['HTML', 'CSS', 'JavaScript', 'JSP']
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: 'fas fa-layer-group',
      skills: ['Flutter', 'Angular', 'Spring Boot']
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: 'fas fa-code',
      skills: ['Java', 'Python', 'Dart']
    },
    {
      id: 'database',
      title: 'Database',
      icon: 'fas fa-database',
      skills: ['MySQL', 'Firebase']
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: 'fas fa-tools',
      skills: ['Git', 'Android Studio', 'VSCode', 'XAMPP', 'phpMyAdmin', 'HeidiSQL', 'DBeaver']
    }
  ];
}
