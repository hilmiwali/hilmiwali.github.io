import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@core/models';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsList: Project[] = [
    {
      id: 'clinic-booking',
      title: 'Clinic Appointment Booking Website (Developer)',
      description: 'A web-based clinic management system for booking appointments with secure user authentication and database management.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: 'fas fa-calendar-check',
      featured: true
    },
    {
      id: 'usimprebet',
      title: 'UsimPrebet: University Ride-Hailing App (Lead Developer)',
      description: 'A Flutter-based ride-hailing mobile application designed specifically for university students with real-time booking and chat features.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      icon: 'fas fa-car',
      featured: true
    },
    {
      id: 'osintify',
      title: 'Osintify: IP & Domain Recon App (Developer)',
      description: 'A specialized mobile application for Open Source Intelligence (OSINT) investigations with IP lookup and domain analysis capabilities.',
      technologies: ['Flutter', 'Dart', 'REST API'],
      icon: 'fas fa-search',
      featured: true
    },
    {
      id: 'hikenity',
      title: 'Hikenity: Hiking Trip Management App (Developer)',
      description: 'A comprehensive mobile application for managing hiking trips with GPS tracking, booking system, and payment integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Stripe'],
      icon: 'fas fa-hiking',
      featured: true
    },
    {
      id: 'ingatnih',
      title: 'IngatNih: Simple Birthday Reminder App (Developer)',
      description: 'A mobile application for tracking and reminding users about birthdays with local database storage.',
      technologies: ['React Native', 'SQLite'],
      icon: 'fas fa-birthday-cake',
      featured: false
    },
    {
      id: 'foodbuddies',
      title: 'FoodBuddies: Food Sharing Platform (Developer)',
      description: 'A mobile platform for sharing and discovering food with cloud storage for images.',
      technologies: ['Flutter', 'Firebase', 'Cloudinary'],
      icon: 'fas fa-utensils',
      featured: false
    }
  ];
}
