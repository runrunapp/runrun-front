import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFlipButtonComponent } from './icon-flip-button.component';

describe('IconFlipButtonComponent', () => {
  let component: IconFlipButtonComponent;
  let fixture: ComponentFixture<IconFlipButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFlipButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFlipButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
