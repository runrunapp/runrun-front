import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlusComponent } from './landing-plus.component';

describe('LandingPlusComponent', () => {
  let component: LandingPlusComponent;
  let fixture: ComponentFixture<LandingPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
