import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-account-management',
  imports: [CommonModule, AdminLayoutComponent],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.scss'
})
export class AccountManagementComponent {

}
