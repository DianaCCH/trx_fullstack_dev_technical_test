import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../_models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleStateService {
  vehicleState!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder,) { }

  initializeFilterForm() {
    this.vehicleState = this.fb.group({
      placa: new UntypedFormControl('', [Validators.required]),
      numero_economico: new UntypedFormControl('', [Validators.required]),
      vim: new UntypedFormControl('', [Validators.required]),
      asientos: new UntypedFormControl('', [Validators.required]),
      seguro: new UntypedFormControl('', [Validators.required]),
      numero_seguro: new UntypedFormControl('', [Validators.required]),
      modelo: new UntypedFormControl('', [Validators.required]),
      marca: new UntypedFormControl('', [Validators.required]),
      anio: new UntypedFormControl('', [Validators.required]),
      color: new UntypedFormControl('', [Validators.required]),
      id: new UntypedFormControl(''),
      destino: new UntypedFormControl('', [Validators.required]),
    });
    this.vehicleState.disable();
  }

  setInformatio(vehicle: Vehicle) {
    this.vehicleState?.patchValue(vehicle);
  }

  enableForm() {
    this.vehicleState.enable();
  }
  disableForm() {
    this.vehicleState.disable();
  }

  get vehicleStateForm(): UntypedFormGroup {
    return this.vehicleState as UntypedFormGroup;
  }

  get placa(): UntypedFormControl {
    return this.vehicleState?.get('placa') as UntypedFormControl;
  }

  get numero_economico(): UntypedFormControl {
    return this.vehicleState?.get('numero_economico') as UntypedFormControl;
  }

  get vim(): UntypedFormControl {
    return this.vehicleState?.get('vim') as UntypedFormControl;
  }

  get asientos(): UntypedFormControl {
    return this.vehicleState?.get('asientos') as UntypedFormControl;
  }

  get seguro(): UntypedFormControl {
    return this.vehicleState?.get('seguro') as UntypedFormControl;
  }

  get numero_seguro(): UntypedFormControl {
    return this.vehicleState?.get('numero_seguro') as UntypedFormControl;
  }

  get modelo(): UntypedFormControl {
    return this.vehicleState?.get('modelo') as UntypedFormControl;
  }

  get marca(): UntypedFormControl {
    return this.vehicleState?.get('marca') as UntypedFormControl;
  }

  get anio(): UntypedFormControl {
    return this.vehicleState?.get('anio') as UntypedFormControl;
  }

  get color(): UntypedFormControl {
    return this.vehicleState?.get('color') as UntypedFormControl;
  }

  // get estatus(): UntypedFormControl {
  //   return this.vehicleState?.get('estatus') as UntypedFormControl;
  // }

  get destino(): UntypedFormControl {
    return this.vehicleState?.get('destino') as UntypedFormControl;
  }
}
