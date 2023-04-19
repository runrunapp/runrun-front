import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunroomieComponent } from './runroomie.component';

describe('RunroomieComponent', () => {
  let component: RunroomieComponent;
  let fixture: ComponentFixture<RunroomieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunroomieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunroomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
