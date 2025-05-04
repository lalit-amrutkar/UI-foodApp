import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  constructor() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      cnfpassword: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Handle the form submission logic here
      console.log('Form submitted:', this.resetPasswordForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
