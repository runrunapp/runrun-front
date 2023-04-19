import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGestionComponent } from './property-gestion.component';

describe('PropertyGestionComponent', () => {
  let component: PropertyGestionComponent;
  let fixture: ComponentFixture<PropertyGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
