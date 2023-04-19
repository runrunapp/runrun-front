import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxServiceComponent } from './add-tax-service.component';

describe('AddTaxServiceComponent', () => {
  let component: AddTaxServiceComponent;
  let fixture: ComponentFixture<AddTaxServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaxServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaxServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
