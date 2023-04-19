
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { ChatSession, Message } from 'src/app/root-store/chat-store/chat.models';
import { UserReduced } from '../../authentication/authentication.models';

@Component({
  selector: 'app-chat-session-label',
  templateUrl: './chat-session-label.component.html',
  styleUrls: ['./chat-session-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatSessionLabelComponent implements OnInit {
  @Input() user!: UserReduced
  @Input() lastMessage!: Message
  constructor() { }

  ngOnInit(): void {
  }

  userURL = URLs.userProfileURL
  chatURL = URLs.chatURL
}
