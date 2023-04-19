import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePropertyCardComponent } from './simple-property-card.component';

describe('SimplePropertyCardComponent', () => {
  let component: SimplePropertyCardComponent;
  let fixture: ComponentFixture<SimplePropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePropertyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
