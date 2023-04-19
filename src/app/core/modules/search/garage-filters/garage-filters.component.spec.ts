import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageFiltersComponent } from './garage-filters.component';

describe('GarageFiltersComponent', () => {
  let component: GarageFiltersComponent;
  let fixture: ComponentFixture<GarageFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
