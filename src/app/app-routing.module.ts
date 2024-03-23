import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: () => import('./core/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'login', loadChildren: () => import('./core/components/auth/auth.module').then(m => m.AuthModule) },
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./core/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'admin', loadChildren: () => import('./core/components/admin/admin.module').then(m => m.AdminModule) },
                    { path: 'uikit', loadChildren: () => import('./core/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./core/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./core/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./core/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./core/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'landing', loadChildren: () => import('./core/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
