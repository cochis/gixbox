import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoRoutingModule } from './alumno-routing.module';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AlumnoComponent } from './alumno.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TableDemoRoutingModule } from '../../uikit/table/tabledemo-routing.module';
import { FormLayoutDemoRoutingModule } from '../../uikit/formlayout/formlayoutdemo-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
	imports: [
		CommonModule,
		AlumnoRoutingModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		ToggleButtonModule,
		TableDemoRoutingModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
		CommonModule,
		FormsModule,
		FormLayoutDemoRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,


	],
	declarations: [AlumnoComponent]
})
export class alumnoModule { }
