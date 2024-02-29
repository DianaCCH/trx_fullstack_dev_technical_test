import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from '../../_models/vehicle';
import { VehicleService } from '../../_services/vehicle.service';
import { Subject, takeUntil } from 'rxjs';
import { CodeStatus } from 'src/app/const/const';
import { Response } from '../../_models/response';
import { FilterService } from '../../_services/filter.service';
import { UntypedFormControl } from '@angular/forms';
import { SpinnerDialogService } from '../../_services/spinner-dialog.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.scss']
})
export class VehicleTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() editVehicleInfo = new EventEmitter<Vehicle>();
  @Output() showVehicleInfo = new EventEmitter<Vehicle>();
  vehicles: Vehicle[] = [];
  columnNames!: string[];
  dataSource = new MatTableDataSource<Vehicle>(this.vehicles);
  displayedColumns: string[] = ['placa', 'vim', 'marca', 'modelo', 'remove', 'edit'];
  protected _onDestroy$ = new Subject<void>;
  constructor(
    private service: VehicleService,
    private filterService: FilterService,
    private spinner: SpinnerDialogService) { }

  ngOnInit(): void {
    this.getVehicles();
    this.filterService.initializeFilterForm();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onClickRow(rowInfo: Vehicle) {
    console.log(rowInfo);
    this.showVehicleInfo.emit(rowInfo)
  }

  edit(rowInfo: Vehicle) {
    console.log("edit", rowInfo);
    this.editVehicleInfo.emit(rowInfo);
  }

  remove(row: Vehicle) {
    console.log("remove", row);
    this.service.removeVehicle(row.id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(result => {
        if (result.status === CodeStatus.OK) {
          this.dataSource = new MatTableDataSource(result.data);
          this.dataSource.paginator = this.paginator;
        }
      });
  }

  refresh() {
    this.spinner.startSpinner();
    this.getVehicles();
  }

  search() {
    this.spinner.startSpinner();
    this.service.getVehiclesByFilter(this.filterTypeControl.value, this.filterValuesControl.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((result: Response<Vehicle>) => {
        if (result.status === CodeStatus.OK) {
          this.dataSource = new MatTableDataSource(result.data);
          this.dataSource.paginator = this.paginator;
          this.spinner.closeSpinner();
        }
      });
  }

  getVehicles() {
    this.service.getVehicles()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((result: Response<Vehicle>) => {
        if (result.status === CodeStatus.OK) {
          this.dataSource = new MatTableDataSource(result.data);
          this.dataSource.paginator = this.paginator;
        }
        this.spinner.closeSpinner();
      });
  }

  get filterTypeControl(): UntypedFormControl {
    return this.filterService.filterType as UntypedFormControl;
  }

  get filterValuesControl(): UntypedFormControl {
    return this.filterService.filterValues as UntypedFormControl;
  }

  get filterSearchControl(): UntypedFormControl {
    return this.filterService.filterSearch as UntypedFormControl;
  }

  get requiredFielsdAndValid() {
    return this.filterTypeControl.valid && this.filterValuesControl.value.length > 0;
  }

  get isLoading() {
    return this.spinner.isLoading;
  }

}
