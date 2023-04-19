import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVerificationLabelsComponent } from './profile-verification-labels.component';

describe('ProfileVerificationLabelsComponent', () => {
  let component: ProfileVerificationLabelsComponent;
  let fixture: ComponentFixture<ProfileVerificationLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileVerificationLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVerificationLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
