/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommingSoonPageComponent } from './comming-soon-page.component';

describe('CommingSoonPageComponent', () => {
  let component: CommingSoonPageComponent;
  let fixture: ComponentFixture<CommingSoonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingSoonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingSoonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
