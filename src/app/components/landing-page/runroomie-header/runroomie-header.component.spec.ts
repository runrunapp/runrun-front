import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunroomieHeadingComponent } from './runroomie-header.component';

describe('RunroomieHeadingComponent', () => {
  let component: RunroomieHeadingComponent;
  let fixture: ComponentFixture<RunroomieHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RunroomieHeadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunroomieHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
