import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePlanDialogComponent } from './upgrade-plan-dialog.component';

describe('UpgradePlanDialogComponent', () => {
  let component: UpgradePlanDialogComponent;
  let fixture: ComponentFixture<UpgradePlanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradePlanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradePlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
