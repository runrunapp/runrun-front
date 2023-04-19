import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFiltersButtonsComponent } from './landing-filters-buttons.component';

describe('LandingFiltersButtonsComponent', () => {
  let component: LandingFiltersButtonsComponent;
  let fixture: ComponentFixture<LandingFiltersButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFiltersButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFiltersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
