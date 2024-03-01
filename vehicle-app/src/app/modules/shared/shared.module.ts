import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsTypeaheadComponent } from './_components/chips-typeahead/chips-typeahead.component';
import { DropdownComponent } from './_components/dropdown/dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleFormComponent } from './_components/vehicle-form/vehicle-form.component';
import { MatInputModule } from '@angular/material/input';
import { SpinnerDialogComponent } from './_components/spinner-dialog/spinner-dialog.component';

@NgModule({
  declarations: [
    ChipsTypeaheadComponent,
    DropdownComponent,
    VehicleFormComponent,
    SpinnerDialogComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    ChipsTypeaheadComponent,
    DropdownComponent,
    VehicleFormComponent
  ]
})
export class SharedModule { }
