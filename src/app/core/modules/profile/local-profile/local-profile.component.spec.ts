import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProfileComponent } from './local-profile.component';

describe('LocalProfileComponent', () => {
  let component: LocalProfileComponent;
  let fixture: ComponentFixture<LocalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
