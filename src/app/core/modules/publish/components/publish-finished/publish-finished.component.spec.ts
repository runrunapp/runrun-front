import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishFinishedComponent } from './publish-finished.component';

describe('PublishFinishedComponent', () => {
  let component: PublishFinishedComponent;
  let fixture: ComponentFixture<PublishFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
