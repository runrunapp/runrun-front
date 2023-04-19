import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRunrunHeaderComponent } from './landing-runrun-header.component';

describe('LandingRunrunHeaderComponent', () => {
  let component: LandingRunrunHeaderComponent;
  let fixture: ComponentFixture<LandingRunrunHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRunrunHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRunrunHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
