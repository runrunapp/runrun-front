import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of } from 'rxjs';
import { delay, retryWhen, switchMap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { AppState } from 'src/app/root-store';
import { ChatActions } from 'src/app/root-store/chat-store';
import { ChatSession } from 'src/app/root-store/chat-store/chat.models';
import { keysToCamel } from 'src/app/shared/utils';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authentication/services/authentication.services';

const ACTIONS = {
  getMessages: 'get_message_for_session',
  getChatSessions: 'list_chat_session',
  subscribeToMessages: 'subscribe_to_message_activity',
  sendMessage: 'send_message',
  markAsRead: 'mark_as_read',
};

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // chatSessionSubject$ = new BehaviorSubject<ChatSession[]>([])

  constructor(private store: Store<AppState>) {}
  RETRY_SECONDS = 30;
  private ws!: WebSocketSubject<any>;

  requestedUsers: number[] = [];

  connect(): void {
    of(
      `${
        environment.webSocketChatURL
      }?token=${AuthenticationService.getToken()}`
    )
      .pipe(
        switchMap((wsURL) => {
          if (!this.ws) {
            this.ws = this.ws = webSocket(
              `${
                environment.webSocketChatURL
              }?token=${AuthenticationService.getToken()}`
            );
          }
          return this.ws;
        }),
        retryWhen((errors) => errors.pipe(delay(this.RETRY_SECONDS)))
      )
      .subscribe((message) => {
        if (message.action === ACTIONS.getChatSessions) {
          if (message.response_status === 200) {
            // Response OK
            // this.chatSessionSubject$.next(message.data)

            // Modify images responses and handle case mismatches
            const chatSessions = message.data.map((chat: any) => {
              if (chat.user1.avatar !== null) {
                chat.user1.avatar = `${environment.protocol}://${environment.host}${chat.user1.avatar}`;
              }
              if (chat.user2.avatar !== null) {
                chat.user2.avatar = `${environment.protocol}://${environment.host}${chat.user2.avatar}`;
              }
              return keysToCamel(chat);
            });

            this.store.dispatch(
              ChatActions.requestSessionsFullfiled({
                chatSessions,
              })
            );
          }
        } else if (message.action === ACTIONS.getMessages) {
          if (message.response_status === 200) {
            const messages = message.data.map((message: any) => {
              return keysToCamel(message);
            });
            this.store.dispatch(
              ChatActions.requestMessagesFullfiled({ messages })
            );
          }
        } else if (message.action === ACTIONS.subscribeToMessages) {
          const newMessage = keysToCamel(message.data);
          this.store.dispatch(
            ChatActions.messageRecieved({ message: newMessage })
          );
        }
      });
    this.subscribeToMessages();
    this.requestChatSessions();
  }

  disconnect(): void {
    this.ws.complete();
  }

  requestChatSessions(): void {
    const request = {
      action: ACTIONS.getChatSessions,
      request_id: new Date().getTime(),
    };

    if (this.ws) {
      this.ws.next(request);
    }
  }
  requestMessages(user: number): void {
    const request = {
      action: ACTIONS.getMessages,
      user,
      request_id: new Date().getTime(),
    };

    if (this.ws && !this.requestedUsers.includes(user)) {
      this.ws.next(request);

      this.requestedUsers.push(user);
    }
    if (!this.ws) {
      this.connect();
      this.requestMessages(user);
    }
  }

  subscribeToMessages(): void {
    const request = {
      action: ACTIONS.subscribeToMessages,

      request_id: new Date().getTime(),
    };

    if (this.ws) {
      this.ws.next(request);
    }
  }

  sendMessage(user: number, message: string): void {
    const request = {
      action: ACTIONS.sendMessage,
      receiver: user,
      text: message,
      request_id: new Date().getTime(),
    };

    if (this.ws) {
      this.ws.next(request);
    }
  }

  markAsRead(message: number): void {
    const request = {
      action: ACTIONS.markAsRead,

      message,
      request_id: new Date().getTime(),
    };

    if (this.ws) {
      this.ws.next(request);
    }
  }
}
