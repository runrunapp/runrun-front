import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRequestCardComponent } from './visit-request-card.component';

describe('VisitRequestCardComponent', () => {
  let component: VisitRequestCardComponent;
  let fixture: ComponentFixture<VisitRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitRequestCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
