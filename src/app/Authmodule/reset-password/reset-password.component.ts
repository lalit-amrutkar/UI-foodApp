import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { ToastNotificationComponent } from '../../shared/toast-notification/toast-notification.component';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule, ToastNotificationComponent],
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;

  constructor(private authService: AuthService) {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      cnfpassword: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const formData = this.resetPasswordForm.value;
      const payload = { password: formData.password };
      // Here you can call your service to reset the password
      this.authService.resetPassword(formData).subscribe({
        next: (response) => {
          if (response && response.success === true) {
            this.toastRef.show('Password reset successful!', 'success'); // Show success message
            // Optionally, redirect the user or show a success message
          } else {
            this.toastRef.show('Password reset failed! Please try again.', 'danger'); // Show error message
          }
        },
        error: (error) => {
          this.toastRef.show('Password reset failed! Please try again.', 'danger'); // Show error message
        }
      });
      // For demonstration, we'll just log the form data
    } else {
      console.log('Form is invalid');
    }
  }
}
