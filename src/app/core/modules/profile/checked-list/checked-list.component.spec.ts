import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedListComponent } from './checked-list.component';

describe('CheckedListComponent', () => {
  let component: CheckedListComponent;
  let fixture: ComponentFixture<CheckedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
