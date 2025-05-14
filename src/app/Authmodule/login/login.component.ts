import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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


  constructor(private authService: AuthService, private router: Router) { // Inject AuthService here
    // Initialize the form in the constructor or ngOnInit
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usernameOrEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }



  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.toastRef.show('Please fill in all required fields correctly.', 'warning');
      return;
    }

    const formData = this.loginForm.value;

    this.authService.login(formData).subscribe({
      next: (response) => {
        if (response?.token) {
          this.handleSuccessfulLogin(response);
        } else {
          this.toastRef.show('Login failed! Please try again.', 'danger');
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.toastRef.show('Login failed! Please try again.', 'danger');
      }
    });
  }

  handleSuccessfulLogin(response: any): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.authService.isLoggedInSubject.next(true);

    this.authService.isAuthenticated().subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.toastRef.show('Login successful!', 'success');
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.toastRef.show('Login failed! Please try again.', 'danger');
        }
      },
      error: (error) => {
        console.error('Authentication error:', error);
        this.toastRef.show('An error occurred during authentication.', 'danger');
      }
    });
  }
}
