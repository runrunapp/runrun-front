import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/modules/authentication/authentication.models';
import { URLs } from 'src/app/app.constants';
import { MatMenuTrigger } from '@angular/material/menu';
import { NotificationService } from 'src/app/core/modules/notifications/notifications.service';
import { Icons } from 'src/app/core/services/icons/icon.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.user$ = this.store.select(AuthenticationSelectors.selectUser);
  }

  get isRunroomie() {
    return this.router.url.endsWith('runroomie');
  }
  unreadNotification = 0;

  user$: Observable<User | null>;

  urls = URLs;

  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

  subscriptions: Subscription[] = [];

  icons = Icons;

  get isMenuOpen() {
    if (this.trigger) {
      return this.trigger.menuOpen;
    }
    return false;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.user$.subscribe((user) => {
        if (user) {
          this.notificationService.init();
          this.notificationService.unreadNotifications$.subscribe(
            (data: any) => {
              this.unreadNotification = data;
            }
          );
        } else {
          this.notificationService.destroyed$.next();
          this.notificationService.closeConnection();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
