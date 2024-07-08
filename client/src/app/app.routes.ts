import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
    },       
];
