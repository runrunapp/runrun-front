import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishHeaderComponent } from './publish-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [PublishHeaderComponent],
  imports: [CommonModule, FlexLayoutModule, MatRippleModule],
  exports: [PublishHeaderComponent],
})
export class PublishHeaderModule {}
