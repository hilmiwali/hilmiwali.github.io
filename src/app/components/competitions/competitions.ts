import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competition } from '@core/models';

@Component({
  selector: 'app-competitions',
  imports: [CommonModule],
  templateUrl: './competitions.html',
  styleUrl: './competitions.scss',
})
export class Competitions {
  ctfCompetitions: Competition[] = [
    { id: '1', title: 'Badge to Breach: ICS Cyber Siege CTF Prelim', organizer: 'NACSA', year: '2025', category: 'ctf', badge: 'CTF' },
    { id: '2', title: 'NETSA Skill CTF Challenge', organizer: 'UTeM', year: '2025', category: 'ctf', badge: 'CTF' },
    { id: '3', title: 'AturKreatif CTF Competition', organizer: 'USIM', year: '2022, 2023, 2024', category: 'ctf', badge: 'CTF' },
    { id: '4', title: '3108 CTF', organizer: 'Bahtera Siber', year: '2023, 2024', category: 'ctf', badge: 'CTF' },
    { id: '5', title: 'rAKSASA CTF', organizer: 'rawSEC', year: '2023', category: 'ctf', badge: 'CTF' },
    { id: '6', title: 'Wargames.MY CTF', organizer: 'Wargames.MY', year: '2023', category: 'ctf', badge: 'CTF' }
  ];

  otherCompetitions: Competition[] = [
    { id: '7', title: 'Alibaba Cloud Malaysia AI Hackathon', organizer: 'Alibaba Cloud', year: '2025', category: 'hackathon', badge: 'AI/ML' },
    { id: '8', title: 'INKFINITY: Arabic & Chinese Calligraphy', organizer: 'UPSI (National Level)', year: '2024', category: 'calligraphy', badge: 'Calligraphy' },
    { id: '9', title: 'Chess Competition FST/FKAB', organizer: 'USIM', year: '2023', category: 'chess', badge: 'Chess' },
    { id: '10', title: 'Mahrajan X Mawahib Arabic Calligraphy', organizer: 'USIM', year: '2023', category: 'calligraphy', badge: 'Calligraphy' }
  ];
}
