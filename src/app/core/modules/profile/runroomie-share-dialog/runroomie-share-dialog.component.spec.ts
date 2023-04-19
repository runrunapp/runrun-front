import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunroomieShareDialogComponent } from './runroomie-share-dialog.component';

describe('RunroomieShareDialogComponent', () => {
  let component: RunroomieShareDialogComponent;
  let fixture: ComponentFixture<RunroomieShareDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunroomieShareDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunroomieShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
