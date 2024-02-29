import { Component, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { VehicleStateService } from '../../_services/vehicle-state.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateVehicleComponent } from '../create-vehicle/create-vehicle.component';
import { CodeStatus, LOCATION } from 'src/app/const/const';
import { VehicleService } from '../../_services/vehicle.service';
import { UntypedFormGroup } from '@angular/forms';
import { SpinnerDialogService } from '../../_services/spinner-dialog.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnDestroy {
  @Output() cancelSave = new EventEmitter<void>();
  protected _onDestroy$ = new Subject<void>;
  constructor(private vehicleState: VehicleStateService,
    private dialog: MatDialog,
    @Inject(LOCATION) private location: Location,
    private service: VehicleService,
    private spinner: SpinnerDialogService) { }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  save() {
    this.spinner.startSpinner();
    const vehicle = this.vehicleForm.getRawValue();
    this.service.updateVehicle(vehicle)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((result) => {
        if (result.status === CodeStatus.OK) {
          this.spinner.closeSpinner();
          this.location.reload();
        }

      });
  }
  addVehicle() {
    this.dialog.open(CreateVehicleComponent, {
      ariaModal: true,
      disableClose: true,
    }).afterClosed().subscribe(() => {
      this.cancelSave.emit();
    });
  }

  get vehicleForm(): UntypedFormGroup {
    return this.vehicleState.vehicleStateForm as UntypedFormGroup;
  }

  get requiredFilledAndValid() {
    return this.vehicleState.vehicleStateForm.valid;
  }

  get isEdit() {
    return !this.vehicleState.vehicleStateForm.disabled
  }
}
