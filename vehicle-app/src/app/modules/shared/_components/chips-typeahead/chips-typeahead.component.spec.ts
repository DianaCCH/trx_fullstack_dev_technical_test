import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsTypeaheadComponent } from './chips-typeahead.component';

describe('ChipsTypeaheadComponent', () => {
  let component: ChipsTypeaheadComponent;
  let fixture: ComponentFixture<ChipsTypeaheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsTypeaheadComponent]
    });
    fixture = TestBed.createComponent(ChipsTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
