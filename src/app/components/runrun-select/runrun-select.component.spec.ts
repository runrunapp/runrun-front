import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrunSelectComponent } from './runrun-select.component';

describe('RunrunSelectComponent', () => {
  let component: RunrunSelectComponent;
  let fixture: ComponentFixture<RunrunSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunrunSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrunSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
