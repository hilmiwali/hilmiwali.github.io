import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/hilmi_resume.pdf';
    link.download = 'Hilmi_Wali_Resume.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
