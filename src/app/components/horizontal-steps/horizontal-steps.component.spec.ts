import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStepsComponent } from './horizontal-steps.component';

describe('HorizontalStepsComponent', () => {
  let component: HorizontalStepsComponent;
  let fixture: ComponentFixture<HorizontalStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
