import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCollectionComponent } from './listing-collection.component';

describe('ListingCollectionComponent', () => {
  let component: ListingCollectionComponent;
  let fixture: ComponentFixture<ListingCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
