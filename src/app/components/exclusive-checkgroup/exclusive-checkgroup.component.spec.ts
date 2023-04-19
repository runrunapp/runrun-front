import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveCheckgroupComponent } from './exclusive-checkgroup.component';

describe('ExclusiveCheckgroupComponent', () => {
  let component: ExclusiveCheckgroupComponent;
  let fixture: ComponentFixture<ExclusiveCheckgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveCheckgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveCheckgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
