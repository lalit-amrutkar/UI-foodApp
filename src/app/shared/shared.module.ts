import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

@NgModule({
    declarations: [],
    imports: [CommonModule, ToastNotificationComponent],
    exports: [ToastNotificationComponent] // <-- Make it usable in other modules
})
export class SharedModule { }
