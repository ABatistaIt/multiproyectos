import { Routes } from "@angular/router";

export const ROUTES_LOGIN: Routes = [
    {
        path: '',
        loadComponent: () => import('./login.component').then(m => m.LoginComponent),
        children: [
            {
                path: 'livelis',
                loadComponent: () => import('../projects/livelis/livelis-layout.component').then(m => m.LivelisLayoutComponent)
            }
        ]
    },
    
]