import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectButtonComponent } from './accept-reject-button.component';

describe('AcceptRejectButtonComponent', () => {
  let component: AcceptRejectButtonComponent;
  let fixture: ComponentFixture<AcceptRejectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRejectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRejectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
