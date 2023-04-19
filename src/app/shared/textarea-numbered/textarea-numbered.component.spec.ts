import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaNumberedComponent } from './textarea-numbered.component';

describe('TextareaNumberedComponent', () => {
  let component: TextareaNumberedComponent;
  let fixture: ComponentFixture<TextareaNumberedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaNumberedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaNumberedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
