import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFiltersComponent } from './house-filters.component';

describe('HouseFiltersComponent', () => {
  let component: HouseFiltersComponent;
  let fixture: ComponentFixture<HouseFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
