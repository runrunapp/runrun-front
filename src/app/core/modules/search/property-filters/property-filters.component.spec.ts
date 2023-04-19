import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFiltersComponent } from './property-filters.component';

describe('PropertyFiltersComponent', () => {
  let component: PropertyFiltersComponent;
  let fixture: ComponentFixture<PropertyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
