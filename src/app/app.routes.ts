import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./masterModule/master.routes').then(m => m.masterRoute)
    },
    {
        path: 'auth',
        loadChildren: () => import('./Authmodule/auth.routes').then(m => m.authRoutes)
    }
];
