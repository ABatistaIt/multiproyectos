import { Routes } from "@angular/router";

export const ROUTES_LOGIN: Routes = [
    {
        path: '',
        loadComponent: () => import('./login.component').then(m => m.LoginComponent),
        children: [
            {
                path: 'livelis',
                loadComponent: () => import('../projects/livelis/livelis-layout.component').then(m => m.LivelisLayoutComponent)
            },
            {
                path: 'hologen',
                loadComponent: () => import('../projects/hologen/holgen-layout.component').then(m => m.HolgenLayoutComponent)
            },
            {
                path: 'hologen2',
                loadComponent: () => import('../projects/hologen/holgen-layout.component').then(m => m.HolgenLayoutComponent)
            }
        ]
    },
    
]