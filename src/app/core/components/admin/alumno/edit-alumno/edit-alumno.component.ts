import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormLayoutDemoRoutingModule } from '../../../uikit/formlayout/formlayoutdemo-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-alumno',
  standalone: true,
  imports: [CommonModule,
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
    InputTextModule],
  templateUrl: './edit-alumno.component.html',
  styleUrl: './edit-alumno.component.scss'
})
export class EditAlumnoComponent {
  constructor(private router: Router) { }
  selectedState: any = null;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  dropdownItems = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;



  submit() {
    this.router.navigateByUrl('/dashboard/admin/alumno/')
  }

  back() {
    this.router.navigateByUrl('/dashboard/admin/alumno/')

  }
}
