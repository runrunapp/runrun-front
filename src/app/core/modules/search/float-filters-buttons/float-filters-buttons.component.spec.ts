import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatFiltersButtonsComponent } from './float-filters-buttons.component';

describe('FloatFiltersButtonsComponent', () => {
  let component: FloatFiltersButtonsComponent;
  let fixture: ComponentFixture<FloatFiltersButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatFiltersButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatFiltersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
