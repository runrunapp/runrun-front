import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrunplusHeaderComponent } from './runrunplus-header.component';

describe('RunrunplusHeaderComponent', () => {
  let component: RunrunplusHeaderComponent;
  let fixture: ComponentFixture<RunrunplusHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunrunplusHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrunplusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
