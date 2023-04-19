import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { RouterModule } from '@angular/router';
import { FromNowPipe } from '../from-now.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NotificationComponent, FromNowPipe],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [NotificationComponent],
})
export class NotificationModule {}
