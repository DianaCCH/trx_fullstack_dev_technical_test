import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesMapComponent } from './routes-map.component';

describe('RoutesMapComponent', () => {
  let component: RoutesMapComponent;
  let fixture: ComponentFixture<RoutesMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesMapComponent]
    });
    fixture = TestBed.createComponent(RoutesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
