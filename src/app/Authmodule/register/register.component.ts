import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { ToastNotificationComponent } from '../../shared/toast-notification/toast-notification.component';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, ToastNotificationComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Example for 10-digit phone number
      address: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    try {
      if (this.registerForm.valid) {
        const formData = this.registerForm.value;
        const payload = {
          username: formData.username,
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          address: formData.address
        };
        this.authService.register(payload).subscribe({
          next: (response) => {
            if (response && response.success === true) {
              this.toastRef.show('Registration successful!', 'success'); // Show success message
              setTimeout(() => {
                this.router.navigate(['/auth/login']); // Redirect to login page after successful registration
              }, 3000);
            }
          },
          error: (error) => {
            console.error('Registration error:', error);
            this.toastRef.show('Registration failed! Please try again.', 'danger'); // Show error message
          }
        });
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }
}
