import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSwiperComponent } from './listing-swiper.component';

describe('ListingSwiperComponent', () => {
  let component: ListingSwiperComponent;
  let fixture: ComponentFixture<ListingSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
