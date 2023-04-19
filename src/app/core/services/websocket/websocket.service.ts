import { Injectable } from '@angular/core';
import { Subject, Observable, EMPTY } from 'rxjs';
import { catchError, switchAll, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export const WS_NOTIFICATION_ENDPOINT = 'ws://ws/notifications/';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;
  private messagesSubject$ = new Subject<any>();
  messages$ = this.messagesSubject$.pipe(
    switchAll(),
    catchError((e) => {
      throw e;
    })
  );
  constructor() {}

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      const messages = this.socket$.pipe(catchError((_) => EMPTY));
      this.messagesSubject$.next(messages);
    }
  }

  private getNewWebSocket() {
    return webSocket(WS_NOTIFICATION_ENDPOINT);
  }

  sendMessage(msg: any): void {
    this.socket$.next(msg);
  }
  close(): void {
    this.socket$.complete();
  }
}
