import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantManagerDetailsComponent } from './tenant-manager-details.component';

describe('TenantManagerDetailsComponent', () => {
  let component: TenantManagerDetailsComponent;
  let fixture: ComponentFixture<TenantManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantManagerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
