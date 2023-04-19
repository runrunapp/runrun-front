import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckgroupComponent } from './checkgroup.component';

describe('CheckgroupComponent', () => {
  let component: CheckgroupComponent;
  let fixture: ComponentFixture<CheckgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
