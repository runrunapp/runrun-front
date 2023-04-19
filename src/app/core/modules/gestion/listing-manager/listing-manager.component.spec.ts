import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingManagerComponent } from './listing-manager.component';

describe('ListingManagerComponent', () => {
  let component: ListingManagerComponent;
  let fixture: ComponentFixture<ListingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
