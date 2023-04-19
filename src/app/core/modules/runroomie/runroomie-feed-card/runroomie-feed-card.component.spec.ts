import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunroomieFeedCardComponent } from './runroomie-feed-card.component';

describe('RunroomieFeedCardComponent', () => {
  let component: RunroomieFeedCardComponent;
  let fixture: ComponentFixture<RunroomieFeedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunroomieFeedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunroomieFeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
