import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { ToastNotificationComponent } from '../../shared/toast-notification/toast-notification.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastNotificationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;


  constructor(private authService: AuthService) { // Inject AuthService here
    // Initialize the form in the constructor or ngOnInit
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }



  onSubmit(): void {
    try {
      if (this.loginForm.valid) {
        const formData = this.loginForm.value;
        this.authService.login(formData).subscribe({
          next: (response) => {
            if (response && response.token) {
              localStorage.setItem('token', response.token); // Store token in local storage 
              this.toastRef.show('Login successful!', 'success'); // Show success message     
            }
          },
          error: (error) => {
            console.error('Login error:', error);
            this.toastRef.show('Login failed! Please try again.', 'danger'); // Show error message
          }
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
}
