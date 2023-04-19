import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrunplusComponent } from './runrunplus.component';

describe('RunrunplusComponent', () => {
  let component: RunrunplusComponent;
  let fixture: ComponentFixture<RunrunplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunrunplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrunplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
