import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImagesSwiperComponent } from './profile-images-swiper.component';

describe('ProfileImagesSwiperComponent', () => {
  let component: ProfileImagesSwiperComponent;
  let fixture: ComponentFixture<ProfileImagesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImagesSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImagesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
