import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ToastNotificationComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'danger' | 'info' | 'warning' = 'success';

  isVisible: boolean = false;

  show(message: string, type: 'success' | 'danger' | 'info' | 'warning' = 'success') {
    this.message = message;
    this.type = type;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

  hideToast() {
    this.isVisible = false;
  }
}
