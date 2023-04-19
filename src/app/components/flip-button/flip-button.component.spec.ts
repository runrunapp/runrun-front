import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipButtonComponent } from './flip-button.component';

describe('FlipButtonComponent', () => {
  let component: FlipButtonComponent;
  let fixture: ComponentFixture<FlipButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
