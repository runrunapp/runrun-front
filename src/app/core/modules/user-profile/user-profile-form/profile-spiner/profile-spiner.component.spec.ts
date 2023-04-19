import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSpinerComponent } from './profile-spiner.component';

describe('ProfileSpinerComponent', () => {
  let component: ProfileSpinerComponent;
  let fixture: ComponentFixture<ProfileSpinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSpinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
