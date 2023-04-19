import { DomSanitizer } from '@angular/platform-browser';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Notification } from '../models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit {
  @Input() notification!: Notification;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getURL(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
