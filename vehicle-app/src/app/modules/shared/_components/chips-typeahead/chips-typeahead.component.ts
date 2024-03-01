import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-chips-typeahead',
  templateUrl: './chips-typeahead.component.html',
  styleUrls: ['./chips-typeahead.component.scss']
})
export class ChipsTypeaheadComponent {
  @Input() control = new UntypedFormControl('');
  @Input() listControl = new UntypedFormControl();
  @Output() getAllFilters = new EventEmitter<void>();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  keywords: string[] = [];
  announcer = inject(LiveAnnouncer);
  formControl = new FormControl(['angular']);

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
      this.announcer.announce(`removed ${keyword}`);
      this.listControl.patchValue(this.keywords);
    }
    if (this.keywords.length == 0) {
      this.getAllFilters.emit();
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.keywords.push(value);
      this.listControl.patchValue(this.keywords);
    }
    event.chipInput!.clear();
  }
}