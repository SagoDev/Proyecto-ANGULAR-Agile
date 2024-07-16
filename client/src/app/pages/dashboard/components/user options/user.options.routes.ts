import { Routes } from '@angular/router';

export const USER_OPTIONS_ROUTES: Routes = [
    {
        path: 'Profile',
        loadComponent: () => import('./user-profile/user-profile.component'),
        title: 'Profile',
        children: [
            {
                path: '',
                loadComponent: () => import('./user-profile/components/settings/user-info/user-info.component')
            },
            {
                path: 'Settings',
                loadChildren: () => import('./user-profile/components/settings/settings.routes').then(m => m.USER_SETTINGS_ROUTES)
            }
        ]
    },
    {
        path: 'Tasks',
        loadComponent: () => import('./user-tasks/user-tasks.component'),
        title: 'Tasks',
    }
];