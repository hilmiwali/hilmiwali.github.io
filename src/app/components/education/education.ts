import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education as EducationModel } from '@core/models';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationList: EducationModel[] = [
    {
      id: 'bachelor',
      degree: 'Bachelor of Computer Science (Honours)',
      field: 'Information Security and Assurance',
      institution: 'Universiti Sains Islam Malaysia (USIM)',
      period: '2021 - 2025',
      cgpa: '3.67/4.00',
      achievements: ['CGPA: 3.67/4.00'],
      icon: 'fas fa-graduation-cap'
    },
    {
      id: 'foundation',
      degree: 'Foundation in Accounting and Muamalat',
      institution: 'Universiti Sains Islam Malaysia (USIM)',
      period: '2020 - 2021',
      cgpa: '3.56/4.00',
      achievements: ['CGPA: 3.56/4.00', 'MUET: Band 4'],
      icon: 'fas fa-certificate'
    }
  ];
}
