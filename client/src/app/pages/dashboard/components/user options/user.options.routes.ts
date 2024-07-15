import { Routes } from '@angular/router';
import path from 'path';

export const USER_OPTIONS_ROUTES: Routes = [
    {
        path: 'Profile',
        loadComponent: () => import('./user-profile/user-profile.component'),
        title: 'Profile',
    },
    {
        path: 'Tasks',
        loadComponent: () => import('./user-tasks/user-tasks.component'),
        title: 'Tasks',
    }
];