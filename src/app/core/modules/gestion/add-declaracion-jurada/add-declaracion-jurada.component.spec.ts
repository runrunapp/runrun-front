import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeclaracionJuradaComponent } from './add-declaracion-jurada.component';

describe('AddDeclaracionJuradaComponent', () => {
  let component: AddDeclaracionJuradaComponent;
  let fixture: ComponentFixture<AddDeclaracionJuradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeclaracionJuradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeclaracionJuradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
