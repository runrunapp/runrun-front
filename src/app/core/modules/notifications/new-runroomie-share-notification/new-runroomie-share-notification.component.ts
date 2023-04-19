import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { NewRunroomieShareNotification, Notification } from '../models';

@Component({
  selector: 'app-new-runroomie-share-notification',
  templateUrl: './new-runroomie-share-notification.component.html',
  styleUrls: ['./new-runroomie-share-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRunroomieShareNotificationComponent implements OnInit {
  @Input() set notification (n: Notification) {
    this._notification = n;
  }
  get runroomieNotification() {
    return this._notification as NewRunroomieShareNotification
  }
  private _notification: any
  constructor() { }

  ngOnInit(): void {
  }

  userProfileURL = URLs.userProfileURL
  listingURL = URLs.profileURL
  runroomieURL = URLs.runroomie

}
