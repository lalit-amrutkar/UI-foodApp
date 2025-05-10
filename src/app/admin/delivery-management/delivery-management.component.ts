import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-delivery-management',
  imports: [CommonModule, AdminLayoutComponent],
  templateUrl: './delivery-management.component.html',
  styleUrl: './delivery-management.component.scss'
})
export class DeliveryManagementComponent {

}
