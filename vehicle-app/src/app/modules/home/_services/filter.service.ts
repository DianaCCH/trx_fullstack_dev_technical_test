import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterState!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder,) { }

  initializeFilterForm() {
    this.filterState = this.fb.group({
      filterType: new UntypedFormControl('', [Validators.required]),
      filterSearch: new UntypedFormControl('', [Validators.required]),
      filterValues: new UntypedFormControl([])
    });
  }

  get filterType(): UntypedFormControl {
    return this.filterState?.get('filterType') as UntypedFormControl;
  }

  get filterValues(): UntypedFormControl {
    return this.filterState?.get('filterValues') as UntypedFormControl;
  }

  get filterSearch(): UntypedFormControl {
    return this.filterState?.get('filterSearch') as UntypedFormControl;
  }
}
