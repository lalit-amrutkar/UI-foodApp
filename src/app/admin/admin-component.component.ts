import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-admin-component.ts',
  imports: [AdminLayoutComponent],
  templateUrl: './admin-component.component.html',
  styleUrl: './admin-component.component.scss'
})
export class AdminComponent {
  // Add any component logic here if needed
  constructor() {
    // Initialization code can go here
  }
}
