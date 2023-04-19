import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { NewMessageNotification, Notification } from '../models';

@Component({
  selector: 'app-new-message-notification',
  templateUrl: './new-message-notification.component.html',
  styleUrls: ['./new-message-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageNotificationComponent implements OnInit {
  @Input() set notification(value: Notification) {
    this._notification = value;
  }
  get newMessageNotification(): NewMessageNotification {
    return this._notification as NewMessageNotification;
  }
  constructor(

  ) {}
  private _notification!: any;

  userProfileURL = URLs.chatURL;
  chatURL = URLs.chatURL;

  ngOnInit(): void {}


}
