import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VehicleStateService } from '../../_services/vehicle-state.service';
import { SpinnerDialogService } from '../../_services/spinner-dialog.service';
import { VehicleService } from '../../_services/vehicle.service';
import { UntypedFormGroup } from '@angular/forms';
import { CodeStatus, LOCATION } from 'src/app/const/const';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit, OnDestroy {
  protected _onDestroy$ = new Subject<void>;

  constructor(public dialogRef: MatDialogRef<CreateVehicleComponent>,
    private vehicleState: VehicleStateService,
    private service: VehicleService,
    @Inject(LOCATION) private location: Location,
    private spinner: SpinnerDialogService) {

  }
  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngOnInit(): void {
    this.vehicleState.vehicleStateForm.reset();
    this.vehicleState.enableForm();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    const vehicle = this.vehicleForm.getRawValue();
    this.service.createNewVehicle(vehicle)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(result => {
        if (result.status === CodeStatus.OK) {
          this.spinner.closeSpinner();
          this.location.reload();
        }
      });
  }

  get requiredFilledAndValid() {
    return this.vehicleState.vehicleStateForm.valid;
  }

  get vehicleForm(): UntypedFormGroup {
    return this.vehicleState.vehicleStateForm as UntypedFormGroup;
  }
}
