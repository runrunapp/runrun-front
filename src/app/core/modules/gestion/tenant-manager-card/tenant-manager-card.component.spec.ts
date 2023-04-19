import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantManagerCardComponent } from './tenant-manager-card.component';

describe('TenantManagerCardComponent', () => {
  let component: TenantManagerCardComponent;
  let fixture: ComponentFixture<TenantManagerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantManagerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantManagerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
