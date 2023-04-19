import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SocialButtonsComponent],
  imports: [CommonModule, FlexLayoutModule, FontAwesomeModule],
  exports: [SocialButtonsComponent],
})
export class SocialButtonsModule {}
