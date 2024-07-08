import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard.component'),
        children: [
            {
                path: 'Workboard',
                loadComponent: () => import('./components/practices/work-board/work-board.component'),
                title: 'Workboard'
            },
            {
                path: 'SocialContract',
                loadComponent: () => import('./components/practices/social-contract/social-contract.component'),
                title: 'Social Contract'
            },
            {
                path: 'LaunchPlan',
                loadComponent: () => import('./components/practices/launch-plan/launch-plan.component'),
                title: 'Launch Plan'
            },
            {
                path: 'GroupMood',
                loadComponent: () => import('./components/practices/group-mood/group-mood.component'),
                title: 'Group Mood'
            }
        ],
        title: 'Dashboard'
    }]