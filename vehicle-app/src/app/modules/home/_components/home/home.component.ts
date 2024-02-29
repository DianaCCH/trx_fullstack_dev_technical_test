import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from '../../_services/vehicle.service';
import { Subject, takeUntil } from 'rxjs';
import { Vehicle } from '../../_models/vehicle';
import { Response } from '../../_models/response';
import { CodeStatus } from 'src/app/const/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public service: VehicleService) { }
}
