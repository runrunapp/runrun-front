import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRunrunComponent } from './landing-runrun.component';

describe('LandingRunrunComponent', () => {
  let component: LandingRunrunComponent;
  let fixture: ComponentFixture<LandingRunrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRunrunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRunrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
