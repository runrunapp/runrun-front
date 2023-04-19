import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSwipeComponent } from './landing-swipe.component';

describe('LandingSwipeComponent', () => {
  let component: LandingSwipeComponent;
  let fixture: ComponentFixture<LandingSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
