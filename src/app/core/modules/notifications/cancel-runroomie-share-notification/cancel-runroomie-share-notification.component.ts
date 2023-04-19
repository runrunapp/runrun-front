import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { CancelRunroomieShareNotification, Notification } from '../models';

@Component({
  selector: 'app-cancel-runroomie-share-notification',
  templateUrl: './cancel-runroomie-share-notification.component.html',
  styleUrls: ['./cancel-runroomie-share-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelRunroomieShareNotificationComponent implements OnInit {
  @Input() set notification (n: Notification) {
    this._notification = n;
  }
  get runroomieNotification() {
    return this._notification as CancelRunroomieShareNotification
  }
  private _notification: any
  constructor() { }

  ngOnInit(): void {
  }

  userProfileURL = URLs.userProfileURL
  listingURL = URLs.profileURL
  runroomieURL = URLs.runroomie
}
