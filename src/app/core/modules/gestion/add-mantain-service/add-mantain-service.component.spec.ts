import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMantainServiceComponent } from './add-mantain-service.component';

describe('AddMantainServiceComponent', () => {
  let component: AddMantainServiceComponent;
  let fixture: ComponentFixture<AddMantainServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMantainServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMantainServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
