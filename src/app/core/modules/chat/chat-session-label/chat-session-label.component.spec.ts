import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionLabelComponent } from './chat-session-label.component';

describe('ChatSessionLabelComponent', () => {
  let component: ChatSessionLabelComponent;
  let fixture: ComponentFixture<ChatSessionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSessionLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSessionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
