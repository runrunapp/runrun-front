import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { AvatarModule } from 'ngx-avatars';
import { NotificationModule } from './notification/notification.module';

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationListComponent,
    NotificationPanelComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    FlexLayoutModule,
    AvatarModule,
    NotificationModule,
  ],
})
export class NotificationsModule {}
