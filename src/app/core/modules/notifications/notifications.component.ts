import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { User } from '../authentication/authentication.models';
import { Notification } from './models';
import { NotificationService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {
    this.user$ = this.store.pipe(select(AuthenticationSelectors.selectUser));
  }
  user$: Observable<User | null>;
  notifications$!: Observable<Notification[]>;

  userProfileURL = URLs.userProfileURL;

  ngOnInit(): void {
    this.notifications$ = this.notificationService.notifications$;
    this.notificationService.markAsSeen().subscribe(
      (response) => {},
      (error) => {}
    );
  }
  progress(user: User): number {
    let p = 0;
    if (user.profile.profilePicture1 !== null) {
      p += 10;
    }
    if (user.profile.profilePicture2 !== null) {
      p += 5;
    }
    if (user.profile.profilePicture3 !== null) {
      p += 5;
    }
    if (user.firstName.length > 0) {
      p += 5;
    }
    if (user.lastName.length > 0) {
      p += 5;
    }
    if (user.profile.birthday !== null) {
      p += 10;
    }
    if (user.profile.gender !== null) {
      p += 10;
    }

    if (user.profile.presentation !== null) {
      p += 20;
    }
    if (user.profile.facebook !== null && user.profile.facebook.length > 0) {
      p += 5;
    }
    if (user.profile.instagram !== null && user.profile.instagram.length > 0) {
      p += 5;
    }
    if (user.profile.twitter !== null && user.profile.twitter.length > 0) {
      p += 5;
    }
    if (user.profile.linkedin !== null && user.profile.linkedin.length > 0) {
      p += 5;
    }
    return p;
  }
}
