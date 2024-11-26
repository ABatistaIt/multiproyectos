import { Routes } from "@angular/router";

export const ROUTES_LOGIN: Routes = [
    {
        path: '',
        loadComponent: () => import('./login.component').then(m => m.LoginComponent),
        children: []
    },
    
]