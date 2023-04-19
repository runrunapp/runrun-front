import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRunroomieShareNotificationComponent } from './new-runroomie-share-notification.component';

describe('NewRunroomieShareNotificationComponent', () => {
  let component: NewRunroomieShareNotificationComponent;
  let fixture: ComponentFixture<NewRunroomieShareNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRunroomieShareNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRunroomieShareNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
