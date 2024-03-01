import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerDialogComponent } from '../../shared/_components/spinner-dialog/spinner-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerDialogService {
  private _isLoading = false;

  spinnerDialog!: MatDialogRef<SpinnerDialogComponent>;

  constructor(
    private matDialog: MatDialog
  ) { }

  startSpinner() {
    this.closeSpinner();

    this.spinnerDialog = this.matDialog.open(SpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true,
      autoFocus: false
    });
    this._isLoading = true;
  }

  closeSpinner() {
    if (this.spinnerDialog) {
      this.spinnerDialog.close();
      this._isLoading = false;
    }
  }

  get isLoading(): boolean {
    return this._isLoading;
  }
}
