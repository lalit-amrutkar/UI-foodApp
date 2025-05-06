import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { ToastNotificationComponent } from '../../shared/toast-notification/toast-notification.component';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, ToastNotificationComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;


  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    try {
      if (this.forgotPasswordForm.valid) {
        const formData = this.forgotPasswordForm.value;
        this.authService.forgotPassword(formData).subscribe({
          next: (response) => {
            if (response && response.success === true) {
              this.toastRef.show('Password reset link sent to your email!', 'success'); // Show success message
            }
          },
          error: (error) => {
            console.error('Password reset error:', error);
            this.toastRef.show('Failed to send password reset link! Please try again.', 'danger'); // Show error message
          }
        });

      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  }
}
