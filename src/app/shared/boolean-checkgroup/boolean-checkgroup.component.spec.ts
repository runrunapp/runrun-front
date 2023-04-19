import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanCheckgroupComponent } from './boolean-checkgroup.component';

describe('BooleanCheckgroupComponent', () => {
  let component: BooleanCheckgroupComponent;
  let fixture: ComponentFixture<BooleanCheckgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanCheckgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanCheckgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
