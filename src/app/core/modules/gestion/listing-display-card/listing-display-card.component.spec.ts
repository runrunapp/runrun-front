import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDisplayCardComponent } from './listing-display-card.component';

describe('ListingDisplayCardComponent', () => {
  let component: ListingDisplayCardComponent;
  let fixture: ComponentFixture<ListingDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
