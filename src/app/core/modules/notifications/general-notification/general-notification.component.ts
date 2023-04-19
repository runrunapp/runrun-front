import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { GeneralNotification, Notification } from '../models';

@Component({
  selector: 'app-general-notification',
  templateUrl: './general-notification.component.html',
  styleUrls: ['./general-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralNotificationComponent implements OnInit {
  @Input() set notification (n: Notification) {
    this._notification = n;
  }
  get generalNotification() {
    return this._notification as GeneralNotification
  }
  private _notification: any
  constructor() { }

  ngOnInit(): void {
  }




}
