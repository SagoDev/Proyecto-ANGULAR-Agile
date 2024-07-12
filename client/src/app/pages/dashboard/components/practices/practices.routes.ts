import { Routes } from '@angular/router';

export const PRACTICES_ROUTES: Routes = [

    {
        path: 'Workboard',
        loadComponent: () => import('./work-board/work-board.component'),
        title: 'Workboard'
    },
    {
        path: 'SocialContract',
        loadComponent: () => import('./social-contract/social-contract.component'),
        title: 'Social Contract'
    },
    {
        path: 'LaunchPlan',
        loadComponent: () => import('./launch-plan/launch-plan.component'),
        title: 'Launch Plan'
    },
    {
        path: 'GroupMood',
        loadComponent: () => import('./group-mood/group-mood.component'),
        title: 'Group Mood'
    }   
];