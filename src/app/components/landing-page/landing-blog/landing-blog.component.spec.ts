import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBlogComponent } from './landing-blog.component';

describe('LandingBlogComponent', () => {
  let component: LandingBlogComponent;
  let fixture: ComponentFixture<LandingBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
