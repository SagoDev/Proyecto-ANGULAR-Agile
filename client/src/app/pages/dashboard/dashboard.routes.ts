import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [

    {
        path: '',
        loadComponent: () => import('./dashboard.component'),
        children: [
            {
                path: 'practice',
                loadChildren: () => import('./components/practices/practices.routes').then(m => m.PRACTICES_ROUTES)
            },
            {
                path: 'user',
                loadChildren: () => import('./components/user options/user.options.routes').then(m => m.USER_OPTIONS_ROUTES)
            }
        ]
    },
]