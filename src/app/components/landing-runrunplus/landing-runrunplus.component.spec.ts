import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRunrunplusComponent } from './landing-runrunplus.component';

describe('LandingRunrunplusComponent', () => {
  let component: LandingRunrunplusComponent;
  let fixture: ComponentFixture<LandingRunrunplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRunrunplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRunrunplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
