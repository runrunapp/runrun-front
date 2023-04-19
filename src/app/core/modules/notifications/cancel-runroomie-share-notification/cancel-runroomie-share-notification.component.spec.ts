import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRunroomieShareNotificationComponent } from './cancel-runroomie-share-notification.component';

describe('CancelRunroomieShareNotificationComponent', () => {
  let component: CancelRunroomieShareNotificationComponent;
  let fixture: ComponentFixture<CancelRunroomieShareNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelRunroomieShareNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelRunroomieShareNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
