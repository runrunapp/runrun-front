import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { ChatActions, ChatSelectors } from 'src/app/root-store/chat-store';
import { ChatSession } from 'src/app/root-store/chat-store/chat.models';
import { User } from '../authentication/authentication.models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() chatSessions$!: Observable< ChatSession[]  >
  @Input() currentUser$!: Observable< User | null>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.dispatch(ChatActions.requestSessions())

    this.chatSessions$ = this.store.pipe(select(ChatSelectors.selectCurrentUserChatSessions))
    this.currentUser$ = this.store.pipe(select(AuthenticationSelectors.selectUser))
  }

}
