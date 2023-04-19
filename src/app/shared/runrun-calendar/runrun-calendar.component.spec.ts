import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrunCalendarComponent } from './runrun-calendar.component';

describe('RunrunCalendarComponent', () => {
  let component: RunrunCalendarComponent;
  let fixture: ComponentFixture<RunrunCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunrunCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrunCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
