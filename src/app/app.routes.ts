import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./Authmodule/auth.routes').then(m => m.authRoutes)
    }
];
