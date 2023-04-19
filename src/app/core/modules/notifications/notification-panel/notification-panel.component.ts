import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { isToday, isYesterday } from 'src/app/shared/datetime';
import { Notification } from '../models';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPanelComponent implements OnInit {
  @Input() set notifications(notifications: Notification[]) {
    this.todayNotifications = notifications.filter((notification) => {
      return isToday(notification.creationDate);
    });

    this.yesterdayNotifications = notifications.filter((notification) => {
      return isYesterday(notification.creationDate);
    });

    this.recentNotifications = notifications.filter((notification) => {
      return (
        !isYesterday(notification.creationDate) &&
        !isToday(notification.creationDate)
      );
    });
  }

  todayNotifications: Notification[] = [];
  yesterdayNotifications: Notification[] = [];
  recentNotifications: Notification[] = [];

  constructor() {}

  ngOnInit(): void {}
}
