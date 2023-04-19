import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormFieldComponent } from './image-form-field.component';

describe('ImageFormFieldComponent', () => {
  let component: ImageFormFieldComponent;
  let fixture: ComponentFixture<ImageFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageFormFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
