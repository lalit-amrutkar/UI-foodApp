import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-management',
  imports: [CommonModule, AdminLayoutComponent],
  templateUrl: './restaurant-management.component.html',
  styleUrl: './restaurant-management.component.scss'
})
export class RestaurantManagementComponent {

}
