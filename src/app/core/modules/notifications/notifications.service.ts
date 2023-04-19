import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Observable, EMPTY, of } from 'rxjs';
import {
  catchError,
  delay,
  retryWhen,
  switchAll,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authentication/services/authentication.services';
import { Notification, VisitRequestNotification } from './models';

export const WS_NOTIFICATION_ENDPOINT = environment.webSocketNotificationURL;

@Injectable({
  providedIn: 'root',
})
export class NotificationService implements OnDestroy {
  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {}
  private connection$: WebSocketSubject<any> | null = null;
  private RETRY_SECONDS = 10;
  destroyed$ = new Subject();
  unreadNotifications$!: Observable<number>;
  url = environment.apiUrl + 'notifications/';

  notifications$: BehaviorSubject<Notification[]> = new BehaviorSubject<
    Notification[]
  >([]);

  public init(): void {
    this.unreadNotifications$ = this.connect().pipe(
      takeUntil(this.destroyed$),
      switchMap((message) => {
        const unread = message.unread as number;
        if (unread > 0) {
          this.fetchNotifications();
        }
        return of(unread);
      })
    );
    this.fetchNotifications();
  }

  public connect(): Observable<any> {
    return of(
      `${WS_NOTIFICATION_ENDPOINT}?token=${AuthenticationService.getToken()}`
    ).pipe(
      switchMap((wsURL) => {
        if (this.connection$) {
          return this.connection$;
        } else {
          this.connection$ = webSocket(wsURL);
          return this.connection$;
        }
      }),
      retryWhen((errors) => errors.pipe(delay(this.RETRY_SECONDS)))
    );
  }

  send(data: any): void {
    if (this.connection$) {
      this.connection$.next(data);
    } else {
      console.error('Did not send data, open a connection first');
    }
  }
  closeConnection(): void {
    if (this.connection$) {
      this.connection$.complete();
      this.connection$ = null;
    }
  }
  ngOnDestroy(): void {
    this.closeConnection();
  }

  fetchNotifications(): void {
    this.http.get<Notification[]>(this.url).subscribe((notifications) => {
      this.notifications$.next(notifications);
    });
  }

  acceptVisitRequest(notification: VisitRequestNotification) {
    return this.http.put(
      `${this.url}${notification.id}/accept_visit_request/`,
      {}
    );
  }
  rejectVisitRequest(notification: VisitRequestNotification) {
    return this.http.put(
      `${this.url}${notification.id}/reject_visit_request/`,
      {}
    );
  }

  acceptRunroomieRequest(notification: Notification) {
    return this.http.put(
      `${this.url}${notification.id}/accept_runroomie_like/`,
      {}
    );
  }
  rejectRunroomieRequest(notification: Notification) {
    return this.http.put(
      `${this.url}${notification.id}/reject_runroomie_like/`,
      {}
    );
  }

  markAsSeen() {
    return this.http.post(`${this.url}mark_as_seen/`, {});
  }
}
