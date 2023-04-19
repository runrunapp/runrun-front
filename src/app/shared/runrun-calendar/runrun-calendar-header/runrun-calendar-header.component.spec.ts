import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrunCalendarHeaderComponent } from './runrun-calendar-header.component';

describe('RunrunCalendarHeaderComponent', () => {
  let component: RunrunCalendarHeaderComponent;
  let fixture: ComponentFixture<RunrunCalendarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunrunCalendarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrunCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
