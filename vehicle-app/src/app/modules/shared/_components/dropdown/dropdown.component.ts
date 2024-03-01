import { Component, Input } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() control = new UntypedFormControl('');
  filters = [
    { value: 'placa', viewValue: 'Placa' },
    { value: 'modelo', viewValue: 'Modelo' },
    { value: 'color', viewValue: 'Color' },
    { value: 'vim', viewValue: 'Vim' }
  ];
}
