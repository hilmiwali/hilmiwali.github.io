import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '@core/models';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  professionalCerts: Certification[] = [
    { id: '1', name: 'Android Certified Application Developer', issuer: 'Android ATC', category: 'professional' },
    { id: '2', name: 'HCIA-Security V4.0', issuer: 'Huawei', category: 'professional' },
    { id: '3', name: 'CompTIA Security+', issuer: 'CompTIA', category: 'professional' },
    { id: '4', name: 'Ethical Hacking 101', issuer: 'OWASP & 0day', category: 'professional' },
    { id: '5', name: 'Top Coders Malaysia 2024 Coding', issuer: 'DSA & MDEC', category: 'professional' },
    { id: '6', name: 'Social Engineering & Phishing in the Age of AI', issuer: 'OWASP & 0Day', category: 'professional' },
    { id: '7', name: 'Plug X Pwn: AI-Powered BadUSB', issuer: 'Asia Pacific University', category: 'professional' },
    { id: '8', name: 'Hands on Penetration Testing Labs Course', issuer: 'HRD Corp', category: 'professional' },
    { id: '9', name: 'Cyber Clinic Intervention 2023', issuer: 'ZIKRONE IT HOLDINGS', category: 'professional' }
  ];

  udemyCourses: Certification[] = [
    { id: '10', name: 'MySQL Ultimate Course 2025 : From Zero To Hero | Learn Mysql', issuer: 'Udemy', category: 'udemy' },
    { id: '11', name: 'Web Hacking For Beginners', issuer: 'Udemy', category: 'udemy' },
    { id: '12', name: 'Flutter UI Bootcamp | Build Beautiful Apps using Flutter', issuer: 'Udemy', category: 'udemy' }
  ];
}
