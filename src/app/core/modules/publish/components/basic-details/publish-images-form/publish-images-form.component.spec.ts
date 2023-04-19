import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishImagesFormComponent } from './publish-images-form.component';

describe('PublishImagesFormComponent', () => {
  let component: PublishImagesFormComponent;
  let fixture: ComponentFixture<PublishImagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishImagesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishImagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
