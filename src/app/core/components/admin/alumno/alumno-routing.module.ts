import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { NewAlumnoComponent } from './new-alumno/new-alumno.component';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AlumnoComponent },
		{ path: 'register-alumno', component: NewAlumnoComponent },
		{ path: 'edit-alumno/:id', component: EditAlumnoComponent },
	])],
	exports: [RouterModule]
})
export class AlumnoRoutingModule { }
