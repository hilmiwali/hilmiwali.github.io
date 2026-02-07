import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    emailjs.init('P_vI0_sHWNjvD0hQq');
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Send email using EmailJS
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        to_email: 'hilmiwali7702@gmail.com'
      };

      console.log('Sending email with EmailJS...');

      emailjs.send('service_f883jke', 'template_mbolpyd', templateParams).then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.submitMessage = 'Thank you! Your message has been sent successfully.';
          this.contactForm.reset();

          setTimeout(() => {
            this.submitMessage = '';
            this.submitSuccess = false;
          }, 5000);
        },
        (error: any) => {
          console.error('FAILED...', error);
          this.isSubmitting = false;
          this.submitSuccess = false;
          this.submitMessage = 'Oops! Something went wrong. Please try again or email me directly.';

          setTimeout(() => {
            this.submitMessage = '';
          }, 5000);
        }
      );
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
