import { take } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { ChatActions, ChatSelectors } from 'src/app/root-store/chat-store';
import {
  ChatSession,
  Message,
} from 'src/app/root-store/chat-store/chat.models';
import { User } from '../../authentication/authentication.models';
import { ChatService } from '../chat.service';

@Component({
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService
  ) {}
  @Input() messages$!: Observable<Message[]>;
  @Input() chatSession$!: Observable<ChatSession | undefined>;
  @Input() user$!: Observable<User | null>;
  @Input() message = '';

  subscriptions: Subscription[] = [];

  userURL = URLs.userProfileURL;
  icons = Icons;

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(AuthenticationSelectors.selectUser));

    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.store.dispatch(
          ChatActions.requestMessages({ user: Number.parseInt(id) })
        );
        this.messages$ = this.store.pipe(
          select(ChatSelectors.selectConversation(Number.parseInt(id)))
        );
        this.chatSession$ = this.store.pipe(
          select(ChatSelectors.selectChatSession(Number.parseInt(id)))
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onSendMessage(user: number): void {
    if (this.message === '') {
      return;
    }
    this.chatService.sendMessage(user, this.message);

    this.message = '';
  }

  onInput(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      combineLatest([this.chatSession$, this.user$])
        .pipe(take(1))
        .subscribe(([chatSession, user]) => {
          if (chatSession && user) {
            const receiver =
              chatSession.user1.id === user.id
                ? chatSession.user2.id
                : chatSession.user1.id;
            this.onSendMessage(receiver);
          }
        });
    }
  }

  onRead(message: number): void {
    this.chatService.markAsRead(message);
  }
}
