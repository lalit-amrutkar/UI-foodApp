import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-component.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RestaurantManagementComponent } from './restaurant-management/restaurant-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { DeliveryManagementComponent } from './delivery-management/delivery-management.component';
import { AccountManagementComponent } from './account-management/account-management.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent // Replace with actual component
            },
            {
                path: 'user',
                component: UserManagementComponent
            },
            {
                path: 'restaurant',
                component: RestaurantManagementComponent // Replace with actual component
            },
            {
                path: 'order',
                component: OrderManagementComponent // Replace with actual component
            },
            {
                path: 'delivery',
                component: DeliveryManagementComponent // Replace with actual component
            },
            {
                path: 'account',
                component: AccountManagementComponent // Replace with actual component
            },
            {
                path: '**',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];