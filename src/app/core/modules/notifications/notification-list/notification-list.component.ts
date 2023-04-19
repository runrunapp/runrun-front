import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {Notification} from '../models'

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationListComponent implements OnInit {
  @Input() notifications: Notification[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
