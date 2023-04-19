import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeFiltersComponent } from './office-filters.component';

describe('OfficeFiltersComponent', () => {
  let component: OfficeFiltersComponent;
  let fixture: ComponentFixture<OfficeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
