import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience as ExperienceModel } from '@core/models';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experienceList: ExperienceModel[] = [
    {
      id: 'protege',
      title: 'Software Developer Protege',
      company: 'Contract',
      period: 'September 2025 - Current',
      icon: 'fas fa-laptop-code',
      responsibilities: [
        'Migrated assigned modules from a legacy system to a modern Spring Boot architecture',
        'Developed and maintained Angular frontend components integrated with Spring Boot REST APIs',
        'Tested and validated API endpoints and database integration using Swagger'
      ]
    },
    {
      id: 'freelance-mobile',
      title: 'Mobile App Developer',
      company: 'Freelance',
      period: 'January 2025 - Current',
      icon: 'fas fa-mobile-alt',
      responsibilities: [
        'Created Flutter mobile prototypes for clients and ensured the features matched their project needs'
      ]
    },
    {
      id: 'internship',
      title: 'Software Developer Intern',
      company: 'Internship',
      period: 'March 2025 - August 2025',
      icon: 'fas fa-code',
      phases: [
        {
          title: 'QA Team - Phase 1 (March - April)',
          icon: 'fas fa-bug',
          responsibilities: [
            'Conducted manual testing on systems including writing and executing test scripts to identify and report bugs, ensuring system functionalities aligned with the requirements'
          ]
        },
        {
          title: 'Development Team - Phase 2 (May - August)',
          icon: 'fas fa-code',
          responsibilities: [
            'Transitioned to the development and contributed to coding, debugging and enhancing features using JSP',
            'Worked closely with senior developers and participated in the development process'
          ]
        }
      ]
    },
    {
      id: 'phone-repair',
      title: 'Mobile Phone Repair Technician',
      company: 'Freelance',
      period: '2018 - 2023',
      icon: 'fas fa-tools',
      responsibilities: [
        'Repaired mobile phones by replacing parts such as screens and batteries, offering affordable and reliable services to customers'
      ]
    },
    {
      id: 'production',
      title: 'Production Worker',
      company: 'Part-Time',
      period: 'December 2019 - February 2020',
      icon: 'fas fa-industry',
      responsibilities: [
        'Assisted in the daily production process of health and wellness products',
        'Handled product packaging and labeling, ensuring quality control and efficient operation'
      ]
    }
  ];
}
