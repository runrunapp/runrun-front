import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishHeaderComponent } from './publish-header.component';

describe('PublishHeaderComponent', () => {
  let component: PublishHeaderComponent;
  let fixture: ComponentFixture<PublishHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
