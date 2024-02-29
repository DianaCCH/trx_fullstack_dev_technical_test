import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from '../../_services/vehicle.service';
import { Subject, takeUntil } from 'rxjs';
import { Vehicle } from '../../_models/vehicle';
import { Response } from '../../_models/response';
import { CodeStatus } from 'src/app/const/const';
import { VehicleStateService } from '../../_services/vehicle-state.service';
import { SpinnerDialogService } from '../../_services/spinner-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _showVehicleInfo = false;
  constructor(
    private service: VehicleService,
    private vehicleState: VehicleStateService,
    private spinner: SpinnerDialogService) { }

  ngOnInit(): void {
    this.spinner.startSpinner();
    this.vehicleState.initializeFilterForm();
  }

  editVehicle(vehicleInfo: Vehicle) {
    this._showVehicleInfo = true;
    this.vehicleState.setInformatio(vehicleInfo);
    this.vehicleState.enableForm();
  }

  showVehicleInfo(vehicleInfo: Vehicle) {
    this._showVehicleInfo = true;
    this.vehicleState.setInformatio(vehicleInfo);
    this.vehicleState.disableForm();
  }

  hideVehicleInfo() {
    this._showVehicleInfo = false;
  }

  cancelSave() {
    this._showVehicleInfo = false;
  }

  get showVehicleInformation() {
    return this._showVehicleInfo;
  }
}
