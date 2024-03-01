import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { VehicleStateService } from 'src/app/modules/home/_services/vehicle-state.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  constructor(private vehicleStateService: VehicleStateService) { }
  ngOnInit(): void {
    // this.vehicleStateService.initializeFilterForm();
  }

  get marcaControl(): UntypedFormControl {
    return this.vehicleStateService.marca as UntypedFormControl;
  }

  get vimControl(): UntypedFormControl {
    return this.vehicleStateService.vim as UntypedFormControl;
  }

  get placaControl(): UntypedFormControl {
    return this.vehicleStateService.placa as UntypedFormControl;
  }

  get modeloControl(): UntypedFormControl {
    return this.vehicleStateService.modelo as UntypedFormControl;
  }

  get anioControl(): UntypedFormControl {
    return this.vehicleStateService.anio as UntypedFormControl;
  }

  get seguroControl(): UntypedFormControl {
    return this.vehicleStateService.seguro as UntypedFormControl;
  }

  get numeroSeguroControl(): UntypedFormControl {
    return this.vehicleStateService.numero_seguro as UntypedFormControl;
  }

  get numeroAsientosControl(): UntypedFormControl {
    return this.vehicleStateService.asientos as UntypedFormControl;
  }

  get colorControl(): UntypedFormControl {
    return this.vehicleStateService.color as UntypedFormControl;
  }

  get numeroEconomicoControl(): UntypedFormControl {
    return this.vehicleStateService.numero_economico as UntypedFormControl;
  }

  get ubicacionControl(): UntypedFormControl {
    return this.vehicleStateService.destino as UntypedFormControl;
  }

}
