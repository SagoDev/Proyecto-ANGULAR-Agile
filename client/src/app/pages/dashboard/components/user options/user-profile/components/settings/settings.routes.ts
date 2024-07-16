import { Routes } from '@angular/router';

export const USER_SETTINGS_ROUTES: Routes = [

    {
        path: 'Account',
        loadComponent: () => import('./user-info/user-info.component'),
        title: 'Account'
    },
    {
        path: 'Password',
        loadComponent: () => import('./password-settings/password-settings.component'),
        title: 'Password'
    },
    {
        path: 'Security',
        loadComponent: () => import('./security-settings/security-settings.component'),
        title: 'Security'
    },
    {
        path: 'Application',
        loadComponent: () => import('./application-settings/application-settings.component'),
        title: 'Application'
    },
    {
        path: 'Notification',
        loadComponent: () => import('./notification-settings/notification-settings.component'),
        title: 'Notification'
    }
];