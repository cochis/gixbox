import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'alumno', data: { breadcrumb: 'Button' }, loadChildren: () => import('./alumno/alumno.module').then(m => m.alumnoModule) },




        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
