import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesMapComponent } from './_components/routes-map/routes-map.component';
import { VehicleTableComponent } from './_components/vehicle-table/vehicle-table.component';
import { HomeComponent } from './_components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { VehicleDetailsComponent } from './_components/vehicle-details/vehicle-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RoutesMapComponent,
    VehicleTableComponent,
    HomeComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [
    RoutesMapComponent,
    VehicleTableComponent,
    VehicleDetailsComponent
  ]
})
export class HomeModule { }
