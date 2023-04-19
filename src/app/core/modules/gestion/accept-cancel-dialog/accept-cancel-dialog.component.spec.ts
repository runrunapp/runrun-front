import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptCancelDialogComponent } from './accept-cancel-dialog.component';

describe('AcceptCancelDialogComponent', () => {
  let component: AcceptCancelDialogComponent;
  let fixture: ComponentFixture<AcceptCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptCancelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
