import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFiltersComponent } from './local-filters.component';

describe('LocalFiltersComponent', () => {
  let component: LocalFiltersComponent;
  let fixture: ComponentFixture<LocalFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
